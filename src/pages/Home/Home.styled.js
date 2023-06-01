import styled from '@emotion/styled';

export const HomeContainer = styled.div`
  background: #ccaafd;
  max-width: 700px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: inherit;
  color: #000;
  padding: 0.6em 1.3em;
  font-weight: 900;
  font-size: 18px;
  border: 3px solid black;
  border-radius: 0.4em;
  box-shadow: 0.1em 0.1em;
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  @media screen and (max-width: 767px) {
    max-width: 400px;
    height: fit-content;
    top: 59%;
  }
`;

export const Content = styled.p`
  @media screen and (max-width: 767px) {
    font-size: 14px;
    font-weight: 400;
    margin: 0;
    padding: 0;
    text-align: center;
    color: #000;
    font-family: inherit;
  }
`;
