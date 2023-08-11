<script>
import { defineComponent } from 'vue';
// import Profile from './components/Profile.vue'
// import Views from './views/views.vue';
// import Nav from './components/Nav.vue';
import Store from './stores/counter'

export default defineComponent({
    // components:{ Profile, Views, Nav},
    data(){
        return{
            // inDarkMode: true
            showHomeName: Store().$state.show,
            showAboutName: Store().$state.show,
            showResumeName: Store().$state.show,
            showServicesName: Store().$state.show,
            showSkillsName: Store().$state.show,
            showPortfolioName: Store().$state.show,
            showTestimonialName: Store().$state.show,
            showContactName: Store().$state.show,
            showSideNavs: Store().$state.show,
            showExperience: true,
            collaborators: Store().$state.collaborators,
            currentIndex: 0
        }
    },
    methods: {
    //     toggleModes() {
    //        Store().toggleModes();
    //        Store().$state.inDarkMode = !Store().$state.inDarkMode
    //        console.log(Store().$state.inDarkMode)
    // },
        moveCarousel(direction){
            const newIndex = this.currentIndex + direction

            if (newIndex >= 0 && newIndex < this.collaborators.length) {
                this.currentIndex = newIndex
            }
            console.log(this.currentIndex)
        }
    }
})
</script>

<template>
    <div class="flex gap-8 lg:gap-0 lg:flex-row flex-col justify-between bg-[#010001]">
     <div>
        <div class="sticky top-0">
            <div class="lg:h-screen lg:w-[390px] md:w-[90%]  border border-[#565656] relative rounded-[40px] lg:ml-6 md:mx-6">
            <!-- <div class="bg-[#1F1F1F] fixed lg:absolute lg:left-[-18px] top-12 w-fit h-fit p-2 rounded-md cursor-pointer">
                <svg @click="showSideContainer = true" class="animate-spin" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M19.14 12.94c.04-.3.06-.61.06-.94c0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6s3.6 1.62 3.6 3.6s-1.62 3.6-3.6 3.6z"/></svg>
            </div> -->
              <div class="px-4 py-8 space-y-6 flex flex-col items-center">
                <div class="w-full grid grid-cols-2 gap-2 items-center gap-8">
                  <img src="./assets/images/Abdulrahman.png" class="w-full " alt="">
                  <p class="text-[whitesmoke] mt-2 font-semibold z-[-999] w-full">Web Designer & Developer</p>
                </div>
                <div class="bg-[#ACACAC] h-[200px] w-[250px] rounded-[30px]">
                  <img src="./assets/images/me.png" class="h-[200px] w-[250px] rounded-[30px]" alt="">
                </div>
                <div class="space-y-2 text-center">
                  <a href="mailto:luqmanola60@gmail.com" class="text-[#F9F9F9] text-2xl">luqmanola60@gmail.com</a>
                  <p class="text-[#F9F9F9] text-2xl">Based in Bariga, Lagos</p>
                </div>
                <p class="text-[#8B8B8B]">&copy; 2023 Abdulrahman. All Rights Reserved</p>
                <div class="flex gap-4">
                  <div class="p-2 rounded-[50%] border border-2 border-[#565656] transition-border duration-700" :class="green ? 'hover:border-[#28E98C]' : gold ? 'hover:border-[#E4AF12]' : orange ? 'hover:border-[#FE6F1D]' : blue ? 'hover:border-[#14C5FD]' : grey ? 'hover:border-[#C0C0C0]' : red ? 'hover:border-[#F31313]' : pink ? 'hover:border-[#FF99CC]'  : 'hover:border-[#F31313]'">
                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#565656" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg></a>
                  </div>
                  <div class="p-2 rounded-[50%] border border-2 border-[#565656] transition-border duration-700" :class="green ? 'hover:border-[#28E98C]' : gold ? 'hover:border-[#E4AF12]' : orange ? 'hover:border-[#FE6F1D]' : blue ? 'hover:border-[#14C5FD]' : grey ? 'hover:border-[#C0C0C0]' : red ? 'hover:border-[#F31313]' : pink ? 'hover:border-[#FF99CC]'  : 'hover:border-[#F31313]'">
                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#565656" d="M26.2 4H5.8C4.8 4 4 4.8 4 5.7v20.5c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V5.7c0-.9-.8-1.7-1.8-1.7zM11.1 24.4H7.6V13h3.5v11.4zm-1.7-13c-1.1 0-2.1-.9-2.1-2.1c0-1.2.9-2.1 2.1-2.1c1.1 0 2.1.9 2.1 2.1s-1 2.1-2.1 2.1zm15.1 12.9H21v-5.6c0-1.3 0-3.1-1.9-3.1S17 17.1 17 18.5v5.7h-3.5V13h3.3v1.5h.1c.5-.9 1.7-1.9 3.4-1.9c3.6 0 4.3 2.4 4.3 5.5v6.2z"/></svg></a>
                  </div>
                  <div class="p-2 rounded-[50%] border border-2 border-[#565656] transition-border duration-700" :class="green ? 'hover:border-[#28E98C]' : gold ? 'hover:border-[#E4AF12]' : orange ? 'hover:border-[#FE6F1D]' : blue ? 'hover:border-[#14C5FD]' : grey ? 'hover:border-[#C0C0C0]' : red ? 'hover:border-[#F31313]' : pink ? 'hover:border-[#FF99CC]'  : 'hover:border-[#F31313]'">
                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#565656" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"/></svg></a>
                  </div>
                </div>
                <!-- <div class="w-[90%] cursor-pointer py-4 rounded-[50px] flex items-center justify-center gap-2 transition-bg duration-500"  :class="green ? 'bg-[#28E98C] hover:bg-transparent hover:text-[#28E98C] border border-2 border-[#28E98C] hover:border hover:border-2 hover:border-[#28E98C]' : gold ? 'bg-[#E4AF12] hover:bg-transparent hover:text-[#E4AF12] border border-2 border-[#E4AF12] hover:border hover:border-2 hover:border-[#E4AF12]' : orange ? 'bg-[#FE6F1D] hover:bg-transparent hover:text-[#FE6F1D] border border-2 border-[#FE6F1D] hover:border hover:border-2 hover:border-[#FE6F1D]' : blue ? 'bg-[#14C5FD] hover:bg-transparent hover:text-[#14C5FD] border border-2 border-[#14C5FD] hover:border hover:border-2 hover:border-[#14C5FD]' : grey ? 'bg-[#C0C0C0] hover:bg-transparent hover:text-[#C0C0C0] border border-2 border-[#C0C0C0] hover:border hover:border-2 hover:border-[#C0C0C0]' : red ? 'bg-[#F31313] hover:bg-transparent hover:text-[#F31313] border border-2 border-[#F31313] hover:border hover:border-2 hover:border-[#F31313]' : pink ? 'bg-[#FF99CC] hover:bg-transparent hover:text-[#FF99CC] border border-2 border-[#FF99CC] hover:border hover:border-2 hover:border-[#FF99CC]'  : 'bg-[#F31313] hover:bg-transparent hover:text-[#F31313] border border-2 border-[#F31313] hover:border hover:border-2 hover:border-[#F31313]'"> -->
                <a href="#contact" class="hire transition-bg duration-500 md:w-[90%] w-full cursor-pointer py-4 rounded-[50px] flex items-center justify-center border border-2 gap-2 bg-[#F31313] hover:bg-transparent border-[#F31313]">
                  <p class="text-lg font-light">Hire me!</p>
                </a> 
              </div>
            </div>
   </div> 
     </div>

     <!-- Pages -->
     <div class="lg:pl-12 lg:px-6 px-4 w-full">
        <!-- home -->
        <section id="home" class="text-[whitesmoke] pt-20 space-y-10" >
            <div class="space-y-16">
               <div class="border px-4 py-2 rounded-[30px] flex items-center gap-4 w-fit">
                  <svg class="w-full" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 16 16"><path fill="white" d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5l5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z"/></svg>
                  <p class="uppercase text-sm">Introduce</p>
               </div>
               <p data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="md:text-6xl text-4xl">Say Hi from <span class="text-[#F31313]">Abdulrahman</span>, Web Designer and Developer</p>  
               <p data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="md:w-[450px] text-[#989898]">I develop and code beautifully simple things and i love what i do. Just simple like that!</p>
            </div>
      
            <div class="space-y-4">
               <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class=" flex md:justify-end">
                  <div class="relative">
                     <svg class="absolute left-12 top-12" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24"><path fill="currentColor" d="m12 18l-6-6l1.4-1.4l3.6 3.575V6h2v8.175l3.6-3.575L18 12Z"/></svg>
                     <div class="border w-fit p-4 rounded-[50%]">
                        <img class="spin" src="./assets/images/projects.png" alt="">
                     </div>
                  </div>
               </div>
      
               <div class="flex gap-10">
                  <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="space-y-4">
                     <p class="text-6xl font-semibold text-[#F31313]">2+</p>
                     <p class="uppercase text-[#989898]">Years of experience</p>
                  </div>
                  <div class="space-y-4">
                     <p class="text-6xl font-semibold text-[#F31313]">7+</p>
                     <p class="uppercase text-[#989898]">projects completed</p>
                  </div>
               </div>
            </div>
        </section>

        <!-- about -->
        <section id="about" class="py-[160px] text-[whitesmoke] space-y-10">
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="border px-4 py-2 rounded-[30px] flex items-center gap-4 w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 16 16"><path fill="white" d="M8 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1s1-4 6-4s6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664h10Z"/></svg>
                <p class="uppercase text-sm">About</p>
            </div>
            <p data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="md:text-6xl text-3xl">Every great development begin with an even <span class="text-[#F31313]">better story</span></p>
            <p data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="text-[#989898]">Since beginning my journey as a developer nearly 3 years ago, I've collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.</p>
        </section>

        <!-- resume -->
        <section id="resume" class="py-[80px] text-[whitesmoke] space-y-10">
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="border px-4 py-2 rounded-[30px] flex items-center gap-4 w-fit">
                <svg class="w-full" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 16 16"><path fill="white" d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/></svg>
                <p class="uppercase text-sm">Resume</p>
            </div>
            <p data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="md:text-5xl text-3xl"> <span :class="!showExperience ? 'text-[#F31313]' : 'text-white'" @click="showExperience = false">Education</span> & <span :class="showExperience ? 'text-[#F31313]' : 'text-white'" @click="showExperience = true">Experience</span></p>
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
                            <!-- <div class="space-y-2">
                                <p class="text-3xl">Fullstack Developer</p>
                                <p class="text-[#989898]">Kingsbridge</p>
                            </div> -->
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

        <!-- Services -->
        <section id="services" class="py-[80px] text-[whitesmoke] space-y-10">
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="border px-4 py-2 rounded-[30px] flex items-center gap-4 w-fit">
                <svg class="w-full" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill="white" d="M7 9a6 6 0 0 1 6-6h.5a.5.5 0 0 0 0-1H13a7 7 0 0 0-7 7v1a1 1 0 0 1-1 1H2.5a.5.5 0 0 0 0 1H5a2 2 0 0 0 2-2V9Zm6.5-3A3.5 3.5 0 0 0 10 9.5v1A4.5 4.5 0 0 1 5.5 15h-3a.5.5 0 0 1 0-1h3A3.5 3.5 0 0 0 9 10.5v-1A4.5 4.5 0 0 1 13.5 5h4a.5.5 0 0 1 0 1h-4Zm.5 3a1 1 0 0 0-1 1v1a7 7 0 0 1-7 7h-.5a.5.5 0 0 1 0-1H6a6 6 0 0 0 6-6v-1a2 2 0 0 1 2-2h3.5a.5.5 0 0 1 0 1H14Z"/></svg>
                <p class="uppercase text-sm">Services</p>
            </div>
            <p data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="md:text-6xl text-3xl">My <span class="text-[#F31313]">Specialization</span></p>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="boxx flex justify-between p-14 border border-gray-600 transition-border duration-200 rounded-[20px] hover:border-[#F31313] hover:transition-border hover:duration-200">
                <div class="space-y-2">
                    <div class="space-y-4">
                        <p class="text-2xl">Web Development</p>
                        <p class="text-[#989898] text-sm">I build live websites with Javascript or Vue</p>
                    </div>
                    <p class="projects text-sm"><a href="~">5 projects</a></p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#F31313" d="M4 18v-3.7a1.5 1.5 0 0 0-1.5-1.5H2v-1.6h.5A1.5 1.5 0 0 0 4 9.7V6a3 3 0 0 1 3-3h1v2H7a1 1 0 0 0-1 1v4.1A2 2 0 0 1 4.626 12A2 2 0 0 1 6 13.9V18a1 1 0 0 0 1 1h1v2H7a3 3 0 0 1-3-3Zm16-3.7V18a3 3 0 0 1-3 3h-1v-2h1a1 1 0 0 0 1-1v-4.1a2 2 0 0 1 1.374-1.9A2 2 0 0 1 18 10.1V6a1 1 0 0 0-1-1h-1V3h1a3 3 0 0 1 3 3v3.7a1.5 1.5 0 0 0 1.5 1.5h.5v1.6h-.5a1.5 1.5 0 0 0-1.5 1.5Z"/></svg>
            </div>
        </section>

        <!-- Skills -->
        <section id="skills" class="py-[80px] text-[whitesmoke] space-y-10">
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="border px-4 py-2 rounded-[30px] flex items-center gap-4 w-fit">
                <svg class="w-full" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256"><path fill="white" d="M67.79 62.74a4 4 0 0 0-7.58 0l-40 120A4 4 0 0 0 24 188h80a4 4 0 0 0 3.79-5.26ZM29.55 180L64 76.65L98.45 180ZM204 76a48 48 0 1 0-48 48a48.05 48.05 0 0 0 48-48Zm-88 0a40 40 0 1 1 40 40a40 40 0 0 1-40-40Zm108 72h-88a4 4 0 0 0-4 4v56a4 4 0 0 0 4 4h88a4 4 0 0 0 4-4v-56a4 4 0 0 0-4-4Zm-4 56h-80v-48h80Z"/></svg>
                <p class="uppercase text-sm">Skills</p>
            </div>
    
            <div class="space-y-10">
                <p data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="md:text-6xl text-3xl">My <span class="text-[#F31313]">Advantages</span></p>
                <div class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div  data-aos="fade-right" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="border transition-border duration-500 hover:transition-border hover:duration-500 border-[#565656] hover:border-[#F31313] rounded-[90px] h-[250px] px-4 space-y-4 flex flex-col items-center justify-between py-10">
                        <img class="w-[100px] " src="./assets/images/html.png" alt="">
                        <p class="text-4xl text-[#F31313]">90%</p>
                    </div>
    
                    <div  data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="border transition-border duration-500 hover:transition-border hover:duration-500 border-[#565656] hover:border-[#F31313] rounded-[90px] h-[250px] px-4 space-y-4 flex flex-col items-center justify-between py-10">
                        <img class="w-[100px] " src="./assets/images/css.png" alt="">
                        <p class="text-4xl text-[#F31313]">88%</p>
                    </div>
    
                    <div  data-aos="fade-down" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="border transition-border duration-500 hover:transition-border hover:duration-500 border-[#565656] hover:border-[#F31313] rounded-[90px] h-[250px] px-4 space-y-4 flex flex-col items-center justify-between py-10">
                        <img class="w-[100px] " src="./assets/images/sass.png" alt="">
                        <p class="text-4xl text-[#F31313]">61%</p>
                    </div>
    
                    <div  data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="border transition-border duration-500 hover:transition-border hover:duration-500 border-[#565656] hover:border-[#F31313] rounded-[90px] h-[250px] px-4 space-y-4 flex flex-col items-center justify-between py-10">
                        <img class="w-[100px] " src="./assets/images/less.png" alt="">
                        <p class="text-4xl text-[#F31313]">57%</p>
                    </div>
    
                    <div  data-aos="fade-right" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="border transition-border duration-500 hover:transition-border hover:duration-500 border-[#565656] hover:border-[#F31313] rounded-[90px] h-[250px] px-4 space-y-4 flex flex-col items-center justify-between py-10">
                        <img class="w-[100px] " src="./assets/images/tailwind.png" alt="">
                        <p class="text-4xl text-[#F31313]">93%</p>
                    </div>
    
                    <div  data-aos="fade-down" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="border transition-border duration-500 hover:transition-border hover:duration-500 border-[#565656] hover:border-[#F31313] rounded-[90px] h-[250px] px-4 space-y-4 flex flex-col items-center justify-between py-10">
                        <img class="w-[100px] " src="./assets/images/js.png" alt="">
                        <p class="text-4xl text-[#F31313]">65%</p>
                    </div>
    
                    <div  data-aos="fade-right" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="border transition-border duration-500 hover:transition-border hover:duration-500 border-[#565656] hover:border-[#F31313] rounded-[90px] h-[250px] px-4 space-y-4 flex flex-col items-center justify-between py-10">
                        <img class="w-[100px] " src="./assets/images/jquery.png" alt="">
                        <p class="text-4xl text-[#F31313]">35%</p>
                    </div>
    
                    <div  data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="border transition-border duration-500 hover:transition-border hover:duration-500 border-[#565656] hover:border-[#F31313] rounded-[90px] h-[250px] px-4 space-y-4 flex flex-col items-center justify-between py-10">
                        <img class="w-[100px] " src="./assets/images/vue.png" alt="">
                        <p class="text-4xl text-[#F31313]">85%</p>
                    </div>
    
                    <div  data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="border transition-border duration-500 hover:transition-border hover:duration-500 border-[#565656] hover:border-[#F31313] rounded-[90px] h-[250px] px-4 space-y-4 flex flex-col items-center justify-between py-10">
                        <img class="w-[100px] " src="./assets/images/github.png" alt="">
                        <p class="text-4xl text-[#F31313]">89%</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- portfolio -->
        <section id="portfolio" class="py-[80px] text-[whitesmoke] space-y-10">
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="border px-4 py-2 rounded-[30px] flex items-center gap-4 w-fit">
                <svg class="w-full" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0m6-14a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0"/></svg>
                <p class="uppercase text-sm">Portfolio</p>
            </div>
            <p data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="md:text-6xl text-3xl">Featured <span class="text-[#F31313]">Projects</span></p>
            
            <div class="grid lg:gap-20 gap-10">
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="space-y-2">
                    <div class="website relative">
                      <img class="rounded-2xl w-full" src="./assets/images/dervac.png" alt="">
                      <div class="absolute top-0 bg-black h-full w-full opacity-25"></div>
                      <div class="absolute flex gap-4 bottom-4 left-2">
                        <p class="code lg:text-base md:text-sm text-[10px] transition-all duration-200 text-black bg-[whitesmoke] px-4 py-2 rounded-[25px]">Vue</p>
                        <p class="code lg:text-base md:text-sm text-[10px] transition-all duration-200 text-black bg-[whitesmoke] px-4 py-2 rounded-[25px]">Tailwind</p>
                      </div>
                    </div>
                    <p><a href="#" class="hover:underline md:text-2xl">Deploying Soon - Dervac Hub Main Website</a></p>
                </div>
    
                <div data-aos="fade-right" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="space-y-2">
                    <div class="website relative">
                      <img class="rounded-2xl w-full" src="./assets/images/advice-generator.png" alt="">
                      <div class="absolute top-0 bg-black h-full w-full opacity-25"></div>
                      <div class="absolute flex gap-4 bottom-4 left-2">
                        <p class="code lg:text-base md:text-sm text-[10px] transition-all duration-200 text-black bg-[whitesmoke] px-4 py-2 rounded-[25px]">Html</p>
                        <p class="code lg:text-base md:text-sm text-[10px] transition-all duration-200 text-black bg-[whitesmoke] px-4 py-2 rounded-[25px]">Css</p>
                        <p class="code lg:text-base md:text-sm text-[10px] transition-all duration-200 text-black bg-[whitesmoke] px-4 py-2 rounded-[25px]">Javascript</p>
                      </div>
                    </div>
                    <p><a target="_blank" href="https://abdulrahmanluqman.github.io/advice-generator/" class="hover:underline md:text-2xl">External Link - Advice Generator</a></p>
                </div>
    
                <div data-aos="fade-right" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="space-y-2">
                    <div class="website relative">
                      <img class="rounded-2xl w-full" src="./assets/images/dashboard.png" alt="">
                      <div class="absolute top-0 bg-black h-full w-full opacity-25"></div>
                      <div class="absolute flex gap-4 bottom-4 left-2">
                        <p class="code lg:text-base md:text-sm text-[10px] transition-all duration-200 text-black bg-[whitesmoke] px-4 py-2 rounded-[25px]">Vue</p>
                        <p class="code lg:text-base md:text-sm text-[10px] transition-all duration-200 text-black bg-[whitesmoke] px-4 py-2 rounded-[25px]">Css</p>
                        <p class="code lg:text-base md:text-sm text-[10px] transition-all duration-200 text-black bg-[whitesmoke] px-4 py-2 rounded-[25px]">Tailwind</p>
                      </div>
                    </div>
                    <p class="project md:text-2xl">Gallery - Dashboard</p>
                </div>
                
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="space-y-2">
                    <div class="website relative">
                      <img class="rounded-2xl w-full" src="./assets/images/Anjorin.png" alt="">
                      <div class="absolute top-0 bg-black h-full w-full opacity-25"></div>
                      <div class="absolute flex gap-4 bottom-4 left-2">
                        <p class="code lg:text-base md:text-sm text-[10px] transition-all duration-200 text-black bg-[whitesmoke] px-4 py-2 rounded-[25px]">Html</p>
                        <p class="code lg:text-base md:text-sm text-[10px] transition-all duration-200 text-black bg-[whitesmoke] px-4 py-2 rounded-[25px]">Tailwind</p>
                        <p class="code lg:text-base md:text-sm text-[10px] transition-all duration-200 text-black bg-[whitesmoke] px-4 py-2 rounded-[25px]">Javascript</p>
                      </div>
                    </div>
                    <p class="project"><a target="_blank" href="https://anjorin.net" class="hover:underline md:text-2xl">External Link - Chief Technology Of Dervac(portfolio)</a></p>
                </div>
            </div>
        </section>

        <!-- Testimonial -->
        <section id="testimonial" class="py-[80px] text-[whitesmoke] space-y-10">
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

        <!-- Contact -->
        <section id="contact" class="py-[80px] text-[whitesmoke] space-y-10">
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

     </div>

     <!-- Navbar -->
     <div>
        <div @click="showSideNavs = true" class="fixed lg:absolute right-6 md:right-20 lg:right-10 bg-[#010001] z-[500] top-12 border border-[#565656] px-4 py-[22px] rounded-[50%] space-y-[2px]">
            <div class="bg-white w-[20px] h-[2px] z-[500]"></div>
            <div class="bg-white w-[20px] h-[2px] z-[500]"></div>
        </div>
        <div class="block w-full md:w-[340px] z-[999] h-screen bg-[#191919] fixed top-0 transition-right duration-700" :class="showSideNavs ? 'right-0' : 'right-[15000px]'">
           <!-- <div  @click="showSideNavs = false" class="w-fit absolute right-2 top-6 cursor-pointer">
              <svg class="text-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"/></svg>
           </div> -->
           <div class="space-y-6 w-fit mx-auto my-[100px]">
              <p class="text-[#999999] text-lg">Menu</p>
              <div class="space-y-4">
                 <a href="#home"  @click="showSideNavs = false" class="flex gap-4 items-center w-fit">
                    <svg class="w-full" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="#999999" d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5l5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z"/></svg>
                    <p  class="cursor-pointer text-[#999999]">Home</p>
                 </a>
                 <a href="#about"  @click="showSideNavs = false" class="flex gap-4 items-center w-fit">
                    <svg class="w-full" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="#999999" d="M8 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1s1-4 6-4s6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664h10Z"/></svg>
                    <p class="cursor-pointer text-[#999999]">About</p>
                 </a>
                 <a href="#resume"  @click="showSideNavs = false" class="flex gap-4 items-center w-fit">
                    <svg class="w-full" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="#999999" d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/></svg>
                    <p class="cursor-pointer text-[#999999]">Resume</p>
                 </a>
                 <a href="#services"  @click="showSideNavs = false" class="flex gap-4 items-center w-fit">
                    <svg class="w-full" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="#999999" d="M7 9a6 6 0 0 1 6-6h.5a.5.5 0 0 0 0-1H13a7 7 0 0 0-7 7v1a1 1 0 0 1-1 1H2.5a.5.5 0 0 0 0 1H5a2 2 0 0 0 2-2V9Zm6.5-3A3.5 3.5 0 0 0 10 9.5v1A4.5 4.5 0 0 1 5.5 15h-3a.5.5 0 0 1 0-1h3A3.5 3.5 0 0 0 9 10.5v-1A4.5 4.5 0 0 1 13.5 5h4a.5.5 0 0 1 0 1h-4Zm.5 3a1 1 0 0 0-1 1v1a7 7 0 0 1-7 7h-.5a.5.5 0 0 1 0-1H6a6 6 0 0 0 6-6v-1a2 2 0 0 1 2-2h3.5a.5.5 0 0 1 0 1H14Z"/></svg>
                    <p class="cursor-pointer text-[#999999]">Services</p>
                 </a>
                 <a href="#skills"  @click="showSideNavs = false" class="flex gap-4 items-center w-fit">
                    <svg class="w-full" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="#999999" d="M67.79 62.74a4 4 0 0 0-7.58 0l-40 120A4 4 0 0 0 24 188h80a4 4 0 0 0 3.79-5.26ZM29.55 180L64 76.65L98.45 180ZM204 76a48 48 0 1 0-48 48a48.05 48.05 0 0 0 48-48Zm-88 0a40 40 0 1 1 40 40a40 40 0 0 1-40-40Zm108 72h-88a4 4 0 0 0-4 4v56a4 4 0 0 0 4 4h88a4 4 0 0 0 4-4v-56a4 4 0 0 0-4-4Zm-4 56h-80v-48h80Z"/></svg>
                    <p class="cursor-pointer text-[#999999]">Skills</p>
                 </a>
                 <a href="#portfolio"  @click="showSideNavs = false" class="flex gap-4 items-center w-fit">
                    <svg class="w-full" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#999999" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0m6-14a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0"/></svg>
                    <p class="cursor-pointer text-[#999999]">Portfolio</p>
                 </a>
                 <a href="#testimonial"  @click="showSideNavs = false" class="flex gap-4 items-center w-fit">
                    <svg class="w-full" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#999999" d="M6 14h12v-2H6v2Zm0-3h12V9H6v2Zm0-3h12V6H6v2Zm16 14l-4-4H4q-.825 0-1.413-.588T2 16V4q0-.825.588-1.413T4 2h16q.825 0 1.413.588T22 4v18ZM4 4v12h14.825L20 17.175V4H4Zm0 0v13.175V4Z"/></svg>
                    <p class="cursor-pointer text-[#999999]">Testimonial</p>
                 </a>
                 <a href="#contact"  @click="showSideNavs = false" class="flex gap-4 items-center w-fit">
                    <svg class="w-full" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#999999" d="M14 11h7V6h-7v5Zm3.5-1.25L15 8V7l2.5 1.75L20 7v1l-2.5 1.75ZM2 21q-.825 0-1.413-.588T0 19V5q0-.825.588-1.413T2 3h20q.825 0 1.413.588T24 5v14q0 .825-.588 1.413T22 21H2Zm13.9-2H22V5H2v14h.1q1.05-1.875 2.9-2.938T9 15q2.15 0 4 1.063T15.9 19ZM9 14q1.25 0 2.125-.875T12 11q0-1.25-.875-2.125T9 8q-1.25 0-2.125.875T6 11q0 1.25.875 2.125T9 14Zm-4.45 5h8.9q-.85-.95-2.013-1.475T9 17q-1.275 0-2.425.525T4.55 19ZM9 12q-.425 0-.713-.288T8 11q0-.425.288-.713T9 10q.425 0 .713.288T10 11q0 .425-.288.713T9 12Zm3 0Z"/></svg>
                    <p class="cursor-pointer text-[#999999]">Contact</p>
                 </a>
              </div>
              <div>
                 <p class="cursor-pointer text-[#999999] text-lg">Social</p>
                 <div class="flex gap-4">
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#999999" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg></a>
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="#999999" d="M26.2 4H5.8C4.8 4 4 4.8 4 5.7v20.5c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V5.7c0-.9-.8-1.7-1.8-1.7zM11.1 24.4H7.6V13h3.5v11.4zm-1.7-13c-1.1 0-2.1-.9-2.1-2.1c0-1.2.9-2.1 2.1-2.1c1.1 0 2.1.9 2.1 2.1s-1 2.1-2.1 2.1zm15.1 12.9H21v-5.6c0-1.3 0-3.1-1.9-3.1S17 17.1 17 18.5v5.7h-3.5V13h3.3v1.5h.1c.5-.9 1.7-1.9 3.4-1.9c3.6 0 4.3 2.4 4.3 5.5v6.2z"/></svg></a>
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#999999" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"/></svg></a>
                 </div>
              </div>
           </div>
        </div>

        <div class="sticky top-[140px] hidden lg:block">
           <div class="w-14 py-4 mr-10 border border-[#565656] rounded-[50px] flex flex-col items-center gap-6">
           <a href="#home"  @mouseover="showHomeName = true" @mouseleave="showHomeName = false"  class="relative w-full">
              <svg class="w-full cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="#565656" d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5l5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z"/></svg>
              <div class="absolute top-[2px] right-[53px]" @mouseover="showHomeName = true" @mouseleave="showHomeName = false" >
                 <div class="relative bg-[#404042] rounded px-4 cursor-pointer" v-show="showHomeName">
                    <p class="text-[12px] text-white cursor-pointer font-semibold">Home</p>
                    <div class="triangle"></div>
                 </div>
              </div>
            </a>
     
           <a href="#about"  @mouseover="showAboutName = true" @mouseleave="showAboutName = false"  class="relative w-full">
              <svg class="w-full cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="#565656" d="M8 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1s1-4 6-4s6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664h10Z"/></svg>
              <div class="absolute top-[2px] right-[53px]" @mouseover="showAboutName = true" @mouseleave="showAboutName = false" >
                 <div class="relative bg-[#404042] rounded px-4 cursor-pointer" v-show="showAboutName">
                    <p class="text-[12px] text-white cursor-pointer font-semibold">About</p>
                    <div class="triangle"></div>
                 </div>
              </div>
            </a>
     
           <a href="#resume"  @mouseover="showResumeName = true" @mouseleave="showResumeName = false"  class="relative w-full">
              <svg class="w-full cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="#565656" d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/></svg>
              <div class="absolute top-[2px] right-[53px]" @mouseover="showResumeName = true" @mouseleave="showResumeName = false" >
                 <div class="relative bg-[#404042] rounded px-4 cursor-pointer" v-show="showResumeName">
                    <p class="text-[12px] text-white cursor-pointer font-semibold">Resume</p>
                    <div class="triangle"></div>
                 </div>
              </div>
            </a>
     
           <a href="#services"  @mouseover="showServicesName = true" @mouseleave="showServicesName = false"  class="relative w-full">
              <svg class="w-full cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="#565656" d="M7 9a6 6 0 0 1 6-6h.5a.5.5 0 0 0 0-1H13a7 7 0 0 0-7 7v1a1 1 0 0 1-1 1H2.5a.5.5 0 0 0 0 1H5a2 2 0 0 0 2-2V9Zm6.5-3A3.5 3.5 0 0 0 10 9.5v1A4.5 4.5 0 0 1 5.5 15h-3a.5.5 0 0 1 0-1h3A3.5 3.5 0 0 0 9 10.5v-1A4.5 4.5 0 0 1 13.5 5h4a.5.5 0 0 1 0 1h-4Zm.5 3a1 1 0 0 0-1 1v1a7 7 0 0 1-7 7h-.5a.5.5 0 0 1 0-1H6a6 6 0 0 0 6-6v-1a2 2 0 0 1 2-2h3.5a.5.5 0 0 1 0 1H14Z"/></svg>
              <div class="absolute top-[2px] right-[53px]" @mouseover="showServicesName = true" @mouseleave="showServicesName = false" >
                 <div class="relative bg-[#404042] rounded px-4 cursor-pointer" v-show="showServicesName">
                    <p class="text-[12px] text-white cursor-pointer font-semibold">Services</p>
                    <div class="triangle"></div>
                 </div>
              </div>
            </a>
     
           <a href="#skills"  @mouseover="showSkillsName = true" @mouseleave="showSkillsName = false"  class="relative w-full">
              <svg class="w-full cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="#565656" d="M67.79 62.74a4 4 0 0 0-7.58 0l-40 120A4 4 0 0 0 24 188h80a4 4 0 0 0 3.79-5.26ZM29.55 180L64 76.65L98.45 180ZM204 76a48 48 0 1 0-48 48a48.05 48.05 0 0 0 48-48Zm-88 0a40 40 0 1 1 40 40a40 40 0 0 1-40-40Zm108 72h-88a4 4 0 0 0-4 4v56a4 4 0 0 0 4 4h88a4 4 0 0 0 4-4v-56a4 4 0 0 0-4-4Zm-4 56h-80v-48h80Z"/></svg>
              <div class="absolute top-[2px] right-[53px]" @mouseover="showSkillsName = true" @mouseleave="showSkillsName = false" >
                 <div class="relative bg-[#404042] rounded px-4 cursor-pointer" v-show="showSkillsName">
                    <p class="text-[12px] text-white cursor-pointer font-semibold">Skills</p>
                    <div class="triangle"></div>
                 </div>
              </div>
            </a>
     
           <a href="#portfolio"  @mouseover="showPortfolioName = true" @mouseleave="showPortfolioName = false"  class="relative w-full">
             <svg class="w-full cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#565656" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0m6-14a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0a1 1 0 1 0-2 0"/></svg>
             <div class="absolute top-[2px] right-[53px]" @mouseover="showPortfolioName = true" @mouseleave="showPortfolioName = false" >
                 <div class="relative bg-[#404042] rounded px-4 cursor-pointer" v-show="showPortfolioName">
                    <p class="text-[12px] text-white cursor-pointer font-semibold">Portfolio</p>
                    <div class="triangle"></div>
                 </div>
              </div>
            </a>
     
           <a href="#testimonial"  @mouseover="showTestimonialName = true" @mouseleave="showTestimonialName = false"  class="relative w-full">
              <svg class="w-full cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#565656" d="M6 14h12v-2H6v2Zm0-3h12V9H6v2Zm0-3h12V6H6v2Zm16 14l-4-4H4q-.825 0-1.413-.588T2 16V4q0-.825.588-1.413T4 2h16q.825 0 1.413.588T22 4v18ZM4 4v12h14.825L20 17.175V4H4Zm0 0v13.175V4Z"/></svg>
              <div class="absolute top-[2px] right-[53px]" @mouseover="showTestimonialName = true" @mouseleave="showTestimonialName = false" >
                 <div class="relative bg-[#404042] rounded px-4 cursor-pointer" v-show="showTestimonialName">
                    <p class="text-[12px] text-white cursor-pointer font-semibold">Testimonial</p>
                    <div class="triangle"></div>
                 </div>
              </div>
            </a>
     
           <a href="#contact"  @mouseover="showContactName = true" @mouseleave="showContactName = false"  class="relative w-full">
              <svg class="w-full cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#565656" d="M14 11h7V6h-7v5Zm3.5-1.25L15 8V7l2.5 1.75L20 7v1l-2.5 1.75ZM2 21q-.825 0-1.413-.588T0 19V5q0-.825.588-1.413T2 3h20q.825 0 1.413.588T24 5v14q0 .825-.588 1.413T22 21H2Zm13.9-2H22V5H2v14h.1q1.05-1.875 2.9-2.938T9 15q2.15 0 4 1.063T15.9 19ZM9 14q1.25 0 2.125-.875T12 11q0-1.25-.875-2.125T9 8q-1.25 0-2.125.875T6 11q0 1.25.875 2.125T9 14Zm-4.45 5h8.9q-.85-.95-2.013-1.475T9 17q-1.275 0-2.425.525T4.55 19ZM9 12q-.425 0-.713-.288T8 11q0-.425.288-.713T9 10q.425 0 .713.288T10 11q0 .425-.288.713T9 12Zm3 0Z"/></svg>
              <div class="absolute top-[2px] right-[53px]" @mouseover="showContactName = true" @mouseleave="showContactName = false" >
                 <div class="relative bg-[#404042] rounded px-4 cursor-pointer" v-show="showContactName">
                    <p class="text-[12px] text-white cursor-pointer font-semibold">Contact</p>
                    <div class="triangle"></div>
                 </div>
              </div>
            </a>
        </div>
        </div>

        <div @click="showSideNavs = false" class="w-full h-screen bg-white fixed top-0 left-0 opacity-[0.2]" v-show="showSideNavs">
     
        </div>
    </div>
    </div>
 </template>

<!-- <template>
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
</template> -->

<style scoped>
template{
    scroll-behavior: smooth;
}

.hire:hover p{
  color: #F31313;
}

.box:hover .circle{
    background-color: #F31313;
    transition: all 0.5s;
}
.box:hover .years{
    color: #F31313;
    transition: all 0.5s;
}

.boxx:hover .projects{
    text-decoration: underline;
}

.website:hover .code{
    background-color: #010001;
    color: whitesmoke;
    transition: all ease-in 700ms;
}
</style>
