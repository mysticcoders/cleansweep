import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import store from 'store'

export const HeaderContainer = ({startOver}) => {
  const navigate = useNavigate()

  const hasQuizStarted = store.get("answers") ? true : false

  const [theme, setTheme] = useState(() => store.get("theme") || "light")

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    store.set("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light")
  }

  return (
    <nav className="navbar is-fixed-top has-shadow">
      <div className="navbar-brand">
        <a className="navbar-item" onClick={() => { navigate('/') }}>
          <span className="logo-text">CleanSweep</span>
        </a>
      </div>
      <div className="navbar-menu is-active">
        <div className="navbar-end">
          <div className="navbar-item">
            <button className="button is-light" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>
          </div>
          { hasQuizStarted &&
            <div className="navbar-item">
              <button className="button is-danger" onClick={() => { startOver() }}>
                <strong>Start Over</strong>
              </button>
            </div>
          }
        </div>
      </div>
    </nav>
  )
}

export default HeaderContainer
