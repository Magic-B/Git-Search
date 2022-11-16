<template>
	<div class="review_profile">
		<img :src="profile.avatar_url" alt="profile photo" class="review_profile_img">
		<div class="review_profile_name"> {{ profile.login }} </div>
        <button class="review_profile_btn" @click="$router.push({ name: 'Profile', params: { id: profile.login } })">more info</button>
	</div>
</template>

<script>
export default {
    name: 'ReviewProfile',
    props: ['profile'],
}
</script>

<style lang="scss" scoped>
.review_profile {
    width: 100%;
    margin-top: 35px;
 
    &_img {
        display: block;
        margin: 0 auto;
        text-align: center;
        color: #fff;
        width: 130px;
        height: 130px;
        border-radius: 65px;
    }
    &_name {
        margin-top: 10px;
        text-align: center;
        color: #fff;
        font-family: 'NanumGothic', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
    }
    &_btn {
        all: unset;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 800;
        font-size: 16px;
        
        display: block;
        margin: 0 auto;
        margin-top: 10px;
        text-align: center;
        cursor: pointer;
        background: #fff;
        color: #2EA44F;
        width: 110px;
        height: 40px;
        border-radius: 50px;
        transition: all .4s;
    }
    &_btn:hover {
        box-shadow: 0 0 5px #fff;
    }
}
</style>
