<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import * as zod from 'zod'
import { useAlertsStore } from '~/stores'

const { locale: currentLocale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const alertsStore = useAlertsStore()

const { x, y } = useMouse()

onMounted(() => {
  alertsStore.handleWarning('Testing warning.')
})

enum Fields {
  USERNAME = 'username',
  EMAIL = 'email',
}

const { handleSubmit, errors } = useForm({
  validationSchema: toTypedSchema(
    zod.object({
      [Fields.USERNAME]: zod.string().min(1).min(8),
      [Fields.EMAIL]: zod.string().min(1).email(),
    }),
  ),
})

const { value: usernameValue } = useField<string>(Fields.USERNAME)
const { value: emailValue } = useField<string>(Fields.EMAIL)

const onSubmit = handleSubmit((values) => {
  // eslint-disable-next-line no-alert
  alert(JSON.stringify(values, null, 2))
})
</script>

<template>
  <div class="flex flex-1 flex-col justify-center items-center gap-2 h-full">
    <h1 class="text-xl">
      Available Features
    </h1>
    <ul class="list-disc w-96 text-neutral-400">
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
          <span>Image optimization</span>
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
      <li>
        <div class="flex items-center gap-2">
          <span>Utility composables with VueUse</span>
          <span>X {{ x }}</span>
          <span>Y {{ y }}</span>
        </div>
      </li>
      <li>State management with Pinia</li>
      <li>
        <div class="flex flex-col gap-2">
          <span>Form validation with VeeValidate and Zod</span>
          <form class="flex flex-col gap-1" @submit="onSubmit">
            <input v-model="usernameValue" :name="Fields.USERNAME" placeholder="Username" type="text">
            <span>{{ errors.username }}</span>
            <input v-model="emailValue" :name="Fields.EMAIL" placeholder="Email" type="email">
            <span>{{ errors.email }}</span>
            <button>Submit</button>
          </form>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
