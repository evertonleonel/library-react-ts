import React from 'react';
import { Link } from 'react-router-dom';
import { NavegationContainer } from './LinkBackHomeStyles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

interface IProps {
  page: string;
}

const LinkBackHome: React.FC<IProps> = ({ page }) => {
  return (
    <NavegationContainer>
      <Link to={'/home'}>
        <ArrowBackIosIcon fontSize="large" sx={{ color: ' #000000' }} />
        Home
      </Link>
      <p>/ {page}</p>
    </NavegationContainer>
  );
};

export default LinkBackHome;
