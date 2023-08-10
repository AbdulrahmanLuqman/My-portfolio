<script>
import { defineComponent } from 'vue'
// import { eventBus } from '../eventbus.js'
import FirstSection from '../components/allSection/FirstSection.vue';
import SecondSection from '../components/allSection/SecondSection.vue'
import ThirdSection from '../components/allSection/ThirdSection.vue'
import FourthSection from '../components/allSection/FourthSection.vue';
import FifthSection from '../components/allSection/FifthSection.vue'
import SixthSection from '../components/allSection/SixthSection.vue';


export default defineComponent({
    components:{ FirstSection, SecondSection, ThirdSection, FourthSection, FifthSection, SixthSection },
    data(){
        return{

        }
    },
    methods: {
    handleScrollToSection(sectionId) {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },

})
</script>

<template>
   <div class="lg:pl-12 lg:px-6 px-2 py-20 w-full">
    <FirstSection class="py-2" />
    <SecondSection class="py-[160px]" />
    <ThirdSection class="py-[80px]" />
    <FourthSection class="py-[80px]" />
    <FifthSection class="py-[80px]" />
    <SixthSection class="py-[80px]" />
   </div>
</template>

<style scoped>

</style>
