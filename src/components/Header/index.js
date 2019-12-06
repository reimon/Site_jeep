import React from 'react';

import { Link } from 'react-router-dom';

import { Container, Content, Nav } from './styles';
import logo from '../../assets/logo.png';
import logo_ceolin from '../../assets/logo_ceolin.png';


export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Jeep Ceolin" />
          <img src={logo_ceolin} alt="Jeep Ceolin" />
        </nav>
        <Nav>
          <div>
            <ul>
              <li>
                <Link to="/vendas">Novos</Link>
              </li>
              <li>
                <Link to="/vendas">Seminovos</Link>
              </li>
              <li>
                <Link to="/vendas">Pós-Venda</Link>
              </li>
              <li>
                <Link to="/vendas">Vendas Diretas</Link>
              </li>
              <li>
                <Link to="/vendas">Fale Conosco</Link>
              </li>
            </ul>
          </div>
          <div>
            <Link to="/vendas">Novos</Link>
          </div>
        </Nav>
      </Content>
    </Container>
  );
}
