import { createVNode as _createVNode, mergeProps as _mergeProps, resolveDirective as _resolveDirective } from "vue";
// Components
import { VDataTableHeaders } from "./VDataTableHeaders.mjs";
import { VDataTableRows } from "./VDataTableRows.mjs";
import { VTable } from "../../components/VTable/index.mjs"; // Composables
import { createGroupBy, makeDataTableGroupProps, provideGroupBy, useGroupedItems } from "./composables/group.mjs";
import { createHeaders } from "./composables/headers.mjs";
import { createSort, provideSort, useSortedItems } from "./composables/sort.mjs";
import { makeDataTableProps } from "./VDataTable.mjs";
import { makeDataTableVirtualProps, useVirtual } from "./composables/virtual.mjs";
import { makeFilterProps, useFilter } from "../../composables/filter.mjs";
import { provideDefaults } from "../../composables/defaults.mjs";
import { provideExpanded } from "./composables/expand.mjs";
import { provideSelection } from "./composables/select.mjs";
import { useDataTableItems } from "./composables/items.mjs";
import { useOptions } from "./composables/options.mjs"; // Utlities
import { computed, shallowRef, toRef } from 'vue';
import { convertToUnit, genericComponent, propsFactory, useRender } from "../../util/index.mjs"; // Types
export const makeVDataTableVirtualProps = propsFactory({
  ...makeDataTableProps(),
  ...makeDataTableGroupProps(),
  ...makeDataTableVirtualProps(),
  ...makeFilterProps()
}, 'v-data-table-virtual');
export const VDataTableVirtual = genericComponent()({
  name: 'VDataTableVirtual',
  props: makeVDataTableVirtualProps(),
  emits: {
    'update:modelValue': value => true,
    'update:sortBy': value => true,
    'update:options': value => true,
    'update:groupBy': value => true,
    'update:expanded': value => true,
    'click:row': (e, value) => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const {
      groupBy
    } = createGroupBy(props);
    const {
      sortBy,
      multiSort,
      mustSort
    } = createSort(props);
    const {
      columns,
      headers
    } = createHeaders(props, {
      groupBy,
      showSelect: toRef(props, 'showSelect'),
      showExpand: toRef(props, 'showExpand')
    });
    const {
      items
    } = useDataTableItems(props, columns);
    const search = toRef(props, 'search');
    const {
      filteredItems
    } = useFilter(props, items, search, {
      transform: item => item.columns
    });
    const {
      toggleSort
    } = provideSort({
      sortBy,
      multiSort,
      mustSort
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
    const allRows = computed(() => extractRows(flatItems.value));
    const {
      isSelected,
      select,
      selectAll,
      toggleSelect,
      someSelected,
      allSelected
    } = provideSelection(props, allRows);
    const {
      isExpanded,
      toggleExpand
    } = provideExpanded(props);
    const {
      containerRef,
      paddingTop,
      paddingBottom,
      startIndex,
      stopIndex,
      itemHeight,
      handleScroll
    } = useVirtual(props, flatItems);
    const visibleItems = computed(() => {
      return flatItems.value.slice(startIndex.value, stopIndex.value);
    });
    useOptions({
      sortBy,
      page: shallowRef(1),
      itemsPerPage: shallowRef(-1),
      groupBy,
      search
    });
    provideDefaults({
      VDataTableRows: {
        hideNoData: toRef(props, 'hideNoData'),
        noDataText: toRef(props, 'noDataText'),
        loading: toRef(props, 'loading'),
        loadingText: toRef(props, 'loadingText')
      }
    });
    const slotProps = computed(() => ({
      sortBy: sortBy.value,
      toggleSort,
      someSelected: someSelected.value,
      allSelected: allSelected.value,
      isSelected,
      select,
      selectAll,
      toggleSelect,
      isExpanded,
      toggleExpand,
      isGroupOpen,
      toggleGroup,
      items: items.value,
      groupedItems: flatItems.value,
      columns: columns.value,
      headers: headers.value
    }));
    useRender(() => {
      const [dataTableHeadersProps] = VDataTableHeaders.filterProps(props);
      const [dataTableRowsProps] = VDataTableRows.filterProps(props);
      const [tableProps] = VTable.filterProps(props);
      return _createVNode(VTable, _mergeProps({
        "class": ['v-data-table', {
          'v-data-table--loading': props.loading
        }, props.class],
        "style": [{
          '--v-table-row-height': convertToUnit(itemHeight.value)
        }, props.style]
      }, tableProps), {
        top: () => slots.top?.(slotProps.value),
        wrapper: () => _createVNode("div", {
          "ref": containerRef,
          "onScroll": handleScroll,
          "class": "v-table__wrapper",
          "style": {
            height: convertToUnit(props.height)
          }
        }, [_createVNode("table", null, [_createVNode("thead", null, [_createVNode(VDataTableHeaders, _mergeProps(dataTableHeadersProps, {
          "sticky": props.fixedHeader
        }), slots)]), _createVNode("tbody", null, [_createVNode("tr", {
          "style": {
            height: convertToUnit(paddingTop.value),
            border: 0
          }
        }, [_createVNode("td", {
          "colspan": columns.value.length,
          "style": {
            height: convertToUnit(paddingTop.value),
            border: 0
          }
        }, null)]), _createVNode(VDataTableRows, _mergeProps(dataTableRowsProps, {
          "items": visibleItems.value
        }), slots), _createVNode("tr", {
          "style": {
            height: convertToUnit(paddingBottom.value),
            border: 0
          }
        }, [_createVNode("td", {
          "colspan": columns.value.length,
          "style": {
            height: convertToUnit(paddingBottom.value),
            border: 0
          }
        }, null)])])])]),
        bottom: () => slots.bottom?.(slotProps.value)
      });
    });
  }
});
//# sourceMappingURL=VDataTableVirtual.mjs.map