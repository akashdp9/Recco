import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 8px
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
//   border-bottom: 1px solid #ccc;
  padding: 8px 0;
`;

export const Column = styled.div`
  flex: 1;
  padding: 8px;
  border-right: 1px solid grey
`;

export const DataWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 15px;
`;

export const SpecificDetail = styled.div`
display: flex;
flex-direction: column;
border-right: 1px solid grey;

`