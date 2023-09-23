import {
  Button,
  Container,
  Grid,
  Group,
  Select,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { IconArrowDown } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import {
  fetchPokemonCities,
  fetchPokemonRegion,
  fetchPokemons,
} from "../api/pokemon/api";
import { fetchAvailableDates, fetchAvailableTimes } from "../api/utils/api";

interface IRegionCityPokemon {
  name: string;
  url: string;
}

type DateType = string;
type TimeType = string;

export default function Schedule() {
  const [availableDates, setAvailableDates] = useState<DateType[]>([]);
  const [availableTimes, setAvailableTimes] = useState<TimeType[]>([]);
  const [regions, setRegions] = useState<IRegionCityPokemon[]>([]);
  const [cities, setCities] = useState<IRegionCityPokemon[]>([]);
  const [pokemons, setPokemons] = useState<IRegionCityPokemon[]>([]);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [regionForm, setRegionForm] = useState("");
  const [cityForm, setCityForm] = useState("");
  const [pokemonForm, setPokemonForm] = useState("");

  console.log(pokemons, "pokemons");

  useEffect(() => {
    async function fetchData() {
      try {
        const dates = await fetchAvailableDates();
        setAvailableDates(dates);

        const times = await fetchAvailableTimes(dates[0]);
        setAvailableTimes(times);

        const regionData = await fetchPokemonRegion();
        setRegions(regionData);

        const pokemonData = await fetchPokemons();
        setPokemons(pokemonData);
      } catch (error) {
        console.error("There was an error fetching the data:", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchDataCity() {
      try {
        const cityData = await fetchPokemonCities(regionForm);
        setCities(cityData);
      } catch (error) {
        console.error("There was an error fetching the data:", error);
      }
    }
    fetchDataCity();
  }, [regionForm]);

  return (
    <Container fluid>
      <Title order={3}>
        Preencha o formulário abaixo para agendar sua consulta
      </Title>
      <Container>
        <Group grow>
          <TextInput
            radius="md"
            label="Nome"
            placeholder="Digite seu nome"
            value={name}
            onChange={(event) => setName(event.currentTarget.value)}
          />
          <TextInput
            radius="md"
            label="Sobrenome"
            placeholder="Digite seu sobrenome"
            value={lastName}
            onChange={(event) => setLastName(event.currentTarget.value)}
          />
        </Group>
        <Group grow>
          <Select
            label="Região"
            placeholder="Selecione sua região"
            data={regions?.map((region) => region.name)}
            value={regionForm}
            onChange={setRegionForm as any}
            allowDeselect
            mt="md"
          />
          <Select
            label="Cidade"
            placeholder="Selecione sua cidade"
            data={cities?.map((city) => city.name) || []}
            value={cityForm}
            onChange={setCityForm as any}
            allowDeselect
            mt="md"
          />
        </Group>
        <Grid grow>
          <Grid.Col span={12}>
            <Text fw={500}>Cadastre seu time</Text>
            <Text c="dimmed">Atendemos até 06 pokémons por vez</Text>
          </Grid.Col>
          <Grid.Col span={12}>
            <Group>
              <Text c="dimmed">Pokémon {`0` + 0}</Text>
              <Select
                placeholder="Selecione seu pokémon"
                data={pokemons?.map((pokemonItem) => pokemonItem?.name) || []}
                value={pokemonForm}
                onChange={setPokemonForm as any}
                allowDeselect
                mt="md"
              />
            </Group>
          </Grid.Col>
        </Grid>
        <Button mt="md" variant="outline" color="gray" rightSection={<IconArrowDown size={14} />}>
          Adicionar novo pokémon ao time...
        </Button>
      </Container>
    </Container>
  );
}
