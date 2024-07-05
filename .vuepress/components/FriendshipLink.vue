<template>
<div v-for="(categoryLinks, category) in categorizedFriendshipLinks" :key="category" class="category-section">
      <div class="friendship-link-container category-title">{{ category }}</div>
  <div class="friendship-link-container">
    <MagicCard
      class="friendship-link-item magic-card1"
      v-for="(item, index) in categoryLinks"
      :key="category+index" :style="magicStyles[category+index]"
      @click="() => handlClick(item.link)"
      @mouseover="(e) => handleMouseEnter(e, category+index)"
      @mouseleave="handleMouseLeave"
    >
      <div class="content">
        <div class="logo">
          <img :src="item.logo" />
        </div>
        <div class="text">
          <span class="tit">{{ item.title }}</span>
          <span class="desc">{{ item.tip }}</span>
        </div>
      </div>
      <div class="tooltip" :style="tooltipStyles[category+index]">{{ item.tip }}</div>
    </MagicCard>
  </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useThemeLocaleData } from '@composables/index.js'
import { MagicCard } from 'vuepress-theme-reco/lib/client/components/global/index.js'

const themeLocal = useThemeLocaleData()

const friendshipLinks = computed(() => {
  return themeLocal.value.friendshipLinks || []
})

const categorizedFriendshipLinks = computed(() => {
  return friendshipLinks.value.reduce((acc, link) => {
    if (!acc[link.category]) {
      acc[link.category] = [];
    }
    acc[link.category].push(link);
    return acc;
  }, {} as Record<string, FriendshipLink[]>);
});

const handlClick = (link: string) => {
  window.open(link, '_blank')
}

const tooltipStyles = ref([]);   // 使用 ref 创建一个响应式数组
const magicStyles = ref([]);   // 使用 ref 创建一个响应式数组
const handleMouseEnter = (event: MouseEvent, index: string) => {
  const card = event.currentTarget as HTMLElement;
  const rect = card.getBoundingClientRect();
  magicStyles.value[index] = {
    'background-color': 'rgb(59 130 246 / 0.5)'
  };
  tooltipStyles.value[index] = {
    display: 'block',
    //left: `${rect.left}px`, // 加上 scrollX 以处理水平滚动
    //top: `${rect.bottom}px`, // 加上 scrollY 以处理垂直滚动
  };
};

const handleMouseLeave = () => {
  tooltipStyles.value = [];
  magicStyles.value = [];
};
</script>

<style>
.friendship-link-container {
  position: relative;
}

.category-section {
  margin-bottom: -2.5em; /* 为每个分类部分添加间距 */
}

.category-title {
  font-weight: bold;
  font-size: 1.2em;
  margin-bottom: -1.5em; 
}

.content {
  display: flex;
  align-items: center;
  width: 100%;
}

.logo {
  flex-shrink: 0;
  margin-right: 10px;
}

.logo img {
  display: block;
  width: 60px; /* 可根据需要调整 */
  height: 60px; /* 确保图标占据与文字相同的高度 */
}

.text {
  display: flex;
  flex-direction: column;
  overflow: hidden; /* 确保文字不会超出 MagicCard 的宽度 */
}

.tit {
  font-weight: bold;
  font-family: cursive;
  white-space: nowrap; /* 确保标题在一行内显示 */
  overflow: hidden;
  text-overflow: ellipsis; /* 如果标题过长，显示省略号 */
}

.desc {
  font-size: smaller;
  font-family: emoji;
  white-space: nowrap; /* 确保简介在一行内显示 */
  overflow: hidden;
  text-overflow: ellipsis; /* 如果简介过长，显示省略号 */
}

.tooltip {
  display: none;
  position: absolute;
  padding: 10px;
  background-color: rgb(16 0 255);
  color: #fff;
  border-radius: 5px;
  white-space: normal; /* 允许内容换行 */
  z-index: 1000;
  margin-top: 72px; /* 保持 margin-top 用于在父 div 下方显示 */
  box-sizing: border-box; /* 确保 padding 和 border 不影响总宽度 */
  font-size: smaller;
  font-family: 楷体;
  left: 0px;
}
.tooltip::after {
  content: '';
  position: absolute;
  bottom: 100%; /* 将箭头定位在提示框的顶部 */
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent rgb(16 0 255) transparent; /* 箭头的颜色与提示框的背景色一致 */
}

/* Hide tooltips on mobile devices */
@media (max-width: 768px) {
  .tooltip {
    display: none !important;
  }
}
@media (max-width: 480px) {
  .tooltip {
    display: none !important;
  }
}
.magic-card1 {
  border-radius: 0.5rem;
  position: relative;
  background: rgb(58 166 117 / 90%);
  border-width: 1px;
  border-style: solid;
}
</style>