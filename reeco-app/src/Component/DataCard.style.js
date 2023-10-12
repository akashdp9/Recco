import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const SearchBar = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 200px;
`;

export const AddItemButton = styled.button`
  padding: 10px 15px;
  background-color: #fff;
  color: green;
  border: 1px solid green;
  border-radius: 30px;
  cursor: pointer;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  text-align: left;
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

export const Tr = styled.tr`
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const Td = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

export const ActionIcons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UrgentPrompt = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  z-index: 1000;
  box-shadow: 0px -25px 20px -20px rgba(0, 0, 0, 0.45), 25px 0 20px -20px rgba(0, 0, 0, 0.45), 0px 25px 20px -20px rgba(0, 0, 0, 0.45), -25px 0 20px -20px rgba(0, 0, 0, 0.45);
`;

export const Tag = styled.span`
display: inline-block
font-size: 12px;
border-radius: 2px;
`

export const PopupButtonWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
`