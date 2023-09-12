import { memo } from 'react';
import cls from './Navbar.module.scss';
import { classNames } from '../../../shared/lib/classNames/classNames';
import { useTheme } from '../../../shared/lib/hooks/useTheme/useTheme';
import { Icon } from '../../../shared/ui/Icon';
import SunIcon from '../../../shared/assets/icons/sun.svg';
import MoonIcon from '../../../shared/assets/icons/moon.svg';
import { Theme } from '../../../shared/consts/theme';

export const Navbar = memo(() => {
  // TODO: FIX THIS FILE
  const { theme, toggleTheme } = useTheme();

  return (
        <div className={classNames(cls.Navbar, {}, [])}>
            {/* <Icon
              Svg={theme === Theme.DARK ? SunIcon : MoonIcon }
              clickable
              onClick={toggleTheme}
            /> */}
        </div>
  );
});
