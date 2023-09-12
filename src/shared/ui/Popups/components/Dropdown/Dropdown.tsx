import { Fragment, type ReactNode } from 'react';
import { Menu } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { type DropdownDirection } from '@/shared/types/ui';
import cls from './Dropdown.module.scss';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/Popup.module.scss';

export interface DropdownItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger: ReactNode;
  direction?: DropdownDirection;
}

export function Dropdown (props: DropdownProps) {
  const {
    className,
    items,
    trigger,
    direction = 'bottom right',
  } = props;

  const menuClasses = [mapDirectionClass[direction], popupCls.menu];

  return (
    <Menu as="div" className={classNames(cls.Dropdown, {}, [className, popupCls.Popup])}>
      <Menu.Button className={popupCls.trigger}>
        {trigger}
      </Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
        {items.map((item, index) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              disabled={item.disabled}
              type="button"
              onClick={item.onClick}
              className={classNames(cls.item, { [popupCls.active]: active })}
            >
              {item.content}
            </button>
          );
          if (item.href) {
            return (
              <Menu.Item
                disabled={item.disabled}
                key={`dropdown-key-${index}`}
              >
                {content}
              </Menu.Item>
            );
          }
          return (
            <Menu.Item
              as={Fragment}
              disabled={item.disabled}
              key={`dropdown-key-${index}`}
            >
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}
