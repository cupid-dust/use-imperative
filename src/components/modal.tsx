import React, { useState, useRef } from 'react';
import CustomModal from './custom-modal';

const Modal = () => {
  const [open, setOpen] = useState<boolean>(false);
  const ref: HTMLDivElement | any = useRef<HTMLDivElement>(null);

  const onClose = (): void => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <button onClick={() => setOpen(true)}>Open</button>
      <button onClick={() => ref.current?.closeBtn.focus()}>
        Focus Close Btn
      </button>
      <button onClick={() => ref.current?.confirmBtn.focus()}>
        Focus Confirm Btn
      </button>
      <button onClick={() => ref.current?.denyBtn.focus()}>
        Focus Deny Btn
      </button>

      <CustomModal ref={ref} open={open} onClose={onClose} />
    </React.Fragment>
  );
};

export default Modal;
