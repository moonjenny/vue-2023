import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";
// Styles
import "./VBtnGroup.css";

// Composables
import { makeBorderProps, useBorder } from "../../composables/border.mjs";
import { makeComponentProps } from "../../composables/component.mjs";
import { makeDensityProps, useDensity } from "../../composables/density.mjs";
import { makeElevationProps, useElevation } from "../../composables/elevation.mjs";
import { makeRoundedProps, useRounded } from "../../composables/rounded.mjs";
import { makeTagProps } from "../../composables/tag.mjs";
import { makeThemeProps, provideTheme } from "../../composables/theme.mjs";
import { makeVariantProps } from "../../composables/variant.mjs";
import { provideDefaults } from "../../composables/defaults.mjs"; // Utility
import { genericComponent, propsFactory, useRender } from "../../util/index.mjs";
import { toRef } from 'vue';
export const makeVBtnGroupProps = propsFactory({
  divided: Boolean,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeElevationProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps()
}, 'v-btn-group');
export const VBtnGroup = genericComponent()({
  name: 'VBtnGroup',
  props: makeVBtnGroupProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    provideDefaults({
      VBtn: {
        height: 'auto',
        color: toRef(props, 'color'),
        density: toRef(props, 'density'),
        flat: true,
        variant: toRef(props, 'variant')
      }
    });
    useRender(() => {
      return _createVNode(props.tag, {
        "class": ['v-btn-group', {
          'v-btn-group--divided': props.divided
        }, themeClasses.value, borderClasses.value, densityClasses.value, elevationClasses.value, roundedClasses.value, props.class],
        "style": props.style
      }, slots);
    });
  }
});
//# sourceMappingURL=VBtnGroup.mjs.map