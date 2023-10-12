import React from 'react'
import {HeaderContainer,LeftSection, Logo,NavLink, RightSection, CartIcon, ProfileDropdown, DropdownContent} from './Header.style'

const Header = () => {
  return (
    <HeaderContainer>
      <LeftSection>
        {/* <Logo src="/logo.png" alt="Logo" /> */}
        <Logo>Recco</Logo>
        <NavLink href="#">Store</NavLink>
        <NavLink href="#">Orders</NavLink>
        <NavLink href="#">Analytics</NavLink>
      </LeftSection>
      <RightSection>
        <CartIcon className="fas fa-shopping-cart" />
        <ProfileDropdown>
          <i className="fas fa-user-circle" />
          <DropdownContent className="dropdown-content">
            <NavLink href="#">Profile</NavLink>
            <NavLink href="#">Settings</NavLink>
            <NavLink href="#">Log Out</NavLink>
          </DropdownContent>
        </ProfileDropdown>
      </RightSection>
    </HeaderContainer>
  )
}

export default Header