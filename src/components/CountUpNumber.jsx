import { animate, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const formatCoreValue = (value, decimals = 0, format = 'number') => {
  const absolute = Math.abs(value)

  if (format === 'compact') {
    if (absolute >= 1_000_000) {
      return `${(value / 1_000_000).toLocaleString('vi-VN', {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
      })}M`
    }

    if (absolute >= 1_000) {
      const compactValue = value / 1_000
      const fraction = absolute >= 100_000 ? 0 : 1
      return `${compactValue.toLocaleString('vi-VN', {
        minimumFractionDigits: fraction,
        maximumFractionDigits: fraction,
      })}K`
    }
  }

  return value.toLocaleString('vi-VN', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
}

function CountUpNumber({
  value,
  decimals = 0,
  prefix = '',
  suffix = '',
  format = 'number',
  className = '',
}) {
  const elementRef = useRef(null)
  const inView = useInView(elementRef, { once: true, margin: '-80px' })
  const [displayValue, setDisplayValue] = useState(`${prefix}0${suffix}`)

  useEffect(() => {
    if (!inView) {
      return undefined
    }

    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latestValue) => {
        const current = formatCoreValue(latestValue, decimals, format)
        setDisplayValue(`${prefix}${current}${suffix}`)
      },
    })

    return () => controls.stop()
  }, [decimals, format, inView, prefix, suffix, value])

  return (
    <span ref={elementRef} className={className}>
      {displayValue}
    </span>
  )
}

export default CountUpNumber
