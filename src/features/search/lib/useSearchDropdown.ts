import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router';

interface UseSearchDropdownProps {
  hasResults: boolean;
  isCorrectLength: boolean;
  searchValue: string;
}

export const useSearchDropdown = ({
  hasResults,
  isCorrectLength,
  searchValue,
}: UseSearchDropdownProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isManuallyClosedByUser, setIsManuallyClosedByUser] = useState(false);
  const { pathname } = useLocation();

  // Open dropdown when results are available
  useEffect(() => {
    if (!isManuallyClosedByUser) {
      setIsExpanded(isCorrectLength && hasResults);
    }
  }, [isCorrectLength, hasResults, isManuallyClosedByUser]);

  // Reset manual close flag when search value changes
  useEffect(() => {
    setIsManuallyClosedByUser(false);
  }, [searchValue]);

  // Reset everything on route change
  useEffect(() => {
    setIsExpanded(false);
    setIsManuallyClosedByUser(false);
  }, [pathname]);

  const handleClose = useCallback(() => {
    setIsExpanded(false);
    setIsManuallyClosedByUser(true);
  }, []);

  const handleFocus = useCallback(() => {
    setIsManuallyClosedByUser(false);
    if (isCorrectLength && hasResults) {
      setIsExpanded(true);
    }
  }, [isCorrectLength, hasResults]);

  return {
    isExpanded,
    handleClose,
    handleFocus,
  };
};
