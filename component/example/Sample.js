import React from 'react';
import { SafeAreaView } from 'react-native';
import OnboardingScreen from '../OnboardingScreen';

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
    <SafeAreaView style={{ flex: 1}}>
      <OnboardingScreen 
        pages={pages}
        firstPageKey={'first'}
        onPressNext={({ nextPage }) => {
          nextPage('third');
        }}
        onPageChange={(page) => {
          // console.log(page);
          // handle logic with current page
        }}
      />
    </SafeAreaView>
  );
}

