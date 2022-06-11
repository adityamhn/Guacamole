import React from "react";
import { useQuery } from "react-query";
import MenuLayout from "../../components/Menu/MenuLayout";
import MenuList from "../../components/Menu/MenuList";
import { GetItemByRestaurantId } from "../../services/item.service";

const RestaurantMenu = ({ restaurantId }) => {
  const { data: menu, isLoading } = useQuery(["menu", restaurantId], () =>
    GetItemByRestaurantId({
      r_id: restaurantId,
    })
  );

  console.log(menu);

  return (
    <MenuLayout>
      <MenuList isLoading={isLoading} menu={menu?.data?.items} />
    </MenuLayout>
  );
};

RestaurantMenu.getInitialProps = ({ query: { restaurantId } }) => {
  return { restaurantId };
};

export default RestaurantMenu;
