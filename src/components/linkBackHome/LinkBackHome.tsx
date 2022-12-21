import React from 'react';
import { Link } from 'react-router-dom';
import { NavegationContainer } from './LinkBackHomeStyles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

interface IProps {
  page: string;
}

const LinkBackHome: React.FC<IProps> = ({ page }) => {
  return (
    <NavegationContainer>
      <Link to={'/home'}>
        <ChevronLeftIcon fontSize="large" sx={{ color: ' #000000' }} />
        Home
      </Link>
      <p>/ {page}</p>
    </NavegationContainer>
  );
};

export default LinkBackHome;
