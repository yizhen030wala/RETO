import React from 'react';
import IcomoonReact, { iconList } from 'icomoon-react';
import iconSet from './selection.json'; // 修改為你的選項檔案的路徑

const Icon = ({ iconName, ...props }) => {
  return <IcomoonReact iconSet={iconSet} icon={iconName} {...props} />;
};

export default Icon;
