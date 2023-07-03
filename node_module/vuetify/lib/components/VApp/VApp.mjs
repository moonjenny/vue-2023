import { createVNode as _createVNode } from "vue";
// Styles
import "./VApp.css";

// Composables
import { createLayout, makeLayoutProps } from "../../composables/layout.mjs";
import { makeComponentProps } from "../../composables/component.mjs";
import { makeThemeProps, provideTheme } from "../../composables/theme.mjs";
import { useRtl } from "../../composables/locale.mjs"; // Utilities
import { genericComponent, propsFactory, useRender } from "../../util/index.mjs";
export const makeVAppProps = propsFactory({
  ...makeComponentProps(),
  ...makeLayoutProps({
    fullHeight: true
  }),
  ...makeThemeProps()
}, 'v-app');
export const VApp = genericComponent()({
  name: 'VApp',
  props: makeVAppProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const theme = provideTheme(props);
    const {
      layoutClasses,
      layoutStyles,
      getLayoutItem,
      items,
      layoutRef
    } = createLayout(props);
    const {
      rtlClasses
    } = useRtl();
    useRender(() => _createVNode("div", {
      "ref": layoutRef,
      "class": ['v-application', theme.themeClasses.value, layoutClasses.value, rtlClasses.value, props.class],
      "style": [layoutStyles.value, props.style]
    }, [_createVNode("div", {
      "class": "v-application__wrap"
    }, [slots.default?.()])]));
    return {
      getLayoutItem,
      items,
      theme
    };
  }
});
//# sourceMappingURL=VApp.mjs.map