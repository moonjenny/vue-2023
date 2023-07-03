import { createVNode as _createVNode, mergeProps as _mergeProps, resolveDirective as _resolveDirective } from "vue";
// Styles
import "./VBottomSheet.css";

// Components
import { makeVDialogProps, VDialog } from "../../components/VDialog/VDialog.mjs"; // Composables
import { useProxiedModel } from "../../composables/proxiedModel.mjs"; // Utilities
import { genericComponent, propsFactory, useRender } from "../../util/index.mjs"; // Types
export const makeVBottomSheetProps = propsFactory({
  inset: Boolean,
  ...makeVDialogProps({
    contentClass: 'v-bottom-sheet__content',
    transition: 'bottom-sheet-transition'
  })
}, 'v-bottom-sheet');
export const VBottomSheet = genericComponent()({
  name: 'VBottomSheet',
  props: makeVBottomSheetProps(),
  emits: {
    'update:modelValue': value => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const isActive = useProxiedModel(props, 'modelValue');
    useRender(() => {
      const [dialogProps] = VDialog.filterProps(props);
      return _createVNode(VDialog, _mergeProps(dialogProps, {
        "modelValue": isActive.value,
        "onUpdate:modelValue": $event => isActive.value = $event,
        "class": ['v-bottom-sheet', {
          'v-bottom-sheet--inset': props.inset
        }]
      }), slots);
    });
    return {};
  }
});
//# sourceMappingURL=VBottomSheet.mjs.map