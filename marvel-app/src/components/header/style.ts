import styled from 'styled-components'

export const Container = styled.header`
 
 width: 100%;
 display: flex;
flex-direction: column;
 align-items: center;

 img{
   height: 8rem;
   width: 16rem;
   margin-top: 3rem;
 }

 ul{
   display: flex;
   list-style: none;
   margin-top: 2rem;

   li{
     display: flex;
    
     width:100% ;
     a{
       display: flex;
       align-items: center;
       color: #ffff;
       font-size: 1.7rem;
       font-weight: 400;
       text-decoration:none;
       padding-bottom : 0.5rem;
       border-bottom: solid transparent 4px;
       transition: 1s;
              
       &:hover{
        color:#ff9000;
        border-radius: 3px;
        border-color: #ff9000;
        margin-right: 1rem;
        transform: translateX(10px);
       }
     }
 &+li{
   margin-left:5rem
 }

 svg{
   margin-right: 0.5rem;
 }

   }
 }
`