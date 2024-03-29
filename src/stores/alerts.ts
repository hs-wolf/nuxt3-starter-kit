import { ALERTS_STORE_ID } from '~/utils/constants'

export const useAlertsStore = defineStore(ALERTS_STORE_ID, () => {
  function handlerError (error: Error) {
    // eslint-disable-next-line no-console
    console.log(error.message)
  }
  return { handlerError }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAlertsStore, import.meta.hot))
}
