<template>
    <section class="mt-6">
        <Disclosure>
            <DisclosureButton class="p-2 flex bg-coolgray-50 rounded-lg border border-solid border-coolgray-200 mb-2 w-full md:w-2/3 justify-between">
                <h2 class="pl-2 subhead-2-b md:display-1-b text-coolgray-800 my-auto">{{ title }}</h2>
                <i class="ri-arrow-right-s-line ri-2x my-auto"></i>
            </DisclosureButton>
            <DisclosurePanel class="p-6 flex bg-coolgray-50 rounded-lg border border-solid border-coolgray-200 w-full md:w-2/3">
                <div class="grid grid-cols-2 gap-y-2 gap-x-4 md:flex md:space-x-12">
                    <div 
                    v-for="item in list"
                    :key="item.name"
                    class="flex space-x-2"
                    >
                        <i v-if="type == 'devicon'" :class="[ item.icon ]" class="colored display-3-r"></i>
                        <i v-else :class="[ item.icon ]" class="ri-2x"></i>
                        <p class="subhead-2-r md:display-1-r my-auto">{{ item.name }}</p>
                    </div>
                </div>
            </DisclosurePanel>
        </Disclosure>
    </section>

</template>
<script setup>
  import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  } from '@headlessui/vue'
defineProps({
    title:String,
    list: Object,
    type: String
})
</script>