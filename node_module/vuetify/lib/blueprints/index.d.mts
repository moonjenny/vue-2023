import { Ref, JSXComponent, PropType } from 'vue';

interface LocaleMessages {
    [key: string]: LocaleMessages | string;
}
interface LocaleOptions {
    messages?: LocaleMessages;
    locale?: string;
    fallback?: string;
    adapter?: LocaleInstance;
}
interface LocaleInstance {
    name: string;
    messages: Ref<LocaleMessages>;
    current: Ref<string>;
    fallback: Ref<string>;
    t: (key: string, ...params: unknown[]) => string;
    n: (value: number) => string;
    provide: (props: LocaleOptions) => LocaleInstance;
}
interface RtlOptions {
    rtl?: Record<string, boolean>;
}

type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
type ThemeOptions = false | {
    cspNonce?: string;
    defaultTheme?: string;
    variations?: false | VariationsOptions;
    themes?: Record<string, ThemeDefinition>;
};
type ThemeDefinition = DeepPartial<InternalThemeDefinition>;
interface VariationsOptions {
    colors: string[];
    lighten: number;
    darken: number;
}
interface InternalThemeDefinition {
    dark: boolean;
    colors: Colors;
    variables: Record<string, string | number>;
}
interface Colors extends BaseColors, OnColors {
    [key: string]: string;
}
interface BaseColors {
    background: string;
    surface: string;
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    error: string;
    info: string;
}
interface OnColors {
    'on-background': string;
    'on-surface': string;
    'on-primary': string;
    'on-secondary': string;
    'on-success': string;
    'on-warning': string;
    'on-error': string;
    'on-info': string;
}

declare const breakpoints: readonly ["sm", "md", "lg", "xl", "xxl"];
type Breakpoint = typeof breakpoints[number];
type DisplayBreakpoint = 'xs' | Breakpoint;
type DisplayThresholds = {
    [key in DisplayBreakpoint]: number;
};
interface DisplayOptions {
    mobileBreakpoint?: number | DisplayBreakpoint;
    thresholds?: Partial<DisplayThresholds>;
}
type SSROptions = boolean | {
    clientWidth: number;
    clientHeight?: number;
};

type DefaultsInstance = undefined | {
    [key: string]: undefined | Record<string, unknown>;
    global?: Record<string, unknown>;
};
type DefaultsOptions = Partial<DefaultsInstance>;

interface DateAdapter<Date> {
    date(value?: any): Date | null;
    format(date: Date, formatString: string): string;
    startOfMonth(date: Date): Date;
    endOfMonth(date: Date): Date;
    startOfYear(date: Date): Date;
    endOfYear(date: Date): Date;
    isAfter(date: Date, comparing: Date): boolean;
    isEqual(date: Date, comparing: Date): boolean;
    isSameDay(date: Date, comparing: Date): boolean;
    isSameMonth(date: Date, comparing: Date): boolean;
    isValid(date: any): boolean;
    isWithinRange(date: Date, range: [Date, Date]): boolean;
    addDays(date: Date, amount: number): Date;
    addMonths(date: Date, amount: number): Date;
    getYear(date: Date): number;
    setYear(date: Date, year: number): Date;
    getDiff(date: Date, comparing: Date | string, unit?: string): number;
    getWeek(date: Date): number;
    getWeekArray(date: Date): (Date | null)[][];
    getWeekdays(): string[];
    getMonth(date: Date): number;
}

interface DateInstance extends DateAdapter<Date> {
    locale: string;
}
type DateOptions = {
    adapter: (new (locale: string) => DateInstance) | DateInstance;
};

type IconValue = string | (string | [path: string, opacity: number])[] | JSXComponent;
declare const IconValue: PropType<IconValue>;
interface IconAliases {
    [name: string]: IconValue;
    complete: IconValue;
    cancel: IconValue;
    close: IconValue;
    delete: IconValue;
    clear: IconValue;
    success: IconValue;
    info: IconValue;
    warning: IconValue;
    error: IconValue;
    prev: IconValue;
    next: IconValue;
    checkboxOn: IconValue;
    checkboxOff: IconValue;
    checkboxIndeterminate: IconValue;
    delimiter: IconValue;
    sortAsc: IconValue;
    sortDesc: IconValue;
    expand: IconValue;
    menu: IconValue;
    subgroup: IconValue;
    dropdown: IconValue;
    radioOn: IconValue;
    radioOff: IconValue;
    edit: IconValue;
    ratingEmpty: IconValue;
    ratingFull: IconValue;
    ratingHalf: IconValue;
    loading: IconValue;
    first: IconValue;
    last: IconValue;
    unfold: IconValue;
    file: IconValue;
    plus: IconValue;
    minus: IconValue;
}
interface IconProps {
    tag: string;
    icon?: IconValue;
    disabled?: Boolean;
}
type IconComponent = JSXComponent<IconProps>;
interface IconSet {
    component: IconComponent;
}
type IconOptions = {
    defaultSet: string;
    aliases?: Partial<IconAliases>;
    sets: Record<string, IconSet>;
};

interface VuetifyOptions {
    aliases?: Record<string, any>;
    blueprint?: Blueprint;
    components?: Record<string, any>;
    date?: DateOptions;
    directives?: Record<string, any>;
    defaults?: DefaultsOptions;
    display?: DisplayOptions;
    theme?: ThemeOptions;
    icons?: IconOptions;
    locale?: LocaleOptions & RtlOptions;
    ssr?: SSROptions;
}
interface Blueprint extends Omit<VuetifyOptions, 'blueprint'> {
}

declare const md1: Blueprint;

declare const md2: Blueprint;

declare const md3: Blueprint;

export { md1, md2, md3 };
