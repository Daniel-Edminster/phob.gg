<template>
    <div class="container">
        <div class="jumbotron mt-16">
            <img src="../assets/phobpcb3.png" alt="PCB" class="w-full opacity-80"  />
        </div>

    <div class="content-block mt-16">
        Resources
    
    </div>



    </div>
</template>

<script>
    

    
    export default {
        name: 'Resources',
    }
</script>

<style scoped>
.container {
    @apply w-full md:w-1/2 mx-auto; 
}

.jumbotron {
    background-color: #40444b;
    
    @apply rounded-2xl w-full px-8 py-2 shadow-xl; 
}

.content-block {
    background-color: #202225;
    @apply rounded-2xl w-full px-8 py-8 shadow-xl; 
}

</style>