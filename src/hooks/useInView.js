import { useEffect, useRef, useState } from 'react'

const useInView = (options = {}) => {
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (options.triggerOnce) {
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: options.threshold || 0.3 },
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [options.threshold, options.triggerOnce])

  return { ref, inView }
}

export default useInView
