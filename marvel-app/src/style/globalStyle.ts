import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

*{
  outline: 0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-family: 'Roboto',sans-serif;
  background-color:#531423 ;
  -webkit-font-smoothing:antialiased;
  font-size: 16px;
  color: #fff;
}

h1,h2,h3,h4,h5,h6{
  font-weight: 500;
}

button{
  cursor: pointer;
}
`

