<script setup>
import { ref } from 'vue'
import { withBase } from 'vitepress'

const agreed = ref(false)
const addRepoUrl =
  'vcc://vpm/addRepo?url=https%3A%2F%2Flemoneru.github.io%2Fvpm-repos%2Findex.json'
</script>

<template>
  <div class="agree-install">
    <label class="agree-install__check">
      <input type="checkbox" v-model="agreed" />
      <span>
        <a :href="withBase('/terms')" target="_blank" rel="noopener">利用規約</a>
        を読み、同意します
      </span>
    </label>

    <a v-if="agreed" class="vcc-button" :href="addRepoUrl">
      VCC / ALCOM にリポジトリを追加
    </a>
    <span v-else class="vcc-button vcc-button--disabled" aria-disabled="true">
      VCC / ALCOM にリポジトリを追加
    </span>
  </div>
</template>
