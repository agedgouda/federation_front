import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'

export const useWeaponStore = defineStore('weapon', () => {
  const weaponTypes = ['Direct-Fire','Seeking']

  async function getWeapons() {
    try {
      const response = await axios.get(import.meta.env.VITE_API_URL+'weapons');
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async function setWeapon(newShip) {
    try {
      const response = await axios.post(import.meta.env.VITE_API_URL+'ships/',
        { 
          "name": newShip.name,
          "ship_class_id": newShip.ship_class_id,
          "registry": newShip.registry,
        }
       )
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  return {
    weaponTypes,
    getWeapons,
    setWeapon,
  }
})
