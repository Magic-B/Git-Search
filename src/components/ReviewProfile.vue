<template>
	<div class="review_profile">
		<img :src="profile.avatar_url" alt="profile photo" class="review_profile_img">
		<div class="review_profile_name"> {{ profile.login }} </div>
      <button class="review_profile_btn" @click="goToProfile">more info</button>
	</div>
</template>

<script>
export default {
	props: {
		profile: {
			type: Object,
			required: true
		}
	},
	methods: {
		goToProfile() {
			this.$router.push({ name: 'Profile', params: { id: this.profile.login } })
		}
	}
}
</script>
