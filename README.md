# rn-onboarding

<img src='https://res.cloudinary.com/devlen/image/upload/v1601228688/Github/example.gif' alt='example' />

An easy to use package to handle user onboarding flow to a react native app.

## How to install and use this package

To install this package you can run the following command;

> npm i rn-onboarding

or 

> yarn add rn-onboarding

```javascript
  import {View} from 'react-native';
  import RNonboarding from 'rn-onboarding';

  const App = () => {
    const pages = {
      first: {
        showSkip: true,
        headerText: 'First Screen',
        bodyText: 'Lorem ipsum dolor sit amet',
      },
      second: {
        showSkip: true,
        headerText: 'Second Screen',
        bodyText: 'Lorem ipsum dolor sit amet.',
      },
      third: {
        showSkip: false,
        headerText: 'Third Screen',
        bodyText: 'Lorem ipsum dolor sit amet.',
      }
    };
    return (
      <View style={{flex: 1}}>
        <OnboardingScreen pages={pages} firstPageKey={'first'} />
      </View>
    );
  }
```
> [example code](/component/example/Sample.js)

## Component Props


| Prop Name      | Required| default | Example |
|------------|-------------|------------|----------
| pages | true | null| ``` const pages = { first: {showSkip: false, headerText: 'Lorem'}}; ``` |
| firstPageKey | true | null|```'first'```
| containerStyle | false | {} |
| bodyStyle | false | {} |
| topBarStyle| false | {} |
| arrowTopRightStyle| false | {} |
| centerImageStyle | false | {} |
| titleStyle | false | {} |
| circleStyle | false | {} |
| topBarRightTextStyle | false | {} |
| activeCircleColor | false | ```#F58F99``` |
| circleContainer | false | {} |
| inActiveCircleColor | false | ```rgba(38, 0, 87, 0.2)``` |
| customTopBar | false | ```React.Component``` |
| onPressNext | false | null
| onPageChange | false | () => {} | returns the current page displayed

## Author

**David Okonji** @davidokonji

## Contribution

Open to contributions, please raise a pull request to contribute.

## Open Source Licence

[MIT License](/LICENSE)
