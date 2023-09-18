import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { CypherItem } from '../CypherItem/CypherItem';
import { type Cypher } from '../../model/types/cypher';

interface CypherListProps {
  className?: string;
  data: Cypher[];
}

export const CypherList = memo((props: CypherListProps) => {
  const {
    className,
    data,
  } = props;

  return (
    <VStack
      max
      className={classNames('', {}, [className])}
    >
      {data?.map((item) => (
        <CypherItem
        key={item.id}
         item={item}
        />
      ))}
    </VStack>
  );
});
