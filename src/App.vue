<script>
import { defineComponent } from 'vue';
import Profile from './components/Profile.vue'
import Views from './views/views.vue';
import Nav from './components/Nav.vue';
import Store from './stores/counter'

export default defineComponent({
    components:{ Profile, Views, Nav},
    data(){
        return{
            // inDarkMode: true
        }
    },
    methods: {
    //     toggleModes() {
    //        Store().toggleModes();
    //        Store().$state.inDarkMode = !Store().$state.inDarkMode
    //        console.log(Store().$state.inDarkMode)
    // },
    }
})
</script>

<template>
   <div class="flex gap-8 lg:gap-0 lg:flex-row flex-col justify-between bg-[#010001]">
    <div>
        <Profile />
    </div>
    <div>
        <Views />
    </div>
    <div>
        <Nav />
    </div>
   </div>
</template>

<style scoped>

</style>
