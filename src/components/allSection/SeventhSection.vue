<template>
    <section class="text-[whitesmoke] space-y-10">
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="border px-4 py-2 rounded-[30px] flex items-center gap-4 w-fit">
            <svg class="w-full cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="#565656" d="M6 14h12v-2H6v2Zm0-3h12V9H6v2Zm0-3h12V6H6v2Zm16 14l-4-4H4q-.825 0-1.413-.588T2 16V4q0-.825.588-1.413T4 2h16q.825 0 1.413.588T22 4v18ZM4 4v12h14.825L20 17.175V4H4Zm0 0v13.175V4Z"/></svg>
            <p class="uppercase text-sm">Testimonials</p>
        </div>
        <p data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="md:text-6xl text-3xl">Trusted By <span class="text-[#F31313]">Hundred Collaborators & Clients</span></p>

        <div class="carousel space-y-8">
            <div class="carousel-item">
                <div v-for="(collaborator, index) in collaborators">
                    <div v-show="currentIndex === index" class="w-full border border-2 border-gray-600 lg:p-14 p-10 rounded-[35px] space-y-4">
                        <div  class="flex items-center gap-4">
                            <div class="bg-[#ACACAC] w-fit p-[5px] rounded-[50%] overflow-hidden"><img :src=collaborator.image class="h-[70px] w-[70px]" alt=""></div>
                             <div class="flex flex-col gap-[2px]">
                                 <p class="text-lg">{{ collaborator.name }}</p>
                                 <p class="text-gray-400">{{ collaborator.post }} <span class="text-[#F31313]">{{ collaborator.company }}</span></p>
                             </div>
                        </div>
                        <p class="md:text-2xl"><q>{{ collaborator.comment }}</q></p>
                    </div>
                </div>
            </div>

            <div class="flex gap-6 items-center">
                <button class="border rounded-[50%] p-2 hover:border-[#F31313]" @click="moveCarousel(-1)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M10 22L0 12L10 2l1.775 1.775L3.55 12l8.225 8.225L10 22Z"/></svg>
                </button>
                <p>{{ currentIndex }}<span class="opacity-20"> / 5</span></p>
                <button class="border rounded-[50%] p-2 hover:border-[#F31313]" @click="moveCarousel(+1)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10l-10 10Z"/></svg>
                </button>
            </div>
        </div>
    </section>
</template>
<script>
import { defineComponent } from 'vue'
import Store from '../../stores/counter';

export default defineComponent({
    data(){
        return{
            collaborators: Store().$state.collaborators,
            currentIndex: 0
            
        }
    },
    methods: {
        moveCarousel(direction){
            const newIndex = this.currentIndex + direction

            if (newIndex >= 0 && newIndex < this.collaborators.length) {
                this.currentIndex = newIndex
            }
            console.log(this.currentIndex)
        }
    },
})
</script>
