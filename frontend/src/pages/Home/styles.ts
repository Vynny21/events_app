import styled from 'styled-components';

export const Container = styled.div`
  background-color: #FFF;
  height: 100%;

  section {
    position: absolute;
    color: #7159c1;
    font-size: 18px;
    font-weight: bold;
    margin-left: 35px;
    margin-top: -500px;
  }

  input {
    position: absolute;
    margin-left: 35px;
    margin-top: 320px;
    height: 35px;
    width: 500px;
    border: none;
    border-radius: 15%;
    background-color: #ede7e3;
    &::placeholder {
      color: #333;
    }
  }

  input:nth-child(2n){
    position: absolute;
    margin-left: 35px;
    margin-top: 400px;
    height: 35px;
    width: 500px;
    border: none;
    border-radius: 15%;
    &:placeholder {
      color: #333;
      background-color: #ede7e3;
    }
  }

  button {
    background-color: #7159c1;
    color: #FFF;
    width: 200px;
    height: 50px;
    border: none;
    position: absolute;
    margin-left: -1030px;
    margin-top: 485px;
    border-radius: 20%;
    font-size: 15px;
  }

  button:nth-child(2n) {
    background-color: #7159c1;
    color: #FFF;
    width: 200px;
    height: 50px;
    border: none;
    position: absolute;
    margin-left: -1325px;
    margin-top: 485px;
    border-radius: 20%;
    font-size: 15px;
  }

  h1 {
    color: #7159c1;
    position: absolute;
    margin-top: 30px;
    margin-left: 100px;
    font-size: 40px;
    font-weight: bold;
    text-decoration: underline;
  }

  img {
    margin-left: 565px;
    margin-top: 50px;
    object-fit: cover;
  }
`;
