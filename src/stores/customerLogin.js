import { defineStore } from 'pinia'
import axios from 'axios'
export const useCustomerLoginStore = defineStore('customerLoginStore', {
  state: () => {
    return {
      currentUser: ''
    }
  },
  actions: {
    async store (data) {
      try {
        const response = await axios.post(this.pageInfo.STORE_LOGIN, data)
        const token = response.data.access_token
        if (token) {
          this.currentUser = Object.assign({}, { token })
        }
        return token
      } catch (error) {
        throw error.response.data
      }
    },
    async getUserInfo (token) {
      const header = { headers: { Authorization: 'Bearer ' + token } }
      // GET THE DATA TO SEND
      try {
        const response = await axios.post(this.pageInfo.LOAD_USER_INFO, null, header)
        // ADD USER INFO
        this.currentUser = { ...this.currentUser, ...response.data }
        // RETURN REQUEST
        return true
      } catch (error) {
        throw error.response.data
      }
    },
    async logout () {
      if (!this.currentUser) {
        return true
      }
      // GET THE DATA TO SEND
      try {
        await axios.post(this.pageInfo.LOGOUT)
        this.currentUser = ''
        return true
      } catch (error) {
        throw error.response.data
      }
    }
  },
  getters: {
    getToken: state => {
      return state.currentUser.token
    },
    isLoggedIn: state => {
      return !!state.currentUser
    },
    pageInfo: state => {
      return {
        STORE_LOGIN: process.env.API_URL + 'api/post-login',
        LOAD_USER_INFO: process.env.API_URL + 'api/user-info',
        LOGOUT: process.env.API_URL + 'api/logout'
      }
    }
  },
  persist: true
})
