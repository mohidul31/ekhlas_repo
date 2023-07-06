import { Image, StyleSheet } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Grid,
  Row,
  Col,
} from "native-base";

export default function Project2Details({ route, navigation }) {
  const { item } = route.params;
  return (
    <Container>
      <Content style={{ paddingTop: 10 }}>
        <Card>
          <CardItem>
            <Grid>
              <Row>
                <Col size={35} style={{ padding: 10 }}>
                  <Image
                    source={{
                      uri: item.thumbnail,
                    }}
                    style={{ resizeMode: "contain", flex: 1 }}
                  />
                </Col>
                <Col size={65}>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    {item.title}
                  </Text>
                  <Text style={{ fontSize: 16, fontStyle: "italic" }}>
                    {item.description}
                  </Text>

                  <Text style={{ paddingTop: 20 }}></Text>
                  <Text>Price: {item.price}</Text>
                  <Text>Brand: {item.brand}</Text>
                </Col>
              </Row>
            </Grid>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}
