<template>
  <div>
    <section class="hero is-fullheight" >
      <div class="hero-body" >
        <div class="container">
            <router-view :key="$route.fullPath" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
</script>

<style scoped>

</style>
