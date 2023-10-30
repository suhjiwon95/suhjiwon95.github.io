<script setup>
import AboutView from "./AboutView.vue"
import { ref } from "vue"

function showBorder() {
    
}
</script>

<template>
  
    <ul class="link">
        <li><a href="AboutView" @click.prevent="showBorder">About</a></li>
        <li><a href="" @click.prevent="showBorder">Education & Experience</a></li>
        <li><a href="" @click.prevent="showBorder">Projects</a></li>
        <li class="gallery" @click.prevent="showBorder"><a href="">Gallery</a></li>
    </ul>
    <AboutView />
  
</template>

<style scoped>
    ul {
        width: 1024px;
        margin: 0 auto;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 2em;
        padding-left: 0;
    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: var(--vt-c-black);
    }

    a:hover {
        border-bottom: 1px solid var(--header-border);
    }

</style>