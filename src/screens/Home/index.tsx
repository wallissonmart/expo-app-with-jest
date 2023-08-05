import React from 'react';

import { Container } from './styles';
import { PagePropsStack } from '../../routes/routes';
import { Text } from 'react-native';

type PropsNavigation = PagePropsStack<'Home'>;

function Home({ navigation }: PropsNavigation) {
  return (
    <Container>
      <Text>Home</Text>
    </Container>
  );
}

export default Home;
