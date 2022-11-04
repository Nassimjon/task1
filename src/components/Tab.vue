<template>
    <div :class="{ 'hidden': isActive1 }" class="container mt-4 flex flex-wrap justify-between ">
        <Card>Ali</Card>
        <Card>nassim</Card>
        <Card>masrur</Card>
        <Card>muhsin</Card>

    </div>
</template>

<script>
import Card from '@/components/Card.vue'
import { def } from '@vue/shared';

export default {
    components: {
        Card
    }
}
</script>