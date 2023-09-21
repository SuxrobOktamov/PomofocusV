<script setup lang="ts"></script>

<template>
    <footer class="mt-[40px] border-[2px] border-[#efefef] text-center pt-30px text-[#785e60] pb-[20px]">
        <div class="w-full max-w-[620px] m-auto px-3 py-0 flex flex-col gap-4">
            <div class="flex items-center justify-center gap-3 flex-wrap">
                <router-link to="/" class="cursor-pointer text-[#785e60] uppercase font-bold">
                    Home
                </router-link>
                <router-link to="privacy" class="cursor-pointer text-[#785e60] uppercase font-bold">
                    Privacy
                </router-link>
                <router-link to="terms" class="cursor-pointer text-[#785e60] uppercase font-bold">
                    Terms
                </router-link>
                <router-link to="contact" class="cursor-pointer text-[#785e60] uppercase font-bold">
                    Contact
                </router-link>
                <router-link to="app" class="cursor-pointer text-[#785e60] uppercase font-bold">
                    Simple Page
                </router-link>
            </div>
            <div class="footer-icons flex justify-center gap-3">
                <a href="https://www.facebook.com/pomofocus" class="flex items-center justify-center font-bold bg-[#999] rounded-full h-[40px] w-[40px]">
                    <div i-carbon-logo-facebook class="text-[28px] text-[#fff]" />
                </a>
                <a href="https://twitter.com/pomofocus" class="flex items-center justify-center font-bold bg-[#999] rounded-full h-[40px] w-[40px]">
                    <div i-carbon-logo-twitter class="text-[28px] text-[#fff]" />
                </a>
                <a href="https://www.instagram.com/" class="flex items-center justify-center font-bold bg-[#999] rounded-full h-[40px] w-[40px]">
                    <div i-carbon-logo-instagram class="text-[28px] text-[#fff]" />
                </a>
            </div>
            <div>
                <p>Made with &lt;3  <a href="#" class="text-#db524d opacity-80 font-bold">Yuya Uzu</a> </p>
            </div>
            <div class="text-12px text-[#a19192]">
                &copy;Pomofocus 2023. All Rights Reserved.
            </div>
        </div>
    </footer>
</template>
