
import React, { useState, useEffect, useMemo } from 'react';
import { StyleSheet, SafeAreaView, View, Image, TouchableOpacity, Text } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

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

  useMemo(() => {
    props.onPageChange(page)
  }, [page, setPage]);

  const changePage = () => {
    if (props.onPressNext) {
      props.onPressNext({
        nextPage: (value) => {
          if (Object.keys(props.pages).includes(value)) {
            setPage(value);
          } else {
            console.warn('Next page value need to be a page key');
          }
        },
      });
    } else {
      const currentIndex = allPages.findIndex(value => value == page);
      if (currentIndex != allPages.length) {
        setPage(allPages[currentIndex + 1]);
      }
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

  const handleSwipe = (direction) => {
    const {SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    if (direction == SWIPE_RIGHT) {
      if (page != props.firstPageKey) {
        const currentIndex = allPages.findIndex(value => value == page);
        if (currentIndex != allPages.length) {
          setPage(allPages[currentIndex - 1]);
        }
      }
    }

    if (direction == SWIPE_LEFT) {
      const currentIndex = allPages.findIndex(value => value == page);
      const next = allPages[currentIndex + 1];
      if (currentIndex != allPages.length && next) {
        setPage(next);
      }
    }
  }

  const content = props.pages[page];
  const allPages = Object.keys(props.pages);
  const showSkip = !!content.showSkip || false;
  const topBarRightText = content.topBarRightText || 'Next';
  const centerImage = content.image || require('../assets/Placeholder.png');
  const bodyText = content.bodyText || '';
  const headerText = content.headerText || '';
  const bottomContent = content.bottomContent || null;
  const arrowTopRight = content.arrowTopRight || require('../assets/ArrowRight.png');

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80
  };

  return (
    <GestureRecognizer
      onSwipe={(direction, state) => handleSwipe(direction, state)}
      config={config}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={[ styles.container, props.containerStyle]}>
        <View style={[styles.topBar, props.topBarStyle]}>
          { (showSkip && !props.customTopBar) &&
            <>
              <TouchableOpacity onPress={changePage}>
                <Text style={[styles.regularText, props.topBarRightTextStyle]}>
                  {topBarRightText}
                </Text>
              </TouchableOpacity>
              <Image source={arrowTopRight} style={[{ marginLeft: 5 } ,props.arrowTopRightStyle]} />
            </>
          }
          {
            (!showSkip && props.customTopBar) && props.customTopBar
          }
        </View>
        <View style={[styles.body, props.bodyStyle]}>
          <Image source={centerImage} style={[{marginBottom: 25}, props.centerImageStyle]} />
          <Text style={[styles.headerText, props.titleStyle]}>
            {headerText}
          </Text>
          <Text style={[styles.regularText, styles.bodyText, props.bodyStyle]}>
            {bodyText}
          </Text>
          <View style={[styles.circleContainer, props.circleContainerStyle]}>
          {
            allPages.map((value, i) =>
              <TouchableOpacity 
                active={value == page}
                key={i}
                onPress={() => onCirclePress(value)}
                style={[
                  styles.circle,
                  (value == page) 
                  ? { backgroundColor: props.activeCircleColor } 
                  : { backgroundColor: props.inActiveCircleColor}, 
                  props.circleStyle
                ]}
              />
            )
          }
          </View>
          {bottomContent}
        </View>
      </SafeAreaView>
    </GestureRecognizer>
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
  circleStyle: {},
  topBarRightTextStyle: {},
  activeCircleColor: '#F58F99',
  circleContainerStyle: {},
  inActiveCircleColor: 'rgba(38, 0, 87, 0.2)',
  customTopBar: null,
  firstPageKey: null,
  onPressNext: null,
  onPageChange: () => {},
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  body: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bodyText: {
    textAlign: 'center',
    width: '70%'
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 20.58,
    paddingTop: 20,
  },
  regularText: {
    color: '#757E90',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 21,
  },
  headerText: {
    color: '#000',
    fontWeight: '600',
    lineHeight: 40,
    fontSize: 22
  },
  circle: {
    width: 8,
    height: 8,
    backgroundColor: '#000',
    borderRadius: 50,
    marginHorizontal: 2.5
  },
  circleContainer: {
    marginTop: 30,
    flexDirection: 'row'
  }
});
