<!-- JAVA SCRIPT ----------------------------------------------------->
<script setup>
    import navbar from "./components/navBar/navbar.vue"
    import home from "./components/home/home.vue"

</script>

<!-- HTML ------------------------------------------------------------>
<template>
    <navbar />
    
    <router-view></router-view>
    <!-- <div class="containerHome">
        <home />
    </div> -->
</template>

<!-- STYLES ---------------------------------------------------------->
<style>
    @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css');

    .containerHome{        
        height:     87vh;
        margin-top: 2px;
        background-size:  100% 100%;
        background-image:  url("https://static.vecteezy.com/system/resources/previews/007/460/645/non_2x/food-seasoning-background-round-wooden-cutting-board-spices-herbs-photo.jpg");
        background-repeat: no-repeat;
    }
</style>