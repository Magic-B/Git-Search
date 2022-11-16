<template>
	<component :is="`icon-${name}`"/>
</template>

<script>
import IconLogo from './icons/IconLogo.vue'
import IconSearch from './icons/IconSearch.vue'
import IconError from './icons/IconError.vue'
import IconStar from './icons/IconStar.vue'
import IconTelegram from './icons/IconTelegram.vue'
import IconMail from './icons/IconMail.vue'
import IconInstagram from './icons/IconInstagram.vue'
import IconGithub from './icons/IconGithub.vue'

export default {
    name: 'AllIcons',
    props: ['name'],
    components: {IconLogo, IconSearch, IconError, IconStar, IconTelegram, IconMail, IconInstagram, IconGithub}
}
</script>
