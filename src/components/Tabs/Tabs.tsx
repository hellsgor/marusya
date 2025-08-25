import st from './Tabs.module.scss';

import { useState, type ReactNode } from 'react';
import type { MenuItemModel } from '../../models';
import { MenuItem } from '../../ui/MenuItem/MenuItem';

type Tab = {
  id: string | number;
  tab: MenuItemModel;
  view: ReactNode;
};

interface TabsProps {
  children: Tab[];
}

export function Tabs({ children }: TabsProps) {
  const [activeTab, setActiveTab] = useState(children[0].id);

  const handleTabClick = (id: Tab['id']) => {
    setActiveTab(id);
  };

  return (
    <div className={st.tabs}>
      <div className={st.tabs__items}>
        {children.map((item) => (
          <MenuItem
            children={item.tab.children}
            onClick={() => {
              handleTabClick(item.id);
            }}
            key={item.id}
          />
        ))}
      </div>

      <div className={st.tabs__view}>
        {children.find((item) => item.id === activeTab)?.view}
      </div>
    </div>
  );
}
