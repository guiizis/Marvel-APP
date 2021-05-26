import React from 'react'
import { Container } from './style'
import MarvelLogo from '../../assets/logo.png'
import { FiSearch, FiList, FiStar } from 'react-icons/fi'
export const Header: React.FC = () => {

  return (
    <Container>
      <img src={MarvelLogo} alt="Marvel Logo" />
      <ul>
        <li>
          <a href="">
            <FiStar size={20} />
            <p>Favoritos</p>
          </a>
        </li>
        <li>
          <a href="">
            <FiSearch size={20} />
            <p>Pesquisar</p>
          </a>
        </li>
        <li>
          <a href="">
            <FiList size={20} />
            <p>Ordenar</p>
          </a>
        </li>
      </ul>
    </Container>
  )

}