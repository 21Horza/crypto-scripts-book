import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CypherItem.module.scss';
import { type Cypher } from '../../model/types/cypher';

interface CypherItemProps {
  className?: string;
  item: Cypher;
}

export const CypherItem = memo((props: CypherItemProps) => {
  const {
    className,
    item,
  } = props;
  return (
        <div className={classNames(cls.CypherItem, {}, [className])}>
            {item.title}
        </div>
  );
});
