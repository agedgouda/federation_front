import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'

export const useShipStore = defineStore('ship', () => {
  const ships = ref([])


  async function getFactionClasses(id) {
    try {
      const response = await axios.get(import.meta.env.VITE_API_URL+'ships/class/faction/'+id);
      return response.data.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async function getClassShips(id) {
    try {
      const response = await axios.get(import.meta.env.VITE_API_URL+'ships/class/'+id);
      return response.data.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  return {
    ships,
    getFactionClasses,
    getClassShips,
  }
})
