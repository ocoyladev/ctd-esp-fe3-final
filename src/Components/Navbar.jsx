import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from "./utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContextGlobal();
  const isDark = state.theme;
  const toggleDarkMode = () => {
    dispatch({type:"TOOGLE_THEME", payload: !isDark})
    console.log(isDark);
  };
  
  

  return (
    <nav className= {`${isDark ? '' : 'darkNav'}`}>
      <div className='divCentral divAll'>
        <div className='divSpace'>
          <div className='navbarDiv'>
            <h2 className='navbarTitle'>DH Odonto</h2>
          </div>
          <div className= "navbarDiv">
            <Link to = "/"><h4>Home</h4></Link>
            <Link to = "/contact"><h4>Contact</h4></Link>
            <Link to = "/favs"><h4>Favs</h4></Link>
            <button onClick={toggleDarkMode} className={`${isDark ? 'buttonThemeDark' : 'buttonTheme'}`}>{isDark ? '☀':'🌙'}</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar