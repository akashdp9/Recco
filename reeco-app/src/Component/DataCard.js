import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { setProducts, approveProduct, markUrgent } from "../redux/productsSlice";
import { setSearchQuery, openUrgentPrompt, closeUrgentPrompt } from '../redux/uiSlice';
import productsData from "./productsData.json";
import {Container, Header, SearchBar, AddItemButton, Table, Tr, Th, Td, ActionIcons, UrgentPrompt, Tag, PopupButtonWrapper} from './DataCard.style'


const DataCard = () => {
    const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [searchQuery, setSearchQuery] = useState("");

const isUrgentPromptOpen = useSelector((state) => state.ui.isUrgentPromptOpen); 
  const productIdToMarkUrgent = useSelector((state) => state.ui.productIdToMarkUrgent);

  useEffect(() => {
    dispatch(setProducts(productsData));
  }, [dispatch]);

  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleApprove = (productId) => {
    dispatch(approveProduct(productId));
  };

  const handleMarkUrgent = (productId) => {
    dispatch(markUrgent(productId))
    handleCloseUrgentPrompt();

  };

  const handleOpenUrgentPrompt = (productId) => {
    dispatch(openUrgentPrompt(productId));
  };

  const handleCloseUrgentPrompt = () => {
    dispatch(closeUrgentPrompt());
  };

  return (
    <>
    <Container>
      <Header>
        <SearchBar
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <AddItemButton>Add Item</AddItemButton>
      </Header>
      <Table>
        <thead>
          <Tr>
            <Th>Product Name</Th>
            <Th>Brand</Th>
            <Th>Price</Th>
            <Th>Quantity</Th>
            <Th>Total</Th>
            <Th>Status</Th>
            <Th>Action</Th>
          </Tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <Tr key={product.id}>
              <Td>
                <img src={`product_images/${product.productName}.jpg`} alt={product.id} width="30" height="30" />
                {product.productName}
              </Td>
              <Td>{product.brand}</Td>
              <Td>{product.price}</Td>
              <Td>{product.quantity}</Td>
              <Td>{product.total}</Td>
              <Td>
                  {product.status === 'Approved' ? (
                    <Tag style={{ backgroundColor: 'green', color:'white', padding: '2px' }}>{product.status}</Tag>
                  ) : (
                    <Tag style={{ backgroundColor: 'red' , color: 'white', padding:'2px'}}>{product.status}</Tag>
                  )}
                </Td>
              <Td>
                <ActionIcons>
                  <span onClick={() => handleApprove(product.id)}>✔️</span>
                  <span onClick={() => handleOpenUrgentPrompt(product.id)}>❌</span>
                  <a href="#">Edit</a>
                </ActionIcons>
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </Container>
    {isUrgentPromptOpen && (
        <UrgentPrompt>
          <h3>Missing Product?</h3>
          <span>Is the Product Missing ? </span>
          <PopupButtonWrapper>
          <button onClick={() => handleMarkUrgent(productIdToMarkUrgent, true)}>Yes</button>
          <button onClick={() => handleMarkUrgent(productIdToMarkUrgent, false)}>No</button>
          </PopupButtonWrapper>
          
        </UrgentPrompt>
      )}
      </>
  );
};

export default DataCard;
