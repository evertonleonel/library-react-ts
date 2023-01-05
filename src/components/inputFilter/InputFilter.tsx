import React, { ChangeEvent } from 'react';
import InputBase from '@mui/material/InputBase';

interface IProps {
  src: string;
  id: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  className: string;
  type: string | null;
}

const InputFilter: React.FC<IProps> = ({
  src,
  id,
  name,
  onChange,
  className,
  type,
}) => {
  if (type === 'date') {
    return (
      <div className={className}>
        <InputBase
          type={type || 'text'}
          id={id}
          name={name}
          onChange={onChange}
        />
      </div>
    );
  } else {
    return (
      <div className={className}>
        <img src={src} />
        <InputBase
          type={type || 'text'}
          id={id}
          name={name}
          onChange={onChange}
        />
      </div>
    );
  }
};

export default InputFilter;
