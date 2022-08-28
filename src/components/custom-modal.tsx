import React, { useImperativeHandle, useRef } from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
};
const CustomModal = ({ open, onClose }: Props, ref: HTMLDivElement | any) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const confirmRef = useRef<HTMLButtonElement>(null);
  const denyRef = useRef<HTMLButtonElement>(null);

  useImperativeHandle(ref, () => {
    return {
      closeBtn: closeRef.current,
      confirmBtn: confirmRef.current,
      denyBtn: denyRef.current,
    };
  });

  if (!open) return null;
  return (
    <div>
      <button ref={closeRef} onClick={onClose}>
        &times;
      </button>
      <h1>Title</h1>
      <div>
        <button ref={confirmRef}>Confirm</button>
        <button ref={denyRef}>Deny</button>
      </div>
    </div>
  );
};

export default React.forwardRef(CustomModal);
