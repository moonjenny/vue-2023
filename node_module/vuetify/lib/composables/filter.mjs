/* eslint-disable max-statements */
/* eslint-disable no-labels */
// Utilities
import { getPropertyFromItem, propsFactory, wrapInArray } from "../util/index.mjs";
import { computed, ref, unref, watchEffect } from 'vue';

// Types

// Composables
export const defaultFilter = (value, query, item) => {
  if (value == null || query == null) return -1;
  return value.toString().toLocaleLowerCase().indexOf(query.toString().toLocaleLowerCase());
};
export const makeFilterProps = propsFactory({
  customFilter: Function,
  customKeyFilter: Object,
  filterKeys: [Array, String],
  filterMode: {
    type: String,
    default: 'intersection'
  },
  noFilter: Boolean
}, 'filter');
export function filterItems(items, query, options) {
  const array = [];
  // always ensure we fall back to a functioning filter
  const filter = options?.default ?? defaultFilter;
  const keys = options?.filterKeys ? wrapInArray(options.filterKeys) : false;
  const customFiltersLength = Object.keys(options?.customKeyFilter ?? {}).length;
  if (!items?.length) return array;
  loop: for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const customMatches = {};
    const defaultMatches = {};
    let match = -1;
    if (query && !options?.noFilter) {
      if (typeof item === 'object') {
        const filterKeys = keys || Object.keys(item);
        for (const key of filterKeys) {
          const value = getPropertyFromItem(item, key, item);
          const keyFilter = options?.customKeyFilter?.[key];
          match = keyFilter ? keyFilter(value, query, item) : filter(value, query, item);
          if (match !== -1 && match !== false) {
            if (keyFilter) customMatches[key] = match;else defaultMatches[key] = match;
          } else if (options?.filterMode === 'every') {
            continue loop;
          }
        }
      } else {
        match = filter(item, query, item);
        if (match !== -1 && match !== false) {
          defaultMatches.title = match;
        }
      }
      const defaultMatchesLength = Object.keys(defaultMatches).length;
      const customMatchesLength = Object.keys(customMatches).length;
      if (!defaultMatchesLength && !customMatchesLength) continue;
      if (options?.filterMode === 'union' && customMatchesLength !== customFiltersLength && !defaultMatchesLength) continue;
      if (options?.filterMode === 'intersection' && (customMatchesLength !== customFiltersLength || !defaultMatchesLength)) continue;
    }
    array.push({
      index: i,
      matches: {
        ...defaultMatches,
        ...customMatches
      }
    });
  }
  return array;
}
export function useFilter(props, items, query, options) {
  const strQuery = computed(() => typeof query?.value !== 'string' && typeof query?.value !== 'number' ? '' : String(query.value));
  const filteredItems = ref([]);
  const filteredMatches = ref(new Map());
  const transformedItems = computed(() => options?.transform ? unref(items).map(options?.transform) : unref(items));
  watchEffect(() => {
    filteredItems.value = [];
    filteredMatches.value = new Map();
    const results = filterItems(transformedItems.value, strQuery.value, {
      customKeyFilter: props.customKeyFilter,
      default: props.customFilter,
      filterKeys: props.filterKeys,
      filterMode: props.filterMode,
      noFilter: props.noFilter
    });
    const originalItems = unref(items);
    results.forEach(_ref => {
      let {
        index,
        matches
      } = _ref;
      const item = originalItems[index];
      filteredItems.value.push(item);
      filteredMatches.value.set(item.value, matches);
    });
  });
  function getMatches(item) {
    return filteredMatches.value.get(item.value);
  }
  return {
    filteredItems,
    filteredMatches,
    getMatches
  };
}
//# sourceMappingURL=filter.mjs.map