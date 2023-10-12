import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  height: 60px;
//   border : 1px solid red;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
//   border: 1px solid blue;
  height: 60px;
`;

export const RightSection = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: green;
  color: white;
  border: none;
  cursor: pointer;
  margin: 5px;
  border-radius: 20px;
`;

export const SecondaryButton = styled.button`
padding: 10px 20px;
  background-color: white;
  color: green;
  border: none;
  cursor: pointer;
  margin: 5px;
  border-radius: 20px;
  border: 1px solid green;
`;