import React from "react";
import { render, fireEvent, act, waitFor } from "@testing-library/react-native";
import Auth, { PropsNavigation } from "../../src/screens/Auth";
import { RootStackParamList } from "../../src/routes/routes";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type NavigationMockType = NativeStackNavigationProp<RootStackParamList, "Auth">;

describe("Auth", () => {
  const navigationMock: NavigationMockType = {
    ...({} as NativeStackNavigationProp<RootStackParamList, "Auth">),
    navigate: jest.fn(),
    goBack: jest.fn(),
    addListener: jest.fn(),
  };

  const routeMock: RouteProp<RootStackParamList, "Auth"> = {
    key: "test-key",
    name: "Auth",
  };

  const props: PropsNavigation = {
    navigation: navigationMock,
    route: routeMock,
  };

  it("renderiza os componentes corretamente", () => {
    const { getByTestId, getByText } = render(<Auth {...props} />);

    expect(getByText("Digite um usuário válido para prosseguir")).toBeTruthy();
    expect(getByTestId("input")).toBeTruthy();
    expect(getByTestId("button")).toBeTruthy();
  });

  /*it('exibe erro ao pressionar o botão "Avançar" com um valor inválido no campo de entrada', async () => {
    const { getByTestId, getByText, queryByText } = render(<Auth {...props} />);
    const input = getByTestId('input');
    const button = getByTestId('button');

    fireEvent.changeText(input, 'William');
    fireEvent.press(button);

    expect(getByText('Usuário inválido')).toBeTruthy();

    await waitFor(() => {
      expect(queryByText('Usuário inválido')).toBeFalsy();
    });
  }, 10000);*/

  it('não exibe erro ao pressionar o botão "Avançar" com um valor válido no campo de entrada', () => {
    const { getByTestId } = render(<Auth {...props} />);
    const input = getByTestId("input");
    const button = getByTestId("button");

    fireEvent.changeText(input, "Messi");
    fireEvent.press(button);

    expect(props.navigation.navigate).toHaveBeenCalledWith("Home");
  });
});
