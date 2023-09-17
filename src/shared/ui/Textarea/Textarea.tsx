import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Textarea.module.scss';

interface TextareaProps {
  className?: string;
  value?: string;
  readonly?: boolean;
  placeholder?: string;
  setText?: (str: string) => void;
}

export const Textarea = memo((props: TextareaProps) => {
  const {
    className,
    value,
    readonly = false,
    placeholder,
    setText = () => {},
  } = props;

  const onChangeHandler = (value: string) => {
    setText(value);
    console.log('TXT', value)
  }

  return (
        <textarea
        readOnly={readonly}
        placeholder={placeholder}
        value={value}
        onChange={(e) => { onChangeHandler(e.currentTarget.value); } }
         className={classNames(cls.Textarea, {}, [className])}
         />
  );
});
