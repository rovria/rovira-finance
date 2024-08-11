<script>
export default {
  name: 'Header',
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
<template>
  <header class="header">
    <div class="container">
      <div class="header__container">
        <!-- Desktop Navigation -->
        <div class="header__column">
          <a href="/" class="header__brand">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 312 39"
              fill="none"
            >
              <path
                d="M293.102 38.4233H272.554V9.57544H293.102V14.3359H277.803V21.0495H291.271V25.7693H277.803V33.6628H293.102V38.4233Z"
              />
              <path
                d="M270.075 29.2277C269.804 31.8317 268.882 33.9339 267.309 35.5343C265.084 37.8128 262.331 38.9521 259.049 38.9521C255.74 38.9521 253.013 37.8806 250.871 35.7377C249.433 34.3001 248.47 32.6726 247.982 30.8552C247.521 29.0107 247.29 26.7321 247.29 24.0196C247.29 21.3071 247.521 19.0421 247.982 17.2247C248.47 15.3802 249.433 13.7391 250.871 12.3014C253.041 10.1314 255.767 9.04639 259.049 9.04639C262.385 9.04639 265.139 10.1585 267.309 12.3828C268.882 13.9832 269.804 16.0719 270.075 18.6488H264.705C264.596 17.5366 264.162 16.5194 263.403 15.5972C262.453 14.4036 261.002 13.8069 259.049 13.8069C257.286 13.8069 255.807 14.4443 254.614 15.7192C253.99 16.3702 253.515 17.2382 253.19 18.3233C252.891 19.4083 252.715 20.317 252.661 21.0494C252.634 21.7817 252.62 22.7718 252.62 24.0196C252.62 25.2674 252.634 26.2574 252.661 26.9898C252.715 27.7222 252.891 28.6309 253.19 29.7159C253.515 30.8009 253.99 31.6689 254.614 32.3199C255.807 33.5948 257.286 34.2323 259.049 34.2323C260.975 34.2323 262.426 33.622 263.403 32.4013C264.162 31.4791 264.596 30.4212 264.705 29.2277H270.075Z"
              />
              <path
                d="M244.304 38.4233H238.892L226.401 18.6082V38.4233H221.233V9.57544H226.808L239.136 29.1057V9.57544H244.304V38.4233Z"
              />
              <path
                d="M219.904 38.4233H214.411L212.539 32.8897H201.065L199.194 38.4233H193.904L204.036 9.57544H209.773L219.904 38.4233ZM210.912 28.1699L206.802 16.0042L202.693 28.1699H210.912Z"
              />
              <path
                d="M192.545 38.4233H187.134L174.642 18.6082V38.4233H169.475V9.57544H175.049L187.378 29.1057V9.57544H192.545V38.4233Z"
              />
              <path d="M164.76 38.4233H159.43V9.57544H164.76V38.4233Z" />
              <path
                d="M157.482 14.3359H142.794V22.0667H155.895V26.8272H142.794V38.4233H137.545V9.57544H157.482V14.3359Z"
              />
              <path
                d="M129.747 38.4233H124.254L122.382 32.8897H110.908L109.037 38.4233H103.747L113.878 9.57544H119.615L129.747 38.4233ZM120.755 28.1699L116.645 16.0042L112.536 28.1699H120.755Z"
              />
              <path
                d="M104.513 38.4233H98.8165L94.0154 27.5189H87.6273V38.4233H82.3379V9.57544H94.5036C97.7587 9.57544 100.241 10.4435 101.95 12.1795C103.658 13.8884 104.513 16.0042 104.513 18.5268C104.513 20.4256 104.025 22.1074 103.048 23.5721C102.099 25.0098 100.824 26.027 99.2234 26.6237L104.513 38.4233ZM99.2641 18.5268C99.2641 17.3062 98.8301 16.2754 97.9621 15.4345C97.0941 14.5936 95.9413 14.1732 94.5036 14.1732H87.5866V22.7991H94.585C96.0769 22.7991 97.2297 22.4329 98.0435 21.7005C98.8572 20.941 99.2641 19.8831 99.2641 18.5268Z"
              />
              <path d="M77.6231 38.4233H72.293V9.57544H77.6231V38.4233Z" />
              <path
                d="M70.9359 9.57544L61.4556 38.4233H55.6779L46.1162 9.57544H51.6905L58.6888 31.5877L65.6465 9.57544H70.9359Z"
              />
              <path
                d="M47.0427 24.0196C47.0427 26.6779 46.785 28.9293 46.2697 30.7738C45.7814 32.6183 44.8185 34.2594 43.3808 35.6971C41.2108 37.8671 38.444 38.9521 35.0804 38.9521C31.7169 38.9521 28.9501 37.8671 26.7801 35.6971C25.3424 34.2594 24.3659 32.6183 23.8505 30.7738C23.3623 28.9293 23.1182 26.6779 23.1182 24.0196C23.1182 21.3342 23.3623 19.0692 23.8505 17.2247C24.3659 15.3802 25.3424 13.7391 26.7801 12.3014C28.9501 10.1314 31.7169 9.04639 35.0804 9.04639C38.444 9.04639 41.2108 10.1314 43.3808 12.3014C44.8185 13.7391 45.7814 15.3802 46.2697 17.2247C46.785 19.0692 47.0427 21.3342 47.0427 24.0196ZM41.7126 24.0196C41.7126 19.9237 41.0209 17.1569 39.6375 15.7192C38.444 14.4443 36.925 13.8069 35.0804 13.8069C33.2359 13.8069 31.7169 14.4443 30.5234 15.7192C29.14 17.1569 28.4483 19.9237 28.4483 24.0196C28.4483 25.186 28.4754 26.1625 28.5297 26.9491C28.5839 27.7358 28.7738 28.658 29.0993 29.7159C29.4248 30.7738 29.8995 31.6283 30.5234 32.2793C31.7169 33.5542 33.2359 34.1916 35.0804 34.1916C36.925 34.1916 38.444 33.5542 39.6375 32.2793C40.2614 31.6283 40.7361 30.7738 41.0616 29.7159C41.3871 28.658 41.577 27.7358 41.6312 26.9491C41.6855 26.1625 41.7126 25.186 41.7126 24.0196Z"
              />
              <path
                d="M22.175 38.4233H16.4787L11.6775 27.5189H5.28945V38.4233H0V9.57544H12.1657C15.4208 9.57544 17.9027 10.4435 19.6116 12.1795C21.3205 13.8884 22.175 16.0042 22.175 18.5268C22.175 20.4256 21.6867 22.1074 20.7102 23.5721C19.7608 25.0098 18.4859 26.027 16.8855 26.6237L22.175 38.4233ZM16.9262 18.5268C16.9262 17.3062 16.4922 16.2754 15.6242 15.4345C14.7562 14.5936 13.6034 14.1732 12.1657 14.1732H5.24876V22.7991H12.2471C13.739 22.7991 14.8918 22.4329 15.7056 21.7005C16.5193 20.941 16.9262 19.8831 16.9262 18.5268Z"
              />
              <path
                d="M311.053 7.4866C311.053 9.67019 310.341 11.4672 308.917 12.8778C307.506 14.2747 305.709 14.9732 303.526 14.9732C301.342 14.9732 299.538 14.2747 298.114 12.8778C296.704 11.4672 295.999 9.67019 295.999 7.4866C295.999 5.33013 296.711 3.54664 298.135 2.13612C299.572 0.712041 301.369 0 303.526 0C305.682 0 307.473 0.712041 308.897 2.13612C310.334 3.54664 311.053 5.33013 311.053 7.4866ZM307.554 11.5961C308.612 10.5111 309.141 9.14125 309.141 7.4866C309.141 5.83195 308.619 4.46212 307.574 3.37711C306.53 2.29209 305.18 1.74959 303.526 1.74959C301.871 1.74959 300.522 2.29209 299.477 3.37711C298.433 4.46212 297.911 5.83195 297.911 7.4866C297.911 9.15481 298.426 10.5314 299.457 11.6164C300.501 12.6879 301.858 13.2236 303.526 13.2236C305.167 13.2236 306.51 12.6811 307.554 11.5961ZM306.618 11.0671H304.645L303.648 8.62587H302.692V11.0671H300.8V3.64158H303.75C304.563 3.64158 305.235 3.86536 305.764 4.31293C306.293 4.74694 306.557 5.36404 306.557 6.16424C306.557 7.18144 306.171 7.87992 305.397 8.25967L306.618 11.0671ZM304.645 6.10321C304.645 5.84552 304.557 5.65564 304.38 5.53357C304.218 5.39795 304.007 5.33013 303.75 5.33013H302.671V6.93731H303.75C304.346 6.93731 304.645 6.65928 304.645 6.10321Z"
              />
            </svg>
          </a>
          <nav class="header__nav">
            <ul>
              <li class="desktop__nav-list">
                <a href="/Services" class="desktop__nav-link">Services</a>
              </li>
              <li class="desktop__nav-list">
                <a href="/About" class="desktop__nav-link">About Us</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="header__column">
          <div class="hamburger__container">
            <div class="hamburger-menu" @click="toggleMenu">
              <div
                class="line"
                :class="{ 'line-top-open': isOpen, 'line-top-closed': !isOpen }"
              />
              <div
                class="line"
                :class="{
                  'line-bottom-open': isOpen,
                  'line-bottom-closed': !isOpen,
                }"
              />
            </div>
          </div>
          <div class="header__btn">
            <a href="#" class="button button__lang lang__margin">Sp</a>
            <a href="/Contact" class="button button__cta">Booking</a>
          </div>
        </div>
      </div>
    </div>
    <!-- Mobile Fullscreen Navigation -->
    <div class="header__mobile__container">
      <div class="container">
        <div class="header__mobile__content">
          <nav class="mobile__nav-big">
            <ul>
              <li class="mobile__nav-list">
                <a href="/Services" class="mobile__nav-link-big"
                  >What we Offer</a
                >
              </li>
              <li class="mobile__nav-list">
                <a href="/About" class="mobile__nav-link-big">What We Do</a>
              </li>
              <li class="mobile__nav-list">
                <a href="/Contact" class="mobile__nav-link-big">Get in Touch</a>
              </li>
            </ul>
          </nav>
          <nav class="mobile__nav-small">
            <ul>
              <li class="mobile__nav-list">
                <a href="/Resources" class="mobile__nav-link-small"
                  >Resources</a
                >
              </li>
              <li class="mobile__nav-list">
                <a href="/Terms" class="mobile__nav-link-small"
                  >Terms & Conditions</a
                >
              </li>
              <li class="mobile__nav-list">
                <a href="/Privacy" class="mobile__nav-link-small"
                  >Privacy Policy</a
                >
              </li>
            </ul>
          </nav>
          <div class="mobile__nav-info">
            <p class="mobile__nav-link">Opening Hours: Mon-Fri 9-5PM</p>
            <a href="#" class="mobile__nav-link">finance@rovirastudios.com</a>
          </div>
        </div>
      </div>
    </div>
    <!-- Scrolling Desktop Navigation Background -->
    <div class="header__bg"></div>
  </header>
</template>
<style lang="scss">
.hamburger__container {
  display: none;
}
.header__mobile__container {
  display: none;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}
/* Media Queries */
@media (max-width: 1920px) {
}
/* 2xl */
@media (max-width: 1536px) {
  .container {
    max-width: 1280px;
  }
}

/* xl */
@media (max-width: 1280px) {
  .container {
    max-width: 1024px;
  }
}

/* lg */
@media (max-width: 1024px) {
  .container {
    max-width: 768px;
  }
  .header__btn {
    display: none;
  }
  .header__nav {
    display: none;
  }
  .hamburger__container {
    display: block;
  }
  .header__mobile__container {
    display: block;
  }
}

/* md */
@media (max-width: 768px) {
  .container {
    max-width: 640px;
  }
}

/* sm */
@media (max-width: 640px) {
  .container {
    max-width: 475px;
  }
  .header__brand {
    width: 80%;
  }
}

/* xs */
@media (max-width: 475px) {
  .container {
    width: 100%;
  }
}
/* Desktop Classes */
.header {
  width: 100%;
  padding: 1em 0rem;
  position: relative;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 1;
  overflow: hidden;
  transition: height 0.3s;
}
.header__container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
}
.header__nav {
  ul {
    display: flex;
    flex-direction: row;
  }
  .desktop__nav-list {
    margin-right: 1rem;
  }
}
.desktop__nav-link {
  color: #000;
  font-size: 1.25em;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
/* Mobile Classes */
.button__lang {
  font-size: 1.25rem;
  border: 2px solid rgba(0, 0, 0, 0.45);
  background-color: transparent;
  padding: 0.8rem 0.9rem;
  color: black;
  transition: 0.3s ease;
}
.button__lang:hover {
  background-color: black;
  color: white;
  border: 2px solid black;
}
.button__cta {
  font-size: 1.25rem;
  background-color: black;
  color: white;
  padding: 0.9rem 2.3rem;
  transition: 0.3s ease;
}
.button__cta:hover {
  background-color: #828282;
  color: white;
}
.lang__margin {
  margin-right: 1rem;
}
.mobile__nav-link-big {
    font-size: 3.5em;
    font-weight: 500;
    letter-spacing: -0.3px;
}
.mobile__nav-link-small {
    font-size: 1.5em;
    letter-spacing: -0.3px;
}
.header__mobile__content {
    width: 100%;
    height: 100%;
    padding: 6rem 0rem;
}
.mobile__nav-big {
    margin-bottom: 2rem;
}
.mobile__nav-small {
    margin-bottom: 2rem;
}
/* Mobile Hamburger Icon */
.hamburger-menu {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 40px;
  height: 40px; /* Adjusted height to fit the lines properly */
  position: relative;
}
.line {
  width: 40px;
  height: 2px;
  background-color: black;
  transition: all 0.3s ease;
  position: absolute;
  left: 0;
}

.line-top-closed {
  top: 10px; /* Adjust to position the top line */
}

.line-bottom-closed {
  top: 20px; /* Adjust to position the bottom line */
}

.line-top-open {
  transform: rotate(45deg);
  top: 50%;
  margin-top: -2px; /* Half of the line height */
}

.line-bottom-open {
  transform: rotate(-45deg);
  top: 50%;
  margin-top: -2px; /* Half of the line height */
}
/* Universal Classes */
.header__brand {
  transition: 0.3s ease;
  svg {
    width: 100%;
    height: 100%;
  }
  svg path {
    fill: black;
  }
}
.header__column {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: flex-end;
  align-items: flex-end;
}
</style>
