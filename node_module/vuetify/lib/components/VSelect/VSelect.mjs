import { createTextVNode as _createTextVNode, mergeProps as _mergeProps, createVNode as _createVNode, Fragment as _Fragment } from "vue";
// Styles
import "./VSelect.css";

// Components
import { makeVTextFieldProps } from "../VTextField/VTextField.mjs";
import { VCheckboxBtn } from "../VCheckbox/index.mjs";
import { VChip } from "../VChip/index.mjs";
import { VDefaultsProvider } from "../VDefaultsProvider/index.mjs";
import { VDialogTransition } from "../transitions/index.mjs";
import { VList, VListItem } from "../VList/index.mjs";
import { VMenu } from "../VMenu/index.mjs";
import { VIcon } from "../VIcon/index.mjs";
import { VTextField } from "../VTextField/index.mjs"; // Composables
import { forwardRefs } from "../../composables/forwardRefs.mjs";
import { IconValue } from "../../composables/icons.mjs";
import { makeItemsProps, useItems } from "../../composables/list-items.mjs";
import { makeTransitionProps } from "../../composables/transition.mjs";
import { useForm } from "../../composables/form.mjs";
import { useLocale } from "../../composables/locale.mjs";
import { useProxiedModel } from "../../composables/proxiedModel.mjs"; // Utility
import { computed, mergeProps, ref, shallowRef } from 'vue';
import { deepEqual, genericComponent, omit, propsFactory, useRender, wrapInArray } from "../../util/index.mjs"; // Types
export const makeSelectProps = propsFactory({
  chips: Boolean,
  closableChips: Boolean,
  eager: Boolean,
  hideNoData: Boolean,
  hideSelected: Boolean,
  menu: Boolean,
  menuIcon: {
    type: IconValue,
    default: '$dropdown'
  },
  menuProps: {
    type: Object
  },
  multiple: Boolean,
  noDataText: {
    type: String,
    default: '$vuetify.noDataText'
  },
  openOnClear: Boolean,
  valueComparator: {
    type: Function,
    default: deepEqual
  },
  ...makeItemsProps({
    itemChildren: false
  })
}, 'select');
export const makeVSelectProps = propsFactory({
  ...makeSelectProps(),
  ...omit(makeVTextFieldProps({
    modelValue: null
  }), ['validationValue', 'dirty', 'appendInnerIcon']),
  ...makeTransitionProps({
    transition: {
      component: VDialogTransition
    }
  })
}, 'v-select');
export const VSelect = genericComponent()({
  name: 'VSelect',
  props: makeVSelectProps(),
  emits: {
    'update:focused': focused => true,
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
    const vMenuRef = ref();
    const _menu = useProxiedModel(props, 'menu');
    const menu = computed({
      get: () => _menu.value,
      set: v => {
        if (_menu.value && !v && vMenuRef.value?.ΨopenChildren) return;
        _menu.value = v;
      }
    });
    const {
      items,
      transformIn,
      transformOut
    } = useItems(props);
    const model = useProxiedModel(props, 'modelValue', [], v => transformIn(wrapInArray(v)), v => {
      const transformed = transformOut(v);
      return props.multiple ? transformed : transformed[0] ?? null;
    });
    const form = useForm();
    const selections = computed(() => {
      return model.value.map(v => {
        return items.value.find(item => props.valueComparator(item.value, v.value)) || v;
      });
    });
    const selected = computed(() => selections.value.map(selection => selection.props.value));
    const isFocused = shallowRef(false);
    let keyboardLookupPrefix = '';
    let keyboardLookupLastTime;
    const displayItems = computed(() => {
      if (props.hideSelected) {
        return items.value.filter(item => !selections.value.some(s => s === item));
      }
      return items.value;
    });
    const listRef = ref();
    function onClear(e) {
      if (props.openOnClear) {
        menu.value = true;
      }
    }
    function onMousedownControl() {
      if (props.hideNoData && !items.value.length || props.readonly || form?.isReadonly.value) return;
      menu.value = !menu.value;
    }
    function onKeydown(e) {
      if (props.readonly || form?.isReadonly.value) return;
      if (['Enter', ' ', 'ArrowDown', 'ArrowUp', 'Home', 'End'].includes(e.key)) {
        e.preventDefault();
      }
      if (['Enter', 'ArrowDown', ' '].includes(e.key)) {
        menu.value = true;
      }
      if (['Escape', 'Tab'].includes(e.key)) {
        menu.value = false;
      }
      if (e.key === 'ArrowDown') {
        listRef.value?.focus('next');
      } else if (e.key === 'ArrowUp') {
        listRef.value?.focus('prev');
      } else if (e.key === 'Home') {
        listRef.value?.focus('first');
      } else if (e.key === 'End') {
        listRef.value?.focus('last');
      }

      // html select hotkeys
      const KEYBOARD_LOOKUP_THRESHOLD = 1000; // milliseconds

      function checkPrintable(e) {
        const isPrintableChar = e.key.length === 1;
        const noModifier = !e.ctrlKey && !e.metaKey && !e.altKey;
        return isPrintableChar && noModifier;
      }
      if (props.multiple || !checkPrintable(e)) return;
      const now = performance.now();
      if (now - keyboardLookupLastTime > KEYBOARD_LOOKUP_THRESHOLD) {
        keyboardLookupPrefix = '';
      }
      keyboardLookupPrefix += e.key.toLowerCase();
      keyboardLookupLastTime = now;
      const item = items.value.find(item => item.title.toLowerCase().startsWith(keyboardLookupPrefix));
      if (item !== undefined) {
        model.value = [item];
      }
    }
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
        menu.value = false;
      }
    }
    function onBlur(e) {
      if (!listRef.value?.$el.contains(e.relatedTarget)) {
        menu.value = false;
      }
    }
    function onAfterLeave() {
      if (isFocused.value) {
        vTextFieldRef.value?.focus();
      }
    }
    function onFocusin(e) {
      isFocused.value = true;
    }
    useRender(() => {
      const hasChips = !!(props.chips || slots.chip);
      const hasList = !!(!props.hideNoData || displayItems.value.length || slots.prepend || slots.append || slots['no-data']);
      const isDirty = model.value.length > 0;
      const [textFieldProps] = VTextField.filterProps(props);
      const placeholder = isDirty || !isFocused.value && props.label && !props.persistentPlaceholder ? undefined : props.placeholder;
      return _createVNode(VTextField, _mergeProps({
        "ref": vTextFieldRef
      }, textFieldProps, {
        "modelValue": model.value.map(v => v.props.value).join(', '),
        "onUpdate:modelValue": v => {
          if (v == null) model.value = [];
        },
        "focused": isFocused.value,
        "onUpdate:focused": $event => isFocused.value = $event,
        "validationValue": model.externalValue,
        "dirty": isDirty,
        "class": ['v-select', {
          'v-select--active-menu': menu.value,
          'v-select--chips': !!props.chips,
          [`v-select--${props.multiple ? 'multiple' : 'single'}`]: true,
          'v-select--selected': model.value.length,
          'v-select--selection-slot': !!slots.selection
        }, props.class],
        "style": props.style,
        "readonly": true,
        "placeholder": placeholder,
        "onClick:clear": onClear,
        "onMousedown:control": onMousedownControl,
        "onBlur": onBlur,
        "onKeydown": onKeydown
      }), {
        ...slots,
        default: () => _createVNode(_Fragment, null, [_createVNode(VMenu, _mergeProps({
          "ref": vMenuRef,
          "modelValue": menu.value,
          "onUpdate:modelValue": $event => menu.value = $event,
          "activator": "parent",
          "contentClass": "v-select__content",
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
            "onFocusin": onFocusin
          }, {
            default: () => [!displayItems.value.length && !props.hideNoData && (slots['no-data']?.() ?? _createVNode(VListItem, {
              "title": t(props.noDataText)
            }, null)), slots['prepend-item']?.(), displayItems.value.map((item, index) => {
              const itemProps = mergeProps(item.props, {
                key: index,
                onClick: () => select(item)
              });
              return slots.item?.({
                item,
                index,
                props: itemProps
              }) ?? _createVNode(VListItem, itemProps, {
                prepend: _ref2 => {
                  let {
                    isSelected
                  } = _ref2;
                  return _createVNode(_Fragment, null, [props.multiple && !props.hideSelected ? _createVNode(VCheckboxBtn, {
                    "key": item.value,
                    "modelValue": isSelected,
                    "ripple": false,
                    "tabindex": "-1"
                  }, null) : undefined, item.props.prependIcon && _createVNode(VIcon, {
                    "icon": item.props.prependIcon
                  }, null)]);
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
            "class": "v-select__selection"
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
            "class": "v-select__selection-text"
          }, [item.title, props.multiple && index < selections.value.length - 1 && _createVNode("span", {
            "class": "v-select__selection-comma"
          }, [_createTextVNode(",")])])]);
        })]),
        'append-inner': function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return _createVNode(_Fragment, null, [slots['append-inner']?.(...args), props.menuIcon ? _createVNode(VIcon, {
            "class": "v-select__menu-icon",
            "icon": props.menuIcon
          }, null) : undefined]);
        }
      });
    });
    return forwardRefs({
      isFocused,
      menu,
      select
    }, vTextFieldRef);
  }
});
//# sourceMappingURL=VSelect.mjs.map