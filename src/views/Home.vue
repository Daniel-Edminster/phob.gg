<template>
    <div class="container">
        <div class="jumbotron mt-16">
            <img src="../assets/phobpcb5-drop-shadow.png" alt="PCB" class="w-full opacity-80"  />
        </div>

    <div class="content-block mt-4">
        The PhobGCC is an open-source Gamecube controller motherboard using a Teensy 4.0 as the microcontroller. Aim is to make an accessible and consistent controller. Has the option of using hall effect sensors instead of potentiometers, notch calibration, and snapback filtering.
    
    </div>



    </div>
</template>

<script>
    
    export default {
        name: 'Home',
    }
</script>

<style scoped>
.container {
    @apply w-full md:w-1/2 mx-auto; 
}

.jumbotron {
    background-color: #40444b;
    
    @apply rounded-2xl w-full px-8 py-8 shadow-xl; 
}

.content-block {
    background-color: #202225;
    @apply rounded-2xl w-full px-8 py-8 shadow-xl; 
}

</style>