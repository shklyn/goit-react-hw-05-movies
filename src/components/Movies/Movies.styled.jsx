import styled from '@emotion/styled';

export const MoviesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 30px 60px 20px 60px;
  padding: 30px;
  box-shadow: 0px 0px 9px 5px rgba(0, 0, 0, 0.67);
  background-color: #adb8ff;
  width: 100%;
`;
export const MoviesSearchForm = styled.form`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MoviesSearchInput = styled.input`
  width: 85%;
  max-width: 500px;
  min-width: 100px;
  margin-bottom: 20px;
  color: #212529;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  background-color: #ffffff;
  background-clip: padding-box;
  padding: 5px 10px 5px 10px;
  border-color: #dbdbdb;
  border-radius: 3px 0 0 3px;
  border-style: solid;
  border-width: 1px 0 1px 1px;
  -webkit-transition: border-color 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  -o-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;

  &:focus {
    color: #212529;
    background-color: #ffffff;
    border-width: 2px;
    border-color: #ffffff;
    -webkit-box-shadow: 0 4px 17px -5px #ffffff;
    box-shadow: 0 4px 17px -5px #ffffff;
    outline: 0;
  }
`;

export const MoviesSearchBtn = styled.button`
  height: 35px;
  background-color: #ffffff;
  color: #4663be;
  cursor: pointer;
  border-radius: 0 5px 5px 0;
  border-width: 1px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  border-color: #dbdbdb;
  border-style: solid;
  -webkit-transition: border-color 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  -o-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;

  &:hover {
    color: #212529;
    background-color: #ffffff;
    border-width: 2px;
    border-color: #ffffff;
    -webkit-box-shadow: 0 4px 17px -5px #ffffff;
    box-shadow: 0 4px 17px -5px #ffffff;
    outline: 0;
  }
`;

export const MoviesSearchIcon = styled.svg`
  display: block;
`;

export const MoviesSearchList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 30px;
`;

export const MoviesSearchItemImg = styled.img`
  width: 350px;
`;

export const MoviesSearchItemPrg = styled.p`
    height: 50px;
    color: #212121;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    margin-top: 15px;
`;

export const MovieSearchWrap = styled.li`
    border-radius: 8px;
    overflow: hidden;
    background-color: rgb(2 152 190 / 50%);
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
    width: 352px;
    transition-duration: 250ms;
  transition-property: scale;
  transition-timing-function: ease-in-out;

  &:hover {
    scale: 1.02;
    box-shadow: 0px 1px 2px rgb(255 0 249 / 31%),
      0px 2px 4px rgb(255 0 245 / 50%), 0px 4px 8px rgb(255 235 0 / 31%),
      0px 8px 16px rgb(255 247 254 / 35%);
  }
`;