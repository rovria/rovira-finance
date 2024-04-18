<template>
<div class="footer">
<div class="container">

  <div class="footer-inner-wrapper">
  <div class="footer-col">
    <h1 class="footer-h" style="width: 407px; margin-right: 100px;">Experts in Tax preparation solutions
for students, graduates, and newcomers
we put money back in your pocket.</h1>
      <a href="footer_btn"></a>
  </div>
  <div class="footer-col">
    <h1 class="footer-h">Navigation</h1>
    <a href="" class="footer-link">Home</a>
    <a href="" class="footer-link">Services</a>
    <a href="" class="footer-link">About Us</a>
    <a href="" class="footer-link">Resources</a>
    <a href="" class="footer-link">Booking</a>
  </div>
  <div class="footer-col">
    <h1 class="footer-h">Follow Us</h1>
    <a href="" class="footer-link">X</a>
    <a href="" class="footer-link">Instagram</a>
    <a href="" class="footer-link">Facebook</a>
    <a href="" class="footer-link">Linkedin</a>
  </div>
  <div class="footer-col">
    <h1 class="footer-h">Address</h1>
    <p class="footer-link">11 Arboretum Ln<br>Toronto, ON<br>Canada</p>
  </div>
</div>


<div class="footer-bottom-wrapper">
  <div class="footer-bot-col-1">
    <a href="" class="footer-bot-link margin_right_10">Terms</a>
    <a href="" class="footer-bot-link">Privacy Policy</a>
  </div>
  <div class="footer-bot-col-2">
    <p class="footer-bot-link">Copyright © Rovira Finance 2024</p>
  </div>
  <div class="footer-bot-col-3">
    <a href="" class="footer-bot-link">Site by Rovira Studios</a>
  </div>
</div>
</div>
</div>
</template>
<script>

export default {
  name: 'footerBar',
  props: {
    msg: String
  }
}
</script>
<style>
.footer {
  width: 100%;
  padding-top: 60px;
  padding-bottom: 20px;
  border-top: 1px solid gray;
}
.footer-inner-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 0.5fr;
  border: 1px solid red;
}
.footer-h {
  color: black;
  font-size: 24px;
  font-weight: 500;
  line-height: 34px;
  letter-spacing: -0.24px;
}
.footer-link {
  color: #B7B7B7;
  font-size: 20px;
  font-weight: 500;
  line-height: 34px;
  letter-spacing: -0.24px;
  text-decoration: none;
}
.footer-col {
  display: flex;
  flex-direction: column;
}
.footer-bottom-wrapper {
 display: flex;
 width: 100%;
 flex-direction: row;
 justify-content: space-between;
 margin-top: 8rem;
}
.footer-bot-link {
  color: #B7B7B7;
  font-size: 15px;
  font-weight: 500;
  line-height: 34px;
  letter-spacing: -0.18px;
  text-decoration: none;
}
</style>