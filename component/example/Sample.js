import React from 'react';
import { SafeAreaView } from 'react-native';
import styled from 'styled-components';
import OnboardingScreen from '../OnboardingScreen';

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
`;

export default function Sample() {
  const pages = {
    first: {
      showSkip: true,
      image: require('../../assets/Placeholder.png'),
      headerText: 'First Screen',
      bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      bottomContent: null
    },
    second: {
      showSkip: true,
      image: require('../../assets/Placeholder.png'),
      headerText: 'Second Screen',
      bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      bottomContent: null
    },
    third: {
      showSkip: false,
      image: require('../../assets/Placeholder.png'),
      headerText: 'Third Screen',
      bodyText: 'Lorem ipsum dolor sit amet.',
      bottomContent: null
    }
  };

  return (
    <Container>
      <OnboardingScreen pages={pages} firstPageKey={'first'} />
    </Container>
  );
}

