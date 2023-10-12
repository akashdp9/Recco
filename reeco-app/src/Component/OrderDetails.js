import React from 'react'
import {Row,Column, Container, DataWrapper, SpecificDetail} from './OrderDetails.style';
import jsonData from './data.json'; // Import your JSON data



const GridHeader = () => (
  <Row>
    <Column>Supplier</Column>
    <Column>Shipping Date</Column>
    <Column>Total</Column>
    <Column>Category</Column>
    <Column>Department</Column>
    <Column>Status</Column>
    <Column>Description</Column>
  </Row>
);

const DataRow = ({ data }) => (
  <Row>
    <Column>{data.supplier}</Column>
    <Column>{data.shippingDate}</Column>
    <Column>{data.total}</Column>
    <Column>{data.category}</Column>
    <Column>{data.department}</Column>
    <Column>{data.status}</Column>
    <Column>{data.description}</Column>
  </Row>
);

jsonData = [
    {
      id: 1,
      supplier: 'Supplier 1',
      shippingDate: '2023-10-11',
      total: 100,
      category: 'Category A',
      department: 'Department X',
      status: 'Shipped',
      description: 'Description for Item 1',
    },
    {
        id: 2,
        supplier: 'Supplier 2',
        shippingDate: '2023-10-11',
        total: 300,
        category: 'Category A',
        department: 'Department X',
        status: 'Shipped',
        description: 'Description for Item 1',
      },
  ];

  const selectedId = 2;

const OrderDetails = () => {
    const selectedData = jsonData.find((data) => data.id === selectedId);
  return (
    <Container>
      {/* <GridHeader />
      {selectedData && <DataRow data={selectedData} />} */}
     {selectedData && (
        <DataWrapper>
        <SpecificDetail><span>Supplier</span> {selectedData.supplier}</SpecificDetail>
        <SpecificDetail><span>Shipping Date</span> {selectedData.shippingDate}</SpecificDetail>
        <SpecificDetail><span>Total</span> {selectedData.total}</SpecificDetail>
        <SpecificDetail><span>Category</span> {selectedData.category}</SpecificDetail>
        <SpecificDetail><span>Department</span> {selectedData.department}</SpecificDetail>
        <SpecificDetail><span>Status</span> {selectedData.status}</SpecificDetail>
        </DataWrapper>
      )}
    </Container>
  )
}

export default OrderDetails