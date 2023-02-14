/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  Button,
  Text,
  Slider
} from '@rneui/base'

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  return (
    <Text h3>Welcome to Catalyst, a Catalyst of an amazing browsing experience.</Text>

  );
}

const styles = StyleSheet.create({
  Text: {
    margin: 64,
    paddingHorizontal: 24,
  },
});

export default App;
