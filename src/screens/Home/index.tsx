import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Container, Title } from "./styles";

export const Home = () => {
  return (
    <Container>
      <Title>Home Screen!</Title>
      <StatusBar style="dark" />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});