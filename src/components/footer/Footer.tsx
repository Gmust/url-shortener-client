import { Modal } from '@components/shared/Modal';
import { useState } from 'react';
import { Button } from '@components/shared/Button';

export const Footer = () => {

  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div>
      <Button onClick={()=> {
        console.log('click');
        setIsActive(!isActive);
      }}>Open popup</Button>
      <Modal setIsActive={setIsActive} isActive={isActive}>
       <div>
         sdads
       </div>
      </Modal>
    </div>
  );
};

