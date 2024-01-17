<script setup>
import { reactive, ref,onMounted } from 'vue'
import { mdiBallotOutline, mdiAccount, mdiGithub, mdiClockAlert,mdiBatteryAlert} from '@mdi/js'
import SectionMain from '@/components/SectionMain.vue'
import CardBox from '@/components/CardBox.vue'
import FormCheckRadioGroup from '@/components/FormCheckRadioGroup.vue'
import FormField from '@/components/FormField.vue'
import FormControl from '@/components/FormControl.vue'
import BaseDivider from '@/components/BaseDivider.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import { useWeaponStore } from '@/stores/weapon'
import TableFormat from '@/components/TableFormat.vue'
import CardBoxModal from '@/components/CardBoxModal.vue'


const weaponStore = useWeaponStore()

const weapon = reactive({
  id: '',
  name: '',
  energyCost: '',
  armRounds: '',
  type: weaponStore.weaponTypes[0],
})

const newWeaponType = ref(0);
const isModalActive = ref(false)

const weapons = ref([]);

onMounted(async () => {
  try {
    weapons.value = await weaponStore.getWeapons(); 
  } catch (error) {
    console.error(error);
    // Handle error or throw it further if needed
    throw new Error(error.message);
  }
});

const submit = () => {
  weapon.weaponType = weaponStore.weaponTypes[newWeaponType.value]
  console.log(weapon)
}

const weaponDetails = (id) => {
  const clickedWeapon = weapons.value.find(item => item.id === id);
  isModalActive.value = true;
  weapon.id = clickedWeapon.id
  weapon.name = clickedWeapon.name
  weapon.type = clickedWeapon.type
  weapon.energyCost = clickedWeapon.energy_cost
  weapon.armRounds = clickedWeapon.arm_rounds
  console.log(weaponStore.weaponTypes)
  newWeaponType.value = 0
  if (weapon.type === "Seeking") {
    newWeaponType.value = 1;
  }
}


</script>

<template>
<LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiBallotOutline" title="Weapons" main>
        <BaseButton
          href="https://github.com/justboil/admin-one-vue-tailwind"
          target="_blank"
          :icon="mdiGithub"
          label="Star on GitHub"
          color="contrast"
          rounded-full
          small
        />
      </SectionTitleLineWithButton>
      
      
      <CardBoxModal has-cancel v-model="isModalActive" title="Sample modal" button-label="Save">
        <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
        <CardBox weapon @submit.prevent="submit">
          <FormField label="Weapon Type">
            <FormCheckRadioGroup
              v-model="newWeaponType"
              name="weaponType"
              type="radio"
              :options="weaponStore.weaponTypes"
            />
          </FormField>
          
          <FormField>
            <FormControl v-model="weapon.name"  placeholder="Name"   label="Name" />
          </FormField>
            <FormField>
              <FormControl v-model="weapon.energyCost" :icon="mdiBatteryAlert" placeholder="Energy Cost" label="Energy Cost"/>
              <FormControl v-model="weapon.armRounds" :icon="mdiClockAlert" placeholder="Number of Rounds to Arm"  label="Number of Rounds to Arm"/>
            </FormField>
        </CardBox>     
      </CardBoxModal>
      <CardBox>
        <TableFormat  @on-click="weaponDetails" :table-data=weapons :tableHeader="['Type','Name','Energy Cost','Rounds to Arm']">
          <template v-slot:column-type="{ item }">
            <td class="w-40"> {{ item }}</td>
          </template>
          <template v-slot:column-name="{ item }">
            <td> {{ item }}</td>
          </template>
          <template v-slot:column-energy_cost="{ item }">
            <td class="text-right w-2"> {{ item }}</td>
          </template>
          <template v-slot:column-arm_rounds="{ item }">
            <td class="text-right w-2"> {{ item }}</td>
          </template>
        </TableFormat>
      </CardBox>

      <BaseDivider/>


    </SectionMain>
  </LayoutAuthenticated>
</template>
