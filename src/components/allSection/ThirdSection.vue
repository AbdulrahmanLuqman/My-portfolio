<script>
import { defineComponent } from 'vue'
import Store from '../../stores/counter';

export default defineComponent({
    data(){
        return{
            showExperience: true
        }
    }
})
</script>

<template>
    <section class="text-[whitesmoke] space-y-10">
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="border px-4 py-2 rounded-[30px] flex items-center gap-4 w-fit">
            <svg class="w-full" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 16 16"><path fill="white" d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/></svg>
            <p class="uppercase text-sm">Resume</p>
        </div>
        <p data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="md:text-5xl text-4xl"> <span :class="!showExperience ? 'text-[#F31313]' : 'text-white'" @click="showExperience = false">Education</span> & <span :class="showExperience ? 'text-[#F31313]' : 'text-white'" @click="showExperience = true">Experience</span></p>
        <div>
            <div class="flex flex-col" v-if="showExperience">
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="box relative border-l border-gray-600 px-16 h-fit md:h-fit md:h-[250px] space-y-6">
                    <div class="circle transition-bg duration-500 absolute left-[-6.6px] w-[13px] h-[13px] bg-[#989898] rounded-[50%]"></div>
                    <p class="years transition-text duration-500 text-lg">2023 - present</p>
                    <div class="space-y-4">
                        <div class="space-y-2">
                            <p class="text-3xl">Frontend Developer</p>
                            <p class="text-[#989898]">Dervac</p>
                        </div>
                        <div class="space-y-2">
                            <p class="text-3xl">Fullstack Developer</p>
                            <p class="text-[#989898]">Kingsbridge</p>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-right" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="box relative border-l border-gray-600 px-16 h-fit md:h-fit md:h-[250px] space-y-6">
                    <div class="circle transition-bg duration-500 absolute left-[-6.6px] w-[13px] h-[13px] bg-[#989898] rounded-[50%]"></div>
                    <p class="years transition-text duration-500 text-lg">2022 - present</p>
                    <div class="space-y-4">
                        <div class="space-y-2">
                            <p class="text-3xl">Frontend Developer</p>
                            <p class="text-[#989898]">W3School</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col" v-else>
                <div data-aos="fade-right" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="box relative border-l border-gray-600 px-16 h-fit md:h-fit md:h-[250px] space-y-6">
                    <div class="circle transition-bg duration-500 absolute left-[-6.6px] w-[13px] h-[13px] bg-[#989898] rounded-[50%]"></div>
                    <p class="years transition-text duration-500 text-lg">2019 - 2021</p>
                    <div class="space-y-4">
                        <div class="space-y-2">
                            <p class="text-3xl">Secondary School Education</p>
                            <p class="text-[#989898]">Ajayi Crowther Memorial Senior Grammar School</p>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="box relative border-l border-gray-600 px-16 h-fit md:h-[250px] space-y-6">
                    <div class="circle transition-bg duration-500 absolute left-[-6.6px] w-[13px] h-[13px] bg-[#989898] rounded-[50%]"></div>
                    <p class="years transition-text duration-500 text-lg">2017 - 2019</p>
                    <div class="space-y-4">
                        <div class="space-y-2">
                            <p class="text-3xl">Junior Secondary School</p>
                            <p class="text-[#989898]">St Lukes Junior Grammar School</p>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-right" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="box relative border-l border-gray-600 px-16 h-fit md:h-[250px] space-y-6">
                    <div class="circle transition-bg duration-500 absolute left-[-6.6px] w-[13px] h-[13px] bg-[#989898] rounded-[50%]"></div>
                    <p class="years transition-text duration-500 text-lg">**** - 2017</p>
                    <div class="space-y-4">
                        <div class="space-y-2">
                            <p class="text-3xl">Primary School</p>
                            <p class="text-[#989898]">Mountaineer/Bishop Crowther</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
</template>

<style scoped>
.box:hover .circle{
    background-color: #F31313;
    transition: all 0.5s;
}
.box:hover .years{
    color: #F31313;
    transition: all 0.5s;
}
</style>