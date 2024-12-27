<template>
<div class="header">
    <div class="container">
       <div class="header__inner-wrapper">
        <div class="left-section__wrapper">
            <a href="" class="brand">
                <BrandIcon class="BrandIcon" />
            </a>

            <ul class="nav-links">
                <li><router-link>Services</router-link></li>
                <li><router-link>About Us</router-link></li>
            </ul>
        </div>
        <a href="" class="cta-button">Booking</a>
       </div>
    </div>
</div>
</template>
<script>
import BrandIcon from '@/assets/icons/brand.svg'
export default {
    name: 'Header',
    components: {
        BrandIcon,
    },
}
</script>
<style lang="scss" scoped>
.brand {
    margin-right: 2rem;
}
.BrandIcon path {
    fill: white;
}
.header {
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
}
.left-section__wrapper {
    display: flex;
    flex-direction: row;
    justify-content:flex-start;
    align-items: flex-end;
}
.header__inner-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.nav-links {
    display: flex;
    flex-direction: row;

    li {
        font-weight: 500;
        padding-left: 1rem;
        padding-right: 1rem;
        color: white;
    }
    li a {
        color: white;
    }
}
.cta-button {
    background-color: white;
    color:#001044;
    font-weight: 500;
    width: 158px;
    height: 64px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    transition: 1s all ease;
}
.cta-button:hover {
    background-color: white;
}
</style>