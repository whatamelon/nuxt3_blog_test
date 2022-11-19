<template>
    <header class="fixed w-full top-0 z-50 bg-coolgray-300 border-b border-solid border-coolgray-800 bg-opacity-50 backdrop-blur backdrop-filter">
        <nav class="w-full h-20 hidden md:flex px-0 container">
            <div class='w-1/3 flex justify-start my-auto'>
                <NuxtLink :to="'/'">
                    <h1 class="display-3-b text-coolgray-800">Whatamelon's Blog</h1>
                </NuxtLink>
            </div>
            <div class="w-2/3 flex justify-end space-x-8 my-auto">
                <NuxtLink to="https://www.linkedin.com/in/seung-ho-hong-b18407253/" target="_blank">
                    <i class="ri-linkedin-fill ri-2x"></i>
                </NuxtLink>
                
                <NuxtLink to="https://github.com/whatamelon" target="_blank">
                    <i class="ri-github-fill ri-2x"></i>
                </NuxtLink>
            </div>
        </nav>

        <nav class="head-container-noColor w-screen block md:hidden max-w-md px-5">
            <div class="flex h-12 justify-between">
                <div class="my-auto w-2/3">
                    <NuxtLink :to="'/'">
                        <h1 class="subhead-2-b text-coolgray-800">Whatamelon's Blog</h1>
                    </NuxtLink>
                </div>
                <div class="my-auto">
                    <Menu>
                        <MenuButton>
                            <i class="ri-menu-line ri-xl mt-3 flex justify-end"></i>
                        </MenuButton>
                        <MenuItems class="fixed grid top-14 z-50 bg-coolgray-300 h-60 right-4 px-5 pt-2 rounded-lg shadow bg-opacity-90 backdrop-blur-xl">
                            <div
                                v-for="link in links"
                                :key="link.href"
                                >
                                <MenuItem
                                    v-if="link.type == 'inner'" 
                                    :href="link.href"
                                    as="a"
                                    class="ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black mt-1"
                                >
                                    <p class="body-2-b text-coolgray-700">{{ link.label }}</p>
                                </MenuItem>
                                <MenuItem
                                    v-else
                                    :href="link.href"
                                    target="_blank"
                                    as="a"
                                    class="ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black mt-1"
                                >
                                    <i :class="[ link.label ]" class="ri-lg text-coolgray-700"></i>
                                </MenuItem>
                            </div>
                        </MenuItems>
                    </Menu>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
  import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

  const links = [
    { href: '/blogs', label: 'Blog', type:'inner' },
    { href: '/devs', label: 'Dev' , type:'inner'},
    { href: '/foods', label: 'Food', type:'inner' },
    { href: '/about', label: 'About', type:'inner' },
    { href: 'https://www.linkedin.com/in/seung-ho-hong-b18407253/', label: 'ri-linkedin-fill', type:'outer' },
    { href: 'https://github.com/whatamelon', label: 'ri-github-fill', type:'outer' },
  ]
</script>