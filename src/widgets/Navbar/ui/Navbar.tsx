import { type FunctionComponent, memo, useContext } from 'react';
import cls from './Navbar.module.scss';
import SunIcon from '@/shared/assets/icons/sun.svg';
import MoonIcon from '@/shared/assets/icons/moon.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Icon } from '@/shared/ui/Icon';
import { Theme } from '@/shared/consts/theme';
import { CyphersListButton } from '@/features/cyphersListButton';
import { CodeContext } from '@/shared/context/CodeContext';
import { Text } from '@/shared/ui/Text';

export const Navbar = memo(() => {
  const { theme, toggleTheme } = useTheme();
  const { currentTitle } = useContext(CodeContext);

  return (
    <div className={classNames(cls.Navbar, {}, [])}>
        <div className={cls.icons}>
              <Icon
                clickable
                // TODO: FIX THIS
                Svg={
                  theme !== Theme.DARK
                    ? MoonIcon as unknown as FunctionComponent
                    : SunIcon as unknown as FunctionComponent
                }
                onClick={toggleTheme}
              />
              <CyphersListButton />
              <div className={cls.activeCypher}>
                  <Text size='l' className={cls.text} text={'Current cypher:'} />
                  {currentTitle}
              </div>
        </div>
    </div>
  );
});
