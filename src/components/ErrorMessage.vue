<template>
	<div class="error">
		<AllIcons name="error" class="error_icon"/>
		<div class="error_title">It looks like the profile you are looking for is well hidden!</div>
	</div>
</template>

<script>
import AllIcons from './AllIcons.vue'

export default {
    name: 'ErrorMessage',
    components: {AllIcons}
}
</script>

<style scoped lang="scss">
    .error {
        width: 100%;
        margin-top: 50px;
        &_icon {
            display: block;
            margin: 0 auto;
            width: 100px;
            height: 100px;
        }
        &_title {
            text-align: center;
            color: #fff;
            margin-top: 10px;
        }
    }
</style>

