import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const NavigationLink = styled(Link)`
  background: #ccaafd;
  font-family: inherit;
  color: #000;
  padding: 0.6em 1.3em;
  font-weight: 900;
  font-size: 18px;
  border: 3px solid black;
  border-radius: 0.4em;
  box-shadow: 0.1em 0.1em;
  &:hover {
    transform: translate(-0.05em, -0.05em);
    box-shadow: 0.15em 0.15em;
  }
  &:active {
    transform: translate(0.05em, 0.05em);
    box-shadow: 0.05em 0.05em;
  }
  @media screen and (max-width: 767px) {
        font-size: 14px;
        font-weight: 400;
        border: 1px solid black;
  padding: 0.4em 1.0em;
        
        text-align: center;
        color: #000;
        font-family: inherit;
        }

`;
export const InfoWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        @media screen and (max-width: 767px) {
        gap: 5px;
        }
`;

export const UserName = styled.p`
  font-family: inherit;
  color: #000;
  padding: 0.6em 1.3em;
  font-weight: 900;
  font-size: 18px;
  border-radius: 0.4em;
  @media screen and (max-width: 767px) {
        padding: 0.6em 0.3em;
        font-size: 10px;
        font-weight: 400;
        }
`;
