<template>
<section class="IntroSection">
    <div class="container">
        <div class="intro__inner-wrapper">
           <div class="intro-img">
            <img src="../../assets/imgs/rovira-finance_img_1.png" alt="">
           </div>
            <div class="intro__txt-wrapper">
                <h1 class="intro-heading">A team of seasoned experts.</h1>

                <div class="intro__inner-txt-wrapper">
                <h2 class="intro-subheading">Affordable Modern Tax Solutions for Everyone</h2>
                <p class="intro-para">Rovira Finance specializes in digital tax preparation for students, graduates, newcomers, and partners in Toronto. Our team ensures maximum refunds with affordable, professional services in English, Spanish, and Italian. Simplify tax season with personalized solutions designed to meet your needs.</p>
                <RoviraButton />
                </div>
            </div>
        </div>
    </div>
</section>
</template>
<script>

import RoviraButton from '@/components/common/Button.vue'

export default {
    name: 'IntroSection',
    components: {
        RoviraButton,
    }
}
</script>
<style lang="scss">
.intro-img {
width: 876px;
height: 1095px;
border-radius: 10px;
overflow: hidden;

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;

    }
}
.intro__inner-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 5rem;
}
.intro-heading {
    color: #001044;

font-family: "Neue Montreal";
font-size: 80px;
font-style: normal;
font-weight: 400;
line-height: 82px; /* 102.5% */
letter-spacing: -0.8px;
}
.intro__inner-txt-wrapper {

}
.intro__txt-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    padding-top: 2rem;
    padding-bottom: 2rem;
}
</style>