export function Spacing({ size }: { size: number | string }) {
  return (
    <div
      style={{
        flex: 'none',
        width: '100%',
        height: typeof size === 'number' ? `${size}px` : size,
      }}
    />
  )
}
