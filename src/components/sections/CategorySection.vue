<template>
    <section>
        <div class="container">
            <h2 class="heading">Tax Preparation for Every Stage of Life</h2>
            <CategoryTable />
        </div>
    </section>
</template>
<script>
import CategoryTable from '@/components/layout/CategoryTable.vue'

export default {
    name: 'CategorySection',
    components: {
        CategoryTable,
    },
}
</script>
<style lang="scss" scoped>
.heading {

font-family: "Neue Montreal";
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: 35px; /* 145.833% */
letter-spacing: -0.24px;
margin-bottom: 1.5rem;
color: #001044;
}
</style>