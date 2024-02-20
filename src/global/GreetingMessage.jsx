import React, { useState, useEffect } from 'react';

const myStyle = {
  margin: '0',
  padding: '0',
};

const GreetingMessage = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const getCurrentGreeting = () => {
      const currentHour = new Date().getHours();

      if (currentHour >= 5 && currentHour < 12) {
        setGreeting('早安');
      } else if (currentHour >= 12 && currentHour < 18) {
        setGreeting('午安');
      } else {
        setGreeting('晚安');
      }
    };

    getCurrentGreeting(); // 初始化
    const interval = setInterval(getCurrentGreeting, 60000); // 每分鐘更新一次

    return () => clearInterval(interval); // 清除 interval
  }, []);

  return (
    <div style={myStyle}>
      <div> {greeting}，旅人! </div>
    </div>
  );
};

export default GreetingMessage;