import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Textarea.module.scss';
import { Text } from '../Text';

interface TextareaProps {
  className?: string;
  text?: string;
  readonly?: boolean;
  placeholder?: string;
}

export const Textarea = memo((props: TextareaProps) => {
  const {
    className,
    text,
    readonly = false,
    placeholder,
  } = props;
  return (
        <textarea
        readOnly={readonly}
        placeholder={placeholder}
         className={classNames(cls.Textarea, {}, [className])}
         >
            {text ?? <Text text={text} />}
        </textarea>
  );
});
