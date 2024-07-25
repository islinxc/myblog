<template>
  <GenericContainer class="timeline-wrapper">
    <ul class="timeline-content">
      <li
        v-for="(item, index) in timelineData"
        :key="index"
      >
        <h2 class="year">{{item.year}}</h2>
        <ul class="year-wrapper">
          <li v-for="(subItem, subIndex) in item.data" :key="subIndex" class="item">
            <span class="date">{{subItem.date}}</span>

            <RouterLink class="title" :to="subItem.path">{{ subItem.title }}</RouterLink>
          </li>
        </ul>
      </li>
    </ul>
  </GenericContainer>
</template>
<style>
.timeline-wrapper .timeline-content {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1rem;
    margin-bottom: 4rem;
    max-width: 1024px;
    padding-left: 12rem;
    padding-right: 12rem;
}
/* Hide tooltips on mobile devices */
@media (max-width: 768px) {
  .timeline-wrapper .timeline-content {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1rem;
    margin-bottom: 4rem;
    max-width: 1024px;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
@media (max-width: 480px) {
  .timeline-wrapper .timeline-content {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1rem;
    margin-bottom: 4rem;
    max-width: 1024px;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

.timeline-wrapper .timeline-content::before {
  content: '';
  position: fixed;
  left: 16rem; /* 调整位置以适应时间线的位置 */
  top: 0;
  bottom: 0;
  width: 10px;
  height: 100%;
  background: #b62c27; /* 箭头的颜色 */
}
/* Hide tooltips on mobile devices */
@media (max-width: 1024px) {
  .timeline-wrapper .timeline-content::before {
    content: '';
    position: absolute;
    left: 10rem; /* 调整位置以适应时间线的位置 */
    top: 0;
    bottom: 0;
    width: 0px;
    height: 100%;
    background: #b62c27; /* 箭头的颜色 */
  }
}
@media (max-width: 768px) {
  .timeline-wrapper .timeline-content::before {
    content: '';
    position: absolute;
    left: 10rem; /* 调整位置以适应时间线的位置 */
    top: 0;
    bottom: 0;
    width: 0px;
    height: 100%;
    background: #b62c27; /* 箭头的颜色 */
  }
}
@media (max-width: 480px) {
  .timeline-wrapper .timeline-content::before {
    content: '';
    position: absolute;
    left: 10rem; /* 调整位置以适应时间线的位置 */
    top: 0;
    bottom: 0;
    width: 0px;
    height: 100%;
    background: #b62c27; /* 箭头的颜色 */
  }
}

</style>
<script setup lang="ts">
import GenericContainer from '@components/GenericContainer/index.vue'
import { useExtendPageData } from '@vuepress-reco/vuepress-plugin-page/composables'

import { formatISODate } from '@utils/other.js'

const { posts } = useExtendPageData()

const dataMap: {
  [key: string]: Array<any>
} = {}

posts.forEach(post => {
  if (!post.frontmatter.date) return

  let connector = post.frontmatter.date.includes('/') ? '/' : '-'

  const [year, mounth, day] = formatISODate(post.frontmatter.date).split(' ')[0].split(connector) || []

  if (!year || !mounth || !day) return

  if (!dataMap[year]) {
    dataMap[year] = [{
      ...post,
      date: `${mounth}${connector}${day}`
    }]

    return
  }

  dataMap[year].push({
    ...post,
    date: `${mounth}${connector}${day}`
  })
});

interface TimelineData {
  year: string,
  data: any
}

//修改 2024年6月14日10:52:59
// 对每个年份的数据进行倒序排序
Object.keys(dataMap).forEach(year => {
  dataMap[year].sort((a, b) => {
    const dateA = new Date(`${year}-${a.date}`);
    const dateB = new Date(`${year}-${b.date}`);
    return dateB.getTime() - dateA.getTime();
  });
});

// 生成 timelineData 数组，并按年份倒序排序
const timelineData: Array<TimelineData> = Object.keys(dataMap).sort((a, b) => b.localeCompare(a)).reduce(
  (all: Array<TimelineData>, next: string) => {
    all.push({
      year: next,
      data: dataMap[next]
    })
    return all
  },
  []
)
</script>
@client/components/GenericContainer/index.vue