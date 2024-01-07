<script setup>
import { computed, ref,watch } from 'vue'
import { useMainStore } from '@/stores/main'
import { mdiCheckDecagram } from '@mdi/js'
import BaseLevel from '@/components/BaseLevel.vue'
import UserAvatarCurrentUser from '@/components/UserAvatarCurrentUser.vue'
import CardBox from '@/components/CardBox.vue'
import FormCheckRadio from '@/components/FormCheckRadio.vue'
import PillTag from '@/components/PillTag.vue'

const mainStore = useMainStore()

const userName = computed(() => mainStore.userName)

const userSwitchVal = ref(false)

const props = defineProps({
  faction: {
    type: Object,
    required: true,
  },
});

const faction = ref(props.faction);
watch(() => props.faction, (newVal) => {
  faction.value = newVal;
});


</script>

<template>
  <CardBox>
    <BaseLevel type="justify-around lg:justify-center">
      <img :src=faction.logo_url width="100"> 
      <div class="space-y-3 text-center md:text-left lg:mx-12">
        <div class="flex justify-center md:block">
        <h1 class="text-2xl">
          <b>{{faction.name}}</b
          >
        </h1>
      </div>
      </div>
    </BaseLevel>
  </CardBox>
</template>
