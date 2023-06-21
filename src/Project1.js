import {
    Image,
    StyleSheet,
  } from "react-native";
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
  
  export default function Project1() {
    return (
      <Container>
        <Content style={{ paddingTop: 200 }}>
          <Card>
            <CardItem>
              <Grid>
                <Row>
                  <Col size={35} style={{ padding: 10 }}>
                    <Image
                      source={{
                        uri: "https://www.duir.ac.bd/wp-content/uploads/2016/03/DU-logo-300x168.jpg",
                      }}
                      style={{ resizeMode: "contain", flex: 1 }}
                    />
                  </Col>
                  <Col size={65}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                      MD. Ekhlas Uddin
                    </Text>
                    <Text style={{ fontSize: 16, fontStyle: "italic" }}>
                      Programmer
                    </Text>
                    <Text style={{ fontSize: 12, fontStyle: "italic" }}>
                      Information & Communication Technology Cell
                    </Text>
  
                    <Text style={{ paddingTop: 20 }}>University Of Dhaka</Text>
                    <Text>Phone: 8801744309402</Text>
                    <Text>Email: ekhlas@du.ac.bd</Text>
                    <Text>Ext: 4701</Text>
                  </Col>
                </Row>
              </Grid>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }