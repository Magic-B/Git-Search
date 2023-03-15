<template>
  <div class="repos" >
    <div class="repos_scroll">
      <div class="repos_list" v-for="repos in reposData" :key="repos.id">
        <div class="repos_list_items">
          <div class="repos_list_name">{{ repos.name }}</div>
          <div class="repos_list_description">{{ subStrDescription(repos.description) }}</div>
          <div class="repos_list_langstar">
            <div class="repos_list_langstar_lang">{{ repos.language }}</div>
            <div class="repos_list_langstar_star"> <AllIcons name="star"/> {{ repos.stargazers_count }}</div>
          </div>
        </div>
        <a :href="repos.html_url" target="_blank"><button class="repos_list_btn">watch</button></a>
      </div>
      <div v-if="!reposData.length" class="repos_error">
        <div class="repos_error_message">This user does not have a single repository</div>
      </div>
    </div>
  </div>
</template>

<script>
import AllIcons from '../components/AllIcons.vue'

export default {
  props: {
    reposData: {
      type: Object,
      required: true
    }
  },
  components: {
    AllIcons
  },
  methods: {
		subStrDescription (description) {
			if (description?.length > 60) return description.substr(0, 60) + '...'
			return description
		}
	},
}
</script>