import axios from "axios";
import React, { useEffect } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { SafeArea } from "../../components/SafeArea.component";
import { BACKEND_URL, ORANGE, WHITE } from "../../constants";
import { Container } from "../auth/login.styles";
import {
  FoodType,
  FoodTypesContainer,
  ItemDescription,
  ItemDetails,
  ItemName,
  ItemPrice,
  List,
  ListImage,
  ListItem,
  ListName,
  MainMenu,
  MenuFooter,
  MenuHeader,
  MenuLayoutContainer,
  RestAddress,
  RestName,
  TableNumber,
} from "./menu.styles";

const MenuScreen = ({ route, navigation }) => {
  // get state passed from previous screen
  const { restaurantId, tableId } = route.params;
  console.log(
    "🚀 ~ file: menu.page.js ~ line 31 ~ MenuScreen ~ restaurantId",
    restaurantId
  );
  const state = navigation.getState();
  console.log(state);
  const [restaurant, setRestaurant] = React.useState({});
  console.log("stae", restaurant);

  useEffect(() => {
    const getRest = async () => {
      const res = await axios.post(
        `${BACKEND_URL}/api/restaurant/get-restaurant-details`,
        {
          _id: restaurantId,
        }
      );

      const rest = res.data.restaurant;
      setRestaurant(rest);
    };
    // const getMenu = async () => {
    //   const res = await axios.get(
    //     `${BACKEND_URL}/api/temp/get-table-info/${tableId}`,
    //     {
    //       headers: {
    //         token,
    //       },
    //     }
    //   );
    // };

    getRest();
  }, []);

  return (
    <SafeArea out>
      <Container style={{ width: "100%" }}>
        <MenuLayoutContainer>
          <MenuHeader>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <RestName>{restaurant?.name}</RestName>
              <TableNumber>Table 7</TableNumber>
            </View>
            <RestAddress>{restaurant?.location}</RestAddress>
            <FoodTypesContainer>
              <FoodType>All</FoodType>
              <FoodType>Food</FoodType>
              <FoodType>Non-Alcoholic Beverages</FoodType>
              <FoodType>Alcoholic Beverages</FoodType>
            </FoodTypesContainer>
          </MenuHeader>

          <MainMenu>
            <ListName>Best Sellers</ListName>

            <List>
              <ListItem>
                <ListImage
                  source={{
                    uri: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
                  }}
                />
                <ItemDetails>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <ItemName>Chicken Biriyani</ItemName>
                    <ItemPrice>₹250</ItemPrice>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: 4,
                    }}
                  >
                    <ItemDescription>
                      Lorem ipsum dolor sit amet consectetur.{" "}
                    </ItemDescription>
                    <Button
                      uppercase={false}
                      style={{
                        backgroundColor: ORANGE,
                        borderRadius: 20,
                        paddingVertical: 0,
                        alignSelf: "flex-end",
                      }}
                      color={WHITE}
                    >
                      Add
                    </Button>
                  </View>
                </ItemDetails>
              </ListItem>

              <ListItem>
                <ListImage
                  source={{
                    uri: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
                  }}
                />
                <ItemDetails>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <ItemName>Chicken Biriyani</ItemName>
                    <ItemPrice>₹250</ItemPrice>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: 4,
                    }}
                  >
                    <ItemDescription>
                      Lorem ipsum dolor sit amet consectetur.{" "}
                    </ItemDescription>
                    <Button
                      uppercase={false}
                      style={{
                        backgroundColor: ORANGE,
                        borderRadius: 20,
                        paddingVertical: 0,
                        alignSelf: "flex-end",
                      }}
                      color={WHITE}
                    >
                      Add
                    </Button>
                  </View>
                </ItemDetails>
              </ListItem>
            </List>
          </MainMenu>
          <MenuFooter
            style={{
              alignItems: "center",
              position: "absolute",
              bottom: 28,
              width: "100%",
            }}
          >
            <Button
              mode="contained"
              color={ORANGE}
              uppercase={false}
              style={{
                width: "100%",
                paddingVertical: 8,
                marginTop: 16,
              }}
              labelStyle={{
                fontSize: 16,
              }}
              onPress={() => navigation.navigate("Payment")}
            >
              1 item | ₹250
            </Button>
          </MenuFooter>
        </MenuLayoutContainer>
      </Container>
    </SafeArea>
  );
};

export default MenuScreen;
