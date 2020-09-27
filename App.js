
import React from 'react';
import { SafeAreaView } from 'react-native';
import styled from 'styled-components';
import Sample from './component/example/Sample';

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
`;

export default function App() {

  return (
    <Container>
      <Sample />
    </Container>
  );
}
