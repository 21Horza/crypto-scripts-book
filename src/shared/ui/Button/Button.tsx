import {
  type ButtonHTMLAttributes, type ForwardedRef, forwardRef, type ReactNode,
} from 'react';
import cls from './Button.module.scss';
import { type Mods, classNames } from '@/shared/lib/classNames/classNames';

export type ButtonVariant = 'clear' | 'outline' | 'filled';
export type ButtonColor = 'normal' | 'success' | 'error';

export type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: ButtonVariant
  square?: boolean
  size?: ButtonSize
  disabled?: boolean
  children?: ReactNode
  fullWidth?: boolean
  color?: ButtonColor
  addonLeft?: ReactNode
  addonRight?: ReactNode
}

export const Button = forwardRef((props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
  const {
    className,
    children,
    variant = 'outline',
    square,
    size = 'm',
    disabled,
    fullWidth,
    color = 'normal',
    addonLeft,
    addonRight,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.square]: square,
    [cls.disabled]: disabled,
    [cls.fullWidth]: fullWidth,
    [cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
  };

  return (
      <button
      ref={ref}
      type="button"
      className={classNames(cls.Button, mods, [className, cls[variant], cls[size], cls[color]])}
      disabled={disabled}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    >
          <div className={cls.addonLeft}>{addonLeft}</div>
          {children}
          <div className={cls.addonRight}>{addonRight}</div>
      </button>
  );
});
