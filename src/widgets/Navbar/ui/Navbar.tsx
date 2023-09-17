import { type FunctionComponent, memo, useContext } from 'react';
import cls from './Navbar.module.scss';
import SunIcon from '@/shared/assets/icons/sun.svg';
import MoonIcon from '@/shared/assets/icons/moon.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Icon } from '@/shared/ui/Icon';
import { Theme } from '@/shared/consts/theme';
import { Button } from '@/shared/ui/Button';
import { CyphersListButton } from '@/features/cyphersListButton';
import { CodeContext } from '@/shared/context/CodeContext';

export const Navbar = memo(() => {
  const { theme, toggleTheme } = useTheme();
  const { setPrintCode } = useContext(CodeContext);

  const onClearHandler = () => {
    setPrintCode?.('');
  }

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
      </div>
          <div className={cls.btns}>
            <Button
            className={cls.rightCornerBtn}
            variant='encrypt'
            >
              Encrypt
            </Button>
            <Button
            className={cls.rightCornerBtn}
            variant='decrypt'
            >
              Decrypt
            </Button>
            <Button
            onClick={onClearHandler}
            className={cls.rightCornerBtn}
            color='error'
            variant='normal'
            >
              Clear
            </Button>
          </div>
        </div>
  );
});
