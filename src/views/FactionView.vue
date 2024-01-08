<script setup>
import { reactive,onMounted,ref } from 'vue'
import { useMainStore } from '@/stores/main'
import { useFactionStore } from '@/stores/faction'
import { useShipStore } from '@/stores/ship'
import {computed} from 'vue'
import { useRoute } from 'vue-router';
import { mdiAccount, mdiMail, mdiAsterisk, mdiFormTextboxPassword, mdiApacheKafka } from '@mdi/js'
import SectionMain from '@/components/SectionMain.vue'
import CardBox from '@/components/CardBox.vue'
import BaseButton from '@/components/BaseButton.vue'
import FactionCard from '@/components/FactionCard.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import CardBoxShip from '@/components/CardBoxShip.vue'
import TableFormat from '@/components/TableFormat.vue'

const route = useRoute();
const path = computed(() =>route.path.replace('/factions/',''));
const factionId = path.value;
const mainStore = useMainStore()
const factionStore = useFactionStore();
const shipStore = useShipStore();

const defaultFactionData = {
  "id": "",
  "logo_url": "",
  "name": ""
};

const faction = ref(defaultFactionData);
const ship = ref({});
const factionClassShips = ref([]); // Reactive ref to hold fetched factions

onMounted(async () => {
  try {
    faction.value = await factionStore.getFaction(factionId); // Call the fetchFactions function
    factionClassShips.value = await shipStore.getFactionClasses(factionId);
  } catch (error) {
    console.error(error);
    // Handle error or throw it further if needed
    throw new Error(error.message);
  }
});

const sortedFactionData = computed(() => {
  return factionClassShips.value.map(item => ({
    ship_counter_url: item.ship_counter_url,
    name: item.name,
    id: item.id,
  }))
})

const leadShip = (value) => {
  ship.value = factionClassShips.value.find(item => item.id === value);
};
</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiAccount" :title=faction.name main>
        <BaseButton
          href="https://twitter.com/jvalenzu?lang=en"
          target="_blank"
          :icon="mdiApacheKafka"
          label="Dunsel"
          color="contrast"
          rounded-full
          small
        />
      </SectionTitleLineWithButton>

      <FactionCard class="mb-6" :faction=faction />
      <CardBox class="mb-6" has-table>
        <TableFormat  :table-data=sortedFactionData @on-click="leadShip" >
          <template v-slot:column-ship_counter_url="{ item }">
            <td data-label="image" class="w-20"> <img :src="item" style="background-color:white" /></td>
          </template>
          <template v-slot:column-name="{ item }">
            <td> {{ item }} Class</td>
          </template>
        </TableFormat>
      </CardBox>
      <CardBoxShip :ship=ship v-if="ship.id"/>
    </SectionMain>
  </LayoutAuthenticated>
</template>
