import styled from '@emotion/styled';
export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  border: 1px solid #000;
  border-radius: 5px;
  width: 300px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 50px;
`;
export const ContactsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  gap: 20px;
`;

export const ContactsItem = styled.li`
  display: flex;
  font-size: 16px;
  padding: 10px;
  transition: all 250ms linear;
  &:hover {
    transform: scale(1.1);
    background-color: #fbcf1f;
    border-radius: 5px;

    & button {
      background: #7c3039;
    }
  }
`;
export const Button = styled.button`
  background: #fbca1f;
  font-family: inherit;
  color: #000;
  padding: 0.6em 1.3em;
  font-weight: 900;
  font-size: 18px;
  border: 3px solid black;
  border-radius: 0.4em;
  cursor: pointer;
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
    padding: 0.4em 1em;

    text-align: center;
    color: #000;
    font-family: inherit;
  }
`;

export const Span = styled.span`
  font-size: 16px;
  color: #fff;
  display: flex;
  margin-right: 10px;
`;
export const SpanWrapper = styled.div`
  display: flex;
  align-items: center;
`;
