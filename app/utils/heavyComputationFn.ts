import {useMemo} from 'react';

interface Item {
  id: number;
  title: string;
}

const useHeavyComputation = () => {
  const computeDetails = useMemo(() => {
    return (item: Item) => {
      let details = '';
      const startTime = performance.now();
      if (item) {
        for (let i = 0; i < 10000; i++) {
          details += item.title;
        }
      }

      const endTime = performance.now();
      const ms = endTime - startTime;

      console.log(`Heavy computation took: ${ms.toFixed(4)} milliseconds`);
      return details;
    };
  }, []);

  return computeDetails;
};

export default useHeavyComputation;
