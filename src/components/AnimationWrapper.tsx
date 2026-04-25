import type { ReactNode } from 'react'
import { Children, useEffect, useState } from 'react'
import { useAnimation, AnimatePresence, motion } from 'motion/react'

import { useInterval } from 'react-simplikit'

type AnimationType =
  | 'zoomIn'
  | 'lowScaleOnTap'
  | 'highScaleOnTap'
  | 'flipItems'
  | 'shake'
  | 'wave'

export function AnimationWrapper({
  children,
  type,
}: {
  children: ReactNode
  type: AnimationType
}) {
  switch (type) {
    case 'zoomIn':
      return <ZoomInAnimation>{children}</ZoomInAnimation>
    case 'lowScaleOnTap':
      return <ScaleAnimation level="low">{children}</ScaleAnimation>
    case 'highScaleOnTap':
      return <ScaleAnimation level="high">{children}</ScaleAnimation>
    case 'flipItems':
      return <FlipItemsAnimation>{children}</FlipItemsAnimation>
    case 'shake':
      return <ShakeAnimation>{children}</ShakeAnimation>
    case 'wave':
      return <WaveAnimation>{children}</WaveAnimation>
  }
}

function ZoomInAnimation({ children }: { children: ReactNode }) {
  const controls = useAnimation()

  useEffect(() => {
    async function sequence() {
      await controls.start({ scale: 1.3 }, { type: 'spring' })
      await controls.start({ scale: 1 }, { type: 'spring' })
    }

    sequence()
  }, [controls])

  return (
    <motion.div initial={{ scale: 0.1 }} animate={controls}>
      {children}
    </motion.div>
  )
}

function ScaleAnimation({
  children,
  level,
}: {
  children: ReactNode
  level: 'low' | 'high'
}) {
  switch (level) {
    case 'low':
      return (
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          {children}
        </motion.div>
      )
    case 'high':
      return (
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          {children}
        </motion.div>
      )
  }
}

function FlipItemsAnimation({
  children,
  interval = 1000,
}: {
  children: ReactNode
  interval?: number
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const childArray = Children.toArray(children)

  useInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % childArray.length)
  }, interval)

  return (
    <>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'linear',
        }}
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.7 }}
        >
          {childArray[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </>
  )
}

function ShakeAnimation({ children }: { children: ReactNode }) {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      rotate: [0, -1, -5, 10, -15, 10, -5, 0],
      transformOrigin: 'center',
      transition: {
        repeat: Infinity,
        duration: 2,
        ease: 'easeInOut',
      },
    })
  }, [controls])

  return <motion.div animate={controls}>{children}</motion.div>
}

function WaveAnimation({ children }: { children: ReactNode }) {
  return (
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 1, repeat: Infinity }}
    >
      {children}
    </motion.div>
  )
}
