import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, HeroInfos } from './style'
import heroTest from '../../assets/HeroTest.png'


export const Home: React.FC = () => {
  useEffect(() => {
    // let let {data:{results}} 
  }, [])
  return (
    <Container>
      <HeroInfos>
        <Link to='/'>
          <img src={heroTest} alt="" />
          <div>
            <strong>Hero Name</strong>
            <p>Hero Description</p>
          </div>
        </Link>
      </HeroInfos>

      <HeroInfos>
        <Link to='/'>
          <img src={heroTest} alt="" />
          <div>
            <strong>Hero Name</strong>
            <p>Hero Description</p>
          </div>
        </Link>
      </HeroInfos>

      <HeroInfos>
        <Link to='/'>
          <img src={heroTest} alt="" />
          <div>
            <strong>Hero Name</strong>
            <p>Hero Description</p>
          </div>
        </Link>
      </HeroInfos>

      <HeroInfos>
        <Link to='/'>
          <img src={heroTest} alt="" />
          <div>
            <strong>Hero Name</strong>
            <p>Hero Description</p>
          </div>
        </Link>
      </HeroInfos>

      <HeroInfos>
        <Link to='/'>
          <img src={heroTest} alt="" />
          <div>
            <strong>Hero Name</strong>
            <p>Hero Description</p>
          </div>
        </Link>
      </HeroInfos>

      <HeroInfos>
        <Link to='/'>
          <img src={heroTest} alt="" />
          <div>
            <strong>Hero Name</strong>
            <p>Hero Description</p>
          </div>
        </Link>
      </HeroInfos>

    </Container>
  )
}