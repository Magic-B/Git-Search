<template>
  <div class="user_info">
    <img :src="profileData.avatar_url" alt="profile photo" class="user_info_img">
    <div class="user_info_name">{{ profileData.name }}</div>
    <div class="user_info_login">{{ profileData.login }}</div>
    <div v-if="profileData.bio" class="user_info_description">{{ profileData.bio }}</div>
    <div class="user_info_follow">{{ profileData.followers }} followers · {{profileData.following}} following</div>
    <template v-for="field in ['job', 'email', 'company', 'blog', 'location', 'hireable']" :key="field">
      <div class="user_info_item" v-if="profileData[field]">
        {{profileData[field]}}
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    profileData: {
      type: Object,
      required: true
    }
  }
}
</script>