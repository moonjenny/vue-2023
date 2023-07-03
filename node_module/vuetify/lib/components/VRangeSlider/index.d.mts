import * as vue from 'vue';
import { ComponentPropsOptions, ExtractPropTypes, PropType, JSXComponent, ComputedRef, Ref } from 'vue';

interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): [yes: Partial<Pick<T, U>>, no: Omit<T, U>];
}

type EventProp<T extends any[] = any[], F = (...args: T) => any> = F | F[];
declare const EventProp: <T extends any[] = any[]>() => PropType<EventProp<T, (...args: T) => any>>;

type VMessageSlot = {
    message: string;
};

type Density = null | 'default' | 'comfortable' | 'compact';

type ValidationResult = string | boolean;
type ValidationRule = ValidationResult | PromiseLike<ValidationResult> | ((value: any) => ValidationResult) | ((value: any) => PromiseLike<ValidationResult>);

type IconValue = string | (string | [path: string, opacity: number])[] | JSXComponent;
declare const IconValue: PropType<IconValue>;

interface VInputSlot {
    id: ComputedRef<string>;
    messagesId: ComputedRef<string>;
    isDirty: ComputedRef<boolean>;
    isDisabled: ComputedRef<boolean>;
    isReadonly: ComputedRef<boolean>;
    isPristine: Ref<boolean>;
    isValid: ComputedRef<boolean | null>;
    isValidating: Ref<boolean>;
    reset: () => void;
    resetValidation: () => void;
    validate: () => void;
}

declare const VRangeSlider: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            reverse?: boolean | undefined;
            max?: string | number | undefined;
            error?: boolean | undefined;
            strict?: boolean | undefined;
            direction?: "horizontal" | "vertical" | undefined;
            style?: vue.StyleValue | undefined;
            disabled?: boolean | null | undefined;
            readonly?: boolean | null | undefined;
            step?: string | number | undefined;
            min?: string | number | undefined;
            elevation?: NonNullable<string | number> | undefined;
            messages?: string | readonly string[] | undefined;
            rounded?: string | number | boolean | undefined;
            density?: Density | undefined;
            modelValue?: readonly number[] | undefined;
            focused?: boolean | undefined;
            centerAffix?: boolean | undefined;
            errorMessages?: string | readonly string[] | undefined;
            maxErrors?: string | number | undefined;
            rules?: readonly ValidationRule[] | undefined;
            persistentHint?: boolean | undefined;
            showTicks?: boolean | "always" | undefined;
            tickSize?: string | number | undefined;
            trackSize?: string | number | undefined;
            thumbLabel?: boolean | "always" | undefined;
            thumbSize?: string | number | undefined;
            key?: string | number | symbol | undefined;
            id?: string | undefined;
            name?: string | undefined;
            color?: string | undefined;
            label?: string | undefined;
            class?: any;
            $children?: vue.VNodeChild | ((args_0: VInputSlot) => vue.VNodeChild) | {
                default?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                prepend?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                append?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                details?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                message?: ((args_0: VMessageSlot) => vue.VNodeChild) | undefined;
                label?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                'tick-label'?: (() => vue.VNodeChild) | undefined;
                'thumb-label'?: (() => vue.VNodeChild) | undefined;
            };
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            "v-slot:default"?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
            'v-slots'?: {
                default?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                prepend?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                append?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                details?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                message?: false | ((args_0: VMessageSlot) => vue.VNodeChild) | undefined;
                label?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                'tick-label'?: false | (() => vue.VNodeChild) | undefined;
                'thumb-label'?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
            $slots?: {
                default?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                prepend?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                append?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                details?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                message?: ((args_0: VMessageSlot) => vue.VNodeChild) | undefined;
                label?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                'tick-label'?: (() => vue.VNodeChild) | undefined;
                'thumb-label'?: (() => vue.VNodeChild) | undefined;
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
            "v-slot:append"?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
            "onUpdate:modelValue"?: ((value: [number, number]) => any) | undefined;
            prependIcon?: IconValue | undefined;
            appendIcon?: IconValue | undefined;
            'onClick:append'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
            'onClick:prepend'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
            'onUpdate:focused'?: (EventProp<[boolean], (args_0: boolean) => any> & ((value: boolean) => any)) | undefined;
            "v-slot:label"?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
            "v-slot:message"?: false | ((args_0: VMessageSlot) => vue.VNodeChild) | undefined;
            validateOn?: "lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined;
            validationValue?: any;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
            "v-slot:details"?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
            "v-slot:tick-label"?: false | (() => vue.VNodeChild) | undefined;
            trackColor?: string | undefined;
            trackFillColor?: string | undefined;
            thumbColor?: string | undefined;
            ticks?: readonly number[] | Record<number, string> | undefined;
            "v-slot:thumb-label"?: false | (() => vue.VNodeChild) | undefined;
            onEnd?: ((value: [number, number]) => any) | undefined;
            onStart?: ((value: [number, number]) => any) | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((args_0: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            prepend?: ((args_0: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            append?: ((args_0: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            details?: ((args_0: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            message?: ((args_0: VMessageSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            label?: ((args_0: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'tick-label'?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            'thumb-label'?: (() => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: ((event: "end", value: [number, number]) => void) & ((event: "start", value: [number, number]) => void) & ((event: "update:modelValue", value: [number, number]) => void) & ((event: "update:focused", value: boolean) => void);
        $el: any;
        $options: vue.ComponentOptionsBase<{
            reverse: boolean;
            max: string | number;
            error: boolean;
            strict: boolean;
            direction: "horizontal" | "vertical";
            style: vue.StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            step: string | number;
            min: string | number;
            elevation: NonNullable<string | number>;
            messages: string | readonly string[];
            density: Density;
            modelValue: readonly number[];
            focused: boolean;
            centerAffix: boolean;
            errorMessages: string | readonly string[];
            maxErrors: string | number;
            rules: readonly ValidationRule[];
            persistentHint: boolean;
            showTicks: boolean | "always";
            tickSize: string | number;
            trackSize: string | number;
            thumbSize: string | number;
        } & {
            id?: string | undefined;
            name?: string | undefined;
            color?: string | undefined;
            label?: string | undefined;
            class?: any;
            rounded?: string | number | boolean | undefined;
            prependIcon?: IconValue | undefined;
            appendIcon?: IconValue | undefined;
            'onClick:append'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
            'onClick:prepend'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
            'onUpdate:focused'?: EventProp<[boolean], (args_0: boolean) => any> | undefined;
            validateOn?: "lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined;
            validationValue?: any;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
            trackColor?: string | undefined;
            trackFillColor?: string | undefined;
            thumbColor?: string | undefined;
            thumbLabel?: boolean | "always" | undefined;
            ticks?: readonly number[] | Record<number, string> | undefined;
        } & {
            $children?: vue.VNodeChild | ((args_0: VInputSlot) => vue.VNodeChild) | {
                default?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                prepend?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                append?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                details?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                message?: ((args_0: VMessageSlot) => vue.VNodeChild) | undefined;
                label?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                'tick-label'?: (() => vue.VNodeChild) | undefined;
                'thumb-label'?: (() => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                prepend?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                append?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                details?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                message?: false | ((args_0: VMessageSlot) => vue.VNodeChild) | undefined;
                label?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                'tick-label'?: false | (() => vue.VNodeChild) | undefined;
                'thumb-label'?: false | (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
            "v-slot:append"?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
            "v-slot:details"?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
            "v-slot:message"?: false | ((args_0: VMessageSlot) => vue.VNodeChild) | undefined;
            "v-slot:label"?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
            "v-slot:tick-label"?: false | (() => vue.VNodeChild) | undefined;
            "v-slot:thumb-label"?: false | (() => vue.VNodeChild) | undefined;
        } & {
            $slots?: {
                default?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                prepend?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                append?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                details?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                message?: ((args_0: VMessageSlot) => vue.VNodeChild) | undefined;
                label?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                'tick-label'?: (() => vue.VNodeChild) | undefined;
                'thumb-label'?: (() => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "onUpdate:modelValue"?: ((value: [number, number]) => any) | undefined;
            "onUpdate:focused"?: ((value: boolean) => any) | undefined;
            onEnd?: ((value: [number, number]) => any) | undefined;
            onStart?: ((value: [number, number]) => any) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:focused': (value: boolean) => true;
            'update:modelValue': (value: [number, number]) => true;
            end: (value: [number, number]) => true;
            start: (value: [number, number]) => true;
        }, string, {
            reverse: boolean;
            max: string | number;
            error: boolean;
            strict: boolean;
            direction: "horizontal" | "vertical";
            style: vue.StyleValue;
            disabled: boolean | null;
            readonly: boolean | null;
            step: string | number;
            min: string | number;
            elevation: NonNullable<string | number>;
            messages: string | readonly string[];
            rounded: string | number | boolean;
            density: Density;
            modelValue: readonly number[];
            focused: boolean;
            centerAffix: boolean;
            errorMessages: string | readonly string[];
            maxErrors: string | number;
            rules: readonly ValidationRule[];
            persistentHint: boolean;
            showTicks: boolean | "always";
            tickSize: string | number;
            trackSize: string | number;
            thumbLabel: boolean | "always" | undefined;
            thumbSize: string | number;
        }, {}, string, vue.SlotsType<Partial<{
            default: (args_0: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            prepend: (args_0: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            append: (args_0: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            details: (args_0: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            message: (args_0: VMessageSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            label: (args_0: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'tick-label': () => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            'thumb-label': () => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        reverse: boolean;
        max: string | number;
        error: boolean;
        strict: boolean;
        direction: "horizontal" | "vertical";
        style: vue.StyleValue;
        disabled: boolean | null;
        readonly: boolean | null;
        step: string | number;
        min: string | number;
        elevation: NonNullable<string | number>;
        messages: string | readonly string[];
        density: Density;
        modelValue: readonly number[];
        focused: boolean;
        centerAffix: boolean;
        errorMessages: string | readonly string[];
        maxErrors: string | number;
        rules: readonly ValidationRule[];
        persistentHint: boolean;
        showTicks: boolean | "always";
        tickSize: string | number;
        trackSize: string | number;
        thumbSize: string | number;
    } & {
        id?: string | undefined;
        name?: string | undefined;
        color?: string | undefined;
        label?: string | undefined;
        class?: any;
        rounded?: string | number | boolean | undefined;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
        'onClick:append'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
        'onClick:prepend'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
        'onUpdate:focused'?: EventProp<[boolean], (args_0: boolean) => any> | undefined;
        validateOn?: "lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined;
        validationValue?: any;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
        trackColor?: string | undefined;
        trackFillColor?: string | undefined;
        thumbColor?: string | undefined;
        thumbLabel?: boolean | "always" | undefined;
        ticks?: readonly number[] | Record<number, string> | undefined;
    } & {
        $children?: vue.VNodeChild | ((args_0: VInputSlot) => vue.VNodeChild) | {
            default?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
            prepend?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
            append?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
            details?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
            message?: ((args_0: VMessageSlot) => vue.VNodeChild) | undefined;
            label?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
            'tick-label'?: (() => vue.VNodeChild) | undefined;
            'thumb-label'?: (() => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
            prepend?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
            append?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
            details?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
            message?: false | ((args_0: VMessageSlot) => vue.VNodeChild) | undefined;
            label?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
            'tick-label'?: false | (() => vue.VNodeChild) | undefined;
            'thumb-label'?: false | (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:append"?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:details"?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:message"?: false | ((args_0: VMessageSlot) => vue.VNodeChild) | undefined;
        "v-slot:label"?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:tick-label"?: false | (() => vue.VNodeChild) | undefined;
        "v-slot:thumb-label"?: false | (() => vue.VNodeChild) | undefined;
    } & {
        $slots?: {
            default?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
            prepend?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
            append?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
            details?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
            message?: ((args_0: VMessageSlot) => vue.VNodeChild) | undefined;
            label?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
            'tick-label'?: (() => vue.VNodeChild) | undefined;
            'thumb-label'?: (() => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "onUpdate:modelValue"?: ((value: [number, number]) => any) | undefined;
        "onUpdate:focused"?: ((value: boolean) => any) | undefined;
        onEnd?: ((value: [number, number]) => any) | undefined;
        onStart?: ((value: [number, number]) => any) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    reverse: boolean;
    max: string | number;
    error: boolean;
    strict: boolean;
    direction: "horizontal" | "vertical";
    style: vue.StyleValue;
    disabled: boolean | null;
    readonly: boolean | null;
    step: string | number;
    min: string | number;
    elevation: NonNullable<string | number>;
    messages: string | readonly string[];
    density: Density;
    modelValue: readonly number[];
    focused: boolean;
    centerAffix: boolean;
    errorMessages: string | readonly string[];
    maxErrors: string | number;
    rules: readonly ValidationRule[];
    persistentHint: boolean;
    showTicks: boolean | "always";
    tickSize: string | number;
    trackSize: string | number;
    thumbSize: string | number;
} & {
    id?: string | undefined;
    name?: string | undefined;
    color?: string | undefined;
    label?: string | undefined;
    class?: any;
    rounded?: string | number | boolean | undefined;
    prependIcon?: IconValue | undefined;
    appendIcon?: IconValue | undefined;
    'onClick:append'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
    'onClick:prepend'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
    'onUpdate:focused'?: EventProp<[boolean], (args_0: boolean) => any> | undefined;
    validateOn?: "lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined;
    validationValue?: any;
    hint?: string | undefined;
    hideDetails?: boolean | "auto" | undefined;
    trackColor?: string | undefined;
    trackFillColor?: string | undefined;
    thumbColor?: string | undefined;
    thumbLabel?: boolean | "always" | undefined;
    ticks?: readonly number[] | Record<number, string> | undefined;
} & {
    $children?: vue.VNodeChild | ((args_0: VInputSlot) => vue.VNodeChild) | {
        default?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
        prepend?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
        append?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
        details?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
        message?: ((args_0: VMessageSlot) => vue.VNodeChild) | undefined;
        label?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
        'tick-label'?: (() => vue.VNodeChild) | undefined;
        'thumb-label'?: (() => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
        prepend?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
        append?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
        details?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
        message?: false | ((args_0: VMessageSlot) => vue.VNodeChild) | undefined;
        label?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
        'tick-label'?: false | (() => vue.VNodeChild) | undefined;
        'thumb-label'?: false | (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
    "v-slot:prepend"?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
    "v-slot:append"?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
    "v-slot:details"?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
    "v-slot:message"?: false | ((args_0: VMessageSlot) => vue.VNodeChild) | undefined;
    "v-slot:label"?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
    "v-slot:tick-label"?: false | (() => vue.VNodeChild) | undefined;
    "v-slot:thumb-label"?: false | (() => vue.VNodeChild) | undefined;
} & {
    $slots?: {
        default?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
        prepend?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
        append?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
        details?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
        message?: ((args_0: VMessageSlot) => vue.VNodeChild) | undefined;
        label?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
        'tick-label'?: (() => vue.VNodeChild) | undefined;
        'thumb-label'?: (() => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "onUpdate:modelValue"?: ((value: [number, number]) => any) | undefined;
    "onUpdate:focused"?: ((value: boolean) => any) | undefined;
    onEnd?: ((value: [number, number]) => any) | undefined;
    onStart?: ((value: [number, number]) => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:focused': (value: boolean) => true;
    'update:modelValue': (value: [number, number]) => true;
    end: (value: [number, number]) => true;
    start: (value: [number, number]) => true;
}, string, {
    reverse: boolean;
    max: string | number;
    error: boolean;
    strict: boolean;
    direction: "horizontal" | "vertical";
    style: vue.StyleValue;
    disabled: boolean | null;
    readonly: boolean | null;
    step: string | number;
    min: string | number;
    elevation: NonNullable<string | number>;
    messages: string | readonly string[];
    rounded: string | number | boolean;
    density: Density;
    modelValue: readonly number[];
    focused: boolean;
    centerAffix: boolean;
    errorMessages: string | readonly string[];
    maxErrors: string | number;
    rules: readonly ValidationRule[];
    persistentHint: boolean;
    showTicks: boolean | "always";
    tickSize: string | number;
    trackSize: string | number;
    thumbLabel: boolean | "always" | undefined;
    thumbSize: string | number;
}, {}, string, vue.SlotsType<Partial<{
    default: (args_0: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    prepend: (args_0: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    append: (args_0: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    details: (args_0: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    message: (args_0: VMessageSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    label: (args_0: VInputSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'tick-label': () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    'thumb-label': () => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    strict: BooleanConstructor;
    modelValue: {
        type: PropType<readonly number[]>;
        default: () => number[];
    };
    elevation: Omit<{
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    }, "type" | "default"> & {
        type: PropType<NonNullable<string | number>>;
        default: NonNullable<string | number>;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    disabled: {
        type: PropType<boolean | null>;
        default: null;
    };
    error: BooleanConstructor;
    readonly: {
        type: PropType<boolean | null>;
        default: null;
    };
    max: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    min: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    step: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    thumbColor: StringConstructor;
    thumbLabel: {
        type: PropType<boolean | "always" | undefined>;
        default: undefined;
        validator: (v: any) => boolean;
    };
    thumbSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    showTicks: {
        type: PropType<boolean | "always">;
        default: boolean;
        validator: (v: any) => boolean;
    };
    ticks: {
        type: PropType<readonly number[] | Record<number, string>>;
    };
    tickSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    color: StringConstructor;
    trackColor: StringConstructor;
    trackFillColor: StringConstructor;
    trackSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    reverse: BooleanConstructor;
    focused: BooleanConstructor;
    'onUpdate:focused': PropType<EventProp<[boolean], (args_0: boolean) => any>>;
    errorMessages: {
        type: PropType<string | readonly string[]>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    name: StringConstructor;
    label: StringConstructor;
    rules: {
        type: PropType<readonly ValidationRule[]>;
        default: () => never[];
    };
    validateOn: PropType<"lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined>;
    validationValue: null;
    density: {
        type: PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    id: StringConstructor;
    appendIcon: PropType<IconValue>;
    centerAffix: {
        type: BooleanConstructor;
        default: boolean;
    };
    prependIcon: PropType<IconValue>;
    hideDetails: PropType<boolean | "auto">;
    hint: StringConstructor;
    persistentHint: BooleanConstructor;
    messages: {
        type: PropType<string | readonly string[]>;
        default: () => never[];
    };
    'onClick:prepend': PropType<EventProp<[MouseEvent], (args_0: MouseEvent) => any>>;
    'onClick:append': PropType<EventProp<[MouseEvent], (args_0: MouseEvent) => any>>;
}, vue.ExtractPropTypes<{
    strict: BooleanConstructor;
    modelValue: {
        type: PropType<readonly number[]>;
        default: () => number[];
    };
    elevation: Omit<{
        type: (StringConstructor | NumberConstructor)[];
        validator(v: any): boolean;
    }, "type" | "default"> & {
        type: PropType<NonNullable<string | number>>;
        default: NonNullable<string | number>;
    };
    rounded: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: undefined;
    };
    disabled: {
        type: PropType<boolean | null>;
        default: null;
    };
    error: BooleanConstructor;
    readonly: {
        type: PropType<boolean | null>;
        default: null;
    };
    max: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    min: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    step: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    thumbColor: StringConstructor;
    thumbLabel: {
        type: PropType<boolean | "always" | undefined>;
        default: undefined;
        validator: (v: any) => boolean;
    };
    thumbSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    showTicks: {
        type: PropType<boolean | "always">;
        default: boolean;
        validator: (v: any) => boolean;
    };
    ticks: {
        type: PropType<readonly number[] | Record<number, string>>;
    };
    tickSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    color: StringConstructor;
    trackColor: StringConstructor;
    trackFillColor: StringConstructor;
    trackSize: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    reverse: BooleanConstructor;
    focused: BooleanConstructor;
    'onUpdate:focused': PropType<EventProp<[boolean], (args_0: boolean) => any>>;
    errorMessages: {
        type: PropType<string | readonly string[]>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    name: StringConstructor;
    label: StringConstructor;
    rules: {
        type: PropType<readonly ValidationRule[]>;
        default: () => never[];
    };
    validateOn: PropType<"lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined>;
    validationValue: null;
    density: {
        type: PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    class: PropType<any>;
    style: {
        type: PropType<vue.StyleValue>;
        default: null;
    };
    id: StringConstructor;
    appendIcon: PropType<IconValue>;
    centerAffix: {
        type: BooleanConstructor;
        default: boolean;
    };
    prependIcon: PropType<IconValue>;
    hideDetails: PropType<boolean | "auto">;
    hint: StringConstructor;
    persistentHint: BooleanConstructor;
    messages: {
        type: PropType<string | readonly string[]>;
        default: () => never[];
    };
    'onClick:prepend': PropType<EventProp<[MouseEvent], (args_0: MouseEvent) => any>>;
    'onClick:append': PropType<EventProp<[MouseEvent], (args_0: MouseEvent) => any>>;
}>>;
type VRangeSlider = InstanceType<typeof VRangeSlider>;

export { VRangeSlider };