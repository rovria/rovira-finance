<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      default: 'Book Today',
      required: true,
    },
    link: {
      type: String,
      default: '#',
    },
    buttonType: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'third'].includes(value),
    },
  },
  methods: {
    handleClick(event) {
      if (this.link === '#') {
        event.preventDefault();
      }
    },
  },
};
</script>

<template>
  <a :href="link" :class="['button', buttonType]" @click="handleClick"
    ><span class="button-text">{{ text }}</span>
    <svg class="arrow" viewBox="0 0 14 16" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289L7.34315 0.928933C6.95262 0.538408 6.31946 0.538408 5.92893 0.928933C5.53841 1.31946 5.53841 1.95262 5.92893 2.34315L11.5858 8L5.92893 13.6569C5.53841 14.0474 5.53841 14.6805 5.92893 15.0711C6.31946 15.4616 6.95262 15.4616 7.34315 15.0711L13.7071 8.70711ZM-6.72483e-08 9L13 9L13 7L6.72483e-08 7L-6.72483e-08 9Z"
      />
    </svg>
  </a>
</template>

<style lang="scss">
.button {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 1.8rem 2rem;
  font-size: 1.12rem;
  font-weight: 500;
  text-decoration: none;
  letter-spacing: -0.16px;
  border-radius: 10px;
  cursor: pointer;
  white-space: nowrap;
  gap: 5rem;
}
.arrow {
  width: 100%;
  height: 18px;
}

.primary {
  background-color: black;
  color: white;
  transition: all 0.1s ease;

  .arrow {
    fill: white;
  }
}

.primary:hover {
  background-color: #202020;

  .arrow {
    transform: translateX(10px); /* Move the arrow */
    transition: transform 0.3s ease;
  }
}

.secondary {
  background-color: #eaeaea;
  transition: all 0.1s ease;
  color: black;
}

.secondary:hover {
  background-color: #d3d3d3;

  .arrow {
    transform: translateX(10px); /* Move the arrow */
    transition: transform 0.3s ease;
  }
}

.third {
  background-color: white;
  color: black;
  transition: all 0.1s ease;
}

.third:hover {
  background-color: #d0d0d0;

  .arrow {
    transform: translateX(10px); /* Move the arrow */
    transition: transform 0.3s ease;
  }
}

/* xl */
@media (max-width: 1280px) {
  .button {
    padding: 1.6rem 1.8rem;
    font-size: 1rem;
    gap: 4rem;
  }
}

/* lg */
@media (max-width: 1024px) {
  .button {
    padding: 1.6rem 1.7rem;
    font-size: 0.95rem;
    gap: 3rem;

    .arrow {
      height: 14px;
    }
  }
}

/* md */
@media (max-width: 768px) {
  .button {
    padding: 1.2rem 1.4rem;
    font-size: 0.9rem;
    gap: 2rem;
  }
}

/* sm */
@media (max-width: 640px) {
  .button {
    padding: 1.3rem 1.3rem;
    font-size: 0.85rem;
    gap: 2rem;
  }
}

/* xs */
@media (max-width: 475px) {
  .button {
    padding: 0.8rem 1rem;
    font-size: 0.8rem;
    gap: 1rem;
  }
}
</style>
