import { type ReactElement, memo } from 'react';
import cls from './MainLayout.module.scss';
import { classNames } from '../../lib/classNames/classNames';

interface MainLayoutProps {
  className?: string;
  header: ReactElement;
  content: ReactElement;
  sidebar: ReactElement;
}

export const MainLayout = memo((props: MainLayoutProps) => {
  const {
    className,
    header,
    content,
    sidebar,
  } = props;
  return (
    <div className={classNames(cls.MainLayout, {}, [className])}>
      <div className={cls.sidebar}>{sidebar}</div>
      <div className={cls.content}>{content}</div>
      <div className={cls.rightbar}>
        <div className={cls.header}>{header}</div>
      </div>
    </div>
  );
});
