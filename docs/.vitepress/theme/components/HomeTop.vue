<script setup lang="ts">
/**
 * トップページのヒーロー＋特徴カード。
 *
 * VitePress の `layout: home` はサイドバーを強制的に隠す仕様なので、
 * トップでも左サイドバーを出すために layout: doc のまま
 * 既定テーマのヒーロー／特徴カードだけを borrow して描画する。
 */
import VPHomeHero from 'vitepress/dist/client/theme-default/components/VPHomeHero.vue'
import VPHomeFeatures from 'vitepress/dist/client/theme-default/components/VPHomeFeatures.vue'
</script>

<template>
  <div class="home-top">
    <VPHomeHero />
    <VPHomeFeatures />
  </div>
</template>
