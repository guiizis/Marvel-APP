import styled from 'styled-components'


export const Container = styled.div`
  margin: 5rem 3rem 0rem 3rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  
`

export const HeroInfos = styled.div`
  margin:2rem 3rem;
  z-index: 2;
  a{
    display: flex;
    flex-direction: column;
    background-color: #f0f0f5;
    border-radius: 1rem;
    text-decoration: none;

    img{
      width: 20rem;
      height: 20rem;
      border-radius: 0.5rem;
    }

    div{
      width: 100%;
      padding: 2rem;
      text-align: center;

      strong{
        font-size: 36px;
        color:#3d3d4d
      }

      p{
        font-size: 18px;
        color:#737380;
        margin-top: 4px;
      }
    }
  
}

   
`


