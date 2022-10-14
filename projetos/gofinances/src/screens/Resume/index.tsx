import React, { useEffect } from "react";
import { HystoryCard } from "../../components/HistoryCard";
import { AsyncStorage } from "react-native";

import { Container, Header, Title } from "./styles";

interface TransactionData {
  type: "positive" | "negative";
  name: string;
  amount: string;
  category: string;
  date: string;
}

export function Resume() {
  async function loadData() {
    const dataKey = "@gofinances:transactions";
    const response = await AsyncStorage.getItem(dataKey);
    const responseFormatted = response ? JSON.parse(response) : [];

    const expensives = responseFormatted.filter(
      (expensive: TransactionData) => expensive.type === "negative"
    );
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>

      <HystoryCard title="Compras" amount="R$ 150,50" color="red" />
    </Container>
  );
}
