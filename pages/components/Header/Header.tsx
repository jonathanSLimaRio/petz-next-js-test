import { Button, Container, Flex, Grid } from "@mantine/core";
import Link from "next/link";
import Pokeball from "../../../public/images/svgComponents/Pokeball";

export default function Header() {
  return (
    <Container fluid>
      <Grid justify="space-between" align="center" m="md">
        <Grid.Col span="content">
          <Link href="/">
            <Button
              leftSection={<Pokeball />}
              variant="filled"
              color="red"
              radius="xl"
              size="xs"
              style={{ cursor: "pointer" }}
            >
              Centro Pokémon
            </Button>
          </Link>
        </Grid.Col>
        <Grid.Col span="content">
          <Flex>
            <Link href="/about">
              <Button
                variant="subtle"
                color="gray"
                size="xs"
                style={{ cursor: "pointer" }}
              >
                Quem Somos
              </Button>
            </Link>
            <Link href="/schedule">
              <Button
                variant="filled"
                color="red"
                radius="xl"
                size="xs"
                style={{ cursor: "pointer" }}
              >
                Agendar Consulta
              </Button>
            </Link>
          </Flex>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
