import st from './Tabs.module.scss';

import { BREAKPOINTS } from '../../constants';

import { useState, type ReactNode } from 'react';
import { useSearchParams } from 'react-router';
import { useMediaQuery } from '../../hooks/useMediaQuery';

import { MenuItem } from '../../ui/MenuItem/MenuItem';
import { TabLabel } from './TabLabel';

import { AnimatePresence, motion } from 'framer-motion';

export type TabDef = {
  id: string | number;
  icon?: ReactNode;
  short?: string;
  long: string;
  content: ReactNode;
};

interface TabsProps {
  children: TabDef[];
  syncWithUrl?: boolean;
  compactBp?: keyof typeof BREAKPOINTS;
}

const activeTabIdParamName = 'activeTabId';

export function Tabs({
  children,
  syncWithUrl = false,
  compactBp = 'md',
}: TabsProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTabId, setActiveTabId] = useState(
    new URLSearchParams(searchParams).get(activeTabIdParamName) ||
      children[0].id,
  );
  const isCompact = useMediaQuery(BREAKPOINTS[compactBp]);

  const handleTabClick = (id: TabDef['id']) => {
    setActiveTabId(id);

    if (syncWithUrl) {
      const params = new URLSearchParams(searchParams);
      params.set(activeTabIdParamName, String(id));
      setSearchParams(params, { replace: true });
    }
  };

  return (
    <div className={st.tabs}>
      <div className={st.tabs__items}>
        {children.map((item) => (
          <MenuItem
            children={<TabLabel {...item} isCompact={isCompact} />}
            isActive={item.id === activeTabId}
            isMobileActive={true}
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
