<template>
    <div class="navbar-container">
        <div class="nav-left">  
                <!-- <img :src="logo" alt="logo" class="h-6" /> -->
                <phob-icon class="h-6 w-6" />
                <span>PhobGCC</span>
        </div>
        <div class="nav-right">
            <router-link :to="{ path: '/' }" class="nav-item">About</router-link>
            <router-link :to="{ path: '/resources' }" class="nav-item">Resources</router-link>
            <router-link :to="{ path: '/releases' }" class="nav-item">Releases</router-link>
            <div class="nav-item dropdown flex flex-row nowrap">
                <git-hub-icon class="h-6" @click="toggleGitHubDropdown" /> <span @click="toggleGitHubDropdown">GitHub</span>
                
                <div class="dropdown-content text-center" :class="{ hidden: !showGitHub }">
                    <ul>
                        <li><a href="https://github.com/phobos132/PhobGCC-HW" target="_blank">Hardware Repo</a></li>
                       <li><a href="https://github.com/phobos132/PhobGCC" target="_blank">Software Repo</a>    </li>
                       <li><a href="https://github.com/FrostSSBM/PhobConfigTool" target="_blank">Homebrew App</a>    </li>
                    </ul> 
                </div>
                </div>
            <a class="nav-item flex flex-row gap-2" href="https://discord.gg/eNJ7xWMvxf" target="_blank">
                <discord-icon class="h-6" /> <span>Discord</span>
            </a>

        </div>

    </div>
</template>

<script>
import GitHubIcon from '../assets/GitHubIcon.vue'
import PhobIcon from '../assets/PhobIcon.vue'
import DiscordIcon from '../assets/DiscordIcon.vue'
    // import logo from '../assets/phoblogo3.svg';
    export default {
        name: 'Navbar',
        components: {
            PhobIcon,
                GitHubIcon,
                DiscordIcon
        },

        data(){ 
            return {
                showGitHub: false,
                displayMobileNav: false,
            }
        },
        methods: {
            toggleGitHubDropdown() {
               this.showGitHub = !this.showGitHub;
            },

  
        }
    }
</script>

<style scoped>
.navbar-container { 
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    @apply flex flex-row items-center justify-between  fixed top-0 z-40;
    @apply  border-b border-stone-800 h-12 w-full;

    background-color: #2f3136;
    /* background-color: #36393f; */
    @apply shadow-xl;
   
}
.nav-left {
    @apply flex flex-row items-center gap-2 px-6 flex-nowrap font-bold;
}
.nav-right {
    @apply flex flex-row items-center gap-4 justify-end px-6  h-full;
}

.nav-item {
    @apply font-bold cursor-pointer text-sky-500 hover:text-purple-500 h-full pt-3 hover:border-b-2 hover:border-purple-500 ;
}
.nav-item:hover {
    /* @apply text-slate-600; */
    
}

.router-link-active {
    @apply border-b-2 border-sky-500;
}

.dropdown {
    /* @apply relative inline-block; */
    @apply relative flex gap-2;
}
.dropdown-content {
    @apply  absolute bg-gray-900 w-40 px-2 py-2 z-50 rounded-b border border-b-purple-500 border-l-purple-500 border-r-purple-500 top-12 -right-8;
}




</style>