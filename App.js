
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import styled from 'styled-components';

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
`;

const RegularText = styled.Text`
   color: #757E90;
   font-size: 14px;
   font-style: normal;
   font-weight: 600;
   line-height: 21px;
`;

const Button = styled.TouchableOpacity`
  border-radius: 8px;
  background: #F58F99;
  box-shadow: 0px 5px 5px rgba(244, 143, 153, 0.15);
`;

export default function App() {

  return (
    <Container>
      <RegularText>
        RN-Onboaring Example
      </RegularText>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
