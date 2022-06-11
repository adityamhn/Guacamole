import React from 'react'
import MenuLayout from '../../components/Menu/MenuLayout';
import MenuList from '../../components/Menu/MenuList';

const RestaurantMenu = ({restaurantId}) => {
  return (
    <MenuLayout>
        <MenuList />
    </MenuLayout>
  )
}

RestaurantMenu.getInitialProps = ({ query: { restaurantId } }) => {
    return { restaurantId };
  };

export default RestaurantMenu;

