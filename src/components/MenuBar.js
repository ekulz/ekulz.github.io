import React, { useState }  from 'react'
import { Menu } from 'semantic-ui-react'
import classNames from 'classnames'
import useDarkMode from 'use-dark-mode';
import DarkModeToggle from './DarkModeToggle'

const MenuBar = () => {
    const [activeItem, updateActiveItem] = useState('home');
    const darkMode = useDarkMode(false);

    var menuClass = classNames('secondary', 'pointing', { 'inverted': darkMode.value} );

    return (
        <Menu className={menuClass}>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={() => updateActiveItem('home')}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <DarkModeToggle/>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
    );
};

export default MenuBar;