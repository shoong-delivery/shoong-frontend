export const initMSW = async () => {
  import('./browser').then(({ worker }) => {
    worker.start({ onUnhandledRequest: 'bypass' })
  })
}
