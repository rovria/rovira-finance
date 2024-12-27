<template>
 <a :href="href"
    class="button"
    :class="[typeClass]" 
    >
    <span class="button-text">{{ text }}</span>
    <slot>
      <ArrowIcon v-if="showIcon" class="ArrowIcon" />
    </slot>
  </a>

</template>

<script>
import ArrowIcon from '@/assets/icons/arrow.svg';
export default {
  name: 'Button',
  components: {
    ArrowIcon,
  },
  props: {
    href: {
      type: String,
      default: '#', // Default to an empty link
    },
    text: {
      type: String,
      default: 'Book Today', // Default button text
    },
    type: {
      type: String,
      default: 'Primary', // Default button type
      validator: (value) => ['Primary', 'Secondary'].includes(value), // Valid types
    },
    showIcon: {
      type: Boolean,
      default: true, // Control the display of the icon
    },
  },
  computed: {
    typeClass() {
      // Generate a dynamic class based on the type prop
      return this.type ? this.type : '';
    },
  },
};
</script>
<style lang="scss">
/* Variables */
$primary-color: #001044;
$hover-color: #061B60;
$secondary-hover: #E9E9E9;
.button {
  width: 264px;
  height: 76px;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding: 26px;
  font-family: 'Neue Montreal', sans-serif;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.16px;
  line-height: 82px;
  transition: all 0.3s ease;
}
.Primary {
  background-color: $primary-color;
  color: white;
  transition: all 0.5s ease;
}
.Secondary {
  background-color: white;
  color: $primary-color;
  transition: all 0.5s ease;
  .ArrowIcon path {
    fill: $primary-color;
  }
}
.Secondary:hover {
  background-color: $secondary-hover;
}
.Primary:hover {
  background-color: $hover-color;
}
.ArrowIcon {
  transition: transform 0.3s ease;
}
.button:hover .ArrowIcon {
  transform: translateX(5px);
}
.button:hover .button-text {
  transform: translateX(1px);
}
.button-text {
  display: inline-block;
  transition: transform 0.3s ease;
}/* Media query for smaller viewports */
@media (max-width: 430px) {
  .button {
    width: 217px;
    height: 67px;
    font-size: 15px;
  }

}
</style>