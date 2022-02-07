<template>
    <InnerPageHero :image-url="settings.contact_image_url" title="Contact Us" />
    <div class="container mx-auto px-4 sm:px-0 py-8 sm:py-12 px-4 sm:px-0">
        <div class="grid sm:grid-cols-3 sm:gap-4">
            <div><span class="text-gray-500">Address:</span> {{ settings.address }}</div>
            <div><span class="text-gray-500">Phone:</span> {{ settings.phone }}</div>
            <div><span class="text-gray-500">Email:</span> {{ settings.email }}</div>
        </div>
        <div class="mt-8 sm:mt-16 grid sm:grid-cols-2 gap-8 sm:gap-12">
            <div>
                <iframe :src="settings.google_map_url" class="w-full" height="450" style="border: 0" allowfullscreen="" loading="lazy"></iframe>
            </div>
            <form class="p-8 bg-gray-300 shadow rounded space-y-4" @submit.prevent="sendFeedback">
                <div>
                    <input v-model="form.name" type="text" placeholder="Enter Name" class="px-4 py-2 w-full border focus:border-primary focus:outline-none rounded bg-gray-200" required />
                    <span class="text-red-600 text-sm">{{ getError('name') }}</span>
                </div>
                <div>
                    <input v-model="form.email" type="email" placeholder="Enter Email" class="px-4 py-2 w-full border focus:border-primary focus:outline-none rounded bg-gray-200" required />
                    <span class="text-red-600 text-sm">{{ getError('email') }}</span>
                </div>
                <div>
                    <input v-model="form.phone" type="phone" placeholder="Phone Number" class="px-4 py-2 w-full border focus:border-primary focus:outline-none rounded bg-gray-200" required />
                    <span class="text-red-600 text-sm">{{ getError('phone') }}</span>
                </div>
                <div>
                    <textarea v-model="form.message" placeholder="Enter Message" class="px-4 py-2 w-full border focus:border-primary focus:outline-none rounded bg-gray-200" rows="5"></textarea>
                    <span class="text-red-600 text-sm">{{ getError('message') }}</span>
                </div>

                <!-- <div class="px-4 py-2 bg-red-600 text-white rounded">
          Lorem ipsum dolor sit amet.
        </div> -->

                <div v-if="successMessage" class="px-4 py-2 bg-green-600 text-white rounded">{{ successMessage }}</div>

                <button class="px-4 py-2 sm:px-6 bg-primary text-white rounded focus:outline-none" :class="{ 'opacity-50': loading }" :disabled="loading">
                    <span v-if="loading"> Submitting...</span>
                    <span v-else>Submit</span>
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import InnerPageHero from '@/components/InnerPageHero'
import { useSettings } from '@/composables/useSettings.js'
import { useContact } from '@/composables/useContact.js'

export default {
    components: {
        InnerPageHero,
    },

    setup() {
        let { settings } = useSettings()
        let { form, loading, sendFeedback, successMessage, getError } = useContact()

        return {
            settings,
            form,
            loading,
            sendFeedback,
            successMessage,
            getError,
        }
    },
}
</script>

<style></style>
