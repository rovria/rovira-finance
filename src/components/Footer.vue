<script>
export default {
  name: 'Footer',
};
</script>
<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="grid__columns-4">
          <div class="grid__footer_items">
            <h2 class="footer__title">
              Experts in Tax preparation solutions for students, graduates, and
              newcomers we put money back in your pocket.
            </h2>
          </div>
          <div class="grid__footer-items grid-end">
            <h2 class="footer__label">Navigation</h2>
            <ul>
              <li><a href="" class="footer__link">Home</a></li>
              <li><a href="" class="footer__link">Services</a></li>
              <li><a href="" class="footer__link">About Us</a></li>
              <li><a href="" class="footer__link">Contact</a></li>
            </ul>
          </div>
          <div class="grid__footer-items grid-end">
            <h2 class="footer__label">Follow Us</h2>
            <ul>
              <li><a href="" class="footer__link">Twitter</a></li>
              <li><a href="" class="footer__link">Instagram</a></li>
              <li><a href="" class="footer__link">Facebook</a></li>
              <li><a href="" class="footer__link">Linkedin</a></li>
            </ul>
          </div>
          <div class="grid__footer-items grid-end">
            <h2 class="footer__label">Address</h2>
            <h2 class="footer__link">
              11 Arboretum Ln<br />Toronto, ON<br />Canada
            </h2>
          </div>
        </div>
        <div class="grid__columns-3 footer__spacing">
          <div class="grid__footer_items">
            <ul class="footer__list">
              <li class="footer__bread bread-space"><a href="">Terms</a></li>
              <li class="footer__bread"><a href="">Privacy Policy</a></li>
            </ul>
          </div>
          <div class="grid__footer_items grid-center">
            <p class="footer__bread">Copyright © Rovira Tax Studio 2024</p>
          </div>
          <div class="grid__footer_items grid-end">
            <a href="" class="footer__bread">Site by Rovira Studio</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<style>
/* Footer Section */
.footer {
  border: 1px solid #d6d6d6;
  padding-top: 4.375rem;
  padding-bottom: 1rem;
  margin-top: 10.938rem;
  width: 100%;
}
.footer__content {
  width: 100%;
}
.footer__title {
  color: black;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 34px; /* 141.667% */
  letter-spacing: -0.24px;
}
.footer__label {
  color: black;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 34px; /* 141.667% */
  letter-spacing: -0.24px;
}
.footer__link {
  color: #b7b7b7;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 34px; /* 141.667% */
  letter-spacing: -0.24px;
  text-decoration: none;
}
.footer__spacing {
  margin-top: 10rem;
}
.footer__list {
  display: flex;
  flex-direction: row;
}
.bread-space {
  margin-right: 1rem;
}
.footer__bread {
  color: #b7b7b7;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 34px; /* 188.889% */
  letter-spacing: -0.18px;
  text-decoration: none;
}
.footer__bread a {
  color: #b7b7b7;
  text-decoration: none;
}
</style>
