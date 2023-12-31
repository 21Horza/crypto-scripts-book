import React, {
  type InputHTMLAttributes,
  memo,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import cls from './Input.module.scss';
import { HStack } from '../Stack';
import { Text } from '../Text';
import { type Mods, classNames } from '@/shared/lib/classNames/classNames';

type HTMLInputProps = Omit<
InputHTMLAttributes<HTMLInputElement>,
'value' | 'onChange' | 'readOnly' | 'size'
>;

type InputSize = 's' | 'm' | 'l';

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string | number
  label?: string
  onChange?: (value: string | number) => void
  autofocus?: boolean
  readonly?: boolean
  addonLeft?: ReactNode
  addonRight?: ReactNode
  size?: InputSize
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    readonly,
    label,
    size = 'm',
    ...otherProps
  } = props;
  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const mods: Mods = {
    [cls.readonly]: readonly,
    [cls.focused]: isFocused,
  };

  const input = (
      <div
        className={classNames(cls.InputWrapper, mods, [
          className,
          cls[size],
        ])}
      >
          <input
          ref={ref}
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={cls.input}
          onFocus={onFocus}
          onBlur={onBlur}
          readOnly={readonly}
          placeholder={placeholder}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...otherProps}
        />
      </div>
  );

  if (label) {
    return (
        <HStack max gap="8">
            <Text text={label} />
            {input}
        </HStack>
    );
  }

  return input;
});
