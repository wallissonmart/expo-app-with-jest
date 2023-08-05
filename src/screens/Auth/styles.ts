import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  color: #000;
  margin-bottom: 20px;
  padding: 0px 10px;
`;

export const ContainerInput = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 90%;
  border-width: 0.2px;
  border-radius: 2px;
  border-color: #000;
  height: 45px;
  padding: 0 10px;
`;

export const Input = styled.TextInput`
  color: #000;
  width: 90%;
  font-size: 16px;
`;

export const ButtonAuth = styled.TouchableOpacity`
  width: 90%;
  height: 45px;
  background-color: blue;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  border-radius: 2px;
`;

export const ButtonAuthText = styled.Text`
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
`;

export const TextError = styled.Text`
  color: red;
  font-weight: 700;
  font-size: 16px;
`;
