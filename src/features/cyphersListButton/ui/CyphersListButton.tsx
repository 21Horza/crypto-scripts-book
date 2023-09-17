import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CyphersListButton.module.scss';
import { CypherList } from '@/entities/Cypher';
import { Button } from '@/shared/ui/Button';
import { Popover } from '@/shared/ui/Popups';
import { cyphers } from '@/shared/lib/cyphers/cypherList';

interface CyphersListButtonProps {
  className?: string;
}

export const CyphersListButton = memo((props: CyphersListButtonProps) => {
  const {
    className,
  } = props;
  const [, setIsOpen] = useState(false);

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true);
  }, []);

  const trigger = (
    <Button
             onClick={onOpenDrawer}
             addonRight
             className={cls.cyphers}
             >Cyphers
    </Button>
  )

  return (
        <div className={classNames(cls.CyphersListButton, {}, [className])}>
             <Popover
             trigger={trigger}
              className={classNames(cls.PopoverButton, {}, [])}
              direction="bottom right"
            >
              <CypherList data={cyphers} className={cls.items} />
            </Popover>
        </div>
  );
});
