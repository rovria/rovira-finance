<template>
    <button class="main-btn" @click="handleClick" :disabled="disabled"> 
        <span>{{  label  }}</span>
        <span class="main-btn-icon" v-if="icon">{{ icon }}</span>
    </button>
</template>
<script>
export default {
    name: 'MainButton',
    props: {
        label: {
            type: String,
            default: 'Button'
        },
        icon: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleClick() {
            if (!this.disabled) {
                this.$emit('click');
            }
        }
    }
}
</script>
<style>
.main-btn {
    background-color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 1000px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    outline: none;
}
.main-btn-iconn {
    margin-right: 0.5rem;
}
</style>