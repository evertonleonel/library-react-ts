import { CardsContainer, MainContainer, Card } from './HomeStyles';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import BookIcon from '../../assets/livro.svg';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <MainContainer>
      <CardsContainer>
        <Card
          onClick={() => {
            navigate('/cadastro');
          }}
        >
          <span>
            <AddCircleOutlineIcon
              fontSize="large"
              sx={{ fontSize: 40, color: '#343A40' }}
            />
          </span>

          <p>Cadastrar novo livro</p>
        </Card>
        <Card
          onClick={() => {
            navigate('/biblioteca');
          }}
        >
          <span>
            <img src={BookIcon} />
          </span>
          <p>Biblioteca</p>
        </Card>
        <Card
          onClick={() => {
            navigate('/emprestimo');
          }}
        >
          <span>
            <PendingActionsIcon
              fontSize="large"
              sx={{ fontSize: 40, color: '#343A40' }}
            />
          </span>

          <p>Histórico de empréstimos</p>
        </Card>
      </CardsContainer>
    </MainContainer>
  );
};

export default Home;
