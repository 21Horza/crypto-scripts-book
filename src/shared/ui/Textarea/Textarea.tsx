import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Textarea.module.scss';

interface TextareaProps {
  className?: string;
  text?: string;
  readonly?: boolean;
  placeholder?: string;
}

export const Textarea = memo((props: TextareaProps) => {
  const {
    className,
    readonly = false,
    placeholder,
  } = props;
  const [txt, setTxt] = useState('');
  return (
        <textarea
        readOnly={readonly}
        placeholder={placeholder}
        defaultValue={txt}
         className={classNames(cls.Textarea, {}, [className])}
        onChange={(e) => { setTxt(e.target.value); }}
         />
  );
});
