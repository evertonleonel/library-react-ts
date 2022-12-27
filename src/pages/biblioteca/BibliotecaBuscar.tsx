import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

import { PesquisaContainer } from './BibliotecaStyles';

interface ISearch {
  selectFiltro: string;
  inputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  buscarLivros: () => void;
  filtroChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BibliotecaBuscar = ({
  inputChange,
  buscarLivros,
  filtroChange,
  selectFiltro,
}: ISearch) => {
  return (
    <PesquisaContainer>
      <div className="buscar">
        <SearchIcon sx={{ fontSize: 20, color: '#ADB5BD' }} />
        <input onChange={inputChange} placeholder="Pesquisar livro..." />
        <Button
          onClick={buscarLivros}
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
        <TextField
          id="filtro"
          name="filtro"
          label="Filtrar"
          value={selectFiltro}
          onChange={filtroChange}
          select
          fullWidth
        >
          <MenuItem value="genre">Gênero</MenuItem>
          <MenuItem value="author">Autor</MenuItem>
          <MenuItem value="systemEntryDate">Data de Entrada</MenuItem>
          <MenuItem value="tittle">Título</MenuItem>
        </TextField>
      </div>
    </PesquisaContainer>
  );
};

export default BibliotecaBuscar;
