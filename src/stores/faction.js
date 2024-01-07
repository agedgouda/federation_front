import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'

export const useFactionStore = defineStore('faction', () => {
  const userName = ref('John Doe')
  const userEmail = ref('doe.doe.doe@example.com')

  const userAvatar = computed(
    () =>
      `https://api.dicebear.com/7.x/avataaars/svg?seed=${userEmail.value.replace(
        /[^a-z0-9]+/gi,
        '-'
      )}`
  )

  const isFieldFocusRegistered = ref(false)

  const clients = ref([])
  const factions = ref([])
  const history = ref([])

  function setUser(payload) {
    if (payload.name) {
      userName.value = payload.name
    }
    if (payload.email) {
      userEmail.value = payload.email
    }
  }

  function fetchSampleClients() {
    
    axios
      .get(`data-sources/clients.json?v=3`)
      .then((result) => {
        factions.value = result?.data?.data
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  async function getFactions() {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/factions/');
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }


  async function getFaction(id) {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/factions/'+id);
      return response.data.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }



  function fetchSampleHistory() {
    axios
      .get(`data-sources/history.json`)
      .then((result) => {
        history.value = result?.data?.data
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  return {
    userName,
    userEmail,
    userAvatar,
    isFieldFocusRegistered,
    clients,
    factions,
    history,
    setUser,
    getFactions,
    getFaction,
    fetchSampleClients,
    fetchSampleHistory
  }
})
