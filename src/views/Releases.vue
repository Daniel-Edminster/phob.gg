<template>
    <div class="container">
    <div class="subheading">
        <h3>Releases (Software and Hardware)</h3>
    </div>

    <div class="releases-flex">
        <div class="content-block mt-4">
            Software Release History: 
            <div v-if="swReleases">
                <!-- <pre>
                    {{ swReleases }}
                </pre> -->
                
                <div :key="index" v-for="release, index in swReleases">
            
                        <h2> Software {{ release.name }} </h2>
                        <ul>
                        <li> {{ formatTimestamp(release.published_at) }} </li>
                        <li> <h3>Release Notes:</h3></li>
                        
                    </ul>
                        <pre class="release-notes"> {{ release.body }} </pre>
                        <a class="download-button" :href="release.zipball_url" target="_blank"><GitHubIcon class="h-6" /> Download</a>
                </div>

            </div>
        </div>
        <div class="content-block mt-4">
        Hardware Release History: 
            <div v-if="hwReleases">
            <!-- <pre>
                {{ swReleases }}
            </pre> -->
            
                <div :key="index" v-for="release, index in hwReleases">
        
                    <div class="font-bold text-2xl"> Hardware {{ release.name }} </div>
                    <ul>
                    <li> {{ formatTimestamp(release.published_at) }} </li>
                    <li> <h3>Release Notes:</h3></li>
                    
                    </ul>
                    <pre class="release-notes"> {{ release.body }} </pre>
                    <a class="download-button" :href="release.zipball_url" target="_blank"><GitHubIcon class="h-6" /> Download</a>
                </div>

            </div>
        </div>

   
    </div>



    </div>
</template>

<script>
    import axios from 'axios';
    import GitHubIcon from '../assets/GitHubIcon.vue'
    
    export default {
        name: 'Releases',
        data() {
            return {
                swBaseURL : 'https://api.github.com/repos/phobos132/phobgcc/releases',
                hwBaseURL : 'https://api.github.com/repos/phobos132/phobgcc-hw/releases',
                swGetError : false,
                swGetErrorMsg : '',
                hwGetError : false,
                hwGetErrorMsg : '',
                swReleases : null,
                hwReleases : null,
                mdText: null

            }
        },
        methods: {
            getMarkdownFile: async function() {
                let baseURL = 'https://phob.gg/README.md';
             
                try {
                    let response = await axios.get(baseURL);
                    let text = response.data;
                    console.log(response);
                    this.mdText = text;
                }
                catch(error) {
                    console.log(error);

                }
            },
            getSoftwareReleases: async function() {
                try {
                    const response = await axios.get(this.swBaseURL);
                    this.swReleases = response.data;                

                } 
                catch (error) {
                    this.swGetError = true;
                    this.swGetErrorMsg = 'Unable to retrieve software releases from GitHub.';
                }

            },
            getHardwareReleases: async function() {
                try {
                    const response = await axios.get(this.hwBaseURL);
                    this.hwReleases = response.data;                

                } 
                catch (error) {
                    this.hwGetError = true;
                    this.hwGetErrorMsg = 'Unable to retrieve hardware releases from GitHub.';
                }

            },
            formatTimestamp: function(ts) {
                let day = ts.split('T')[0];
                let time = ts.split('T')[1].split('Z')[0];
                return day + ' at ' + time + ' UTC';
            }
        },
        mounted() {
            this.getSoftwareReleases();
            this.getHardwareReleases();
            this.getMarkdownFile();
        },
        components: {
            GitHubIcon
        }
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
    @apply rounded-2xl px-8 py-8 shadow-xl; 

}

.download-button {
    @apply bg-purple-800 hover:bg-purple-700 text-white  py-2 px-4 rounded shadow-xl inline-block mt-2 flex flex-row items-center gap-2 w-32; 
}

h2 {
    @apply text-2xl font-bold ; 
}
h3 {
    @apply text-lg font-bold;
}

.release-notes {
    font-family: 'Roboto', Arial, Helvetica, sans-serif ; 
    @apply text-sm;
}
.subheading {
  
    background-color: #40444b;
    
    @apply rounded-2xl w-full px-8 py-4 shadow-xl mt-16;
}
</style>