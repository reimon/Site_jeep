import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
`;
export const Content = styled.div`
  height: 94px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 10px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }
    > a {
      font-weight: bold;
      color: #740518;
      text-decoration: none;
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;
export const Nav = styled.div`
  padding-left: 0;
  padding-right: 0;
  display: flex;

  @media (max-width: 1080px) {
    font-size: 58%;
  }

  @media (max-width: 720px) {
    font-size: 51%;
  }
  div {
    padding-right: auto;
    margin-right: auto;
    margin-left: auto;

    ul {
      display: block;
      display: flex;
      list-style: none;

      li {
        text-align: -webkit-match-parent;
        margin: 0;
        position: relative;
        font-size: 15px;
        font-weight: 700;
        font-weight: bold;
        border-right: 1px solid #eee;
        a {
          border-radius: 0px;
          padding: 16px 15px;
          text-decoration: none;
          color: #393e16;
          align-items: center;
        }
      }
    }
  }
`;
