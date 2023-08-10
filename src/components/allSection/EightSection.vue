<template>
    <section class="text-[whitesmoke] space-y-10">
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="border px-4 py-2 rounded-[30px] flex items-center gap-4 w-fit">
            <svg class="w-full cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#565656" d="M14 11h7V6h-7v5Zm3.5-1.25L15 8V7l2.5 1.75L20 7v1l-2.5 1.75ZM2 21q-.825 0-1.413-.588T0 19V5q0-.825.588-1.413T2 3h20q.825 0 1.413.588T24 5v14q0 .825-.588 1.413T22 21H2Zm13.9-2H22V5H2v14h.1q1.05-1.875 2.9-2.938T9 15q2.15 0 4 1.063T15.9 19ZM9 14q1.25 0 2.125-.875T12 11q0-1.25-.875-2.125T9 8q-1.25 0-2.125.875T6 11q0 1.25.875 2.125T9 14Zm-4.45 5h8.9q-.85-.95-2.013-1.475T9 17q-1.275 0-2.425.525T4.55 19ZM9 12q-.425 0-.713-.288T8 11q0-.425.288-.713T9 10q.425 0 .713.288T10 11q0 .425-.288.713T9 12Zm3 0Z"/></svg>
            <p class="uppercase text-sm">Contact</p>
        </div>
        <p data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="md:text-6xl text-3xl">Let's Work <span class="text-[#F31313]">Together</span></p>

        <form action="" class="w-full grid lg:grid-cols-2 gap-10">
            <div class="flex flex-col gap-2">
                <label for="name" class="uppercase">Full Name:</label>
                <input type="text" id="name" placeholder="Your Full Name" class="h-10 bg-transparent text-xl outline-none">
                <p>{{ nameError }}</p>
            </div>

            <div class="flex flex-col gap-2">
                <label for="email" class="uppercase">Email:</label>
                <input type="email" id="email" placeholder="Your email address" class="h-10 bg-transparent text-xl outline-none">
                <p>{{ emailError }}</p>
            </div>

            <div class="flex flex-col gap-2">
                <label for="number">Phone(OPTIONAL):</label>
                <input type="number" id="number" placeholder="Your phone number" class="h-10 bg-transparent text-xl outline-none">
            </div>

            <div class="flex flex-col gap-2">
                <label for="budget" class="uppercase">your budget(optional):</label>
                <input type="number" id="budget" placeholder="A range budget for ur project" class="h-10 bg-transparent text-xl outline-none">
            </div>

            <div class="lg:col-span-2 flex flex-col gap-2">
                <label for="message" class="uppercase">message:</label>
                <textarea class="bg-transparent" name="" id="message" cols="30" rows="10"></textarea>
            </div>
            
            <input class="w-full outline-none cursor-pointer rounded-[10px] bg-[#F31313] text-black font-semibold text-lg h-16" type="submit" value="SEND MESSAGE">
        </form>
    </section>
</template>
<script>
import { defineComponent } from 'vue'
import Store from '../../stores/counter';

export default defineComponent({
    data(){
        return{
          
        }
    },
    methods: {
       
    },
})
</script>
