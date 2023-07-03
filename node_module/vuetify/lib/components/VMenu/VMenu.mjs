import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";
// Styles
import "./VMenu.css";

// Components
import { VDefaultsProvider } from "../VDefaultsProvider/index.mjs";
import { VDialogTransition } from "../transitions/index.mjs";
import { VOverlay } from "../VOverlay/index.mjs"; // Composables
import { forwardRefs } from "../../composables/forwardRefs.mjs";
import { useProxiedModel } from "../../composables/proxiedModel.mjs";
import { useScopeId } from "../../composables/scopeId.mjs"; // Utilities
import { computed, inject, mergeProps, provide, ref, shallowRef, watch } from 'vue';
import { genericComponent, getUid, omit, propsFactory, useRender } from "../../util/index.mjs";
import { makeVOverlayProps } from "../VOverlay/VOverlay.mjs";
import { VMenuSymbol } from "./shared.mjs"; // Types
export const makeVMenuProps = propsFactory({
  // TODO
  // disableKeys: Boolean,
  id: String,
  ...omit(makeVOverlayProps({
    closeDelay: 250,
    closeOnContentClick: true,
    locationStrategy: 'connected',
    openDelay: 300,
    scrim: false,
    scrollStrategy: 'reposition',
    transition: {
      component: VDialogTransition
    }
  }), ['absolute'])
}, 'v-menu');
export const VMenu = genericComponent()({
  name: 'VMenu',
  props: makeVMenuProps(),
  emits: {
    'update:modelValue': value => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const isActive = useProxiedModel(props, 'modelValue');
    const {
      scopeId
    } = useScopeId();
    const uid = getUid();
    const id = computed(() => props.id || `v-menu-${uid}`);
    const overlay = ref();
    const parent = inject(VMenuSymbol, null);
    const openChildren = shallowRef(0);
    provide(VMenuSymbol, {
      register() {
        ++openChildren.value;
      },
      unregister() {
        --openChildren.value;
      },
      closeParents() {
        setTimeout(() => {
          if (!openChildren.value) {
            isActive.value = false;
            parent?.closeParents();
          }
        }, 40);
      }
    });
    watch(isActive, val => {
      val ? parent?.register() : parent?.unregister();
    });
    function onClickOutside() {
      parent?.closeParents();
    }
    const activatorProps = computed(() => mergeProps({
      'aria-haspopup': 'menu',
      'aria-expanded': String(isActive.value),
      'aria-owns': id.value
    }, props.activatorProps));
    useRender(() => {
      const [overlayProps] = VOverlay.filterProps(props);
      return _createVNode(VOverlay, _mergeProps({
        "ref": overlay,
        "class": ['v-menu', props.class],
        "style": props.style
      }, overlayProps, {
        "modelValue": isActive.value,
        "onUpdate:modelValue": $event => isActive.value = $event,
        "absolute": true,
        "activatorProps": activatorProps.value,
        "onClick:outside": onClickOutside
      }, scopeId), {
        activator: slots.activator,
        default: function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return _createVNode(VDefaultsProvider, {
            "root": true
          }, {
            default: () => [slots.default?.(...args)]
          });
        }
      });
    });
    return forwardRefs({
      id,
      ΨopenChildren: openChildren
    }, overlay);
  }
});
//# sourceMappingURL=VMenu.mjs.map