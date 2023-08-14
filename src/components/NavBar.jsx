import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { SwitchTransition ,CSSTransition} from 'react-transition-group'

export default function NavBar() {
  const location = useLocation();
    const count = useSelector(state=>state.cartSlice.value)
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
              <Link className="navbar-brand btn btn-sm btn-primary" to='/cart'>Cart { count}</Link>
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
      </nav>
      <SwitchTransition>
          <CSSTransition timeout={200} classNames="fade" key={location.pathname}>
              <div className="p-4 max-w-6xl mx-auto">
                  <Outlet/>
              </div>
          </CSSTransition>
      </SwitchTransition>
    </div>
  )
}
