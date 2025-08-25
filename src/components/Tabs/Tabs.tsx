import st from './Tabs.module.scss';

import { useState, type ReactNode } from 'react';
import { useSearchParams } from 'react-router';

import type { MenuItemModel } from '../../models';
import { MenuItem } from '../../ui/MenuItem/MenuItem';

import { AnimatePresence, motion } from 'framer-motion';

type Tab = {
  id: string | number;
  label: MenuItemModel;
  content: ReactNode;
};

interface TabsProps {
  children: Tab[];
  syncWithUrl?: boolean;
}

export function Tabs({ children, syncWithUrl = false }: TabsProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTabId, setActiveTabId] = useState(
    new URLSearchParams(searchParams).get('activeTabId') || children[0].id,
  );

  const handleTabClick = (id: Tab['id']) => {
    setActiveTabId(id);

    if (syncWithUrl) {
      const params = new URLSearchParams(searchParams);
      params.set('activeTabId', String(id));
      setSearchParams(params, { replace: true });
    }
  };

  return (
    <div className={st.tabs}>
      <div className={st.tabs__items}>
        {children.map((item) => (
          <MenuItem
            children={item.label.children}
            isActive={item.id === activeTabId}
            onClick={() => {
              handleTabClick(item.id);
            }}
            key={item.id}
          />
        ))}
      </div>

      <div className={st.tabs__view}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTabId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            layout
          >
            {children.find((item) => item.id === activeTabId)?.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
