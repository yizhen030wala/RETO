import React from 'react'
import UnLogin from '../ShowUnlogin/ShowUnlogin.jsx'
import Login from '../ShowLogin/Showlogin.jsx'
import { useAuth } from '../../global/AuthContext.jsx';

const Menu = () => {
    const { isLoggedIn } = useAuth();
  
    return (
      <div>
        {isLoggedIn !== undefined ? (
          <div>
            {isLoggedIn ? (
              <>
                <Login/>
              </>
            ) : (
              <>
                <UnLogin/>
              </>
            )}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  };
  
  export default Menu;
  