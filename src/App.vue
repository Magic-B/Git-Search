<template>
<router-view v-slot="{ Component }">
  <transition name="profile" class="animate__animated" enter-active-class="animated animate__fadeIn" mode="out-in">
    <component :is="Component" />
  </transition>
</router-view>
</template>

<style lang="scss">
@import "@/assets/css/style.scss";
</style>