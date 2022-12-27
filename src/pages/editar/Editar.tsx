import { Box, Card, Grid, Paper, TextField, Typography } from '@mui/material';
import React from 'react';

import LinkBackHome from '../../components/linkBackHome/LinkBackHome';
import { CadastroContainer } from '../cadastro/CadastroStyles';
import { MainContainer } from '../home/HomeStyles';

const Editar: React.FC = () => {
  return (
    <MainContainer>
      <CadastroContainer>
        <LinkBackHome page="Editar Livro" />

        <Typography variant="h6">Salve</Typography>
        <form>
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            component={Paper}
            variant="outlined"
          >
            <Grid container direction="column" spacing={3}>
              <Grid
                container
                item
                direction="row"
                spacing={3}
                display="flex"
                justifyContent="flex-end"
              >
                <Grid item xs={12} sm={8} md={6} lg={4} xl={4}>
                  <TextField fullWidth />
                </Grid>
                <Grid item xs={12} sm={8} md={6} lg={4} xl={4}>
                  <TextField fullWidth />
                </Grid>
              </Grid>

              <Grid
                container
                item
                direction="row"
                spacing={3}
                display="flex"
                justifyContent="flex-end"
              >
                <Grid item md={4}>
                  <TextField rows={4} multiline fullWidth />
                </Grid>
                <Grid item md={4}>
                  <TextField fullWidth />
                </Grid>
              </Grid>

              <Grid
                container
                item
                direction="row"
                spacing={3}
                display="flex"
                justifyContent="flex-end"
              >
                <Grid item md={4}>
                  <TextField fullWidth />
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </form>
      </CadastroContainer>
    </MainContainer>
  );
};
export default Editar;
