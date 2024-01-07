<script setup>
import { mdiMonitorCellphone, mdiTableBorder, mdiTableOff, mdiGithub,mdiHexagonMultiple } from '@mdi/js'
import {computed} from 'vue'
import { useRoute } from 'vue-router';
import SectionMain from '@/components/SectionMain.vue'
import NotificationBar from '@/components/NotificationBar.vue'
import TableFactions from '@/components/TableFactions.vue'
import CardBox from '@/components/CardBox.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import BaseButton from '@/components/BaseButton.vue'

const route = useRoute();
const path = computed(() =>route.path.replace('/',''));

</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiHexagonMultiple" class="text-transform: capitalize" :title=path main>

      </SectionTitleLineWithButton>

      <CardBox class="mb-6" has-table>
        <TableFactions v-if="path == 'factions'"/>
      </CardBox>
    </SectionMain>
  </LayoutAuthenticated>
</template>
