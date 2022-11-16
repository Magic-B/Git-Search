<template>
    <div>
        <div class="middle_block">
            <div class="title">Get github profile</div>
            <div class="description">find all the information about the github profile!</div>
            <div class="input_block">
                <input type="text" placeholder="Search" class="input" v-model="userName" @keyup.enter="getGitProfile">
                <button class="input_btn" @click="getGitProfile"><AllIcons name="search"/></button>
            </div>
        </div>

        <transition name="profile" class="animate__animated" enter-active-class="animated animate__fadeIn" leave-active-class="animated animate__fadeOut" mode="out-in">
            <ReviewProfile :profile="gitData" v-if="gitData" />
            <ErrorMessage v-else-if="isNotData"/>
        </transition>
    </div>
</template>


<script>
import ReviewProfile from '../components/ReviewProfile.vue'
import ErrorMessage from '../components/ErrorMessage.vue'
import AllIcons from '../components/AllIcons.vue'
import axios from 'axios'

export default {
    name: 'MainPage',
    components: {ReviewProfile, ErrorMessage, AllIcons},
    data() {
        return {
            userName: '',
            gitData: null,
            isNotData: false,
            loading: true
        }
    },
    methods: {
async   getGitProfile() {
            if (this.userName) {

                this.gitData = null
            await axios.get(`https://api.github.com/users/${this.userName}`)
                .then(response => {
                    this.gitData = response.data
                    this.isNotData = false
                    })
                .catch((e) => {
                    console.log(e)
                    this.isNotData = true
                    this.gitData = null
                })
                console.log(this.gitData)
            }
        }
    }
}
</script>