import { FlatList, Image, StyleSheet } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Right,
  Left,
  Body,
  Button,
  Spinner,
} from "native-base";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Project2({ navigation }) {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then(function (response) {
      setProducts(response.data.products);
    });
  }, []);

  return (
    <Container>
      <Content style={{ paddingTop: 50, marginBottom: 10 }} padder>
        {products ? (
          <FlatList
            data={products}
            renderItem={({ item }) => {
              return (
                <Card>
                  <CardItem>
                    <Left>
                      <Body>
                        <Text>{item.title}</Text>
                      </Body>
                    </Left>
                    <Right>
                      <Body>
                        <Button rounded small>
                          <Text
                            onPress={() =>
                              navigation.navigate("Project2Details", { item })
                            }
                          >
                            Details
                          </Text>
                        </Button>
                      </Body>
                    </Right>
                  </CardItem>
                </Card>
              );
            }}
            keyExtractor={(item) => item}
          />
        ) : (
          <Spinner />
        )}
      </Content>
    </Container>
  );
}
