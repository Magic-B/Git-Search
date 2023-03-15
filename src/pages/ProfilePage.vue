<template>
	<transition name="profile" class="animate__animated" enter-active-class="animated animate__fadeIn" leave-active-class="animated animate__fadeOut">
		<div class="profile_block" v-if="profileData && profileRepos">
			<ProfileInfo :profile-data="profileData"/>
			<ReposList :repos-data="profileRepos"/>
		</div>
	</transition>
</template>

<script>
import axios from 'axios'
import ReposList from '@/components/ReposList.vue'
import ProfileInfo from '@/components/ProfileInfo.vue'

export default {
	name: 'ProfilePage',
	props: ['id'],
	components: {
		ReposList, ProfileInfo
	},
	data() {
		return {
			profileData: null,
			profileRepos:null
		}
	},
	mounted() {
		axios.get(`https://api.github.com/users/${this.id}`)
		.then(response => this.profileData = response.data)
		.catch((e) => {
			console.log(e)
		})

		axios.get(`https://api.github.com/users/${this.id}/repos`)
		.then(response => this.profileRepos = response.data)
		.catch((e) => {
			console.log(e)
		})
	}
}
</script>
