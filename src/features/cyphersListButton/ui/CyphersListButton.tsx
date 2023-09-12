import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CyphersListButton.module.scss';
import { CypherList } from '@/entities/Cypher';
import { Button } from '@/shared/ui/Button';
import { type Cypher } from '@/entities/Cypher/model/types/cypher';
import { Popover } from '@/shared/ui/Popups';

interface CyphersListButtonProps {
  className?: string;
}

export const CyphersListButton = memo((props: CyphersListButtonProps) => {
  const {
    className,
  } = props;
  const [, setIsOpen] = useState(false);
  const items: Cypher[] = [
    {
      id: '1',
      title: 'Aardvark'
    },
    {
      id: '2',
      title: 'AES (Rijndael)'
    },
    {
      id: '3',
      title: 'Akelarre'
    },
    {
      id: '4',
      title: 'Anubis'
    },
    {
      id: '5',
      title: 'Bear'
    },
    {
      id: '6',
      title: 'Lion'
    },
    {
      id: '7',
      title: 'Lioness'
    },
    {
      id: '8',
      title: 'BEAST'
    },
    {
      id: '9',
      title: 'BEAST-RK'
    },
    {
      id: '10',
      title: 'Blowfish'
    },
  ]

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
              className={classNames(cls.NotificationButton, {}, [])}
              direction="bottom right"
            >
              <CypherList data={items} className={cls.items} />
            </Popover>
        </div>
  );
});
