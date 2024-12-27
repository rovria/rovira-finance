<template>
 <div class="Header">
  <Notif />
  <NavBar />
 </div>
<HeroSection />
<IntroSection />
<CtaSection />
<CategorySection />
<ReviewsSection />
</template>
<script>
// Layouts
 import NavBar from '@/components/layout/Header.vue'
 import Notif from '@/components/layout/Announcement.vue'

// Sections
import HeroSection from '@/components/sections/HeroSection.vue'
import IntroSection from '@/components/sections/IntroSection.vue'
import CtaSection from '@/components/sections/CtaSection.vue'
import CategorySection from '@/components/sections/CategorySection.vue'
import ReviewsSection from '@/components/sections/ReviewsSection.vue'

export default {
  name: 'Home',
  components: {
    Notif,
    NavBar,
    HeroSection,
    IntroSection,
    CtaSection,
    CategorySection,
    ReviewsSection,
  },
};
</script>
<style lang="scss">
.Header {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 100;
}
</style>