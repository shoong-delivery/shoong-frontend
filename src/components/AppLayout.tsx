import type { ReactNode } from 'react'

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        position: 'relative',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '32px 24px',
      }}
    >
      {children}
    </div>
  )
}
