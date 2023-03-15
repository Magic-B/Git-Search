<template>
	<header>
		<router-link to="/" class="header_logo">
				<AllIcons name="logo"/>
		</router-link>
		<nav>
			<ul class="menu">
				<router-link to="/author">
					<li class="menu_item">Author</li>
				</router-link>
				<router-link to="/projects">
					<li class="menu_item">More Projects</li>
				</router-link>
			</ul>
		</nav>
</header>
</template>

<script>
import AllIcons from './AllIcons.vue'

export default {
components: {
	AllIcons
},
name: 'MainHeader'
}
</script>
