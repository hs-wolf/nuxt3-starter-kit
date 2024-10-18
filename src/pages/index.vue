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
        <div class="flex flex-col gap-2">
          <span>Image Optimization</span>
          <div class="flex items-start gap-2">
            <NuxtImg src="/stock-cabin.jpg" sizes="sm:64px md:128px" />
            <NuxtImg src="/stock-profile.jpg" preset="avatar" />
          </div>
        </div>
      </li>
      <li>
        <div class="flex items-center gap-2">
          <span>SVG icons solution</span>
          <Icon name="custom:locale" size="20px" />
          <Icon name="custom:sliders" size="20px" />
          <Icon name="custom:add-circle" size="20px" />
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
