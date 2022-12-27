import React from 'react';
import { IconButton } from '@mui/material';
import CloseModalButton from '../../assets/x-fechar.png';

interface Iprops {
  onClick: () => void;
}

const CloseModal: React.FC<Iprops> = ({ onClick }) => {
  return (
    <div className="buttonCloseModal">
      <IconButton onClick={onClick}>
        <img src={CloseModalButton} />
      </IconButton>
    </div>
  );
};

export default CloseModal;
