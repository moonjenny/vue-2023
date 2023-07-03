import * as vue from 'vue';
import { ComponentPropsOptions, ExtractPropTypes, Ref, EffectScope } from 'vue';

declare const block: readonly ["top", "bottom"];
declare const inline: readonly ["start", "end", "left", "right"];
type Tblock = typeof block[number];
type Tinline = typeof inline[number];
type Anchor = Tblock | Tinline | 'center' | 'center center' | `${Tblock} ${Tinline | 'center'}` | `${Tinline} ${Tblock | 'center'}`;

declare class Box {
    x: number;
    y: number;
    width: number;
    height: number;
    constructor({ x, y, width, height }: {
        x: number;
        y: number;
        width: number;
        height: number;
    });
    get top(): number;
    get bottom(): number;
    get left(): number;
    get right(): number;
}

interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): [yes: Partial<Pick<T, U>>, no: Omit<T, U>];
}

interface LocationStrategyData {
    contentEl: Ref<HTMLElement | undefined>;
    activatorEl: Ref<HTMLElement | undefined>;
    isActive: Ref<boolean>;
    isRtl: Ref<boolean>;
}
type LocationStrategyFn = (data: LocationStrategyData, props: StrategyProps$1, contentStyles: Ref<Record<string, string>>) => undefined | {
    updateLocation: (e: Event) => void;
};
declare const locationStrategies: {
    static: typeof staticLocationStrategy;
    connected: typeof connectedLocationStrategy;
};
interface StrategyProps$1 {
    locationStrategy: keyof typeof locationStrategies | LocationStrategyFn;
    location: Anchor;
    origin: Anchor | 'auto' | 'overlap';
    offset?: number | string | number[];
    maxHeight?: number | string;
    maxWidth?: number | string;
    minHeight?: number | string;
    minWidth?: number | string;
}
declare function staticLocationStrategy(): void;
declare function connectedLocationStrategy(data: LocationStrategyData, props: StrategyProps$1, contentStyles: Ref<Record<string, string>>): {
    updateLocation: () => {
        available: {
            x: number;
            y: number;
        };
        contentBox: Box;
    } | undefined;
};

interface ScrollStrategyData {
    root: Ref<HTMLElement | undefined>;
    contentEl: Ref<HTMLElement | undefined>;
    activatorEl: Ref<HTMLElement | undefined>;
    isActive: Ref<boolean>;
    updateLocation: Ref<((e: Event) => void) | undefined>;
}
type ScrollStrategyFn = (data: ScrollStrategyData, props: StrategyProps, scope: EffectScope) => void;
declare const scrollStrategies: {
    none: null;
    close: typeof closeScrollStrategy;
    block: typeof blockScrollStrategy;
    reposition: typeof repositionScrollStrategy;
};
interface StrategyProps {
    scrollStrategy: keyof typeof scrollStrategies | ScrollStrategyFn;
    contained: boolean | undefined;
}
declare function closeScrollStrategy(data: ScrollStrategyData): void;
declare function blockScrollStrategy(data: ScrollStrategyData, props: StrategyProps): void;
declare function repositionScrollStrategy(data: ScrollStrategyData, props: StrategyProps, scope: EffectScope): void;

declare const VBottomSheet: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            absolute?: boolean | undefined;
            location?: Anchor | undefined;
            origin?: NonNullable<"auto" | Anchor | "overlap"> | undefined;
            inset?: boolean | undefined;
            transition?: NonNullable<NonNullable<string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            })> | {
                component: vue.Component;
            }> | undefined;
            zIndex?: NonNullable<string | number> | undefined;
            style?: vue.StyleValue | undefined;
            eager?: boolean | undefined;
            disabled?: boolean | undefined;
            contentClass?: any;
            modelValue?: boolean | undefined;
            activatorProps?: Record<string, any> | undefined;
            openOnClick?: boolean | undefined;
            openOnHover?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            closeOnContentClick?: boolean | undefined;
            locationStrategy?: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps$1, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined) | undefined;
            scrollStrategy?: NonNullable<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps, scope: vue.EffectScope) => void) | "reposition"> | undefined;
            closeOnBack?: boolean | undefined;
            contained?: boolean | undefined;
            noClickAnimation?: boolean | undefined;
            persistent?: boolean | undefined;
            scrim?: string | boolean | undefined;
            fullscreen?: boolean | undefined;
            retainFocus?: boolean | undefined;
            scrollable?: boolean | undefined;
            offset?: string | number | number[] | undefined;
            key?: string | number | symbol | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            class?: any;
            $children?: vue.VNodeChild | {
                default?: ((args_0: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: ((args_0: {
                    isActive: boolean;
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
            } | ((args_0: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild);
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            theme?: string | undefined;
            "v-slot:default"?: false | ((args_0: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            'v-slots'?: {
                default?: false | ((args_0: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: false | ((args_0: {
                    isActive: boolean;
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
            $slots?: {
                default?: ((args_0: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: ((args_0: {
                    isActive: boolean;
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
            onVnodeBeforeMount?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeMounted?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUpdate?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>, oldVNode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>, oldVNode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUpdated?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>, oldVNode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>, oldVNode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUnmount?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUnmounted?: ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
            activator?: string | Element | vue.ComponentPublicInstance | undefined;
            "v-slot:activator"?: false | ((args_0: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
            closeDelay?: string | number | undefined;
            openDelay?: string | number | undefined;
            contentProps?: any;
            attach?: string | boolean | Element | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((args_0: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            activator?: ((args_0: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: "update:modelValue", value: boolean) => void;
        $el: any;
        $options: vue.ComponentOptionsBase<{
            absolute: boolean;
            location: Anchor;
            origin: NonNullable<"auto" | Anchor | "overlap">;
            inset: boolean;
            transition: NonNullable<NonNullable<string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            })> | {
                component: vue.Component;
            }>;
            zIndex: NonNullable<string | number>;
            style: vue.StyleValue;
            eager: boolean;
            disabled: boolean;
            modelValue: boolean;
            activatorProps: Record<string, any>;
            openOnHover: boolean;
            closeOnContentClick: boolean;
            locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps$1, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined);
            scrollStrategy: NonNullable<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps, scope: vue.EffectScope) => void) | "reposition">;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: string | boolean;
            fullscreen: boolean;
            retainFocus: boolean;
            scrollable: boolean;
        } & {
            offset?: string | number | number[] | undefined;
            height?: string | number | undefined;
            width?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            class?: any;
            theme?: string | undefined;
            contentClass?: any;
            activator?: string | Element | vue.ComponentPublicInstance | undefined;
            closeDelay?: string | number | undefined;
            openDelay?: string | number | undefined;
            openOnClick?: boolean | undefined;
            openOnFocus?: boolean | undefined;
            contentProps?: any;
            attach?: string | boolean | Element | undefined;
        } & {
            $children?: vue.VNodeChild | {
                default?: ((args_0: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: ((args_0: {
                    isActive: boolean;
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
            } | ((args_0: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild);
            'v-slots'?: {
                default?: false | ((args_0: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: false | ((args_0: {
                    isActive: boolean;
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | ((args_0: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:activator"?: false | ((args_0: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
        } & {
            $slots?: {
                default?: ((args_0: {
                    isActive: vue.Ref<boolean>;
                }) => vue.VNodeChild) | undefined;
                activator?: ((args_0: {
                    isActive: boolean;
                    props: Record<string, any>;
                }) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:modelValue': (value: boolean) => boolean;
        }, string, {
            absolute: boolean;
            location: Anchor;
            origin: NonNullable<"auto" | Anchor | "overlap">;
            inset: boolean;
            transition: NonNullable<NonNullable<string | boolean | (vue.TransitionProps & {
                component?: vue.Component | undefined;
            })> | {
                component: vue.Component;
            }>;
            zIndex: NonNullable<string | number>;
            style: vue.StyleValue;
            eager: boolean;
            disabled: boolean;
            contentClass: any;
            modelValue: boolean;
            activatorProps: Record<string, any>;
            openOnClick: boolean;
            openOnHover: boolean;
            openOnFocus: boolean;
            closeOnContentClick: boolean;
            locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps$1, contentStyles: vue.Ref<Record<string, string>>) => {
                updateLocation: (e: Event) => void;
            } | undefined);
            scrollStrategy: NonNullable<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps, scope: vue.EffectScope) => void) | "reposition">;
            closeOnBack: boolean;
            contained: boolean;
            noClickAnimation: boolean;
            persistent: boolean;
            scrim: string | boolean;
            fullscreen: boolean;
            retainFocus: boolean;
            scrollable: boolean;
        }, {}, string, vue.SlotsType<Partial<{
            default: (args_0: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            activator: (args_0: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
        }>>> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: vue.DebuggerEvent) => void) | ((e: vue.DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof vue.nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: vue.WatchOptions<boolean> | undefined): vue.WatchStopHandle;
    } & {
        absolute: boolean;
        location: Anchor;
        origin: NonNullable<"auto" | Anchor | "overlap">;
        inset: boolean;
        transition: NonNullable<NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })> | {
            component: vue.Component;
        }>;
        zIndex: NonNullable<string | number>;
        style: vue.StyleValue;
        eager: boolean;
        disabled: boolean;
        modelValue: boolean;
        activatorProps: Record<string, any>;
        openOnHover: boolean;
        closeOnContentClick: boolean;
        locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps$1, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined);
        scrollStrategy: NonNullable<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps, scope: vue.EffectScope) => void) | "reposition">;
        closeOnBack: boolean;
        contained: boolean;
        noClickAnimation: boolean;
        persistent: boolean;
        scrim: string | boolean;
        fullscreen: boolean;
        retainFocus: boolean;
        scrollable: boolean;
    } & {
        offset?: string | number | number[] | undefined;
        height?: string | number | undefined;
        width?: string | number | undefined;
        maxHeight?: string | number | undefined;
        maxWidth?: string | number | undefined;
        minHeight?: string | number | undefined;
        minWidth?: string | number | undefined;
        class?: any;
        theme?: string | undefined;
        contentClass?: any;
        activator?: string | Element | vue.ComponentPublicInstance | undefined;
        closeDelay?: string | number | undefined;
        openDelay?: string | number | undefined;
        openOnClick?: boolean | undefined;
        openOnFocus?: boolean | undefined;
        contentProps?: any;
        attach?: string | boolean | Element | undefined;
    } & {
        $children?: vue.VNodeChild | {
            default?: ((args_0: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            activator?: ((args_0: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
        } | ((args_0: {
            isActive: vue.Ref<boolean>;
        }) => vue.VNodeChild);
        'v-slots'?: {
            default?: false | ((args_0: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            activator?: false | ((args_0: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((args_0: {
            isActive: vue.Ref<boolean>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:activator"?: false | ((args_0: {
            isActive: boolean;
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
    } & {
        $slots?: {
            default?: ((args_0: {
                isActive: vue.Ref<boolean>;
            }) => vue.VNodeChild) | undefined;
            activator?: ((args_0: {
                isActive: boolean;
                props: Record<string, any>;
            }) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    absolute: boolean;
    location: Anchor;
    origin: NonNullable<"auto" | Anchor | "overlap">;
    inset: boolean;
    transition: NonNullable<NonNullable<string | boolean | (vue.TransitionProps & {
        component?: vue.Component | undefined;
    })> | {
        component: vue.Component;
    }>;
    zIndex: NonNullable<string | number>;
    style: vue.StyleValue;
    eager: boolean;
    disabled: boolean;
    modelValue: boolean;
    activatorProps: Record<string, any>;
    openOnHover: boolean;
    closeOnContentClick: boolean;
    locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps$1, contentStyles: vue.Ref<Record<string, string>>) => {
        updateLocation: (e: Event) => void;
    } | undefined);
    scrollStrategy: NonNullable<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps, scope: vue.EffectScope) => void) | "reposition">;
    closeOnBack: boolean;
    contained: boolean;
    noClickAnimation: boolean;
    persistent: boolean;
    scrim: string | boolean;
    fullscreen: boolean;
    retainFocus: boolean;
    scrollable: boolean;
} & {
    offset?: string | number | number[] | undefined;
    height?: string | number | undefined;
    width?: string | number | undefined;
    maxHeight?: string | number | undefined;
    maxWidth?: string | number | undefined;
    minHeight?: string | number | undefined;
    minWidth?: string | number | undefined;
    class?: any;
    theme?: string | undefined;
    contentClass?: any;
    activator?: string | Element | vue.ComponentPublicInstance | undefined;
    closeDelay?: string | number | undefined;
    openDelay?: string | number | undefined;
    openOnClick?: boolean | undefined;
    openOnFocus?: boolean | undefined;
    contentProps?: any;
    attach?: string | boolean | Element | undefined;
} & {
    $children?: vue.VNodeChild | {
        default?: ((args_0: {
            isActive: vue.Ref<boolean>;
        }) => vue.VNodeChild) | undefined;
        activator?: ((args_0: {
            isActive: boolean;
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
    } | ((args_0: {
        isActive: vue.Ref<boolean>;
    }) => vue.VNodeChild);
    'v-slots'?: {
        default?: false | ((args_0: {
            isActive: vue.Ref<boolean>;
        }) => vue.VNodeChild) | undefined;
        activator?: false | ((args_0: {
            isActive: boolean;
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((args_0: {
        isActive: vue.Ref<boolean>;
    }) => vue.VNodeChild) | undefined;
    "v-slot:activator"?: false | ((args_0: {
        isActive: boolean;
        props: Record<string, any>;
    }) => vue.VNodeChild) | undefined;
} & {
    $slots?: {
        default?: ((args_0: {
            isActive: vue.Ref<boolean>;
        }) => vue.VNodeChild) | undefined;
        activator?: ((args_0: {
            isActive: boolean;
            props: Record<string, any>;
        }) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:modelValue': (value: boolean) => boolean;
}, string, {
    absolute: boolean;
    location: Anchor;
    origin: NonNullable<"auto" | Anchor | "overlap">;
    inset: boolean;
    transition: NonNullable<NonNullable<string | boolean | (vue.TransitionProps & {
        component?: vue.Component | undefined;
    })> | {
        component: vue.Component;
    }>;
    zIndex: NonNullable<string | number>;
    style: vue.StyleValue;
    eager: boolean;
    disabled: boolean;
    contentClass: any;
    modelValue: boolean;
    activatorProps: Record<string, any>;
    openOnClick: boolean;
    openOnHover: boolean;
    openOnFocus: boolean;
    closeOnContentClick: boolean;
    locationStrategy: "connected" | "static" | ((data: LocationStrategyData, props: StrategyProps$1, contentStyles: vue.Ref<Record<string, string>>) => {
        updateLocation: (e: Event) => void;
    } | undefined);
    scrollStrategy: NonNullable<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps, scope: vue.EffectScope) => void) | "reposition">;
    closeOnBack: boolean;
    contained: boolean;
    noClickAnimation: boolean;
    persistent: boolean;
    scrim: string | boolean;
    fullscreen: boolean;
    retainFocus: boolean;
    scrollable: boolean;
}, {}, string, vue.SlotsType<Partial<{
    default: (args_0: {
        isActive: vue.Ref<boolean>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    activator: (args_0: {
        isActive: boolean;
        props: Record<string, any>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    transition: Omit<Omit<{
        type: vue.PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })> | {
            component: vue.Component;
        }>;
        default: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })> | {
            component: vue.Component;
        };
    }, "type" | "default"> & {
        type: vue.PropType<NonNullable<NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })> | {
            component: vue.Component;
        }>>;
        default: NonNullable<NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })> | {
            component: vue.Component;
        }>;
    };
    theme: StringConstructor;
    scrollStrategy: Omit<{
        type: vue.PropType<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps, scope: vue.EffectScope) => void) | "reposition">;
        default: string;
        validator: (val: any) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<NonNullable<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps, scope: vue.EffectScope) => void) | "reposition">>;
        default: NonNullable<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps, scope: vue.EffectScope) => void) | "reposition">;
    };
    locationStrategy: {
        type: vue.PropType<"connected" | "static" | ((data: LocationStrategyData, props: StrategyProps$1, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined)>;
        default: string;
        validator: (val: any) => boolean;
    };
    location: {
        type: vue.PropType<Anchor>;
        default: string;
    };
    origin: Omit<{
        type: vue.PropType<"auto" | Anchor | "overlap">;
        default: string;
    }, "type" | "default"> & {
        type: vue.PropType<NonNullable<"auto" | Anchor | "overlap">>;
        default: NonNullable<"auto" | Anchor | "overlap">;
    };
    offset: vue.PropType<string | number | number[] | undefined>;
    eager: BooleanConstructor;
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    closeDelay: (StringConstructor | NumberConstructor)[];
    openDelay: (StringConstructor | NumberConstructor)[];
    activator: vue.PropType<string | Element | vue.ComponentPublicInstance | undefined>;
    activatorProps: {
        type: vue.PropType<Record<string, any>>;
        default: () => {};
    };
    openOnClick: {
        type: BooleanConstructor;
        default: undefined;
    };
    openOnHover: BooleanConstructor;
    openOnFocus: {
        type: BooleanConstructor;
        default: undefined;
    };
    closeOnContentClick: BooleanConstructor;
    absolute: BooleanConstructor;
    attach: vue.PropType<string | boolean | Element>;
    closeOnBack: {
        type: BooleanConstructor;
        default: boolean;
    };
    contained: BooleanConstructor;
    contentClass: {
        type: vue.PropType<any>;
        default: any;
    };
    contentProps: null;
    disabled: BooleanConstructor;
    noClickAnimation: BooleanConstructor;
    modelValue: BooleanConstructor;
    persistent: BooleanConstructor;
    scrim: {
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
    };
    zIndex: Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: vue.PropType<NonNullable<string | number>>;
        default: NonNullable<string | number>;
    };
    fullscreen: BooleanConstructor;
    retainFocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollable: BooleanConstructor;
    inset: BooleanConstructor;
}, vue.ExtractPropTypes<{
    transition: Omit<Omit<{
        type: vue.PropType<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })>;
        default: string;
        validator: (val: unknown) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })> | {
            component: vue.Component;
        }>;
        default: NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })> | {
            component: vue.Component;
        };
    }, "type" | "default"> & {
        type: vue.PropType<NonNullable<NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })> | {
            component: vue.Component;
        }>>;
        default: NonNullable<NonNullable<string | boolean | (vue.TransitionProps & {
            component?: vue.Component | undefined;
        })> | {
            component: vue.Component;
        }>;
    };
    theme: StringConstructor;
    scrollStrategy: Omit<{
        type: vue.PropType<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps, scope: vue.EffectScope) => void) | "reposition">;
        default: string;
        validator: (val: any) => boolean;
    }, "type" | "default"> & {
        type: vue.PropType<NonNullable<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps, scope: vue.EffectScope) => void) | "reposition">>;
        default: NonNullable<"none" | "block" | "close" | ((data: ScrollStrategyData, props: StrategyProps, scope: vue.EffectScope) => void) | "reposition">;
    };
    locationStrategy: {
        type: vue.PropType<"connected" | "static" | ((data: LocationStrategyData, props: StrategyProps$1, contentStyles: vue.Ref<Record<string, string>>) => {
            updateLocation: (e: Event) => void;
        } | undefined)>;
        default: string;
        validator: (val: any) => boolean;
    };
    location: {
        type: vue.PropType<Anchor>;
        default: string;
    };
    origin: Omit<{
        type: vue.PropType<"auto" | Anchor | "overlap">;
        default: string;
    }, "type" | "default"> & {
        type: vue.PropType<NonNullable<"auto" | Anchor | "overlap">>;
        default: NonNullable<"auto" | Anchor | "overlap">;
    };
    offset: vue.PropType<string | number | number[] | undefined>;
    eager: BooleanConstructor;
    height: (StringConstructor | NumberConstructor)[];
    maxHeight: (StringConstructor | NumberConstructor)[];
    maxWidth: (StringConstructor | NumberConstructor)[];
    minHeight: (StringConstructor | NumberConstructor)[];
    minWidth: (StringConstructor | NumberConstructor)[];
    width: (StringConstructor | NumberConstructor)[];
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    closeDelay: (StringConstructor | NumberConstructor)[];
    openDelay: (StringConstructor | NumberConstructor)[];
    activator: vue.PropType<string | Element | vue.ComponentPublicInstance | undefined>;
    activatorProps: {
        type: vue.PropType<Record<string, any>>;
        default: () => {};
    };
    openOnClick: {
        type: BooleanConstructor;
        default: undefined;
    };
    openOnHover: BooleanConstructor;
    openOnFocus: {
        type: BooleanConstructor;
        default: undefined;
    };
    closeOnContentClick: BooleanConstructor;
    absolute: BooleanConstructor;
    attach: vue.PropType<string | boolean | Element>;
    closeOnBack: {
        type: BooleanConstructor;
        default: boolean;
    };
    contained: BooleanConstructor;
    contentClass: {
        type: vue.PropType<any>;
        default: any;
    };
    contentProps: null;
    disabled: BooleanConstructor;
    noClickAnimation: BooleanConstructor;
    modelValue: BooleanConstructor;
    persistent: BooleanConstructor;
    scrim: {
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
    };
    zIndex: Omit<{
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    }, "type" | "default"> & {
        type: vue.PropType<NonNullable<string | number>>;
        default: NonNullable<string | number>;
    };
    fullscreen: BooleanConstructor;
    retainFocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollable: BooleanConstructor;
    inset: BooleanConstructor;
}>>;
type VBottomSheet = InstanceType<typeof VBottomSheet>;

export { VBottomSheet };
