import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './CRTTransition.css'

export default function CRTTransition() {
  const location = useLocation()
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    setAnimating(true)
    const timer = setTimeout(() => setAnimating(false), 600)
    return () => clearTimeout(timer)
  }, [location.pathname])

  return animating ? <div className="crt-channel-change"></div> : null
}
