
import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
`;

const TopBar = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20.58px;
  padding-top: 20px;
`;

const RegularText = styled.Text`
   color: #757E90;
   font-size: 14px;
   font-style: normal;
   font-weight: 600;
   line-height: 21px;
`;

const HeaderText = styled.Text`
  color: #000;
  font-weight: 600;
  line-height: 40px
  font-size: 22px;
`;


const Body = styled.View`
  flex: 2;
  align-items: center;
  justify-content: center
`;

const Circle = styled.TouchableOpacity`
  width: 8px;
  height: 8px;
  background-color: ${ props => props.active ? props.activeColor : props.inActiveColor};
  border-radius: 50px;
  margin-left: 2.5px;
  margin-right: 2.5px;
`;

const CircleContainer = styled.View`
  margin-top: 30px;
  flex-direction: row;
`;

const CenterImage = styled.Image`
  margin-bottom: 25px
`;

const ArrowLeftImage = styled.Image`
  margin-left: 5px;
`;

export default function OnboardingScreen(props) {
  const [page, setPage] = useState(props.firstPageKey);
  
  useEffect(() => {
    if (props.pages) {
      const allPage = Object.keys(props.pages);
      if (allPage.length > 0) {
        setPage(allPage[0]);
      }
    }
  }, []);

  const changePage = () => {
    const currentIndex = allPages.findIndex(value => value == page);
    if (currentIndex != allPages.length) {
      setPage(allPages[currentIndex + 1]);
    }
  }

  const onCirclePress = (value) => {
    if (value) {
      setPage(value);
    }
  }

  if (!props.pages) {
    return null;
  }

    
  if (!props.firstPageKey) {
    return null;
  }

  if (!Object.keys(props.pages).includes(props.firstPageKey)) {
    return null;
  }

  const content = props.pages[page];
  const allPages = Object.keys(props.pages);
  const showSkip = !!content.showSkip || false;
  const topBarRightText = content.topBarRightText || 'Skip';
  const centerImage = content.image || require('../assets/Placeholder.png');
  const bodyText = content.bodyText || '';
  const headerText = content.headerText || '';
  const bottomContent = content.bottomContent || null;
  const arrowTopRight = content.arrowTopRight || require('../assets/ArrowRight.png')

  return (
    <Container style={[props.containerStyle]}>
      <TopBar style={props.topBarStyle}>
        { (showSkip && !props.customTopBar) &&
          <>
          <TouchableOpacity onPress={changePage}>
            <RegularText style={props.topBarRightTextStyle}>
              {topBarRightText}
            </RegularText>
          </TouchableOpacity>
          <ArrowLeftImage source={arrowTopRight} style={[props.arrowTopRightStyle]} />
          </>
        }
        {
          (!showSkip && props.customTopBar) && props.customTopBar
        }
      </TopBar>
      <Body style={props.bodyStyle}>
        <CenterImage source={centerImage} style={[props.centerImageStyle]} />
        <HeaderText style={props.titleStyle}>
          {headerText}
        </HeaderText>
        <RegularText style={[styles.bodyText, props.bodyStyle]}>
          {bodyText}
        </RegularText>
        <CircleContainer style={props.circleContainer}>
        {
          allPages.map((value, i) =>
            <Circle 
              active={value == page}
              key={i}
              onPress={() => onCirclePress(value)}
              style={props.circleStyle}
              activeColor={props.activeCircleColor}
              inActiveColor={props.inActiveCircleColor}
            />
          )
        }
        </CircleContainer>
        {bottomContent}
      </Body>
    </Container>
  );
}

OnboardingScreen.defaultProps = {
  containerStyle: {},
  bodyStyle: {},
  pages: null,
  topBarStyle: {},
  arrowTopRightStyle: {},
  centerImageStyle: {},
  titleStyle: {},
  bodyStyle: {},
  circleStyle: {},
  topBarRightTextStyle: {},
  activeCircleColor: '#F58F99',
  circleContainer: {},
  inActiveCircleColor: 'rgba(38, 0, 87, 0.2)',
  customTopBar: null,
  firstPageKey: null
}

const styles = StyleSheet.create({
  bodyText: {
    textAlign: 'center',
    width: '70%'
  },
});
