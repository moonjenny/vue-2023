import * as vue from 'vue';
import { ComponentPropsOptions, ExtractPropTypes, PropType, JSXComponent, WritableComputedRef, Ref, CSSProperties, ComputedRef } from 'vue';

interface FilterPropsOptions<PropsOptions extends Readonly<ComponentPropsOptions>, Props = ExtractPropTypes<PropsOptions>> {
    filterProps<T extends Partial<Props>, U extends Exclude<keyof Props, Exclude<keyof Props, keyof T>>>(props: T): [yes: Partial<Pick<T, U>>, no: Omit<T, U>];
}

declare function deepEqual(a: any, b: any): boolean;
type EventProp<T extends any[] = any[], F = (...args: T) => any> = F | F[];
declare const EventProp: <T extends any[] = any[]>() => PropType<EventProp<T, (...args: T) => any>>;

type Density = null | 'default' | 'comfortable' | 'compact';

type IconValue = string | (string | [path: string, opacity: number])[] | JSXComponent;
declare const IconValue: PropType<IconValue>;

type SelectionControlSlot = {
    model: WritableComputedRef<any>;
    textColorClasses: Ref<string[]>;
    textColorStyles: Ref<CSSProperties>;
    props: {
        onBlur: (e: Event) => void;
        onFocus: (e: FocusEvent) => void;
        id: string;
    };
};

type VMessageSlot = {
    message: string;
};

type ValidationResult = string | boolean;
type ValidationRule = ValidationResult | PromiseLike<ValidationResult> | ((value: any) => ValidationResult) | ((value: any) => PromiseLike<ValidationResult>);

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

interface LoaderSlotProps {
    color: string | undefined;
    isActive: boolean;
}

declare const VSwitch: {
    new (...args: any[]): {
        $: vue.ComponentInternalInstance;
        $data: {};
        $props: {
            flat?: boolean | undefined;
            inline?: boolean | undefined;
            error?: boolean | undefined;
            direction?: "horizontal" | "vertical" | undefined;
            inset?: boolean | undefined;
            loading?: string | boolean | undefined;
            style?: vue.StyleValue | undefined;
            disabled?: boolean | undefined;
            multiple?: boolean | null | undefined;
            readonly?: boolean | undefined;
            indeterminate?: boolean | undefined;
            messages?: string | readonly string[] | undefined;
            density?: Density | undefined;
            ripple?: boolean | undefined;
            focused?: boolean | undefined;
            centerAffix?: boolean | undefined;
            errorMessages?: string | readonly string[] | undefined;
            maxErrors?: string | number | undefined;
            rules?: readonly ValidationRule[] | undefined;
            persistentHint?: boolean | undefined;
            valueComparator?: typeof deepEqual | undefined;
            type?: string | undefined;
            key?: string | number | symbol | undefined;
            id?: string | undefined;
            name?: string | undefined;
            color?: string | undefined;
            value?: any;
            label?: string | undefined;
            class?: any;
            $children?: vue.VNodeChild | ((...args: never) => vue.VNodeChild) | {
                default?: ((...args: never) => vue.VNodeChild) | undefined;
                prepend?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                append?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                details?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                message?: ((args_0: VMessageSlot) => vue.VNodeChild) | undefined;
                label?: ((args_0: {
                    label: string | undefined;
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
                input?: ((args_0: SelectionControlSlot) => vue.VNodeChild) | undefined;
                loader?: ((args_0: LoaderSlotProps) => vue.VNodeChild) | undefined;
            };
            ref?: vue.VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            theme?: string | undefined;
            "v-slot:default"?: false | ((...args: never) => vue.VNodeChild) | undefined;
            'v-slots'?: {
                default?: false | ((...args: never) => vue.VNodeChild) | undefined;
                prepend?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                append?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                details?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                message?: false | ((args_0: VMessageSlot) => vue.VNodeChild) | undefined;
                label?: false | ((args_0: {
                    label: string | undefined;
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
                input?: false | ((args_0: SelectionControlSlot) => vue.VNodeChild) | undefined;
                loader?: false | ((args_0: LoaderSlotProps) => vue.VNodeChild) | undefined;
            } | undefined;
            $slots?: {
                default?: ((...args: never) => vue.VNodeChild) | undefined;
                prepend?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                append?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                details?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                message?: ((args_0: VMessageSlot) => vue.VNodeChild) | undefined;
                label?: ((args_0: {
                    label: string | undefined;
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
                input?: ((args_0: SelectionControlSlot) => vue.VNodeChild) | undefined;
                loader?: ((args_0: LoaderSlotProps) => vue.VNodeChild) | undefined;
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
            modelValue?: any;
            "onUpdate:modelValue"?: (() => any) | undefined;
            prependIcon?: IconValue | undefined;
            appendIcon?: IconValue | undefined;
            "v-slot:loader"?: false | ((args_0: LoaderSlotProps) => vue.VNodeChild) | undefined;
            'onClick:append'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
            'onClick:prepend'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
            'onUpdate:focused'?: (EventProp<[boolean], (args_0: boolean) => any> & ((focused: boolean) => any)) | undefined;
            "v-slot:label"?: false | ((args_0: {
                label: string | undefined;
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:message"?: false | ((args_0: VMessageSlot) => vue.VNodeChild) | undefined;
            validateOn?: "lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined;
            validationValue?: any;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
            "v-slot:details"?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
            defaultsTarget?: string | undefined;
            falseIcon?: IconValue | undefined;
            trueIcon?: IconValue | undefined;
            trueValue?: any;
            falseValue?: any;
            "v-slot:input"?: false | ((args_0: SelectionControlSlot) => vue.VNodeChild) | undefined;
            "onUpdate:indeterminate"?: ((val: boolean) => any) | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            default?: ((...args: never) => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
            label?: ((args_0: {
                label: string | undefined;
                props: Record<string, unknown>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            input?: ((args_0: SelectionControlSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
            loader?: ((args_0: LoaderSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[]) | undefined;
        }>;
        $root: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: ((event: "update:modelValue") => void) & ((event: "update:focused", focused: boolean) => void) & ((event: "update:indeterminate", val: boolean) => void);
        $el: any;
        $options: vue.ComponentOptionsBase<{
            flat: boolean;
            inline: boolean;
            error: boolean;
            direction: "horizontal" | "vertical";
            inset: boolean;
            loading: string | boolean;
            style: vue.StyleValue;
            disabled: boolean;
            multiple: boolean | null;
            readonly: boolean;
            indeterminate: boolean;
            messages: string | readonly string[];
            density: Density;
            ripple: boolean;
            focused: boolean;
            centerAffix: boolean;
            errorMessages: string | readonly string[];
            maxErrors: string | number;
            rules: readonly ValidationRule[];
            persistentHint: boolean;
            valueComparator: typeof deepEqual;
        } & {
            type?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            color?: string | undefined;
            value?: any;
            label?: string | undefined;
            class?: any;
            theme?: string | undefined;
            modelValue?: any;
            prependIcon?: IconValue | undefined;
            appendIcon?: IconValue | undefined;
            'onClick:append'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
            'onClick:prepend'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
            'onUpdate:focused'?: EventProp<[boolean], (args_0: boolean) => any> | undefined;
            validateOn?: "lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined;
            validationValue?: any;
            hint?: string | undefined;
            hideDetails?: boolean | "auto" | undefined;
            defaultsTarget?: string | undefined;
            falseIcon?: IconValue | undefined;
            trueIcon?: IconValue | undefined;
            trueValue?: any;
            falseValue?: any;
        } & {
            $children?: vue.VNodeChild | ((...args: never) => vue.VNodeChild) | {
                default?: ((...args: never) => vue.VNodeChild) | undefined;
                prepend?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                append?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                details?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                message?: ((args_0: VMessageSlot) => vue.VNodeChild) | undefined;
                label?: ((args_0: {
                    label: string | undefined;
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
                input?: ((args_0: SelectionControlSlot) => vue.VNodeChild) | undefined;
                loader?: ((args_0: LoaderSlotProps) => vue.VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | ((...args: never) => vue.VNodeChild) | undefined;
                prepend?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                append?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                details?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                message?: false | ((args_0: VMessageSlot) => vue.VNodeChild) | undefined;
                label?: false | ((args_0: {
                    label: string | undefined;
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
                input?: false | ((args_0: SelectionControlSlot) => vue.VNodeChild) | undefined;
                loader?: false | ((args_0: LoaderSlotProps) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | ((...args: never) => vue.VNodeChild) | undefined;
            "v-slot:prepend"?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
            "v-slot:append"?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
            "v-slot:details"?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
            "v-slot:message"?: false | ((args_0: VMessageSlot) => vue.VNodeChild) | undefined;
            "v-slot:label"?: false | ((args_0: {
                label: string | undefined;
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
            "v-slot:input"?: false | ((args_0: SelectionControlSlot) => vue.VNodeChild) | undefined;
            "v-slot:loader"?: false | ((args_0: LoaderSlotProps) => vue.VNodeChild) | undefined;
        } & {
            $slots?: {
                default?: ((...args: never) => vue.VNodeChild) | undefined;
                prepend?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                append?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                details?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
                message?: ((args_0: VMessageSlot) => vue.VNodeChild) | undefined;
                label?: ((args_0: {
                    label: string | undefined;
                    props: Record<string, unknown>;
                }) => vue.VNodeChild) | undefined;
                input?: ((args_0: SelectionControlSlot) => vue.VNodeChild) | undefined;
                loader?: ((args_0: LoaderSlotProps) => vue.VNodeChild) | undefined;
            } | undefined;
        } & {
            "onUpdate:modelValue"?: (() => any) | undefined;
            "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
            "onUpdate:indeterminate"?: ((val: boolean) => any) | undefined;
        }, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
            'update:focused': (focused: boolean) => boolean;
            'update:modelValue': () => boolean;
            'update:indeterminate': (val: boolean) => boolean;
        }, string, {
            flat: boolean;
            inline: boolean;
            error: boolean;
            direction: "horizontal" | "vertical";
            inset: boolean;
            loading: string | boolean;
            style: vue.StyleValue;
            disabled: boolean;
            multiple: boolean | null;
            readonly: boolean;
            indeterminate: boolean;
            messages: string | readonly string[];
            density: Density;
            ripple: boolean;
            focused: boolean;
            centerAffix: boolean;
            errorMessages: string | readonly string[];
            maxErrors: string | number;
            rules: readonly ValidationRule[];
            persistentHint: boolean;
            valueComparator: typeof deepEqual;
        }, {}, string, vue.SlotsType<Partial<{
            default: (...args: never) => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
            label: (args_0: {
                label: string | undefined;
                props: Record<string, unknown>;
            }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            input: (args_0: SelectionControlSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
                [key: string]: any;
            }>[];
            loader: (args_0: LoaderSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
        flat: boolean;
        inline: boolean;
        error: boolean;
        direction: "horizontal" | "vertical";
        inset: boolean;
        loading: string | boolean;
        style: vue.StyleValue;
        disabled: boolean;
        multiple: boolean | null;
        readonly: boolean;
        indeterminate: boolean;
        messages: string | readonly string[];
        density: Density;
        ripple: boolean;
        focused: boolean;
        centerAffix: boolean;
        errorMessages: string | readonly string[];
        maxErrors: string | number;
        rules: readonly ValidationRule[];
        persistentHint: boolean;
        valueComparator: typeof deepEqual;
    } & {
        type?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        color?: string | undefined;
        value?: any;
        label?: string | undefined;
        class?: any;
        theme?: string | undefined;
        modelValue?: any;
        prependIcon?: IconValue | undefined;
        appendIcon?: IconValue | undefined;
        'onClick:append'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
        'onClick:prepend'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
        'onUpdate:focused'?: EventProp<[boolean], (args_0: boolean) => any> | undefined;
        validateOn?: "lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined;
        validationValue?: any;
        hint?: string | undefined;
        hideDetails?: boolean | "auto" | undefined;
        defaultsTarget?: string | undefined;
        falseIcon?: IconValue | undefined;
        trueIcon?: IconValue | undefined;
        trueValue?: any;
        falseValue?: any;
    } & {
        $children?: vue.VNodeChild | ((...args: never) => vue.VNodeChild) | {
            default?: ((...args: never) => vue.VNodeChild) | undefined;
            prepend?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
            append?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
            details?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
            message?: ((args_0: VMessageSlot) => vue.VNodeChild) | undefined;
            label?: ((args_0: {
                label: string | undefined;
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
            input?: ((args_0: SelectionControlSlot) => vue.VNodeChild) | undefined;
            loader?: ((args_0: LoaderSlotProps) => vue.VNodeChild) | undefined;
        };
        'v-slots'?: {
            default?: false | ((...args: never) => vue.VNodeChild) | undefined;
            prepend?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
            append?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
            details?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
            message?: false | ((args_0: VMessageSlot) => vue.VNodeChild) | undefined;
            label?: false | ((args_0: {
                label: string | undefined;
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
            input?: false | ((args_0: SelectionControlSlot) => vue.VNodeChild) | undefined;
            loader?: false | ((args_0: LoaderSlotProps) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "v-slot:default"?: false | ((...args: never) => vue.VNodeChild) | undefined;
        "v-slot:prepend"?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:append"?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:details"?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
        "v-slot:message"?: false | ((args_0: VMessageSlot) => vue.VNodeChild) | undefined;
        "v-slot:label"?: false | ((args_0: {
            label: string | undefined;
            props: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
        "v-slot:input"?: false | ((args_0: SelectionControlSlot) => vue.VNodeChild) | undefined;
        "v-slot:loader"?: false | ((args_0: LoaderSlotProps) => vue.VNodeChild) | undefined;
    } & {
        $slots?: {
            default?: ((...args: never) => vue.VNodeChild) | undefined;
            prepend?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
            append?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
            details?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
            message?: ((args_0: VMessageSlot) => vue.VNodeChild) | undefined;
            label?: ((args_0: {
                label: string | undefined;
                props: Record<string, unknown>;
            }) => vue.VNodeChild) | undefined;
            input?: ((args_0: SelectionControlSlot) => vue.VNodeChild) | undefined;
            loader?: ((args_0: LoaderSlotProps) => vue.VNodeChild) | undefined;
        } | undefined;
    } & {
        "onUpdate:modelValue"?: (() => any) | undefined;
        "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
        "onUpdate:indeterminate"?: ((val: boolean) => any) | undefined;
    } & vue.ShallowUnwrapRef<{}> & {} & vue.ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & vue.ComponentOptionsBase<{
    flat: boolean;
    inline: boolean;
    error: boolean;
    direction: "horizontal" | "vertical";
    inset: boolean;
    loading: string | boolean;
    style: vue.StyleValue;
    disabled: boolean;
    multiple: boolean | null;
    readonly: boolean;
    indeterminate: boolean;
    messages: string | readonly string[];
    density: Density;
    ripple: boolean;
    focused: boolean;
    centerAffix: boolean;
    errorMessages: string | readonly string[];
    maxErrors: string | number;
    rules: readonly ValidationRule[];
    persistentHint: boolean;
    valueComparator: typeof deepEqual;
} & {
    type?: string | undefined;
    id?: string | undefined;
    name?: string | undefined;
    color?: string | undefined;
    value?: any;
    label?: string | undefined;
    class?: any;
    theme?: string | undefined;
    modelValue?: any;
    prependIcon?: IconValue | undefined;
    appendIcon?: IconValue | undefined;
    'onClick:append'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
    'onClick:prepend'?: EventProp<[MouseEvent], (args_0: MouseEvent) => any> | undefined;
    'onUpdate:focused'?: EventProp<[boolean], (args_0: boolean) => any> | undefined;
    validateOn?: "lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined;
    validationValue?: any;
    hint?: string | undefined;
    hideDetails?: boolean | "auto" | undefined;
    defaultsTarget?: string | undefined;
    falseIcon?: IconValue | undefined;
    trueIcon?: IconValue | undefined;
    trueValue?: any;
    falseValue?: any;
} & {
    $children?: vue.VNodeChild | ((...args: never) => vue.VNodeChild) | {
        default?: ((...args: never) => vue.VNodeChild) | undefined;
        prepend?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
        append?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
        details?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
        message?: ((args_0: VMessageSlot) => vue.VNodeChild) | undefined;
        label?: ((args_0: {
            label: string | undefined;
            props: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
        input?: ((args_0: SelectionControlSlot) => vue.VNodeChild) | undefined;
        loader?: ((args_0: LoaderSlotProps) => vue.VNodeChild) | undefined;
    };
    'v-slots'?: {
        default?: false | ((...args: never) => vue.VNodeChild) | undefined;
        prepend?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
        append?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
        details?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
        message?: false | ((args_0: VMessageSlot) => vue.VNodeChild) | undefined;
        label?: false | ((args_0: {
            label: string | undefined;
            props: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
        input?: false | ((args_0: SelectionControlSlot) => vue.VNodeChild) | undefined;
        loader?: false | ((args_0: LoaderSlotProps) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "v-slot:default"?: false | ((...args: never) => vue.VNodeChild) | undefined;
    "v-slot:prepend"?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
    "v-slot:append"?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
    "v-slot:details"?: false | ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
    "v-slot:message"?: false | ((args_0: VMessageSlot) => vue.VNodeChild) | undefined;
    "v-slot:label"?: false | ((args_0: {
        label: string | undefined;
        props: Record<string, unknown>;
    }) => vue.VNodeChild) | undefined;
    "v-slot:input"?: false | ((args_0: SelectionControlSlot) => vue.VNodeChild) | undefined;
    "v-slot:loader"?: false | ((args_0: LoaderSlotProps) => vue.VNodeChild) | undefined;
} & {
    $slots?: {
        default?: ((...args: never) => vue.VNodeChild) | undefined;
        prepend?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
        append?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
        details?: ((args_0: VInputSlot) => vue.VNodeChild) | undefined;
        message?: ((args_0: VMessageSlot) => vue.VNodeChild) | undefined;
        label?: ((args_0: {
            label: string | undefined;
            props: Record<string, unknown>;
        }) => vue.VNodeChild) | undefined;
        input?: ((args_0: SelectionControlSlot) => vue.VNodeChild) | undefined;
        loader?: ((args_0: LoaderSlotProps) => vue.VNodeChild) | undefined;
    } | undefined;
} & {
    "onUpdate:modelValue"?: (() => any) | undefined;
    "onUpdate:focused"?: ((focused: boolean) => any) | undefined;
    "onUpdate:indeterminate"?: ((val: boolean) => any) | undefined;
}, {}, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, {
    'update:focused': (focused: boolean) => boolean;
    'update:modelValue': () => boolean;
    'update:indeterminate': (val: boolean) => boolean;
}, string, {
    flat: boolean;
    inline: boolean;
    error: boolean;
    direction: "horizontal" | "vertical";
    inset: boolean;
    loading: string | boolean;
    style: vue.StyleValue;
    disabled: boolean;
    multiple: boolean | null;
    readonly: boolean;
    indeterminate: boolean;
    messages: string | readonly string[];
    density: Density;
    ripple: boolean;
    focused: boolean;
    centerAffix: boolean;
    errorMessages: string | readonly string[];
    maxErrors: string | number;
    rules: readonly ValidationRule[];
    persistentHint: boolean;
    valueComparator: typeof deepEqual;
}, {}, string, vue.SlotsType<Partial<{
    default: (...args: never) => vue.VNode<vue.RendererNode, vue.RendererElement, {
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
    label: (args_0: {
        label: string | undefined;
        props: Record<string, unknown>;
    }) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    input: (args_0: SelectionControlSlot) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
    loader: (args_0: LoaderSlotProps) => vue.VNode<vue.RendererNode, vue.RendererElement, {
        [key: string]: any;
    }>[];
}>>> & vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps & FilterPropsOptions<{
    theme: StringConstructor;
    density: {
        type: vue.PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    color: StringConstructor;
    disabled: BooleanConstructor;
    defaultsTarget: StringConstructor;
    error: BooleanConstructor;
    id: StringConstructor;
    inline: BooleanConstructor;
    falseIcon: vue.PropType<IconValue>;
    trueIcon: vue.PropType<IconValue>;
    ripple: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: vue.PropType<boolean | null>;
        default: null;
    };
    name: StringConstructor;
    readonly: BooleanConstructor;
    modelValue: null;
    type: StringConstructor;
    valueComparator: {
        type: vue.PropType<typeof deepEqual>;
        default: typeof deepEqual;
    };
    label: StringConstructor;
    trueValue: null;
    falseValue: null;
    value: null;
    focused: BooleanConstructor;
    'onUpdate:focused': vue.PropType<EventProp<[boolean], (args_0: boolean) => any>>;
    errorMessages: {
        type: vue.PropType<string | readonly string[]>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    rules: {
        type: vue.PropType<readonly ValidationRule[]>;
        default: () => never[];
    };
    validateOn: vue.PropType<"lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined>;
    validationValue: null;
    appendIcon: vue.PropType<IconValue>;
    centerAffix: {
        type: BooleanConstructor;
        default: boolean;
    };
    prependIcon: vue.PropType<IconValue>;
    hideDetails: vue.PropType<boolean | "auto">;
    hint: StringConstructor;
    persistentHint: BooleanConstructor;
    messages: {
        type: vue.PropType<string | readonly string[]>;
        default: () => never[];
    };
    direction: {
        type: vue.PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    'onClick:prepend': vue.PropType<EventProp<[MouseEvent], (args_0: MouseEvent) => any>>;
    'onClick:append': vue.PropType<EventProp<[MouseEvent], (args_0: MouseEvent) => any>>;
    indeterminate: BooleanConstructor;
    inset: BooleanConstructor;
    flat: BooleanConstructor;
    loading: {
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
    };
}, vue.ExtractPropTypes<{
    theme: StringConstructor;
    density: {
        type: vue.PropType<Density>;
        default: string;
        validator: (v: any) => boolean;
    };
    class: vue.PropType<any>;
    style: {
        type: vue.PropType<vue.StyleValue>;
        default: null;
    };
    color: StringConstructor;
    disabled: BooleanConstructor;
    defaultsTarget: StringConstructor;
    error: BooleanConstructor;
    id: StringConstructor;
    inline: BooleanConstructor;
    falseIcon: vue.PropType<IconValue>;
    trueIcon: vue.PropType<IconValue>;
    ripple: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: {
        type: vue.PropType<boolean | null>;
        default: null;
    };
    name: StringConstructor;
    readonly: BooleanConstructor;
    modelValue: null;
    type: StringConstructor;
    valueComparator: {
        type: vue.PropType<typeof deepEqual>;
        default: typeof deepEqual;
    };
    label: StringConstructor;
    trueValue: null;
    falseValue: null;
    value: null;
    focused: BooleanConstructor;
    'onUpdate:focused': vue.PropType<EventProp<[boolean], (args_0: boolean) => any>>;
    errorMessages: {
        type: vue.PropType<string | readonly string[]>;
        default: () => never[];
    };
    maxErrors: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    rules: {
        type: vue.PropType<readonly ValidationRule[]>;
        default: () => never[];
    };
    validateOn: vue.PropType<"lazy" | ("input" | "blur" | "submit") | "input lazy" | "blur lazy" | "submit lazy" | "lazy input" | "lazy blur" | "lazy submit" | undefined>;
    validationValue: null;
    appendIcon: vue.PropType<IconValue>;
    centerAffix: {
        type: BooleanConstructor;
        default: boolean;
    };
    prependIcon: vue.PropType<IconValue>;
    hideDetails: vue.PropType<boolean | "auto">;
    hint: StringConstructor;
    persistentHint: BooleanConstructor;
    messages: {
        type: vue.PropType<string | readonly string[]>;
        default: () => never[];
    };
    direction: {
        type: vue.PropType<"horizontal" | "vertical">;
        default: string;
        validator: (v: any) => boolean;
    };
    'onClick:prepend': vue.PropType<EventProp<[MouseEvent], (args_0: MouseEvent) => any>>;
    'onClick:append': vue.PropType<EventProp<[MouseEvent], (args_0: MouseEvent) => any>>;
    indeterminate: BooleanConstructor;
    inset: BooleanConstructor;
    flat: BooleanConstructor;
    loading: {
        type: (StringConstructor | BooleanConstructor)[];
        default: boolean;
    };
}>>;
type VSwitch = InstanceType<typeof VSwitch>;

export { VSwitch };
