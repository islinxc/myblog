<template>
  <div class="friendship-link-container">
    <MagicCard
      class="friendship-link-item"
      v-for="(item, index) in friendshipLinks"
      :key="index"
      @click="() => handlClick(item.link)"
      @mouseover="(e) => handleMouseEnter(e, index)"
      @mouseleave="handleMouseLeave"
    >
      <div class="logo">
        <img :src="item.logo" />
      </div>
      <span class="title">{{ item.title }}</span>
      <div class="tooltip" :style="tooltipStyles[index]">{{ item.tip }}</div>
    </MagicCard>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useThemeLocaleData } from '@composables/index.js'
import { MagicCard } from './global/index.js';

const themeLocal = useThemeLocaleData()

const friendshipLinks = computed(() => {
  return themeLocal.value.friendshipLinks || []
})

const handlClick = (link: string) => {
  window.open(link, '_blank')
}

const tooltipStyles = ref([]);   // 使用 ref 创建一个响应式数组
const handleMouseEnter = (event: MouseEvent, index: number) => {
  const card = event.currentTarget as HTMLElement;
  const rect = card.getBoundingClientRect();
  tooltipStyles.value[index] = {
    display: 'block',
    //left: `${rect.left}px`, // 加上 scrollX 以处理水平滚动
    //top: `${rect.bottom}px`, // 加上 scrollY 以处理垂直滚动
  };
};

const handleMouseLeave = () => {
  tooltipStyles.value = [];
};
</script>

<style>
.friendship-link-container {
  position: relative;
}

.tooltip {
  display: none;
  position: absolute;
  padding: 10px;
  width: 200px; /* 固定宽度 */
  background-color: #007a26c7;
  color: #fff;
  border-radius: 5px;
  white-space: normal; /* 允许内容换行 */
  z-index: 1000;
  margin-top: 55px; /* 保持 margin-top 用于在父 div 下方显示 */
  box-sizing: border-box; /* 确保 padding 和 border 不影响总宽度 */
  font-size: smaller;
  font-family: 楷体;
}
</style>