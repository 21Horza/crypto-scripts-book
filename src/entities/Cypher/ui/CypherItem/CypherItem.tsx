import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CypherItem.module.scss';
import { type Cypher } from '../../model/types/cypher';
import { usePrintCode } from '@/shared/lib/hooks/usePrintCode/usePrintCode';

interface CypherItemProps {
  className?: string;
  item: Cypher;
}

export const CypherItem = memo((props: CypherItemProps) => {
  const {
    className,
    item,
  } = props;

  const { togglePrintCode } = usePrintCode(item.encryptFn);

  const handleClick = async () => {
    try {
      await togglePrintCode();
    } catch (error) {
      console.error(error);
    }
  };

  return (
        <div
        onClick={handleClick}
        className={classNames(cls.CypherItem, {}, [className])}
        >
            {item.title}
        </div>
  );
});
