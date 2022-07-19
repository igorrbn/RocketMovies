import { Container, Profile } from './styled';
import { Input } from '../Input';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <Container>
      <h2>Rocket Movies</h2>
      <Input placeholder="Pesquisar pelo título" />

      <Profile>
        <div>
          <strong>Igor</strong>
          <span>
            <a href="#">Sair</a>
          </span>
        </div>

        <Link to="/profile">
          <img src="https://github.com/igorrbn.png" />
        </Link>
      </Profile>
    </Container>
  );
}
