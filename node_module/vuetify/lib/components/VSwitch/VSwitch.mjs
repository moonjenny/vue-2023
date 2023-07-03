import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";
// Styles
import "./VSwitch.css";

// Components
import { makeSelectionControlProps, VSelectionControl } from "../VSelectionControl/VSelectionControl.mjs";
import { makeVInputProps, VInput } from "../VInput/VInput.mjs";
import { VProgressCircular } from "../VProgressCircular/index.mjs"; // Composables
import { LoaderSlot, useLoader } from "../../composables/loader.mjs";
import { useFocus } from "../../composables/focus.mjs";
import { useProxiedModel } from "../../composables/proxiedModel.mjs"; // Utility
import { computed, ref } from 'vue';
import { filterInputAttrs, genericComponent, getUid, propsFactory, useRender } from "../../util/index.mjs"; // Types
export const makeVSwitchProps = propsFactory({
  indeterminate: Boolean,
  inset: Boolean,
  flat: Boolean,
  loading: {
    type: [Boolean, String],
    default: false
  },
  ...makeVInputProps(),
  ...makeSelectionControlProps()
}, 'v-switch');
export const VSwitch = genericComponent()({
  name: 'VSwitch',
  inheritAttrs: false,
  props: makeVSwitchProps(),
  emits: {
    'update:focused': focused => true,
    'update:modelValue': () => true,
    'update:indeterminate': val => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const indeterminate = useProxiedModel(props, 'indeterminate');
    const model = useProxiedModel(props, 'modelValue');
    const {
      loaderClasses
    } = useLoader(props);
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const loaderColor = computed(() => {
      return typeof props.loading === 'string' && props.loading !== '' ? props.loading : props.color;
    });
    const uid = getUid();
    const id = computed(() => props.id || `switch-${uid}`);
    function onChange() {
      if (indeterminate.value) {
        indeterminate.value = false;
      }
    }
    useRender(() => {
      const [inputAttrs, controlAttrs] = filterInputAttrs(attrs);
      const [inputProps, _1] = VInput.filterProps(props);
      const [controlProps, _2] = VSelectionControl.filterProps(props);
      const control = ref();
      function onClick(e) {
        e.stopPropagation();
        e.preventDefault();
        control.value?.input?.click();
      }
      return _createVNode(VInput, _mergeProps({
        "class": ['v-switch', {
          'v-switch--inset': props.inset
        }, {
          'v-switch--indeterminate': indeterminate.value
        }, loaderClasses.value, props.class],
        "style": props.style
      }, inputAttrs, inputProps, {
        "id": id.value,
        "focused": isFocused.value
      }), {
        ...slots,
        default: _ref2 => {
          let {
            id,
            messagesId,
            isDisabled,
            isReadonly,
            isValid
          } = _ref2;
          return _createVNode(VSelectionControl, _mergeProps({
            "ref": control
          }, controlProps, {
            "modelValue": model.value,
            "onUpdate:modelValue": [$event => model.value = $event, onChange],
            "id": id.value,
            "aria-describedby": messagesId.value,
            "type": "checkbox",
            "aria-checked": indeterminate.value ? 'mixed' : undefined,
            "disabled": isDisabled.value,
            "readonly": isReadonly.value,
            "onFocus": focus,
            "onBlur": blur
          }, controlAttrs), {
            ...slots,
            default: () => _createVNode("div", {
              "class": "v-switch__track",
              "onClick": onClick
            }, null),
            input: _ref3 => {
              let {
                textColorClasses,
                textColorStyles
              } = _ref3;
              return _createVNode("div", {
                "class": ['v-switch__thumb', textColorClasses.value],
                "style": textColorStyles.value
              }, [props.loading && _createVNode(LoaderSlot, {
                "name": "v-switch",
                "active": true,
                "color": isValid.value === false ? undefined : loaderColor.value
              }, {
                default: slotProps => slots.loader ? slots.loader(slotProps) : _createVNode(VProgressCircular, {
                  "active": slotProps.isActive,
                  "color": slotProps.color,
                  "indeterminate": true,
                  "size": "16",
                  "width": "2"
                }, null)
              })]);
            }
          });
        }
      });
    });
    return {};
  }
});
//# sourceMappingURL=VSwitch.mjs.map