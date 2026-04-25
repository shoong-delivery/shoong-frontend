import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('app')!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)

  // Start MSW in development
  if (import.meta.env.DEV) {
    import('./mocks/browser').then(({ worker }) => {
      worker.start({ onUnhandledRequest: 'bypass' })
    })
  }

  root.render(<RouterProvider router={router} />)
}
