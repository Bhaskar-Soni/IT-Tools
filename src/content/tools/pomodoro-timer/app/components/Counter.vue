<script setup>
import store from '../store/index.js';
</script>

<template>
  <span>{{ store.state.counter }}</span>
</template>

<style scoped>
span {
    font-family: 'Varela Round', 'Lucida Console', 'Courier New', Courier, monospace;
    font-size: 4rem;
}
</style>
