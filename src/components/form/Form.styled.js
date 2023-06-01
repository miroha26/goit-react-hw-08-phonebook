import styled from '@emotion/styled';

export const PhoneBookForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  max-width: 500px;
  margin: 20px auto;
  border: 5px solid #fbcf1f;
  border-radius: 5px;
  box-shadow: 0.5em 0.5em ;

`;
export const PhoneBookLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  color: #fff;
  box-sizing: border-box;
  gap: 10px;
  font-size: 20px;
  font-weight: 700;
  width: 100%;
`;
export const PhoneBookInput = styled.input`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  font-size: 20px;
  font-weight: 500;
  border: 1px solid #000;
  border-radius: 5px;
  outline: none;
  &:focus {
    border: 1px solid #000;
  }
`;
export const PhoneBookButton = styled.button`
background: #FBCA1F;
font-family: inherit;
color: #000;
padding: 0.6em 1.3em;
font-weight: 900;
font-size: 18px;
border: 3px solid black;
border-radius: 0.4em;
cursor : pointer;
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
