<script>
import { defineComponent } from 'vue';
import Store from '../stores/counter';

export default defineComponent({
   data(){
      return{
         showHomeName: Store().$state.show,
         showAboutName: Store().$state.show,
         showResumeName: Store().$state.show,
         showServicesName: Store().$state.show,
         showSkillsName: Store().$state.show,
         showPortfolioName: Store().$state.show,
         showTestimonialName: Store().$state.show,
         showContactName: Store().$state.show,
         showSideNavs: Store().$state.show,
      }
   },
   methods: {
    scrollToSection(sectionId) {
      const section = this.$refs[sectionId];
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
})
</script>

<template>
   <div @click="showSideNavs = true" class="fixed lg:absolute right-6 md:right-20 lg:right-10 bg-[#010001] z-[500] top-12 border border-[#565656] px-4 py-[22px] rounded-[50%] space-y-[2px]">
      <div class="bg-white w-[20px] h-[2px] z-[500]"></div>
      <div class="bg-white w-[20px] h-[2px] z-[500]"></div>
   </div>
   <div class="block w-full md:w-[340px] z-[999] h-screen bg-[#191919] fixed top-0 transition-right duration-700" :class="showSideNavs ? 'right-0' : 'right-[1500px]'">
      <!-- <div  @click="showSideNavs = false" class="w-fit absolute right-2 top-6 cursor-pointer">
         <svg class="text-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"/></svg>
      </div> -->
      <div class="space-y-6 w-fit mx-auto my-[100px]">
         <p class="text-[#999999] text-lg">Menu</p>
         <div class="space-y-4">
            <div  @click="showSideNavs = false" class="flex gap-4 items-center w-fit">
               <svg class="w-full" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="#999999" d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5l5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z"/></svg>
               <p @click="scrollToSection('home')" class="cursor-pointer text-[#999999]">Home</p>
            </div>
            <div  @click="showSideNavs = false" class="flex gap-4 items-center w-fit">
               <svg class="w-full" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="#999999" d="M8 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1s1-4 6-4s6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664h10Z"/></svg>
               <p class="cursor-pointer text-[#999999]">About</p>
            </div>
            <div  @click="showSideNavs = false" class="flex gap-4 items-center w-fit">
               <svg class="w-full" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="#999999" d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/></svg>
               <p class="cursor-pointer text-[#999999]">Resume</p>
            </div>
            <div  @click="showSideNavs = false" class="flex gap-4 items-center w-fit">
               <svg class="w-full" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="#999999" d="M7 9a6 6 0 0 1 6-6h.5a.5.5 0 0 0 0-1H13a7 7 0 0 0-7 7v1a1 1 0 0 1-1 1H2.5a.5.5 0 0 0 0 1H5a2 2 0 0 0 2-2V9Zm6.5-3A3.5 3.5 0 0 0 10 9.5v1A4.5 4.5 0 0 1 5.5 15h-3a.5.5 0 0 1 0-1h3A3.5 3.5 0 0 0 9 10.5v-1A4.5 4.5 0 0 1 13.5 5h4a.5.5 0 0 1 0 1h-4Zm.5 3a1 1 0 0 0-1 1v1a7 7 0 0 1-7 7h-.5a.5.5 0 0 1 0-1H6a6 6 0 0 0 6-6v-1a2 2 0 0 1 2-2h3.5a.5.5 0 0 1 0 1H14Z"/></svg>
               <p class="cursor-pointer text-[#999999]">Services</p>
            </div>
            <div  @click="showSideNavs = false" class="flex gap-4 items-center w-fit">
               <svg class="w-full" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="#999999" d="M67.79 62.74a4 4 0 0 0-7.58 0l-40 120A4 4 0 0 0 24 188h80a4 4 0 0 0 3.79-5.26ZM29.55 180L64 76.65L98.45 180ZM204 76a48 48 0 1 0-48 48a48.05 48.05 0 0 0 48-48Zm-88 0a40 40 0 1 1 40 40a40 40 0 0 1-40-40Zm108 72h-88a4 4 0 0 0-4 4v56a4 4 0 0 0 4 4h88a4 4 0 0 0 4-4v-56a4 4 0 0 0-4-4Zm-4 56h-80v-48h80Z"/></svg>
               <p class="cursor-pointer text-[#999999]">Skills</p>
            </div>
            <div  @click="showSideNavs = false" class="flex gap-4 items-center w-fit">
               <svg class="w-full" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#999999" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0m6-14a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0"/></svg>
               <p class="cursor-pointer text-[#999999]">Portfolio</p>
            </div>
            <div  @click="showSideNavs = false" class="flex gap-4 items-center w-fit">
               <svg class="w-full" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#999999" d="M6 14h12v-2H6v2Zm0-3h12V9H6v2Zm0-3h12V6H6v2Zm16 14l-4-4H4q-.825 0-1.413-.588T2 16V4q0-.825.588-1.413T4 2h16q.825 0 1.413.588T22 4v18ZM4 4v12h14.825L20 17.175V4H4Zm0 0v13.175V4Z"/></svg>
               <p class="cursor-pointer text-[#999999]">Testimonial</p>
            </div>
            <div  @click="showSideNavs = false" class="flex gap-4 items-center w-fit">
               <svg class="w-full" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#999999" d="M14 11h7V6h-7v5Zm3.5-1.25L15 8V7l2.5 1.75L20 7v1l-2.5 1.75ZM2 21q-.825 0-1.413-.588T0 19V5q0-.825.588-1.413T2 3h20q.825 0 1.413.588T24 5v14q0 .825-.588 1.413T22 21H2Zm13.9-2H22V5H2v14h.1q1.05-1.875 2.9-2.938T9 15q2.15 0 4 1.063T15.9 19ZM9 14q1.25 0 2.125-.875T12 11q0-1.25-.875-2.125T9 8q-1.25 0-2.125.875T6 11q0 1.25.875 2.125T9 14Zm-4.45 5h8.9q-.85-.95-2.013-1.475T9 17q-1.275 0-2.425.525T4.55 19ZM9 12q-.425 0-.713-.288T8 11q0-.425.288-.713T9 10q.425 0 .713.288T10 11q0 .425-.288.713T9 12Zm3 0Z"/></svg>
               <p class="cursor-pointer text-[#999999]">Contact</p>
            </div>
         </div>
         <div>
            <p class="cursor-pointer text-[#999999] text-lg">Social</p>
            <div class="flex gap-4">
               <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#999999" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg></a>
               <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="#999999" d="M26.2 4H5.8C4.8 4 4 4.8 4 5.7v20.5c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V5.7c0-.9-.8-1.7-1.8-1.7zM11.1 24.4H7.6V13h3.5v11.4zm-1.7-13c-1.1 0-2.1-.9-2.1-2.1c0-1.2.9-2.1 2.1-2.1c1.1 0 2.1.9 2.1 2.1s-1 2.1-2.1 2.1zm15.1 12.9H21v-5.6c0-1.3 0-3.1-1.9-3.1S17 17.1 17 18.5v5.7h-3.5V13h3.3v1.5h.1c.5-.9 1.7-1.9 3.4-1.9c3.6 0 4.3 2.4 4.3 5.5v6.2z"/></svg></a>
               <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#999999" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"/></svg></a>
            </div>
         </div>
      </div>
   </div>

   <div class="sticky top-[140px] hidden lg:block">
      <div class="w-14 py-4 mr-10 border border-[#565656] rounded-[50px] flex flex-col items-center gap-6">
      <div  @mouseover="showHomeName = true" @mouseleave="showHomeName = false"  class="relative w-full">
         <svg class="w-full cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="#565656" d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5l5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z"/></svg>
         <div class="absolute top-[2px] right-[53px]" @mouseover="showHomeName = true" @mouseleave="showHomeName = false" >
            <div class="relative bg-[#404042] rounded px-4 cursor-pointer" v-show="showHomeName">
               <p class="text-[12px] text-white cursor-pointer font-semibold">Home</p>
               <div class="triangle"></div>
            </div>
         </div>
      </div>

      <div  @mouseover="showAboutName = true" @mouseleave="showAboutName = false"  class="relative w-full">
         <svg class="w-full cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="#565656" d="M8 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1s1-4 6-4s6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664h10Z"/></svg>
         <div class="absolute top-[2px] right-[53px]" @mouseover="showAboutName = true" @mouseleave="showAboutName = false" >
            <div class="relative bg-[#404042] rounded px-4 cursor-pointer" v-show="showAboutName">
               <p class="text-[12px] text-white cursor-pointer font-semibold">About</p>
               <div class="triangle"></div>
            </div>
         </div>
      </div>

      <div  @mouseover="showResumeName = true" @mouseleave="showResumeName = false"  class="relative w-full">
         <svg class="w-full cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="#565656" d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/></svg>
         <div class="absolute top-[2px] right-[53px]" @mouseover="showResumeName = true" @mouseleave="showResumeName = false" >
            <div class="relative bg-[#404042] rounded px-4 cursor-pointer" v-show="showResumeName">
               <p class="text-[12px] text-white cursor-pointer font-semibold">Resume</p>
               <div class="triangle"></div>
            </div>
         </div>
      </div>

      <div  @mouseover="showServicesName = true" @mouseleave="showServicesName = false"  class="relative w-full">
         <svg class="w-full cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="#565656" d="M7 9a6 6 0 0 1 6-6h.5a.5.5 0 0 0 0-1H13a7 7 0 0 0-7 7v1a1 1 0 0 1-1 1H2.5a.5.5 0 0 0 0 1H5a2 2 0 0 0 2-2V9Zm6.5-3A3.5 3.5 0 0 0 10 9.5v1A4.5 4.5 0 0 1 5.5 15h-3a.5.5 0 0 1 0-1h3A3.5 3.5 0 0 0 9 10.5v-1A4.5 4.5 0 0 1 13.5 5h4a.5.5 0 0 1 0 1h-4Zm.5 3a1 1 0 0 0-1 1v1a7 7 0 0 1-7 7h-.5a.5.5 0 0 1 0-1H6a6 6 0 0 0 6-6v-1a2 2 0 0 1 2-2h3.5a.5.5 0 0 1 0 1H14Z"/></svg>
         <div class="absolute top-[2px] right-[53px]" @mouseover="showServicesName = true" @mouseleave="showServicesName = false" >
            <div class="relative bg-[#404042] rounded px-4 cursor-pointer" v-show="showServicesName">
               <p class="text-[12px] text-white cursor-pointer font-semibold">Services</p>
               <div class="triangle"></div>
            </div>
         </div>
      </div>

      <div  @mouseover="showSkillsName = true" @mouseleave="showSkillsName = false"  class="relative w-full">
         <svg class="w-full cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="#565656" d="M67.79 62.74a4 4 0 0 0-7.58 0l-40 120A4 4 0 0 0 24 188h80a4 4 0 0 0 3.79-5.26ZM29.55 180L64 76.65L98.45 180ZM204 76a48 48 0 1 0-48 48a48.05 48.05 0 0 0 48-48Zm-88 0a40 40 0 1 1 40 40a40 40 0 0 1-40-40Zm108 72h-88a4 4 0 0 0-4 4v56a4 4 0 0 0 4 4h88a4 4 0 0 0 4-4v-56a4 4 0 0 0-4-4Zm-4 56h-80v-48h80Z"/></svg>
         <div class="absolute top-[2px] right-[53px]" @mouseover="showSkillsName = true" @mouseleave="showSkillsName = false" >
            <div class="relative bg-[#404042] rounded px-4 cursor-pointer" v-show="showSkillsName">
               <p class="text-[12px] text-white cursor-pointer font-semibold">Skills</p>
               <div class="triangle"></div>
            </div>
         </div>
      </div>

      <div  @mouseover="showPortfolioName = true" @mouseleave="showPortfolioName = false"  class="relative w-full">
        <svg class="w-full cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#565656" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0m6-14a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0"/></svg>
        <div class="absolute top-[2px] right-[53px]" @mouseover="showPortfolioName = true" @mouseleave="showPortfolioName = false" >
            <div class="relative bg-[#404042] rounded px-4 cursor-pointer" v-show="showPortfolioName">
               <p class="text-[12px] text-white cursor-pointer font-semibold">Portfolio</p>
               <div class="triangle"></div>
            </div>
         </div>
      </div>

      <div  @mouseover="showTestimonialName = true" @mouseleave="showTestimonialName = false"  class="relative w-full">
         <svg class="w-full cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#565656" d="M6 14h12v-2H6v2Zm0-3h12V9H6v2Zm0-3h12V6H6v2Zm16 14l-4-4H4q-.825 0-1.413-.588T2 16V4q0-.825.588-1.413T4 2h16q.825 0 1.413.588T22 4v18ZM4 4v12h14.825L20 17.175V4H4Zm0 0v13.175V4Z"/></svg>
         <div class="absolute top-[2px] right-[53px]" @mouseover="showTestimonialName = true" @mouseleave="showTestimonialName = false" >
            <div class="relative bg-[#404042] rounded px-4 cursor-pointer" v-show="showTestimonialName">
               <p class="text-[12px] text-white cursor-pointer font-semibold">Testimonial</p>
               <div class="triangle"></div>
            </div>
         </div>
      </div>

      <div  @mouseover="showContactName = true" @mouseleave="showContactName = false"  class="relative w-full">
         <svg class="w-full cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#565656" d="M14 11h7V6h-7v5Zm3.5-1.25L15 8V7l2.5 1.75L20 7v1l-2.5 1.75ZM2 21q-.825 0-1.413-.588T0 19V5q0-.825.588-1.413T2 3h20q.825 0 1.413.588T24 5v14q0 .825-.588 1.413T22 21H2Zm13.9-2H22V5H2v14h.1q1.05-1.875 2.9-2.938T9 15q2.15 0 4 1.063T15.9 19ZM9 14q1.25 0 2.125-.875T12 11q0-1.25-.875-2.125T9 8q-1.25 0-2.125.875T6 11q0 1.25.875 2.125T9 14Zm-4.45 5h8.9q-.85-.95-2.013-1.475T9 17q-1.275 0-2.425.525T4.55 19ZM9 12q-.425 0-.713-.288T8 11q0-.425.288-.713T9 10q.425 0 .713.288T10 11q0 .425-.288.713T9 12Zm3 0Z"/></svg>
         <div class="absolute top-[2px] right-[53px]" @mouseover="showContactName = true" @mouseleave="showContactName = false" >
            <div class="relative bg-[#404042] rounded px-4 cursor-pointer" v-show="showContactName">
               <p class="text-[12px] text-white cursor-pointer font-semibold">Contact</p>
               <div class="triangle"></div>
            </div>
         </div>
      </div>
   </div>
   </div>

   <div @click="showSideNavs = false" class="w-full h-screen bg-white fixed top-0 left-0 opacity-[0.2]" v-show="showSideNavs">

   </div>
</template>

<style scoped>

</style>
