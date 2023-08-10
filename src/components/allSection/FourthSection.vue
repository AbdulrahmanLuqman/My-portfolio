<template>
    <section class="text-[whitesmoke] space-y-10">
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="border px-4 py-2 rounded-[30px] flex items-center gap-4 w-fit">
            <svg class="w-full" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill="white" d="M7 9a6 6 0 0 1 6-6h.5a.5.5 0 0 0 0-1H13a7 7 0 0 0-7 7v1a1 1 0 0 1-1 1H2.5a.5.5 0 0 0 0 1H5a2 2 0 0 0 2-2V9Zm6.5-3A3.5 3.5 0 0 0 10 9.5v1A4.5 4.5 0 0 1 5.5 15h-3a.5.5 0 0 1 0-1h3A3.5 3.5 0 0 0 9 10.5v-1A4.5 4.5 0 0 1 13.5 5h4a.5.5 0 0 1 0 1h-4Zm.5 3a1 1 0 0 0-1 1v1a7 7 0 0 1-7 7h-.5a.5.5 0 0 1 0-1H6a6 6 0 0 0 6-6v-1a2 2 0 0 1 2-2h3.5a.5.5 0 0 1 0 1H14Z"/></svg>
            <p class="uppercase text-sm">Services</p>
        </div>
        <p data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="md:text-6xl text-3xl">My <span class="text-[#F31313]">Specialization</span></p>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" data-aos-delay="100" data-aos-easing="ease-in-out" class="box flex justify-between p-14 border border-gray-600 transition-border duration-200 rounded-[20px] hover:border-[#F31313] hover:transition-border hover:duration-200">
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
</template>

<style scoped>
.box:hover .projects{
    text-decoration: underline;
}
</style>