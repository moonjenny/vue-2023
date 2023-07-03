import { withDirectives as _withDirectives, resolveDirective as _resolveDirective, vShow as _vShow, Fragment as _Fragment, createVNode as _createVNode, mergeProps as _mergeProps } from "vue";
// Styles
import "./VOverlay.css";

// Composables
import { makeActivatorProps, useActivator } from "./useActivator.mjs";
import { makeComponentProps } from "../../composables/component.mjs";
import { makeDimensionProps, useDimension } from "../../composables/dimensions.mjs";
import { makeLazyProps, useLazy } from "../../composables/lazy.mjs";
import { makeLocationStrategyProps, useLocationStrategies } from "./locationStrategies.mjs";
import { makeScrollStrategyProps, useScrollStrategies } from "./scrollStrategies.mjs";
import { makeThemeProps, provideTheme } from "../../composables/theme.mjs";
import { makeTransitionProps, MaybeTransition } from "../../composables/transition.mjs";
import { useBackButton, useRouter } from "../../composables/router.mjs";
import { useBackgroundColor } from "../../composables/color.mjs";
import { useHydration } from "../../composables/hydration.mjs";
import { useProxiedModel } from "../../composables/proxiedModel.mjs";
import { useRtl } from "../../composables/locale.mjs";
import { useScopeId } from "../../composables/scopeId.mjs";
import { useStack } from "../../composables/stack.mjs";
import { useTeleport } from "../../composables/teleport.mjs";
import { useToggleScope } from "../../composables/toggleScope.mjs"; // Directives
import { ClickOutside } from "../../directives/click-outside/index.mjs"; // Utilities
import { animate, convertToUnit, genericComponent, getScrollParent, IN_BROWSER, propsFactory, standardEasing, useRender } from "../../util/index.mjs";
import { computed, mergeProps, ref, Teleport, toHandlers, toRef, Transition, watch } from 'vue';

// Types

function Scrim(props) {
  const {
    modelValue,
    color,
    ...rest
  } = props;
  return _createVNode(Transition, {
    "name": "fade-transition",
    "appear": true
  }, {
    default: () => [props.modelValue && _createVNode("div", _mergeProps({
      "class": ['v-overlay__scrim', props.color.backgroundColorClasses.value],
      "style": props.color.backgroundColorStyles.value
    }, rest), null)]
  });
}
export const makeVOverlayProps = propsFactory({
  absolute: Boolean,
  attach: [Boolean, String, Object],
  closeOnBack: {
    type: Boolean,
    default: true
  },
  contained: Boolean,
  contentClass: null,
  contentProps: null,
  disabled: Boolean,
  noClickAnimation: Boolean,
  modelValue: Boolean,
  persistent: Boolean,
  scrim: {
    type: [String, Boolean],
    default: true
  },
  zIndex: {
    type: [Number, String],
    default: 2000
  },
  ...makeActivatorProps(),
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeLazyProps(),
  ...makeLocationStrategyProps(),
  ...makeScrollStrategyProps(),
  ...makeThemeProps(),
  ...makeTransitionProps()
}, 'v-overlay');
export const VOverlay = genericComponent()({
  name: 'VOverlay',
  directives: {
    ClickOutside
  },
  inheritAttrs: false,
  props: {
    _disableGlobalStack: Boolean,
    ...makeVOverlayProps()
  },
  emits: {
    'click:outside': e => true,
    'update:modelValue': value => true,
    afterLeave: () => true
  },
  setup(props, _ref) {
    let {
      slots,
      attrs,
      emit
    } = _ref;
    const model = useProxiedModel(props, 'modelValue');
    const isActive = computed({
      get: () => model.value,
      set: v => {
        if (!(v && props.disabled)) model.value = v;
      }
    });
    const {
      teleportTarget
    } = useTeleport(computed(() => props.attach || props.contained));
    const {
      themeClasses
    } = provideTheme(props);
    const {
      rtlClasses,
      isRtl
    } = useRtl();
    const {
      hasContent,
      onAfterLeave
    } = useLazy(props, isActive);
    const scrimColor = useBackgroundColor(computed(() => {
      return typeof props.scrim === 'string' ? props.scrim : null;
    }));
    const {
      globalTop,
      localTop,
      stackStyles
    } = useStack(isActive, toRef(props, 'zIndex'), props._disableGlobalStack);
    const {
      activatorEl,
      activatorRef,
      activatorEvents,
      contentEvents,
      scrimEvents
    } = useActivator(props, {
      isActive,
      isTop: localTop
    });
    const {
      dimensionStyles
    } = useDimension(props);
    const isMounted = useHydration();
    const {
      scopeId
    } = useScopeId();
    watch(() => props.disabled, v => {
      if (v) isActive.value = false;
    });
    const root = ref();
    const contentEl = ref();
    const {
      contentStyles,
      updateLocation
    } = useLocationStrategies(props, {
      isRtl,
      contentEl,
      activatorEl,
      isActive
    });
    useScrollStrategies(props, {
      root,
      contentEl,
      activatorEl,
      isActive,
      updateLocation
    });
    function onClickOutside(e) {
      emit('click:outside', e);
      if (!props.persistent) isActive.value = false;else animateClick();
    }
    function closeConditional() {
      return isActive.value && globalTop.value;
    }
    IN_BROWSER && watch(isActive, val => {
      if (val) {
        window.addEventListener('keydown', onKeydown);
      } else {
        window.removeEventListener('keydown', onKeydown);
      }
    }, {
      immediate: true
    });
    function onKeydown(e) {
      if (e.key === 'Escape' && globalTop.value) {
        if (!props.persistent) {
          isActive.value = false;
        } else animateClick();
      }
    }
    const router = useRouter();
    useToggleScope(() => props.closeOnBack, () => {
      useBackButton(router, next => {
        if (globalTop.value && isActive.value) {
          next(false);
          if (!props.persistent) isActive.value = false;else animateClick();
        } else {
          next();
        }
      });
    });
    const top = ref();
    watch(() => isActive.value && (props.absolute || props.contained) && teleportTarget.value == null, val => {
      if (val) {
        const scrollParent = getScrollParent(root.value);
        if (scrollParent && scrollParent !== document.scrollingElement) {
          top.value = scrollParent.scrollTop;
        }
      }
    });

    // Add a quick "bounce" animation to the content
    function animateClick() {
      if (props.noClickAnimation) return;
      contentEl.value && animate(contentEl.value, [{
        transformOrigin: 'center'
      }, {
        transform: 'scale(1.03)'
      }, {
        transformOrigin: 'center'
      }], {
        duration: 150,
        easing: standardEasing
      });
    }
    useRender(() => _createVNode(_Fragment, null, [slots.activator?.({
      isActive: isActive.value,
      props: mergeProps({
        ref: activatorRef
      }, toHandlers(activatorEvents.value), props.activatorProps)
    }), isMounted.value && _createVNode(Teleport, {
      "disabled": !teleportTarget.value,
      "to": teleportTarget.value
    }, {
      default: () => [hasContent.value && _createVNode("div", _mergeProps({
        "class": ['v-overlay', {
          'v-overlay--absolute': props.absolute || props.contained,
          'v-overlay--active': isActive.value,
          'v-overlay--contained': props.contained
        }, themeClasses.value, rtlClasses.value, props.class],
        "style": [stackStyles.value, {
          top: convertToUnit(top.value)
        }, props.style],
        "ref": root
      }, scopeId, attrs), [_createVNode(Scrim, _mergeProps({
        "color": scrimColor,
        "modelValue": isActive.value && !!props.scrim
      }, toHandlers(scrimEvents.value)), null), _createVNode(MaybeTransition, {
        "appear": true,
        "persisted": true,
        "transition": props.transition,
        "target": activatorEl.value,
        "onAfterLeave": () => {
          onAfterLeave();
          emit('afterLeave');
        }
      }, {
        default: () => [_withDirectives(_createVNode("div", _mergeProps({
          "ref": contentEl,
          "class": ['v-overlay__content', props.contentClass],
          "style": [dimensionStyles.value, contentStyles.value]
        }, toHandlers(contentEvents.value), props.contentProps), [slots.default?.({
          isActive
        })]), [[_vShow, isActive.value], [_resolveDirective("click-outside"), {
          handler: onClickOutside,
          closeConditional,
          include: () => [activatorEl.value]
        }]])]
      })])]
    })]));
    return {
      activatorEl,
      animateClick,
      contentEl,
      globalTop,
      localTop,
      updateLocation
    };
  }
});
//# sourceMappingURL=VOverlay.mjs.map