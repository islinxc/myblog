<template>
  <GenericContainer>
    <FriendshipLink />
  </GenericContainer>
</template>

<script setup lang="ts">
import { watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Common from '@components/Common/index.vue'
import GenericContainer from '@components/GenericContainer/index.vue'
import FriendshipLink from '../components/FriendshipLink.vue' 
import { useMagicCard } from '@composables/index.js'

const { initMagicCard } = useMagicCard()
onMounted(() => {
  initMagicCard()
})
const route = useRoute()
watch(route, () => {
  initMagicCard()
})
</script>
