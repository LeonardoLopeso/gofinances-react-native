import React from 'react';

import { 
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction
} from './styles';

interface PropsHighlightCard {
  type: string;
  title: string;
  amount: string;
  lastTransaction: string;
}

export function HighlightCard({ type, title, amount, lastTransaction }: PropsHighlightCard) {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Icon name={`arrow-${type}-circle`} />
      </Header>

      <Footer>
        <Amount>{amount}</Amount>
        <LastTransaction>{lastTransaction}</LastTransaction>
      </Footer>

    </Container>
  )
}