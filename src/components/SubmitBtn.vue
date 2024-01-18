<template>
    <button :class="classBtn" :disabled="isDisbled" type="submit" >
        <div class="btn-area">
          <span v-if="textbutton" class="text"> {{ textbutton }}</span>
        </div>
    </button>
</template>
<script setup>
import { computed } from 'vue'
const props = defineProps({
  processloading: { type: Boolean },
  textbutton: { type: String, default: null },
  stylebutton: { type: String, default: 'submit_btn' },
  faicon: { type: String, default: null },
  faiconposition: { type: String, default: 'right' },
  hiddenIcon: { type: Boolean, default: false },
  isDisbled: { type: Boolean, default: false }
})
const classBtn = computed(() => {
  return props.processloading !== false ? 'btn-loading  button ' + props.stylebutton : 'button  ' + props.stylebutton
})
</script>
<style scoped>
  @import url("../assets/submit_btn.css");
</style>
