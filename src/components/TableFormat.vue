<script setup>
import { computed, ref,onMounted } from 'vue'
import { mdiEye, mdiTrashCan } from '@mdi/js'
import TableCheckboxCell from '@/components/TableCheckboxCell.vue'
import BaseLevel from '@/components/BaseLevel.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import BaseButton from '@/components/BaseButton.vue'
import CardBoxModal from '@/components/CardBoxModal.vue'

const props = defineProps({
  checkable: Boolean,
  tableData: Object,
  tableHeader: Array,
  rowsPerPage: {
      type: Number,
      default: 20
  }
})

const emit = defineEmits(['on-click']);
const rowClicked = (value) => {
    emit('on-click', value);
}

const items = computed(() => props.tableData)
const perPage = ref(props.rowsPerPage)
const currentPage = ref(0);

const itemsPaginated = computed(() =>
  items.value.slice(perPage.value * currentPage.value, perPage.value * (currentPage.value + 1))
)
const numPages = computed(() => Math.ceil(items.value.length / perPage.value))

const currentPageHuman = computed(() => currentPage.value + 1)

const pagesList = computed(() => {
  const pagesList = []

  for (let i = 0; i < numPages.value; i++) {
    pagesList.push(i)
  }

  return pagesList
})

const remove = (arr, cb) => {
  const newArr = []

  arr.forEach((item) => {
    if (!cb(item)) {
      newArr.push(item)
    }
  })

  return newArr
}
</script>

<template>
  <table class="table-auto">
    <thead v-if=tableHeader>
      <tr>
        <th class="text-center" v-for="headerItem in tableHeader">{{headerItem}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, rowIndex) in itemsPaginated" @click="rowClicked(item.id)" class="cursor-pointer" :key="rowIndex">
        <TableCheckboxCell v-if="checkable" @checked="checked($event, client)" :key="item.id"/>
        <template v-for="(value, key) in item" :key="key">
          <slot :name="`column-${key}`" :item="value" :index="key" />
        </template>
      </tr>
    </tbody>
  </table>
  <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
    <BaseLevel>
      <BaseButtons>
        <BaseButton
          v-for="page in pagesList"
          :key="page"
          :active="page === currentPage"
          :label="page + 1"
          :color="page === currentPage ? 'lightDark' : 'whiteDark'"
          small
          @click="currentPage = page"
        />
      </BaseButtons>
      <small>Page {{ currentPageHuman }} of {{ numPages }}</small>
    </BaseLevel>
  </div>
</template>
