<script setup>
    import { ref } from "vue"

    const topBannerText = ref('')
    const bottomBannerText = ref('')
</script>

<template>
  <div class="banner-wrapper">
    <div class="banner">
      <div class="top">
        <p>{{topBannerText}}</p>
        <a href="">suhjiwon1995@gmail.com</a>
        <p>240-848-0027</p>
      </div>
      <div class="bottom">
        <p>{{bottomBannerText}}</p>
        <a href="">VISIT MY GITHUB</a>
        <a href="">VISIT MY FRONTEND MENTOR</a>
      </div>
    </div>
  </div>
</template>

<style scoped>

  .banner-wrapper {
    min-width: 1024px;
    width: 100%;
    margin: 0 auto;
    background-color: #9BC1C0;
  }

  .banner .top,
  .banner .bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.2em;
  }

  .banner .bottom {
    background-color: #F3F3F3;
  }

  a {
    color: var( --vt-c-black);
  }
</style>