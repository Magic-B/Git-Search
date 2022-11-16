<template>
    <section class="main_section">
		<img src="@/assets/bg/bg_circle.png" alt="bg" class="circle_bg">
		<div class="container">
			<MainHeader/>
			<router-view v-slot="{ Component, route }">
				<transition 
				:enter-active-class="route.meta.enterClass"
				:leave-active-class="route.meta.leaveClass"
				mode="out-in"
				>
					<component :is="Component"></component>
				</transition>
			</router-view>
		</div>
	</section>
</template>

<script>
import MainHeader from '../components/MainHeader.vue'

export default {
	name: 'MainLayout',
	props: ['profile'],
	components: {MainHeader}
}
</script>
