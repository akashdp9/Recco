import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: green;
  color: #fff;
  padding: 10px 20px;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.span`
//   height: 40px;
  margin-right: 20px;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
  margin-right: 20px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

export const CartIcon = styled.i`
  font-size: 24px;
  margin-right: 20px;
  cursor: pointer;
`;

export const ProfileDropdown = styled.div`
  position: relative;
  cursor: pointer;

  &:hover {
    .dropdown-content {
      display: block;
    }
  }
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  min-width: 160px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  z-index: 1;
`;