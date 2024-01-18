<template>
  <div class="columns  is-centered">
    <div class="box column is-8">
      <div class="columns header-text-msg">
        <div class="column">
          <h1>Admin Area </h1>
        </div>
      </div>
      <form  @submit.prevent="storeForm()">
        <div class="columns">
          <div class="column">
            <div class="form-group">
              <label  class="txt1 p-b-20">E-mail</label >
              <input class="form-control ipone" type="text" v-model="form.email"  >
              <p class="error-msg" v-if="errors.has('form.email')" v-text="errors.get('form.email')"></p>
            </div>
            <div class="form-group">
              <label  class="txt1 p-b-20 p-t-15">Password</label >
              <input class="form-control ipone" type="password" v-model="form.password"  >
              <p class="error-msg" v-if="errors.has('form.password')" v-text="errors.get('form.password')"></p>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="container-login100-form-btn">
              <submit-btn :processloading="processingForm" stylebutton="btn_cl_left btn-green-md1" textbutton="Login" ></submit-btn>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import useErrors from 'src/use/useErrors.js'
import SubmitBtn from 'src/components/SubmitBtn.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const form = reactive({ email: '', password: '' })
const processingForm = ref(false)
const errors = useErrors()

import { useCustomerLoginStore } from 'stores/customerLogin'
const storeCustomerLogin = useCustomerLoginStore()

const storeForm = () => {
  // PROCESSING
  processingForm.value = true
  // STORE LOGIN
  storeCustomerLogin.store(form).then((token) => {
    // SET USER INFO
    storeCustomerLogin.getUserInfo(token).then((res) => {
      // PROCESSING
      processingForm.value = false
      // REDIRECT PAGE
      router.push({ name: 'AdminHome' })
      // window.location.href = '/admin/home'
    })
  }).catch(error => {
    // PROCESSING
    processingForm.value = false
    // PRINT ERROR
    errors.record(error.errors, 'form')
  })
}
</script>

<style scoped>
div.box {
  padding: 60px !important;
}
</style>
