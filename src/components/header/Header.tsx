import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu, Image } from 'antd';
import './header.scss'
const items: MenuProps['items'] = [
  {
    label: <Image
      width={80}
      src="https://i.ibb.co/0jkkVBF/Profile-photo.png"
      preview={false}
    />,
    key: 'mail',
    icon: null,
  },
];

const Header: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu className="debug-menu" onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default Header;