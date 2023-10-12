import React from 'react'
import {Container, LeftSection, RightSection, Button, SecondaryButton} from './OrderStatus.style'

const OrderStatus = ({ orderId }) => {
    const handleBackClick = () => {
        // Add your logic for the Back button here.
      };
    
      const handleApproveClick = () => {
        // Add your logic for the Approve button here.
      };
  return (
    <Container>
    <LeftSection>
      <div>
        <span>Orders <span>></span></span> Order {orderId}
      </div>
      <div>
        <strong>Order {orderId} </strong> 
      </div>
    </LeftSection>
    <RightSection>
      <SecondaryButton onClick={handleBackClick}>Back</SecondaryButton>
      <Button onClick={handleApproveClick}>Approve Order</Button>
    </RightSection>
  </Container>
  )
}

export default OrderStatus