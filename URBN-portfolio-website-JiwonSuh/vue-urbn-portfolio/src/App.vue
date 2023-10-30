<script setup>
import Banner from "./components/Banner.vue"
import Nav from "./components/Nav.vue"
</script>

<template>
  <div class="container">
    <Banner topBannerText="Would you like to get connected?" 
            bottomBannerText="To see more project live sites"/>
    
    
    <div class="header">
      <div class="logo">
        <p>JIWON SUH</p>
      </div>
      
      <div class="nav-wrapper">
        <Nav />
        
      </div>
      
    </div>
    
  
    
  </div>

  
  
</template>

<style scoped>
  hr {
    border-color: var(--header-border);
  }
  .logo {
    width: 1024px;
    margin: 0 auto;
  }
 
  .nav-wrapper {
    border-top: 1px solid var(--header-border);
    border-bottom: 1px solid var(--header-border);
  }

</style>