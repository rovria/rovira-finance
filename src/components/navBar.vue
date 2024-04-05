<template>
    <nav class="navbar navbar-expand-lg rf-navbar-spacing fixed-top bg-light">
        <a class="navbar-brand" href="#"><img src="../assets/img/logo.svg" alt="" class="navbar-logo-placeholder">
        </a>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="rf-nav-link" aria-current="page" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="rf-nav-link" href="#">Resources</a>
            </li>
            <li class="nav-item">
              <a class="rf-nav-link" href="#">About</a>
            </li>
          </ul>
          <div class="">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a href="#" class="rf-nav-link">Login</a>
                </li>
                <li class="nav-item">
                   <a href="#" class="rf-btn-primary">Booking</a>
                </li>
            </ul>
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
.navbar .fixed-top {
  z-index: 1020; /* Higher values will bring the navbar above other elements */
}
.navbar {
    width: 100%;
    padding: 20px 30px;
}

.navbar-logo-placeholder {
    width: 100%;
    max-width: 270px;
}
.rf-nav-link {
    font-family: 'Neue Montreal', sans-serif;
    font-weight: 500;
    font-size: 1.25em;
    color: black;
    text-decoration: none;
    margin-right: 20px;
}
</style>