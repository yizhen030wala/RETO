//沒成功
import React from 'react';
import { useAuth } from './AuthContext';  // 請替換成你的實際路徑 

const Navbar = () => {
  const { isLoggedIn, login, logout } = useAuth();

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>歡迎回來，已登入的用戶！</p>
          <button onClick={logout}>登出</button>
        </div>
      ) : (
        <div>
          <p>請登入以訪問更多功能。</p>
          <button onClick={login}>登入</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
