import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 30px;
  box-shadow: 0px 0px 9px 5px rgba(0, 0, 0, 0.67);
  background-color: #adb8ff;
  width: 100%;
`;

export const PageTitle = styled.h1`
  text-align: center;
  padding: 20px;
  color: #1744be;
    text-shadow: 0 0 3px rgba(0, 0, 255, 0.8);
`;

export const MoviesPopList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 10px 20px;
`;

export const MoviesPopItem = styled.li`
  border-radius: 8px;
    overflow: hidden;
   background-color: rgb(2 152 190 / 50%);
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
    width: 300px;
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

export const MoviesPopItemImg = styled.img`
  width: 300px;
`;

export const MoviesPopItemPrg = styled.p`
    height: 50px;
    color: #212121;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    margin-top: 15px;
}`;