import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600&display=swap');
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    
  }
  ul{
    list-style: none;
  }
  
  button{
    box-shadow: none;
    border: none;
    font-size: 1.2rem;
    font-weight: 600;
    padding: 1rem;
  }

  a{
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primaryLight};
  }

  a:hover{
    color: ${({ theme }) => theme.colors.secundaryLight};
  }

  html, body, #root{
    height: 100%;
    scroll-behavior: smooth;  
  }

  html {
    font-size: 12px;
    background: ${({ theme }) => theme.colors.primaryDark};
    color: ${({ theme }) => theme.colors.primaryLight};
    font-family: 'Source Sans Pro', sans-serif;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xs}){
      font-size: 14px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}){
      font-size: 15px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}){
      font-size: 17px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}){
      font-size: 17px;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.xl}){
      font-size: 17px;
    }
  } 
`;
