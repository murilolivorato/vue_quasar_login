<template>
  <!-- content -->

    <div class="columns content-area">
      <div class="column">
        <div class="card ">
          <div class="card-content ">
            <h2>Welcome {{ storeCustomerLogin.currentUser.name }}</h2>
            <p>You Are in Admin Area</p>
          </div>
        </div>
      </div>
    </div>

  <!-- end content -->
</template>

<script setup>
import { useCustomerLoginStore } from 'stores/customerLogin'
const storeCustomerLogin = useCustomerLoginStore()
</script>

<style scoped>
div.content-area {
  padding: 40px;
}
h2 {
  padding-top:20px;
  padding-bottom:20px;
  color: #0c8f2e;
  font-size: 20px;
}
</style>
