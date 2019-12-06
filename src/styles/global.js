import { createGlobalStyle } from 'styled-components';
// eslint-disable-next-line no-unused-vars

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus{
    outline: 0;
  }
  /*------- minha configuração */
  html{
    font-size: 62.5%;
  }
  @media (max-width: 1080px) {
  html {
    font-size: 58%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 54%;
  }
}
.center {
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 3rem;
}
  /*------*/
  html, body, #root {
    height: 100%;
  }

  body{
    -webkit-font-smoothing: antialiased;
    background: #FFF;
    font-size: 1.6rem;
    font-family: 'Titillium Web', sans-serif;
  }
  body, input, button{
    font: 14px 'Roboto', sans-serif;
  }
  h1{
    font: 'Roboto', sans-serif;
  h2{
    font: 'Roboto', sans-serif;
  }
  h3{
    font: 'Roboto', sans-serif;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
}
header {
  position: relative;
  width: 100%;
  height: 100px;
  background: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, .16);
  z-index: 2;
}
header nav a {
  position: relative;
  color: #777;
  font-size: 1.6rem;
  transition: color .3s;
}
header nav a + a {
  margin-left: 2em;
}
`;
