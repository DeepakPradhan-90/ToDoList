import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Animated, Dimensions, Text, TouchableOpacity } from 'react-native';
import styles from './Styles';

const SegmentedControl = props => {
  const translateValue = (props.width - 4) / props?.tabs?.length;
  const tabTranslate = React.useRef(new Animated.Value(0)).current;

  const memoizedTabPressCallback = React.useCallback(
    index => {
      props?.onChange(index);
    },
    [props],
  );

  useEffect(() => {
    // Animating the active index based current index
    Animated.spring(tabTranslate, {
      toValue: props?.currentIndex * translateValue,
      stiffness: 180,
      damping: 20,
      mass: 1,
      useNativeDriver: true,
    }).start();
  }, [props?.currentIndex, translateValue, tabTranslate]);

  return (
    <Animated.View style={[styles.segmentedControlWrapper]}>
      <Animated.View
        style={[
          styles.segmentedControl,
          {
            width: (props.width - 4) / props?.tabs?.length,
          },
          {
            transform: [
              {
                translateX: tabTranslate,
              },
            ],
          },
        ]}
      />
      {props?.tabs.map((tab, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={[styles.textWrapper]}
            onPress={() => memoizedTabPressCallback(index)}
            activeOpacity={0.7}>
            <Text numberOfLines={1} style={styles.textStyles}>
              {tab}
            </Text>
          </TouchableOpacity>
        );
      })}
    </Animated.View>
  );
};

SegmentedControl.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  currentIndex: PropTypes.number.isRequired,
  width: PropTypes.number,
};

SegmentedControl.defaultProps = {
  tabs: [],
  onChange: () => {},
  currentIndex: 0,
  width: Dimensions.get('window').width,
};

export default SegmentedControl;
