import styled from '@emotion/styled';

export const FilterTitle = styled.label`
  text-aligh: left;
  margin-bottom: 10px;
  font-size: 20px;
  font-weigth: 500;
  color: #fff;
`;
export const FilterInput = styled.input`
  width: 600px;
  padding: 5px;
  margin-bottom: 20px;
  border: 1px solid #000;
  border-radius: 5px;
  font-size: 16px;
  font-weigth: 500;
  margin-top: 5px;
`;
export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 0 auto;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    max-width: 300px;
    margin: 0 auto;
  }
`;
