import { Outlet, createRootRoute } from '@tanstack/react-router'
import { UIProvider } from '#/components/UIProvider'
import { AppLayout } from '#/components/AppLayout'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const Route = createRootRoute({
  component: RootComponent,
})

const queryClient = new QueryClient()

function RootComponent() {
  return (
    <QueryClientProvider client={queryClient}>
      <UIProvider>
        <AppLayout>
          <Outlet />
        </AppLayout>
      </UIProvider>
    </QueryClientProvider>
  )
}
