<template>
    <nav class="navbar">
      <div class="container">
        <div class="navbar-wrapper">
          <div class="left-link-wrapper">
            <a href="" class="brand"><img src="../assets/img/inverse-logo.svg" alt=""></a>
          <div class="left-inner-link-wrapper">
            <a href="" class="nav-link">Services</a>
            <a href="" class="nav-link">Resources</a>
            <a href="" class="nav-link">About</a>
          </div>
          </div>
          <div class="right-link-wrapper">
            <a href="" class="nav-link">Login</a>
            <a href="" class="nav-btn">Booking</a>
          </div>
          <div class="menu-btn">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div class="navbar-bg"></div>
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
  .navbar {
    border: 1px solid red;
    position: fixed;
    top: 0;
    width: 100%;
  }
  .brand img{
    max-width: 100%;
    width: 20rem;
  }
  .left-inner-link-wrapper {
    display: flex;
    align-content: center;
    align-items: center;
  }
  .navbar-wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    color: white;
  }
  .left-link-wrapper {
    display: flex;
    align-items: center;
    align-content: center;
  }
  .right-link-wrapper {
    display: flex;
    align-items: center;
  }
  .nav-link {
    font-weight: 500;
    font-size: 1.1em;
    color: white;
    font-family: 'Neue Montreal', sans-serif;
  }
  .nav-btn {
    padding: 20px 30px;
    background-color: white;
    font-weight: 500;
    color: black;
    border-radius: 1000px;
  }
  .menu-btn span {
    width: 40px;
    height: 2px;
    background-color: white;
    margin-top: 5px;
  }
  .menu-btn {
    display: flex;
    flex-direction: column;
  }
</style>