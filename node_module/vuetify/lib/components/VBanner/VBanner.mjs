import { resolveDirective as _resolveDirective, createVNode as _createVNode } from "vue";
// Styles
import "./VBanner.css";

// Components
import { VAvatar } from "../VAvatar/index.mjs";
import { VBannerActions } from "./VBannerActions.mjs";
import { VBannerText } from "./VBannerText.mjs";
import { VDefaultsProvider } from "../VDefaultsProvider/index.mjs"; // Composables
import { makeBorderProps, useBorder } from "../../composables/border.mjs";
import { IconValue } from "../../composables/icons.mjs";
import { makeComponentProps } from "../../composables/component.mjs";
import { makeDensityProps, useDensity } from "../../composables/density.mjs";
import { makeDimensionProps, useDimension } from "../../composables/dimensions.mjs";
import { makeElevationProps, useElevation } from "../../composables/elevation.mjs";
import { makeLocationProps, useLocation } from "../../composables/location.mjs";
import { makePositionProps, usePosition } from "../../composables/position.mjs";
import { makeRoundedProps, useRounded } from "../../composables/rounded.mjs";
import { makeTagProps } from "../../composables/tag.mjs";
import { makeThemeProps, provideTheme } from "../../composables/theme.mjs";
import { provideDefaults } from "../../composables/defaults.mjs";
import { useDisplay } from "../../composables/display.mjs"; // Utilities
import { genericComponent, propsFactory, useRender } from "../../util/index.mjs";
import { toRef } from 'vue';

// Types

export const makeVBannerProps = propsFactory({
  avatar: String,
  color: String,
  icon: IconValue,
  lines: String,
  stacked: Boolean,
  sticky: Boolean,
  text: String,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, 'v-banner');
export const VBanner = genericComponent()({
  name: 'VBanner',
  props: makeVBannerProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      borderClasses
    } = useBorder(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      mobile
    } = useDisplay();
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      themeClasses
    } = provideTheme(props);
    const color = toRef(props, 'color');
    const density = toRef(props, 'density');
    provideDefaults({
      VBannerActions: {
        color,
        density
      }
    });
    useRender(() => {
      const hasText = !!(props.text || slots.text);
      const hasPrependMedia = !!(props.avatar || props.icon);
      const hasPrepend = !!(hasPrependMedia || slots.prepend);
      return _createVNode(props.tag, {
        "class": ['v-banner', {
          'v-banner--stacked': props.stacked || mobile.value,
          'v-banner--sticky': props.sticky,
          [`v-banner--${props.lines}-line`]: !!props.lines
        }, borderClasses.value, densityClasses.value, elevationClasses.value, positionClasses.value, roundedClasses.value, themeClasses.value, props.class],
        "style": [dimensionStyles.value, locationStyles.value, props.style],
        "role": "banner"
      }, {
        default: () => [hasPrepend && _createVNode("div", {
          "key": "prepend",
          "class": "v-banner__prepend"
        }, [!slots.prepend ? _createVNode(VAvatar, {
          "key": "prepend-avatar",
          "color": color.value,
          "density": density.value,
          "icon": props.icon,
          "image": props.avatar
        }, null) : _createVNode(VDefaultsProvider, {
          "key": "prepend-defaults",
          "disabled": !hasPrependMedia,
          "defaults": {
            VAvatar: {
              color: color.value,
              density: density.value,
              icon: props.icon,
              image: props.avatar
            }
          }
        }, slots.prepend)]), _createVNode("div", {
          "class": "v-banner__content"
        }, [hasText && _createVNode(VBannerText, {
          "key": "text"
        }, {
          default: () => [slots.text?.() ?? props.text]
        }), slots.default?.()]), slots.actions && _createVNode(VBannerActions, {
          "key": "actions"
        }, slots.actions)]
      });
    });
  }
});
//# sourceMappingURL=VBanner.mjs.map