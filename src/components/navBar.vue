<template>
    <nav>
        <div class="container">
            <div class="nav-left">
                <img src="../assets/img/inverse-logo.svg" alt="" class="logo">
                <div class="nav-link-wrapper">
                    <a href="" class="nav-link">Services</a>
                    <a href="" class="nav-link">Resources</a>
                </div>
            </div>
            <div class="nav-right">
                        <a href="" class="nav-link">Login</a>
                    <button class="nav-btn">Booking</button>
                    <div class="menu"><span></span><span></span><span></span></div>
                    </div>
            </div>
    </nav>
</template>
<script>
export default {
  name: 'navBar',
  props: {
    msg: String
  }
}
</script>
<style>
.container {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
}
nav {
    width: 100%;
    height: 120px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    position: fixed;
    z-index: 100;
}
.logo {
    max-width: 100%;
    width: 15vw;
    height: auto;
}
.nav-left {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
}
.nav-link-wrapper {
    margin-left: 60px;
}
.nav-link {
    font-size: 18px;
    font-weight: 500;
    color: white;
    text-decoration: none;
    margin-right: 20px;
}
.nav-btn { 
    padding: 20px 40px;
    font-size: 18px;
    background-color: white;
    text-decoration: none;
    color: black;
    font-weight: 500;
    border-radius: 1000px;
    border: none;
    cursor: pointer; /* Change cursor to pointer */
    outline: none; /* Remove outline when focused */
    margin: 0; /* Remove margin */
}


</style>