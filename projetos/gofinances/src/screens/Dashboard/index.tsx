import React from "react";
import { getBottomSpace } from "react-native-iphone-x-helper";
import HighlightCard from "../../components/HighlightCard";
import TransactionCard from "../../components/TransactionCard";
import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserWrapper,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransatcionList,
} from "./styles";

export default function Dashboard() {
  const data = [
    {
      title: "Desenvolvimento de site",
      amount: "R$ 4.200,00",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
      date: "17/07/2022",
    },
    {
      title: "Desenvolvimento de site",
      amount: "R$ 4.200,00",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
      date: "17/07/2022",
    },
    {
      title: "Desenvolvimento de site",
      amount: "R$ 4.200,00",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
      date: "17/07/2022",
    },
    {
      title: "Desenvolvimento de site",
      amount: "R$ 4.200,00",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
      date: "17/07/2022",
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/72170223?v=4",
              }}
            />

            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Bruno</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 16 de abril"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>
        <TransatcionList
          data={data}
          renderItem={({ item }) => <TransactionCard data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: getBottomSpace(),
          }}
        />
      </Transactions>
    </Container>
  );
}
