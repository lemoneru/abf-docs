<script setup>
import { ref, computed } from 'vue'
import { withBase, useData } from 'vitepress'

const agreed = ref(false)
const { lang } = useData()
const isEn = computed(() => lang.value.startsWith('en'))
const termsLink = computed(() => withBase(isEn.value ? '/en/terms' : '/terms'))
const addRepoUrl =
  'vcc://vpm/addRepo?url=https%3A%2F%2Flemoneru.github.io%2Fvpm-repos%2Findex.json'
</script>

<template>
  <div class="agree-install">
    <label class="agree-install__check">
      <input type="checkbox" v-model="agreed" />
      <span v-if="isEn">
        I have read and agree to the
        <a :href="termsLink" target="_blank" rel="noopener">Terms of Use</a>
      </span>
      <span v-else>
        <a :href="termsLink" target="_blank" rel="noopener">利用規約</a>
        を読み、同意します
      </span>
    </label>

    <a v-if="agreed" class="vcc-button" :href="addRepoUrl">
      {{ isEn ? 'Add the repository to VCC / ALCOM' : 'VCC / ALCOM にリポジトリを追加' }}
    </a>
    <span v-else class="vcc-button vcc-button--disabled" aria-disabled="true">
      {{ isEn ? 'Add the repository to VCC / ALCOM' : 'VCC / ALCOM にリポジトリを追加' }}
    </span>
  </div>
</template>
