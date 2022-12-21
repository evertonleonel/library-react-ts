import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { PesquisaContainer } from './BibliotecaStyles';

// interface ISearch {
//   value: string;
//   onChange: () => void;
//   label: string;
//   helperText: string;
// }

const BibliotecaBuscar = () => {
  return (
    <PesquisaContainer>
      <div className="buscar">
        <SearchIcon sx={{ fontSize: 20, color: '#ADB5BD' }} />
        <input placeholder="Pesquisar livro..." />
        <Button
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
        <TextField id="filtro" name="filtro" label="Filtrar" select fullWidth>
          <MenuItem value="Gênero">Gênero</MenuItem>
          <MenuItem value="Autor">Autor</MenuItem>
          <MenuItem value="Data de Entrada">Data de Entrada</MenuItem>
          <MenuItem value="Sinopse">Sinopse</MenuItem>
        </TextField>
      </div>
    </PesquisaContainer>
  );
};

export default BibliotecaBuscar;
