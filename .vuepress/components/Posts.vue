<template>
  <section class="home-blog-content">
    <section class="blog-list">
      <PostList :data="postsOfCurrentPage" />
      <Pagation
        :currentPage="currentPage"
        :total="posts.length"
        @change="handlePagation"
      />
    </section>
    <MagicCard class="info-wrapper">
      <PersonalInfo />

      <h4 class="module-title">
        <Xicons icon="Folder" text="分类" />
      </h4>

      <ul class="category-wrapper">
        <li
          class="category-item"
          v-for="({ label, length, categoryValue }, key, index) in categories"
          :key="index">
          <router-link
            class="category-link"
            :to="`/categories/${categoryValue}/1.html`"
          >
            <span class="text">{{ label }}</span>
            <span class="num">{{ length }}</span>
          </router-link>
        </li>
      </ul>

      <h4 class="module-title">
        <Xicons icon="Tag" text="标签" />
      </h4>

      <ul class="tag-wrapper">
        <li
          class="tag-item"
          v-for="({ label, categoryValue }, key, index) in tags"
          :key="index"
          :style="{ borderColor: createOneColor() }"
        >
          <router-link
            class="tag-link"
            :to="`/tags/${categoryValue}/1.html`"
          >{{ label }}</router-link>
        </li>
      </ul>
    </MagicCard>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import { useExtendPageData } from '@vuepress-reco/vuepress-plugin-page/composables'
import { useRoute, useRouter } from 'vue-router'
import PostList from 'vuepress-theme-reco/lib/client/components/PostList.vue'
import Pagation from 'vuepress-theme-reco/lib/client/components/Pagation.vue'
import { useRouteLocale, withBase } from 'vuepress/client';
import { useThemeLocaleData } from '@composables/index.js';

import { createOneColor, throttle } from '@utils/index.js'
import PersonalInfo from 'vuepress-theme-reco/lib/client/components/PersonalInfo.vue'


//const { posts } = useExtendPageData()

const { posts, categorySummary } = useExtendPageData()

const currentPage = ref(1)
const blogContentTop = ref(0)
const perPage = 10

//添加
const categories = computed(() => {
  return categorySummary?.categories?.items || []
})

const tags = computed(() => {
  return categorySummary?.tags?.items || []
})

const postsOfCurrentPage = computed(() => {
  const start = (currentPage.value - 1) * perPage
  const end = currentPage.value * perPage

  return (posts || []).slice(start, end)
})

let handlePagation = (page) => {}
const route = useRoute()
const router = useRouter()
const routeLocale = useRouteLocale()
const themeLocal = useThemeLocaleData()

const queryPage = computed(() => route.query.page)

// @ts-ignore
if (!__VUEPRESS_SSR__) {
  handlePagation = (page) => {
    currentPage.value = page

    const homeHref = withBase('/posts')
    router.push(page > 1 ? `${homeHref}/${page}.html` : `${homeHref}.html`)

    setTimeout(() => {
      if (blogContentTop.value === 0) {
        const blogContent = document.querySelector('.home-blog-content')
        if (blogContent) blogContentTop.value = blogContent.getBoundingClientRect().top
      }

      window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
    }, 100)
  }

  onMounted(() => {
  // @ts-ignore
    watch(queryPage, (newVal) => {
      if (newVal) {
        currentPage.value = Number(newVal)
      }
    })
  })
  
  window.addEventListener(
    'scroll',
    throttle(() => {
      const card = document.querySelector('.info-wrapper')

      if (card) {
        // @ts-ignore
        card.setAttribute('data-x', card.offsetLeft)
        // @ts-ignore
        card.setAttribute('data-y', card.offsetTop)
        // @ts-ignore
        card.setAttribute('data-width', card.clientWidth)
        // @ts-ignore
        card.setAttribute('data-height', card.clientHeight)
      }
    }, 50)
  )
}
</script>
