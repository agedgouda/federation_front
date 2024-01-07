<script setup>
import { reactive,onMounted,ref } from 'vue'
import { useMainStore } from '@/stores/main'
import { useFactionStore } from '@/stores/faction'
import {computed} from 'vue'
import { useRoute } from 'vue-router';
import { mdiAccount, mdiMail, mdiAsterisk, mdiFormTextboxPassword, mdiApacheKafka } from '@mdi/js'
import SectionMain from '@/components/SectionMain.vue'
import CardBox from '@/components/CardBox.vue'
import BaseDivider from '@/components/BaseDivider.vue'
import FormField from '@/components/FormField.vue'
import FormControl from '@/components/FormControl.vue'
import FormFilePicker from '@/components/FormFilePicker.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import FactionCard from '@/components/FactionCard.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import TableFactionClasses from '@/components/TableFactionClasses.vue'
import CardBoxShip from '@/components/CardBoxShip.vue'

const route = useRoute();
const path = computed(() =>route.path.replace('/factions/',''));
const factionId = path.value;
const mainStore = useMainStore()
const factionStore = useFactionStore();

const defaultFactionData = {
   "id": "",
  "logo_url": "",
  "name": ""
};

const faction = ref(defaultFactionData);
const ship = ref({});

onMounted(async () => {

  try {
    faction.value = await factionStore.getFaction(factionId); // Call the fetchFactions function
  } catch (error) {
    console.error(error);
    // Handle error or throw it further if needed
    throw new Error(error.message);
  }
});

const profileForm = reactive({
  name: mainStore.userName,
  email: mainStore.userEmail
})

const passwordForm = reactive({
  password_current: '',
  password: '',
  password_confirmation: ''
})


const leadShip = (value) => {
  ship.value = value;
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
        <TableFactionClasses :faction-id=factionId @lead-ship="leadShip" />
      </CardBox>
      <CardBoxShip :ship=ship v-if="ship.id"/>
    </SectionMain>
  </LayoutAuthenticated>
</template>
