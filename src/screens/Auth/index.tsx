import React, { useState } from 'react';

import {
  ButtonAuth,
  ButtonAuthText,
  Container,
  ContainerInput,
  Input,
  Label,
  TextError,
} from './styles';
import { PagePropsStack } from '../../routes/routes';

export type PropsNavigation = PagePropsStack<'Auth'>;

function Auth({ navigation }: PropsNavigation) {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);

  const handleInputChange = (text: string) => {
    setInputValue(text.trim());
    setError(false);
  };

  const handleAuth = () => {
    const authorizedNames = ['Messi', 'CR7', 'Ney'];
    const formattedInputValue = inputValue.toLowerCase();

    const lowerCaseAuthorizedNames = authorizedNames.map((name) =>
      name.toLowerCase()
    );

    if (lowerCaseAuthorizedNames.includes(formattedInputValue)) {
      navigation.navigate('Home');
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return (
    <Container>
      <Label>Digite um usuário válido para prosseguir</Label>

      <ContainerInput>
        <Input
          testID="input"
          value={inputValue}
          onChangeText={handleInputChange}
          cursorColor="blue"
        />
      </ContainerInput>

      {error && <TextError>Usuário inválido</TextError>}

      <ButtonAuth testID="button" onPress={handleAuth}>
        <ButtonAuthText>Avançar</ButtonAuthText>
      </ButtonAuth>
    </Container>
  );
}

export default Auth;
