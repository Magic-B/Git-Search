<template>
<div class="author">
  <img class="author_img" src="https://avatars.githubusercontent.com/u/98234222?v=4" alt="profile photo">
  <div class="author_name">Magic-B</div>
  <div class="flex_container">
    <a href="https://github.com/Magic-B" target="_blank" rel="noopener noreferrer"><AllIcons name="github"/></a>
    <a href="https://telegram.me/M273m" target="_blank" rel="noopener noreferrer"><AllIcons name="telegram"/></a>
    <AllIcons @click="mail = !mail" name="mail"/>
    <AllIcons name="instagram"/>
  </div>
  <transition name="profile" class="animate__animated" enter-active-class="animated animate__fadeIn" leave-active-class="animated animate__fadeOut" mode="out-in">
    <div class="author_mail" v-if="mail">majorheby@gmail.com</div>
  </transition>
</div>
</template>

<script>
import AllIcons from '../components/AllIcons.vue'
export default {
    name: 'ProjectsPage',
    components: {AllIcons},
    data() {
      return {
        mail: false
      }
    }
}
</script>

<style>

</style>