import { useStore } from '@nanostores/react';
import { $urls } from '@store/urlsStore';

export const ShowRemainingQuantity = () => {

  const urls = useStore($urls);
  return (
    <>
      0{5 - urls.length}
    </>
  );
};

