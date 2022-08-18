import { useState } from 'react';

import classes from './List.module.css';
import { ReactComponent as ExpandMore } from '../../../assets/images/chevron-down.svg';

type ListItem = {
  type: 'SingleItem' | 'GroupItem';
  title: string;
  icon?: React.ReactElement;
  badge?: string | number | null;
  active?: boolean;
  options?: ListItem[];
};

type ListProps = {
  items: ListItem[];
};

type GroupItemProps = {
  items: ListItem[];
  isOpen: boolean;
};

const GroupItem = ({ items, isOpen }: GroupItemProps) => {
  return (
    <div
      className={`${classes.collapsible} ${
        isOpen ? classes['collapsible--open'] : ''
      }`}
    >
      <List items={items} />
    </div>
  );
};

const Item = ({ title, active, badge, icon, options, type }: ListItem) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpenToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <li
        key={title}
        className={`${classes['list-type']} ${active ? 'opacified-bg' : ''}`}
        onClick={handleIsOpenToggle}
      >
        <div>
          {icon && <span>{icon}</span>}
          <span>{title}</span>
        </div>
        <div>
          {badge && <span className={classes.badge}>{badge}</span>}
          {options && (
            <span
              className={`${classes.expandmore} ${
                isOpen ? classes['expandmore--true'] : ''
              }`}
            >
              <ExpandMore />
            </span>
          )}
        </div>
      </li>
      {type === 'GroupItem' && options && (
        <GroupItem items={options} isOpen={isOpen} />
      )}
    </>
  );
};

const List = ({ items }: ListProps) => {
  return (
    <ul className={classes.list}>
      {items.map((item) => (
        <Item key={item.title} {...item} />
      ))}
    </ul>
  );
};

export default List;
