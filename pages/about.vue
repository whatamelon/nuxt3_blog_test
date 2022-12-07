<template>
  <div class="px-5 md:px-0 py-8 md:py-20">
    <h1 class="display-2-b md:display-5-b text-coolgray-800">안녕하세요<span class="display-1-b">👋</span><br /> 홍승호입니다.</h1>

    <section class="mt-12">
        <h2 class="display-1-b md:display-3-b text-coolgray-800 mb-4">Career</h2>
        <p class="body-long-3-r md:headline-long-r text-coolgray-500">스타트업의 개발자이자 코파운더로 약 4년간 의류시장에 도전하고 있습니다. <br/>
            처음 3년은 여성 패션 플랫폼 
            <NuxtLink to="https://play.google.com/store/apps/details?id=com.memory.and.fitchoo&hl=ko&gl=US&pli=1" target="_blank">
            <span class="body-3-b md:headline-b text-coolgray-800 bg-coolgray-200 px-1 hover:text-primary hover:bg-coolgray-300 rounded-md">피클링</span>
            </NuxtLink>
            을 만들었습니다. <br/>
            최근에는 브랜드 중고 서비스 
            <NuxtLink to="https://the-relay.com/" target="_blank">
                <span class="body-3-b md:headline-b text-coolgray-800 bg-coolgray-200 px-1 hover:text-primary hover:bg-coolgray-300 rounded-md">릴레이</span>
            </NuxtLink>
            를 만들고 있습니다.
        </p>
    </section>

    <section class="mt-12">
        <h2 class="display-1-b md:display-3-b text-coolgray-800 mb-4">Me as a Developer</h2>
        <p class="body-long-3-r md:headline-long-r text-coolgray-500">
            진득하니 앉아있기를 잘하지는 못하지만, 문제를 해결함에서 오는 도파민 분비를 사랑합니다.<br/>
            보잘것 없지만, 점점 늘어가는 실력을 체감할 때면 기분이 좋습니다.<br/>
            아무래도 중독됐습니다.
        </p>
    </section>
    
    <section class="mt-12 mb-20">
        <h2 class="display-1-b md:display-3-b text-coolgray-800 mb-4">Me as a Builder</h2>
        <p class="body-long-3-r md:headline-long-r text-coolgray-500">
            제로베이스에서, 하루종일 회의를 하며, 사업을 상상할 때의 에너지를 사랑합니다.<br/>
            상상을 현실로 만들고, 작동하는걸 체감할 때면 기분이 좋습니다.<br/>
            아무래도 중독됐습니다.
        </p>
    </section>


    <PartialsAboutDisclosureBox
    v-for="item in aboutList"
    :key="item.title"
    :title="item.title"
    :list="item.list"
    :type="item.type"
    ></PartialsAboutDisclosureBox>
  </div>

</template>

<script setup>
const aboutList = [
    {
        title:'Skill Set',
        list: [
            {
                icon:'devicon-vuejs-plain',
                name:'Vue.js',
            },
            {
                icon:'devicon-nuxtjs-plain',
                name:'Nuxt.js',
            },
            {
                icon:'devicon-flutter-plain',
                name:'Flutter',
            },
            {
                icon:'devicon-express-original',
                name:'Express.js',
            },
        ],
        type:'devicon'
    },
    {
        title:'Language Set',
        list: [
            {
                icon:'devicon-javascript-plain',
                name:'Javascript',
            },
            {
                icon:'devicon-python-plain',
                name:'Python',
            },
            {
                icon:'devicon-dart-plain',
                name:'Dart',
            },
            {
                icon:'devicon-java-plain',
                name:'Java',
            },
        ],
        type:'devicon'
    },
    {
        title:'Want to Learn',
        list: [
            {
                icon:'devicon-haskell-plain',
                name:'Haskell',
            },
            {
                icon:'devicon-go-plain',
                name:'Go',
            },
        ],
        type:'devicon'
    },
    {
        title:'Interesting',
        list: [
            {
                icon:'ri-flow-chart',
                name:'UX for E-Commerce',
            },
            {
                icon:'ri-global-line',
                name:'SEO',
            },
            {
                icon:'ri-router-line',
                name:'IoT',
            },
        ],
        type:'remixicon'
    }
];
</script>