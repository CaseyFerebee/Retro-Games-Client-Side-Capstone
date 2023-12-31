import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = ({ token, setToken }) => {
  const navigate = useNavigate()
  const navbar = useRef()
  const hamburger = useRef()

  const showMobileNavbar = () => {
    hamburger.current.classList.toggle('is-active')
    navbar.current.classList.toggle('is-active')
  }

  return (
    <nav className="navbar is-info mb-3" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/games">
        </a>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={showMobileNavbar} ref={hamburger}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className="navbar-menu" ref={navbar}>
        <div className="navbar-start">
          {
            token
              ? (
                <>
                  <Link to="/" className="navbar-item">Home</Link>
                  <Link to="/games" className="navbar-item">Games</Link>
                  <Link to="/consoles" className="navbar-item">Consoles</Link>
                  <Link to="/controllers" className="navbar-item">Controllers</Link>
                  <Link to="/consolecollections" className="navbar-item">Console Collection</Link>
                  <Link to="/controllercollections" className="navbar-item">Controller Collection</Link>
                  <Link to="/gamecollections" className="navbar-item">Game Collection</Link>

                </>

              )
              : ""
          }
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {
                token
                  ?
                  <button className="button is-outlined" onClick={() => {
                    setToken('')
                    navigate('/login')
                  }}>Logout</button>
                  :
                  <>

                  </>
              }
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
