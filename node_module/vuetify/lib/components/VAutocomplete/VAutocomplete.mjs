import { createTextVNode as _createTextVNode, mergeProps as _mergeProps, createVNode as _createVNode, Fragment as _Fragment } from "vue";
// Styles
import "./VAutocomplete.css";

// Components
import { makeSelectProps } from "../VSelect/VSelect.mjs";
import { VCheckboxBtn } from "../VCheckbox/index.mjs";
import { VChip } from "../VChip/index.mjs";
import { VDefaultsProvider } from "../VDefaultsProvider/index.mjs";
import { VIcon } from "../VIcon/index.mjs";
import { VList, VListItem } from "../VList/index.mjs";
import { VMenu } from "../VMenu/index.mjs";
import { VTextField } from "../VTextField/index.mjs"; // Composables
import { forwardRefs } from "../../composables/forwardRefs.mjs";
import { makeFilterProps, useFilter } from "../../composables/filter.mjs";
import { makeTransitionProps } from "../../composables/transition.mjs";
import { useForm } from "../../composables/form.mjs";
import { useItems } from "../../composables/list-items.mjs";
import { useLocale } from "../../composables/locale.mjs";
import { useProxiedModel } from "../../composables/proxiedModel.mjs";
import { useTextColor } from "../../composables/color.mjs"; // Utility
import { computed, mergeProps, nextTick, ref, shallowRef, watch } from 'vue';
import { genericComponent, noop, omit, propsFactory, useRender, wrapInArray } from "../../util/index.mjs";
import { makeVTextFieldProps } from "../VTextField/VTextField.mjs"; // Types
function highlightResult(text, matches, length) {
  if (matches == null) return text;
  if (Array.isArray(matches)) throw new Error('Multiple matches is not implemented');
  return typeof matches === 'number' && ~matches ? _createVNode(_Fragment, null, [_createVNode("span", {
    "class": "v-autocomplete__unmask"
  }, [text.substr(0, matches)]), _createVNode("span", {
    "class": "v-autocomplete__mask"
  }, [text.substr(matches, length)]), _createVNode("span", {
    "class": "v-autocomplete__unmask"
  }, [text.substr(matches + length)])]) : text;
}
export const makeVAutocompleteProps = propsFactory({
  autoSelectFirst: {
    type: [Boolean, String]
  },
  search: String,
  ...makeFilterProps({
    filterKeys: ['title']
  }),
  ...makeSelectProps(),
  ...omit(makeVTextFieldProps({
    modelValue: null
  }), ['validationValue', 'dirty', 'appendInnerIcon']),
  ...makeTransitionProps({
    transition: false
  })
}, 'v-autocomplete');
export const VAutocomplete = genericComponent()({
  name: 'VAutocomplete',
  props: makeVAutocompleteProps(),
  emits: {
    'update:focused': focused => true,
    'update:search': val => true,
    'update:modelValue': val => true,
    'update:menu': val => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    const vTextFieldRef = ref();
    const isFocused = shallowRef(false);
    const isPristine = shallowRef(true);
    const listHasFocus = ref(false);
    const vMenuRef = ref();
    const _menu = useProxiedModel(props, 'menu');
    const menu = computed({
      get: () => _menu.value,
      set: v => {
        if (_menu.value && !v && vMenuRef.value?.ΨopenChildren) return;
        _menu.value = v;
      }
    });
    const selectionIndex = shallowRef(-1);
    const color = computed(() => vTextFieldRef.value?.color);
    const {
      items,
      transformIn,
      transformOut
    } = useItems(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(color);
    const search = useProxiedModel(props, 'search', '');
    const model = useProxiedModel(props, 'modelValue', [], v => transformIn(wrapInArray(v)), v => {
      const transformed = transformOut(v);
      return props.multiple ? transformed : transformed[0] ?? null;
    });
    const form = useForm();
    const {
      filteredItems,
      getMatches
    } = useFilter(props, items, computed(() => isPristine.value ? undefined : search.value));
    const selections = computed(() => {
      return model.value.map(v => {
        return items.value.find(item => props.valueComparator(item.value, v.value)) || v;
      });
    });
    const displayItems = computed(() => {
      if (props.hideSelected) {
        return filteredItems.value.filter(filteredItem => !selections.value.some(s => s.value === filteredItem.value));
      }
      return filteredItems.value;
    });
    const selected = computed(() => selections.value.map(selection => selection.props.value));
    const selection = computed(() => selections.value[selectionIndex.value]);
    const highlightFirst = computed(() => {
      const selectFirst = props.autoSelectFirst === true || props.autoSelectFirst === 'exact' && search.value === displayItems.value[0]?.title;
      return selectFirst && displayItems.value.length > 0 && !isPristine.value && !listHasFocus.value;
    });
    const listRef = ref();
    function onClear(e) {
      if (props.openOnClear) {
        menu.value = true;
      }
      search.value = '';
    }
    function onMousedownControl() {
      if (props.hideNoData && !items.value.length || props.readonly || form?.isReadonly.value) return;
      menu.value = true;
    }
    function onMousedownMenuIcon(e) {
      if (isFocused.value) {
        e.preventDefault();
        e.stopPropagation();
      }
      menu.value = !menu.value;
    }
    function onKeydown(e) {
      if (props.readonly || form?.isReadonly.value) return;
      const selectionStart = vTextFieldRef.value.selectionStart;
      const length = selected.value.length;
      if (selectionIndex.value > -1 || ['Enter', 'ArrowDown', 'ArrowUp'].includes(e.key)) {
        e.preventDefault();
      }
      if (['Enter', 'ArrowDown'].includes(e.key)) {
        menu.value = true;
      }
      if (['Escape'].includes(e.key)) {
        menu.value = false;
      }
      if (['Enter', 'Escape', 'Tab'].includes(e.key)) {
        if (highlightFirst.value && ['Enter', 'Tab'].includes(e.key)) {
          select(filteredItems.value[0]);
        }
        isPristine.value = true;
      }
      if (e.key === 'ArrowDown') {
        listRef.value?.focus('next');
        if (highlightFirst.value) {
          listRef.value?.focus('next');
        }
      } else if (e.key === 'ArrowUp') {
        listRef.value?.focus('prev');
      }
      if (!props.multiple) return;
      if (['Backspace', 'Delete'].includes(e.key)) {
        if (selectionIndex.value < 0) {
          if (e.key === 'Backspace' && !search.value) {
            selectionIndex.value = length - 1;
          }
          return;
        }
        const originalSelectionIndex = selectionIndex.value;
        if (selection.value) select(selection.value);
        selectionIndex.value = originalSelectionIndex >= length - 1 ? length - 2 : originalSelectionIndex;
      }
      if (e.key === 'ArrowLeft') {
        if (selectionIndex.value < 0 && selectionStart > 0) return;
        const prev = selectionIndex.value > -1 ? selectionIndex.value - 1 : length - 1;
        if (selections.value[prev]) {
          selectionIndex.value = prev;
        } else {
          selectionIndex.value = -1;
          vTextFieldRef.value.setSelectionRange(search.value?.length, search.value?.length);
        }
      }
      if (e.key === 'ArrowRight') {
        if (selectionIndex.value < 0) return;
        const next = selectionIndex.value + 1;
        if (selections.value[next]) {
          selectionIndex.value = next;
        } else {
          selectionIndex.value = -1;
          vTextFieldRef.value.setSelectionRange(0, 0);
        }
      }
    }
    function onInput(e) {
      search.value = e.target.value;
    }
    function onAfterLeave() {
      if (isFocused.value) {
        isPristine.value = true;
        vTextFieldRef.value?.focus();
      }
    }
    function onFocusin(e) {
      isFocused.value = true;
      setTimeout(() => {
        listHasFocus.value = true;
      });
    }
    function onFocusout(e) {
      listHasFocus.value = false;
    }
    const isSelecting = shallowRef(false);
    function select(item) {
      if (props.multiple) {
        const index = selected.value.findIndex(selection => props.valueComparator(selection, item.value));
        if (index === -1) {
          model.value = [...model.value, item];
        } else {
          const value = [...model.value];
          value.splice(index, 1);
          model.value = value;
        }
      } else {
        model.value = [item];
        isSelecting.value = true;
        search.value = item.title;
        menu.value = false;
        isPristine.value = true;
        nextTick(() => isSelecting.value = false);
      }
    }
    watch(isFocused, (val, oldVal) => {
      if (val === oldVal) return;
      if (val) {
        isSelecting.value = true;
        search.value = props.multiple ? '' : String(selections.value.at(-1)?.props.title ?? '');
        isPristine.value = true;
        nextTick(() => isSelecting.value = false);
      } else {
        if (!props.multiple && !search.value) model.value = [];else if (highlightFirst.value && !listHasFocus.value && !selections.value.some(_ref2 => {
          let {
            value
          } = _ref2;
          return value === displayItems.value[0].value;
        })) {
          select(displayItems.value[0]);
        }
        menu.value = false;
        search.value = '';
        selectionIndex.value = -1;
      }
    });
    watch(search, val => {
      if (!isFocused.value || isSelecting.value) return;
      if (val) menu.value = true;
      isPristine.value = !val;
    });
    useRender(() => {
      const hasChips = !!(props.chips || slots.chip);
      const hasList = !!(!props.hideNoData || displayItems.value.length || slots.prepend || slots.append || slots['no-data']);
      const isDirty = model.value.length > 0;
      const [textFieldProps] = VTextField.filterProps(props);
      return _createVNode(VTextField, _mergeProps({
        "ref": vTextFieldRef
      }, textFieldProps, {
        "modelValue": search.value,
        "onUpdate:modelValue": v => {
          if (v == null) model.value = [];
        },
        "focused": isFocused.value,
        "onUpdate:focused": $event => isFocused.value = $event,
        "validationValue": model.externalValue,
        "dirty": isDirty,
        "onInput": onInput,
        "class": ['v-autocomplete', `v-autocomplete--${props.multiple ? 'multiple' : 'single'}`, {
          'v-autocomplete--active-menu': menu.value,
          'v-autocomplete--chips': !!props.chips,
          'v-autocomplete--selection-slot': !!slots.selection,
          'v-autocomplete--selecting-index': selectionIndex.value > -1
        }, props.class],
        "style": props.style,
        "readonly": props.readonly,
        "placeholder": isDirty ? undefined : props.placeholder,
        "onClick:clear": onClear,
        "onMousedown:control": onMousedownControl,
        "onKeydown": onKeydown
      }), {
        ...slots,
        default: () => _createVNode(_Fragment, null, [_createVNode(VMenu, _mergeProps({
          "ref": vMenuRef,
          "modelValue": menu.value,
          "onUpdate:modelValue": $event => menu.value = $event,
          "activator": "parent",
          "contentClass": "v-autocomplete__content",
          "eager": props.eager,
          "maxHeight": 310,
          "openOnClick": false,
          "closeOnContentClick": false,
          "transition": props.transition,
          "onAfterLeave": onAfterLeave
        }, props.menuProps), {
          default: () => [hasList && _createVNode(VList, {
            "ref": listRef,
            "selected": selected.value,
            "selectStrategy": props.multiple ? 'independent' : 'single-independent',
            "onMousedown": e => e.preventDefault(),
            "onFocusin": onFocusin,
            "onFocusout": onFocusout
          }, {
            default: () => [!displayItems.value.length && !props.hideNoData && (slots['no-data']?.() ?? _createVNode(VListItem, {
              "title": t(props.noDataText)
            }, null)), slots['prepend-item']?.(), displayItems.value.map((item, index) => {
              const itemProps = mergeProps(item.props, {
                key: index,
                active: highlightFirst.value && index === 0 ? true : undefined,
                onClick: () => select(item)
              });
              return slots.item?.({
                item,
                index,
                props: itemProps
              }) ?? _createVNode(VListItem, itemProps, {
                prepend: _ref3 => {
                  let {
                    isSelected
                  } = _ref3;
                  return _createVNode(_Fragment, null, [props.multiple && !props.hideSelected ? _createVNode(VCheckboxBtn, {
                    "key": item.value,
                    "modelValue": isSelected,
                    "ripple": false,
                    "tabindex": "-1"
                  }, null) : undefined, item.props.prependIcon && _createVNode(VIcon, {
                    "icon": item.props.prependIcon
                  }, null)]);
                },
                title: () => {
                  return isPristine.value ? item.title : highlightResult(item.title, getMatches(item)?.title, search.value?.length ?? 0);
                }
              });
            }), slots['append-item']?.()]
          })]
        }), selections.value.map((item, index) => {
          function onChipClose(e) {
            e.stopPropagation();
            e.preventDefault();
            select(item);
          }
          const slotProps = {
            'onClick:close': onChipClose,
            onMousedown(e) {
              e.preventDefault();
              e.stopPropagation();
            },
            modelValue: true,
            'onUpdate:modelValue': undefined
          };
          return _createVNode("div", {
            "key": item.value,
            "class": ['v-autocomplete__selection', index === selectionIndex.value && ['v-autocomplete__selection--selected', textColorClasses.value]],
            "style": index === selectionIndex.value ? textColorStyles.value : {}
          }, [hasChips ? !slots.chip ? _createVNode(VChip, _mergeProps({
            "key": "chip",
            "closable": props.closableChips,
            "size": "small",
            "text": item.title
          }, slotProps), null) : _createVNode(VDefaultsProvider, {
            "key": "chip-defaults",
            "defaults": {
              VChip: {
                closable: props.closableChips,
                size: 'small',
                text: item.title
              }
            }
          }, {
            default: () => [slots.chip?.({
              item,
              index,
              props: slotProps
            })]
          }) : slots.selection?.({
            item,
            index
          }) ?? _createVNode("span", {
            "class": "v-autocomplete__selection-text"
          }, [item.title, props.multiple && index < selections.value.length - 1 && _createVNode("span", {
            "class": "v-autocomplete__selection-comma"
          }, [_createTextVNode(",")])])]);
        })]),
        'append-inner': function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return _createVNode(_Fragment, null, [slots['append-inner']?.(...args), props.menuIcon ? _createVNode(VIcon, {
            "class": "v-autocomplete__menu-icon",
            "icon": props.menuIcon,
            "onMousedown": onMousedownMenuIcon,
            "onClick": noop
          }, null) : undefined]);
        }
      });
    });
    return forwardRefs({
      isFocused,
      isPristine,
      menu,
      search,
      filteredItems,
      select
    }, vTextFieldRef);
  }
});
//# sourceMappingURL=VAutocomplete.mjs.map