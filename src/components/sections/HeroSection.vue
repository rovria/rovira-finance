<template>
<section class="HeroSection">
    <div class="container">
        <div class="hero__inner-wrapper">
            <div class="hero__txt-wrapper">
                <h1 class="hero-heading">Empower Your Financial Journey</h1>
                <h2 class="hero-subheading">Expert Tax Services Tailored to Your Unique Needs.</h2>
                <RoviraButton type="Secondary" />
            </div>
        </div>
    </div>
    <img src="../../assets/imgs/hero.jpg" alt="" class="bg-img">
</section>
</template>
<script>
import RoviraButton from '@/components/common/Button.vue'

export default {
    name: 'HeroSection',
    components: {
        RoviraButton,
    }
}
</script>
<style lang="scss" scoped>
@import '../../assets/styles/variables';

.HeroSection {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    margin-top: 0;
    margin-bottom: 0;
}
.bg-img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: -1;
}
.hero__inner-wrapper {
    display: grid;
    grid-template-columns: 2fr 1fr;
    height: 100%;
    margin-top: 25vh;
}
.hero-heading {
    color: #FFF;
font-family: "Neue Montreal";
font-size: 120px;
font-style: normal;
font-weight: 400;
line-height: 125px; /* 104.167% */
letter-spacing: -1.2px;
}
.hero-subheading {
    color: #FFF;
    width: 55%;
    margin-top: 2rem;
font-family: "Neue Montreal";
font-size: 36px;
font-style: normal;
font-weight: 400;
line-height: 49px; /* 136.111% */
letter-spacing: -0.36px;
margin-bottom: 4rem;
}
</style>