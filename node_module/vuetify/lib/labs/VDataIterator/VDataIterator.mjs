import { createVNode as _createVNode } from "vue";
// Composables
import { makeDataIteratorItemProps, useDataIteratorItems } from "./composables/items.mjs";
import { makeComponentProps } from "../../composables/component.mjs";
import { makeFilterProps, useFilter } from "../../composables/filter.mjs";
import { makeTagProps } from "../../composables/tag.mjs";
import { useProxiedModel } from "../../composables/proxiedModel.mjs";
import { createPagination, makeDataTablePaginateProps, providePagination, usePaginatedItems } from "../VDataTable/composables/paginate.mjs";
import { createSort, makeDataTableSortProps, provideSort, useSortedItems } from "../VDataTable/composables/sort.mjs";
import { makeDataTableExpandProps, provideExpanded } from "../VDataTable/composables/expand.mjs";
import { makeDataTableGroupProps, provideGroupBy, useGroupedItems } from "../VDataTable/composables/group.mjs";
import { makeDataTableSelectProps, provideSelection } from "../VDataTable/composables/select.mjs";
import { useOptions } from "../VDataTable/composables/options.mjs"; // Utilities
import { computed, toRef } from 'vue';
import { genericComponent, propsFactory, useRender } from "../../util/index.mjs"; // Types
export const makeVDataIteratorProps = propsFactory({
  search: String,
  loading: Boolean,
  ...makeComponentProps(),
  ...makeDataIteratorItemProps(),
  ...makeDataTableSelectProps(),
  ...makeDataTableSortProps(),
  ...makeDataTablePaginateProps({
    itemsPerPage: 5
  }),
  ...makeDataTableExpandProps(),
  ...makeDataTableGroupProps(),
  ...makeFilterProps(),
  ...makeTagProps()
}, 'v-data-iterator');
export const VDataIterator = genericComponent()({
  name: 'VDataIterator',
  props: makeVDataIteratorProps(),
  emits: {
    'update:modelValue': value => true,
    'update:groupBy': value => true,
    'update:page': value => true,
    'update:itemsPerPage': value => true,
    'update:sortBy': value => true,
    'update:options': value => true,
    'update:expanded': value => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const groupBy = useProxiedModel(props, 'groupBy');
    const search = toRef(props, 'search');
    const {
      items
    } = useDataIteratorItems(props);
    const {
      filteredItems
    } = useFilter(props, items, search, {
      transform: item => item.raw
    });
    const {
      sortBy,
      multiSort,
      mustSort
    } = createSort(props);
    const {
      page,
      itemsPerPage
    } = createPagination(props);
    const {
      toggleSort
    } = provideSort({
      sortBy,
      multiSort,
      mustSort,
      page
    });
    const {
      sortByWithGroups,
      opened,
      extractRows,
      isGroupOpen,
      toggleGroup
    } = provideGroupBy({
      groupBy,
      sortBy
    });
    const {
      sortedItems
    } = useSortedItems(props, filteredItems, sortByWithGroups);
    const {
      flatItems
    } = useGroupedItems(sortedItems, groupBy, opened);
    const itemsLength = computed(() => flatItems.value.length);
    const {
      startIndex,
      stopIndex,
      pageCount,
      prevPage,
      nextPage,
      setItemsPerPage,
      setPage
    } = providePagination({
      page,
      itemsPerPage,
      itemsLength
    });
    const {
      paginatedItems
    } = usePaginatedItems({
      items: flatItems,
      startIndex,
      stopIndex,
      itemsPerPage
    });
    const paginatedItemsWithoutGroups = computed(() => extractRows(paginatedItems.value));
    const {
      isSelected,
      select,
      selectAll,
      toggleSelect
    } = provideSelection(props, paginatedItemsWithoutGroups);
    const {
      isExpanded,
      toggleExpand
    } = provideExpanded(props);
    useOptions({
      page,
      itemsPerPage,
      sortBy,
      groupBy,
      search
    });
    const slotProps = computed(() => ({
      page: page.value,
      itemsPerPage: itemsPerPage.value,
      sortBy: sortBy.value,
      pageCount: pageCount.value,
      toggleSort,
      prevPage,
      nextPage,
      setPage,
      setItemsPerPage,
      isSelected,
      select,
      selectAll,
      toggleSelect,
      isExpanded,
      toggleExpand,
      isGroupOpen,
      toggleGroup,
      items: paginatedItems.value,
      groupedItems: flatItems.value
    }));
    useRender(() => _createVNode(props.tag, {
      "class": ['v-data-iterator', props.class],
      "style": props.style
    }, {
      default: () => [slots.header?.(slotProps.value), !paginatedItems.value.length ? slots['no-data']?.() : slots.default?.(slotProps.value), slots.footer?.(slotProps.value)]
    }));
    return {};
  }
});
//# sourceMappingURL=VDataIterator.mjs.map