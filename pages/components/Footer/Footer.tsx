import { Container, Text } from "@mantine/core";

export default function Footer() {
  return (
    <Container fluid  style={{
      backgroundColor: "#1D1D1D",
      height: "100%",
      textAlign: "center"
    }}>
      <Text
        size="xs"
        c="white"  
        p="xs"    
      >
        Todas as marcas e ilustrações utilizadas são de seus resepctivos donos.
      </Text>
    </Container>
  );
}
