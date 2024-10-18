import { ALERTS_STORE_ID } from '~/utils'

export const useAlertsStore = defineStore(ALERTS_STORE_ID, () => {
  function handleError(error: unknown) {
    console.error('🛑 ERROR:', error)
  }

  function handleWarning(error: unknown) {
    // eslint-disable-next-line no-console
    console.log('⚠️ WARNING:', error)
  }

  return { handleError, handleWarning }
})
