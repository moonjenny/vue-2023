import { createVNode as _createVNode, mergeProps as _mergeProps, resolveDirective as _resolveDirective } from "vue";
// Components
import { makeSelectionControlProps, VSelectionControl } from "../VSelectionControl/VSelectionControl.mjs"; // Composables
import { IconValue } from "../../composables/icons.mjs";
import { useProxiedModel } from "../../composables/proxiedModel.mjs"; // Utilities
import { computed } from 'vue';
import { genericComponent, propsFactory, useRender } from "../../util/index.mjs";
export const makeVCheckboxBtnProps = propsFactory({
  indeterminate: Boolean,
  indeterminateIcon: {
    type: IconValue,
    default: '$checkboxIndeterminate'
  },
  ...makeSelectionControlProps({
    falseIcon: '$checkboxOff',
    trueIcon: '$checkboxOn'
  })
}, 'v-checkbox-btn');
export const VCheckboxBtn = genericComponent()({
  name: 'VCheckboxBtn',
  props: makeVCheckboxBtnProps(),
  emits: {
    'update:modelValue': value => true,
    'update:indeterminate': val => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const indeterminate = useProxiedModel(props, 'indeterminate');
    const model = useProxiedModel(props, 'modelValue');
    function onChange(v) {
      if (indeterminate.value) {
        indeterminate.value = false;
      }
    }
    const falseIcon = computed(() => {
      return indeterminate.value ? props.indeterminateIcon : props.falseIcon;
    });
    const trueIcon = computed(() => {
      return indeterminate.value ? props.indeterminateIcon : props.trueIcon;
    });
    useRender(() => _createVNode(VSelectionControl, _mergeProps(props, {
      "modelValue": model.value,
      "onUpdate:modelValue": [$event => model.value = $event, onChange],
      "class": ['v-checkbox-btn', props.class],
      "style": props.style,
      "type": "checkbox",
      "falseIcon": falseIcon.value,
      "trueIcon": trueIcon.value,
      "aria-checked": indeterminate.value ? 'mixed' : undefined
    }), slots));
    return {};
  }
});
//# sourceMappingURL=VCheckboxBtn.mjs.map