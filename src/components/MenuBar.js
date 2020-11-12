import React  from 'react'
import { Menu } from 'semantic-ui-react'
import classNames from 'classnames'
import useDarkMode from 'use-dark-mode';
import DarkModeToggle from './DarkModeToggle'

const MenuBar = () => {
    const darkMode = useDarkMode(false);

    var menuClass = classNames('secondary', 'pointing', { 'inverted': darkMode.value} );

    return (
      <Menu className={menuClass}>
        <Menu.Menu position='right'>
          <Menu.Item>
            <DarkModeToggle/>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
};

export default MenuBar;