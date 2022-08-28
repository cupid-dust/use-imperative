import React, { useState, useRef } from 'react';
import CustomField from './custom-field';

const Form = () => {
  const [value, setValue] = useState<string>('');
  const ref: HTMLInputElement | any = useRef<HTMLInputElement>(null);

  return (
    <React.Fragment>
      <CustomField
        ref={ref}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
      <button onClick={() => ref.current?.alertValue()}>Focus</button>
    </React.Fragment>
  );
};

export default Form;
