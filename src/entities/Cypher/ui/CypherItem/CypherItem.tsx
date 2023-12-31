import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CypherItem.module.scss';
import { type Cypher } from '../../model/types/cypher';
import { usePrintCode } from '@/shared/lib/hooks/usePrintCode/usePrintCode';
import { CodeMode } from '@/shared/consts/codeMode';
import { useCurrentCode } from '@/shared/lib/hooks/useCurrentCode/useCurrentCode';

interface CypherItemProps {
  className?: string;
  item: Cypher;
}

export const CypherItem = memo((props: CypherItemProps) => {
  const {
    className,
    item,
  } = props;
  const { togglePrintCode } = usePrintCode(item.printFn, CodeMode.PRINT);
  const { toggleCurrentCode, currentEncrypt } = useCurrentCode(item.encryptFn, item.decryptFn ?? '', item.title);

  const handleClick = async () => {
    try {
      await togglePrintCode();
      toggleCurrentCode();
    } catch (error) {
      console.error(error);
    }
  };

  return (
        <div
        onClick={handleClick}
        className={classNames(cls.CypherItem,
          {
            [cls.selected]:
            item.encryptFn ===
            currentEncrypt &&
            currentEncrypt !== ''
          }
          , [className])}
        >
            {item.title}
        </div>
  );
});
