<script setup lang="ts">
/**
 * トップページのヒーロー。
 *
 * VitePress の `layout: home` はサイドバーを強制的に隠す仕様なので、
 * トップでも左サイドバーを出すために layout: doc のまま
 * 既定テーマのヒーローだけを borrow して描画する。
 *
 * 特徴カード（VPHomeFeatures）は 2026-08-28 に本人判断でやめた。
 * アイコンの意味が伝わらず購入の後押しにならないため、
 * 内容は「Avatar Blink Fix とは？」の本文へ溶かしてある。
 */
import VPHomeHero from 'vitepress/dist/client/theme-default/components/VPHomeHero.vue'
</script>

<template>
  <div class="home-top">
    <VPHomeHero />
  </div>
</template>
