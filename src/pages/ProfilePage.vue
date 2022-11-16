<template>
	<transition name="profile" class="animate__animated" enter-active-class="animated animate__fadeIn" leave-active-class="animated animate__fadeOut">
		<div class="profile_block" v-if="profileData && profileRepos">
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

			<div class="repos" >
				<div class="repos_scroll">
					<div class="repos_list" v-for="repos in profileRepos" :key="repos.id">
						<div>
							<div class="repos_list_name">{{ repos.name }}</div>
							<div class="repos_list_description">{{ repos.description }}</div>
							<div class="repos_list_langstar">
								<div class="repos_list_langstar_lang">{{ repos.language }}</div>
								<div class="repos_list_langstar_star"> <AllIcons name="star"/> {{ repos.stargazers_count }}</div>
							</div>
						</div>
						<a :href="repos.html_url" target="_blank"><button class="repos_list_btn">watch</button></a>
					</div>
					<div v-if="!profileRepos.length" class="repos_error">
						<div class="repos_error_message">This user does not have a single repository</div>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
import axios from 'axios'
import AllIcons from '../components/AllIcons.vue'

export default {
    components: {AllIcons},
    name: 'ProfilePage',
	props: ['id'],
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
