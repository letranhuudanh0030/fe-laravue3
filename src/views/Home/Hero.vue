<template>
    <div class="relative z-0 hero-height">
        <img :src="settings.hero_image_url" alt="hero" class="block w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <div class="px-4 sm:px-0 absolute inset-0 text-white">
            <div class="container mx-auto h-full flex flex-col justify-center">
                <div>Welcome to</div>
                <div class="mt-4 text-6xl font-bold">LaraVue3</div>
                <div class="mt-6 sm:w-1/2">{{ settings.hero_description }}</div>
                <div class="mt-8 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useSettings } from '@/composables/useSettings.js'

export default {
    setup() {
        let { settings } = useSettings()

        return {
            settings,
        }
    },
}
</script>

<style></style>
