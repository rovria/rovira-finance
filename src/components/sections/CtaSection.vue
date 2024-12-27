<template>
    <section class="CtaSection">
        <div class="container">
           <div class="cta__inner-wrapper">
            <h2 class="cta__label">Get to know us</h2>
            <h1 class="cta__heading">Discover Our Mission and the Success Stories We Build for Clients like you.</h1>
            <RoviraButton type="Secondary" />
           </div>
        </div>
    </section>
</template>
<script>
import RoviraButton from '@/components/common/Button.vue'

export default {
    name: 'CtaSection',
    components: {
        RoviraButton,
    },
}
</script>
<style lang="scss" scoped>
.container {
    height: 100%;
}
.CtaSection {
    width: 100%;
    height: 1080px;
    background-color: #001044;
}
.cta__inner-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
}
.cta__heading {
    color: #FFF;

text-align: center;
font-family: "Neue Montreal";
font-size: 85px;
font-style: normal;
font-weight: 400;
line-height: 105px; /* 123.529% */
letter-spacing: -0.85px;
width: 1272px;
margin-bottom: 5rem;
}
.cta__label {
    color: #FFF;

font-family: "Neue Montreal";
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: 35px; /* 145.833% */
letter-spacing: -0.24px;
margin-bottom: 1rem;
}
</style>