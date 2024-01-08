<script setup>
import { computed,ref,onMounted } from 'vue'
import { mdiCashMinus, mdiCashPlus, mdiReceipt, mdiCreditCardOutline } from '@mdi/js'
import CardBox from '@/components/CardBox.vue'
import BaseLevel from '@/components/BaseLevel.vue'
import PillTag from '@/components/PillTag.vue'
import IconRounded from '@/components/IconRounded.vue'
import TableFormat from '@/components/TableFormat.vue'
import { useShipStore } from '@/stores/ship'

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



</script>

<template>
  
  <CardBox class="mb-6 last:mb-0">
    <BaseLevel>
      <BaseLevel type="justify-start">
        <div class="text-center space-y-1 md:text-left md:mr-6">
          <h4 class="text-xl">{{ ship.faction_identifier }} {{ ship.name }} <span class="italic">{{ ship.registry }}</span></h4>
          <h3>{{ ship.ship_class }} <span v-if="ship.ship_class == 'Lead ship'">of class</span><span v-else>class</span></h3>
          <div>{{ ship.type }} </div>
          <div>Ship Power: {{ ship.power }} </div>
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
                      <td>{{ ship.shield_1 }}</td>
                    </tr>
                    <tr>
                      <td>Shield 2</td>
                      <td>{{ ship.shield_2 }}</td>
                    </tr>
                    <tr>
                      <td>Shield 3</td>
                      <td>{{ ship.shield_3 }}</td>
                    </tr>
                    <tr>
                      <td>Forward Hull</td>
                      <td>{{ ship.f_hull }}</td>
                    </tr>
                    <tr>
                      <td>Rear Hull</td>
                      <td>{{ ship.r_hull }}</td>
                    </tr>
                    <tr v-if="ship.c_hull > 0">
                      <td>Rear Hull</td>
                      <td>{{ ship.r_hull }}</td>
                    </tr>
                    <tr v-if="ship.l_hull > 0">
                      <td>Rear Hull</td>
                      <td>{{ ship.r_hull }}</td>
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
                      <td>{{ ship.aux }}</td>
                    </tr>
                    <tr>
                      <td>Bridge</td>
                      <td>{{ ship.bridge }}</td>
                    </tr>
                    <tr>
                      <td>Emergency Bridge</td>
                      <td>{{ ship.emergency_bridge }}</td>
                    </tr>
                    <tr>
                      <td>Lab</td>
                      <td>{{ ship.lab }}</td>
                    </tr>
                    <tr>
                      <td>Shuttle Bays</td>
                      <td>{{ ship.shuttle_bays }}</td>
                    </tr>
                    <tr>
                      <td>Transporter</td>
                      <td>{{ ship.transporter }}</td>
                    </tr>
                    <tr>
                      <td>Tractor Beam</td>
                      <td>{{ ship.tractor_beam }}</td>
                    </tr>
                    <tr>
                      <td>Reactor</td>
                      <td>{{ ship.power_reactor }}</td>
                    </tr>
                    <tr>
                      <td>Impulse Engine</td>
                      <td>{{ ship.impulse }}</td>
                    </tr>
                    <tr>
                      <td>Battery</td>
                      <td>{{ ship.battery }}</td>
                    </tr>
                    <tr>
                      <td>Right Warp</td>
                      <td>{{ ship.r_warp }}</td>
                    </tr>
                    <tr>
                      <td>Left Warp</td>
                      <td>{{ ship.l_warp }}</td>
                    </tr>
                    <tr v-if="ship.c_warp > 0">
                      <td>Center Warp</td>
                      <td>{{ ship.c_warp }}</td>
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
                </CardBox>
              </div>
            </div>
          </div>
      </BaseLevel>
    </BaseLevel>
  </CardBox>
</template>
