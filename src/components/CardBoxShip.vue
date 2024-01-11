<script setup>
import { computed,ref,onMounted,reactive } from 'vue'
import { mdiCashMinus, mdiPlusBox,mdiPlus, mdiReceipt, mdiCreditCardOutline } from '@mdi/js'
import CardBox from '@/components/CardBox.vue'
import BaseLevel from '@/components/BaseLevel.vue'
import PillTag from '@/components/PillTag.vue'
import IconRounded from '@/components/IconRounded.vue'
import TableFormat from '@/components/TableFormat.vue'
import { useShipStore } from '@/stores/ship'
import Boxes from './Boxes.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import FormField from '@/components/FormField.vue'
import FormControl from '@/components/FormControl.vue'

const props = defineProps({
  ship: {
    type: Object,
    required: true
  },
})

const shipStore = useShipStore();
const classShips = ref([]); 
const ship = ref(props.ship);
const shipClassId  = ref(props.ship.id);
const showAddShipsForm = ref(false)

onMounted(async () => {
  try {
    classShips.value = await shipStore.getClassShips(shipClassId.value); 
  } catch (error) {
    console.error(error);
    // Handle error or throw it further if needed
    throw new Error(error.message);
  }
});
const sortedShipData = computed(() => {
  return classShips.value.map(item => ({
    ship_counter_url: item.ship_counter_url,
    name: item.name + ' '+ item.registry,
    id: item.id,
  }))
})

const newShip = reactive({
  name: '',
  registry: props.ship.registry_stub + ' - ',
  ship_class_id: shipClassId.value
})

const addShipField  = () => {
  showAddShipsForm.value = !showAddShipsForm.value
}
const cancelSaveShip  = () => {
  newShip.name =  '',
  newShip.registry = props.ship.registry_stub + ' - '
  showAddShipsForm.value = !showAddShipsForm.value
}

async function saveShip() {
  try {
    const addedShip = await shipStore.setShip(newShip);
    classShips.value.push(addedShip);
    cancelSaveShip();
  } catch (error) {
    console.error('Error:', error);
    
  }
}
</script>

<template>
  
  <CardBox class="mb-6 last:mb-0">
    <BaseLevel>
      <BaseLevel type="justify-start">
        <div class="text-center space-y-1 md:text-left md:mr-6">
          <CardBox class="mb-2">
            <h4 class="text-xl">{{ ship.faction_identifier }} {{ ship.name }} <span class="italic">{{ ship.registry }}</span></h4>
            <h3>{{ ship.ship_class }} <span v-if="ship.ship_class == 'Lead ship'">of class</span><span v-else>class</span></h3>
            <div>{{ ship.type }} </div>
            <div>Ship Power: {{ ship.power }} </div>
          </CardBox>
          <div class="grid grid-cols-3 lg:grid-cols-3 gap-6 mb-6">
            <div class="flex flex-col justify-between">
              <CardBox class="mb-2">
              <h4 class="text-xl">Movement</h4>
              <h1>Turn Mode: {{ ship.turn_mode }}</h1>
              <h1>Acceleration Cost: {{ ship.acceleration_cost }}</h1>
              <h1>Deceleration Cost: {{ ship.deceleration_cost }}</h1>
                <table>
                  <thead>
                    <tr>
                      <th>Base Speed</th>
                      <th>Mode</th>
                      <th>Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>8</td>
                      <td>{{ ship.base_8_turn_mode }}</td>
                      <td>{{ ship.base_8_turn_cost }}</td>
                    </tr>
                    <tr>
                      <td>16</td>
                      <td>{{ ship.base_16_turn_mode }}</td>
                      <td>{{ ship.base_16_turn_cost }}</td>
                    </tr>
                    <tr>
                      <td>24</td>
                      <td>{{ ship.base_24_turn_mode }}</td>
                      <td>{{ ship.base_24_turn_cost }}</td>
                    </tr>
                  </tbody>
                </table>
              </CardBox>
              <CardBox class="mb-2">
              <h4 class="text-xl">Defenses</h4>
                <table>
                  <thead>
                    <tr>
                      <th>Location</th>
                      <th>Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Shield 1</td>
                      <td>
                        <Boxes :total=ship.shield_1  />
                      </td>
                    </tr>
                    <tr>
                      <td>Shield 2</td>
                      <td>
                        <Boxes :total=ship.shield_2  />
                      </td>
                    </tr>
                    <tr>
                      <td>Shield 3</td>
                      <td>
                        <Boxes :total=ship.shield_3  />
                      </td>
                    </tr>
                    <tr>
                      <td>Forward Hull</td>
                      <td><Boxes :total=ship.f_hull  />
                      </td>
                    </tr>
                    <tr>
                      <td>Rear Hull</td>
                      <td>
                        <Boxes :total=ship.r_hull  />
                      </td>
                    </tr>
                    <tr v-if="ship.c_hull > 0">
                      <td>Rear Hull</td>
                      <td>{{ ship.c_hull }}</td>
                    </tr>
                    <tr v-if="ship.l_hull > 0">
                      <td>Rear Hull</td>
                      <td>{{ ship.l_hull }}</td>
                    </tr>
                  </tbody>
                </table>
              </CardBox>
            </div>
            <div class="flex flex-col justify-between">
              <CardBox class="mb-2 last:mb-3">
                <h4 class="text-xl">Ship Compartments</h4>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Auxiliary Control</td>
                      <td><Boxes :total=ship.aux  /></td>
                    </tr>
                    <tr>
                      <td>Bridge</td>
                      <td><Boxes :total=ship.bridge  /></td>
                    </tr>
                    <tr>
                      <td>Emergency Bridge</td>
                      <td><Boxes :total=ship.emergency_bridge  /></td>
                    </tr>
                    <tr>
                      <td>Lab</td>
                      <td><Boxes :total=ship.lab  /></td>
                    </tr>
                    <tr>
                      <td>Shuttle Bays</td>
                      <td><Boxes :total=ship.shuttle_bays  /></td>
                    </tr>
                    <tr>
                      <td>Transporter</td>
                      <td><Boxes :total=ship.transporter  /></td>
                    </tr>
                    <tr>
                      <td>Tractor Beam</td>
                      <td><Boxes :total=ship.tractor_beam  /></td>
                    </tr>
                    <tr>
                      <td>Reactor</td>
                      <td><Boxes :total=ship.power_reactor  /></td>
                    </tr>
                    <tr>
                      <td>Impulse Engine</td>
                      <td><Boxes :total=ship.impulse  /></td>
                    </tr>
                    <tr>
                      <td>Battery</td>
                      <td><Boxes :total=ship.battery  /></td>
                    </tr>
                    <tr>
                      <td>Right Warp</td>
                      <td><Boxes :total=ship.r_warp  /></td>
                    </tr>
                    <tr>
                      <td>Left Warp</td>
                      <td><Boxes :total=ship.l_warp  /></td>
                    </tr>
                    <tr v-if="ship.c_warp > 0">
                      <td>Center Warp</td>
                      <td><Boxes :total=ship.c_warp  /></td>
                    </tr>
                  </tbody>
                </table>
              </CardBox>
            </div>
            <div class="flex flex-col justify-between">
              <CardBox class="mb-2">
              <h4 class="text-xl">Weapons</h4>
                <table>
                  <thead>
                    <tr>
                      <th>Location</th>
                      <th>Arc</th>
                      <th>Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr  v-for="weapon in ship.weapons">
                      <td>{{ weapon.location }}</td>
                      <td>{{ weapon.arc }}</td>
                      <td>{{ weapon.name }}</td>
                    </tr>
                  </tbody>
                </table>
              </CardBox>
            </div>
          </div>
          <div class="grid grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
              <div class="flex flex-col justify-between">
                <CardBox class="mb-2">
                  <img :src=ship.ship_image_url style="background-color:white"> 
                </CardBox>
              </div>
              <div class="flex flex-col justify-between">
                <CardBox class="mb-2">
                  <span v-if="ship.id = shipClassId">{{ ship.name }}</span><span v-else>Other {{ ship.ship_class }}</span> Class Ships
                  <TableFormat  :table-data=sortedShipData>
                    <template v-slot:column-ship_counter_url="{ item }">
                      <td data-label="image" class="w-20"> <img :src="item" style="background-color:white" /></td>
                    </template>
                    <template v-slot:column-name="{ item }">
                      <td> {{ item }} </td>
                    </template>
                    
                  </TableFormat>
                  
                  <div class="grid grid-cols-3 gap-3" v-if = "showAddShipsForm">
                    <div >
                      <FormControl v-model="newShip.name" />
                    </div>
                    <div>
                      <FormControl v-model="newShip.registry"/>
                    </div>
                    <div class="flex items-center">
                      <BaseButtons>                    
                        <BaseButton
                         color="danger"
                         label="Save"
                         :small=true
                        @click="saveShip()"
                      />                   
                      <BaseButton
                        color="danger"
                        label="Cancel"
                        :outline=true
                        :small=true
                        @click="cancelSaveShip()"
                      />
                      </BaseButtons>
                    </div>
                  </div>
                  <div class="flex justify-end" v-if = "!showAddShipsForm" >
                    <BaseButtons > 
                      <BaseButton color="info" label="Add Ship to Class" @click="addShipField()" :small=true />
                    </BaseButtons>
                  </div> 
                </CardBox>
              </div>
            </div>
          </div>
      </BaseLevel>
    </BaseLevel>
  </CardBox>
</template>
