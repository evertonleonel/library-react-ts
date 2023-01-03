import React, { useState, useEffect, MouseEvent } from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

import { PesquisaContainer } from './BibliotecaStyles';
import { getBooks } from '../../services/GetBooks';
import { Menu } from '@mui/material';

interface ISearch {
  selectFiltro: string;
  inputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputChangeDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFilterDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filterBooks: {
    genre: string;
    systemEntryDate: string;
    searchText: string;
  };

  filtroChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  buscarLivrosPorAutorETitulo: () => void;

  buscarPorGeneroOuData: () => void;
  limparCampos: () => void;
  dateSelected: string;
}

const BibliotecaBuscar = ({
  selectFiltro,
  inputChange,
  inputChangeDate,
  handleFilterDate,
  filtroChange,
  limparCampos,
  filterBooks,

  buscarLivrosPorAutorETitulo,
  buscarPorGeneroOuData,
  dateSelected,
}: ISearch) => {
  const [genre, setGenre] = useState<string[]>([]);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    getBooks().then((data) => {
      const genres = data.map((el) => {
        return el.genre;
      });
      setGenre(genres.filter((current, i) => genres.indexOf(current) === i));
    });
  }, []);

  return (
    <PesquisaContainer>
      <div className="buscar">
        <SearchIcon sx={{ fontSize: 20, color: '#ADB5BD' }} />
        <input
          value={filterBooks.searchText}
          onChange={handleFilterDate}
          placeholder="Pesquisar livro por autor ou título"
          name="searchText"
        />
        <Button
          onClick={buscarPorGeneroOuData}
          sx={{
            backgroundColor: '#FFC501',
            color: '#000000',
            fontSize: '16px',
            textTransform: 'none',
            height: '31px',
            width: '74px',
          }}
        >
          Buscar
        </Button>
      </div>
      <div className="filtrar">
        <Button
          fullWidth
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          variant="outlined"
          sx={{
            bgcolor: '#FFC501',
            color: '#000',
            width: 270,
          }}
          size="large"
        >
          Filtrar
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: 250,
              gap: '10px',
              margin: '10px',
            }}
          >
            <TextField
              id="genero"
              name="genre"
              label="Gênero"
              value={filterBooks.genre}
              onChange={handleFilterDate}
              select
              fullWidth
            >
              <MenuItem value={'0'}>Todos</MenuItem>
              {genre.map((el, index) => {
                return (
                  <MenuItem key={index} value={el}>
                    {el}
                  </MenuItem>
                );
              })}
            </TextField>

            <TextField
              type="date"
              name="systemEntryDate"
              value={filterBooks.systemEntryDate}
              onChange={handleFilterDate}
              fullWidth
            />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button
                onClick={() => {
                  limparCampos();
                  handleClose();
                }}
                sx={{
                  backgroundColor: '#ccc',
                  color: '#000000',
                  fontSize: '16px',
                  textTransform: 'none',
                }}
              >
                Limpar Filtros
              </Button>
              <Button
                onClick={() => {
                  buscarPorGeneroOuData();
                  handleClose();
                }}
                sx={{
                  backgroundColor: '#FFC501',
                  color: '#000000',
                  fontSize: '16px',
                  textTransform: 'none',
                }}
              >
                Buscar
              </Button>
            </div>
          </div>
        </Menu>
      </div>
    </PesquisaContainer>
  );
};

export default BibliotecaBuscar;
