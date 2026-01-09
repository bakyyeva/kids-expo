import { useState, useRef, useEffect } from 'react'
import './dropdown.css'

export default function Dropdown({ title, children, className = '' }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function onDoc(e) {
      if (!ref.current) return
      if (!ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('click', onDoc)
    return () => document.removeEventListener('click', onDoc)
  }, [])

  return (
    <div className={`dropdown rx-dropdown ${className}`} ref={ref}>
      <button
        type="button"
        className={`nav-link dropdown-toggle rx-dropdown-toggle`}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen(s => !s)}
      >
        {title}
      </button>

      <div className={`dropdown-menu rx-dropdown-menu ${open ? 'show' : ''}`}>{children}</div>
    </div>
  )
}
