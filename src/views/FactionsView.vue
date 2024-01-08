<script setup>
import { mdiMonitorCellphone, mdiTableBorder, mdiTableOff, mdiGithub,mdiHexagonMultiple } from '@mdi/js'
import { onMounted,ref,watch } from 'vue'
import { useFactionStore } from '@/stores/faction'
import { useRouter } from 'vue-router';
import SectionMain from '@/components/SectionMain.vue'
import NotificationBar from '@/components/NotificationBar.vue'
import TableFormat from '@/components/TableFormat.vue'
import CardBox from '@/components/CardBox.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import BaseButton from '@/components/BaseButton.vue'

const router = useRouter();
const factionStore = useFactionStore()
const factionDetails = (id) => {
  router.push({
        name: 'faction',
        params: { id },

  });
}

const factions = ref([]);

onMounted(async () => {
  try {
    factions.value = await factionStore.getFactions(); // Call the fetchFactions function
  } catch (error) {
    console.error(error);
    // Handle error or throw it further if needed
    throw new Error(error.message);
  }
});
</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiHexagonMultiple" class="text-transform: capitalize" title='Factions' main>
      </SectionTitleLineWithButton>
      <CardBox class="mb-6" has-table>
        <TableFormat  @on-click="factionDetails" :table-data=factions >
          <template v-slot:column-logo_url="{ item }">
            <td class="w-20"> <img :src="item" /></td>
          </template>
          <template v-slot:column-name="{ item }">
            <td> {{ item }}</td>
          </template>
        </TableFormat>
      </CardBox>
    </SectionMain>
  </LayoutAuthenticated>
</template>
