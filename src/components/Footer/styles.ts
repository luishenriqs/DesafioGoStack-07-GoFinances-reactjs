import styled from 'styled-components';

export const Form = styled.form`
  background: #0C3662;
  width: 100%;
  padding: 30px 0;

  legend {
    font-size: 32px;
    color: #fff;
    margin: 0 auto;
  }

  fieldset {
    width: 1120px;
    padding: 30px;
    border: none;
    margin: 0 auto;
  }

  input {
    width: 220px;
    height: 60px;
    align-items: center;
    padding: 15px;
    border-radius: 5px;
    border: none;

    & + input {
      margin-left: 20px;
    }
  }

  }

  #in {
    width: 90px;
    background: #fff;
    margin-left: 20px;
    border-radius: 5px 0 0 5px;
    border: solid 1px #e5e5e5;
    color: #12a454;
    transition: 0.5s;

    &:hover {
      color: #fff;
      background-color: #12a454;
      border: solid 1px #12a454;
    }
  }

  #out {
    width: 90px;
    background: #fff;
    margin: 0 20px 0 0;
    border-radius: 0 5px 5px 0;
    border: solid 1px #e5e5e5;
    color: #e83f5b;
    transition: 0.5s;

    &:hover {
      color: #fff;
      background-color: #e83f5b;
      border: solid 1px #e83f5b;
    }
  }

  button {
    width: 100px;
    margin-left: 20px;
    border-radius: 5px;
    height: 60px;
    background: #FFa54f;
    color: #fff;
    border: none;
    font-weight: bold;
    transition: 0.5s;

    &:hover {
      color: #ffa54f;
      background-color: #fff;
      border: solid 1px #ffa54f;
    }
  }

  img {
    display: block;
    align-items: center;
    margin: 20px auto 10px auto;
  }
`;
