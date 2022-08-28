import React, { useImperativeHandle } from 'react';

const CustomField = (props: any, ref: HTMLInputElement | any) => {
  useImperativeHandle(
    ref,
    () => {
      return { alertValue: () => alert(props.value) };
    },
    [props.value]
  );

  return <input ref={ref} style={{ backgroundColor: 'red' }} {...props} />;
};

export default React.forwardRef(CustomField);
