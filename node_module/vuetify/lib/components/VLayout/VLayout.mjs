import { createVNode as _createVNode } from "vue";
// Styles
import "./VLayout.css";

// Composables
import { createLayout, makeLayoutProps } from "../../composables/layout.mjs";
import { makeComponentProps } from "../../composables/component.mjs"; // Utilities
import { genericComponent, propsFactory, useRender } from "../../util/index.mjs";
export const makeVLayoutProps = propsFactory({
  ...makeComponentProps(),
  ...makeLayoutProps()
}, 'v-layout');
export const VLayout = genericComponent()({
  name: 'VLayout',
  props: makeVLayoutProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      layoutClasses,
      layoutStyles,
      getLayoutItem,
      items,
      layoutRef
    } = createLayout(props);
    useRender(() => _createVNode("div", {
      "ref": layoutRef,
      "class": [layoutClasses.value, props.class],
      "style": [layoutStyles.value, props.style]
    }, [slots.default?.()]));
    return {
      getLayoutItem,
      items
    };
  }
});
//# sourceMappingURL=VLayout.mjs.map