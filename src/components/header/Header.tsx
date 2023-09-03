import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import './header.scss'
import ParticleImg from '../particleImage/ParticleImage';
const items: MenuProps['items'] = [
  {
    label: <ParticleImg height={100} width={120} scale={0.15} maxParticles={3000} mass={150} friction={0.1} />,
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