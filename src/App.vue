<script>
import { defineComponent } from 'vue';
import Profile from './components/Profile.vue'
import Views from './views/views.vue';
import Nav from './components/Nav.vue'


export default defineComponent({
    components:{ Profile, Views, Nav},
    data(){
        return{

        }
    }
})
</script>

<template>
   <div >
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
