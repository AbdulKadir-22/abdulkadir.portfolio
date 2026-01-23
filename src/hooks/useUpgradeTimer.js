import { useState, useEffect } from 'react';

export const useUpgradeTimer = () => {
  const [daysToUpgrade, setDaysToUpgrade] = useState(0);

  useEffect(() => {
    const calculateUpgradeTimer = () => {
      const now = new Date();
      // Start by assuming the target is the 22nd of THIS month
      let targetDate = new Date(now.getFullYear(), now.getMonth(), 22);

      // If today is already the 22nd or later, move the target to NEXT month
      if (now.getDate() >= 22) {
        targetDate.setMonth(targetDate.getMonth() + 1);
      }

      const diffTime = targetDate - now;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
      setDaysToUpgrade(diffDays);
    };

    calculateUpgradeTimer();
    // Optional: Update daily if app stays open (not implemented for simplicity)
  }, []);

  return daysToUpgrade;
};