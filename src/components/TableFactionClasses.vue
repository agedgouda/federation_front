<script setup>
import { computed, ref,onMounted } from 'vue'
import { mdiEye, mdiTrashCan } from '@mdi/js'
import { useShipStore } from '@/stores/ship'
import CardBoxModal from '@/components/CardBoxModal.vue'
import BaseLevel from '@/components/BaseLevel.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import BaseButton from '@/components/BaseButton.vue'
import { useRouter } from 'vue-router';


const router = useRouter();
const shipStore = useShipStore();
const emit = defineEmits(['lead-ship'])

const props = defineProps({
    factionId: {
    type: String,
    required: true,
  },
});

const factionClassShips = ref([]); // Reactive ref to hold fetched factions

onMounted(async () => {
  try {
    factionClassShips.value = await shipStore.getFactionClasses(props.factionId); // Call the fetchFactions function
  } catch (error) {
    console.error(error);
    // Handle error or throw it further if needed
    throw new Error(error.message);
  }
});

const items = computed(() => factionClassShips.value)

const getShipDetails = (leadShip) => {
    emit('lead-ship', leadShip);
}

const perPage = ref(5)

const currentPage = ref(0)

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
    <thead>
      <tr>
        <th />
        <th>Class Name</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="ship in itemsPaginated" @click="getShipDetails(ship)" class="cursor-pointer">
        <td data-label="image" class="w-20">
          <img :src=ship.ship_image_url style="background-color:white"> 
        </td>
        <td data-label="ship name">
          {{ ship.name }} Class
        </td>
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
