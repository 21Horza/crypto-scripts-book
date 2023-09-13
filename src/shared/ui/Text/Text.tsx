import { memo } from 'react';
import cls from './Text.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export type TextVariant = 'code' | 'button' | 'message' | 'result' | 'normal';

export type TextAlign = 'right' | 'left' | 'center';

export type TextSize = 's' | 'm' | 'l';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: TextVariant;
  align?: TextAlign;
  size?: TextSize;
  bold?: boolean;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToClass: Record<TextSize, string> = {
  s: cls.size_s,
  m: cls.size_m,
  l: cls.size_l,
};

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  s: 'h3',
  m: 'h2',
  l: 'h1',
};

export const Text = memo((props: TextProps) => {
  const {
    className,
    text,
    title,
    bold,
    size = 'm',
    align = 'left',
    variant = 'normal',
  } = props;

  const HeaderTag = mapSizeToHeaderTag[size];
  const sizeClass = mapSizeToClass[size];

  const additionalClasses = [className, cls[variant], cls[align], sizeClass];

  return (
      <div className={classNames(cls.Text, { [cls.bold]: bold }, additionalClasses)}>
          {title && (
          <HeaderTag
          className={cls.title}
        >
              {title}
          </HeaderTag>
          )}
          {text &&
             (
             <p
               className={cls.text}
             >
                 {text}
             </p>
             )}
      </div>
  );
});
