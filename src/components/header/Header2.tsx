import React, { useState } from 'react';
import { TeamOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import './header.scss'
const items: MenuProps['items'] = [
  {
    label: 'Works',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    label: "About Us",
    key: 'mail',
    icon: <TeamOutlined />,
  },
  {
    label: 'Contact Us',
    key: 'app',
    icon: <MailOutlined />,
  },

];

const Header2: React.FC = () => {
  const [current] = useState('');

  const onClick: MenuProps['onClick'] = (e) => {
  };

  return <Menu className="debug-menu2" onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default Header2;