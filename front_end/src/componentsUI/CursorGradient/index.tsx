'use client'

import { motion, useMotionValue, useTransform } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

import styles from './index.module.scss'

export default function CursorGradient() {
  const ref = useRef<HTMLDivElement>(null)
  const [{ width, height, top, left }, measure] = useElementDimensions(ref)
  const gradientX = useMotionValue(0.5)
  const gradientY = useMotionValue(0.5)
  const background = useTransform(
    () =>
      `conic-gradient(from 0deg at calc(${
        gradientX.get() * 100
      }% - ${left}px) calc(${
        gradientY.get() * 100
      }% - ${top}px), rgb(229, 151, 255), rgb(255, 95, 148),rgba(237, 191, 83, 1), #0cdcf7)`
  )

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPointerMove={e => {
        gradientX.set(e.clientX / width)
        gradientY.set(e.clientY / height)
      }}
    >
      <motion.div
        className={styles.gradient}
        ref={ref}
        style={{
          background,
          width: '100vw',
          height: '200vh',
          cursor: 'none',
          backdropFilter: 'blur(15px)',
          zIndex: -1,
        }}
        onPointerEnter={() => measure()}
      />
    </div>
  )
}

/**
 * ================  Utils  =========================
 */

function useElementDimensions(
  ref: React.RefObject<HTMLDivElement | null>
): [
  { width: number; height: number; top: number; left: number },
  VoidFunction,
] {
  const [size, setSize] = useState({ width: 0, height: 0, top: 0, left: 0 })

  function measure() {
    if (!ref.current) return

    setSize(ref.current.getBoundingClientRect())
  }

  useEffect(() => {
    measure()
  }, [])

  return [size, measure]
}
