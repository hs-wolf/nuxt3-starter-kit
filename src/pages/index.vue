<script setup lang="ts">
const { locale: currentLocale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <div class="flex flex-1 flex-col justify-center items-center gap-2 h-full">
    <h1 class="text-xl">
      Installed Modules
    </h1>
    <ul class="list-disc text-neutral-400">
      <li>Nuxt Devtools</li>
      <li>Linting with Eslint and Antfu Eslint Config</li>
      <li>CSS framework with TailwindCSS and SASS</li>
      <li>
        <div class="flex items-center gap-2">
          <span>Localization with i18n</span>
          <span>-</span>
          <NuxtLink
            v-for="locale in locales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
            :class="currentLocale === locale.code ? 'text-green-600' : 'text-white'"
          >
            {{ $t(`languages.${locale.code}`) }}
          </NuxtLink>
        </div>
      </li>
      <li>
        <span>Image Optimization</span>
        <NuxtImg src="/stock-cabin.jpg" sizes="sm:64px md:128px" />
        <NuxtImg src="/stock-profile.jpg" preset="avatar" />
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
