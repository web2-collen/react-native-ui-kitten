import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import {
  Button,
  Layout,
} from '@ui-kitten/components';

export const ButtonOutlineShowcase = () => (
  <Layout style={styles.container}>

    <Button style={styles.button} appearance='outline' status='primary'>PRIMARY</Button>

    <Button style={styles.button} appearance='outline' status='success'>SUCCESS</Button>

    <Button style={styles.button} appearance='outline' status='info'>INFO</Button>

    <Button style={styles.button} appearance='outline' status='warning'>WARNING</Button>

    <Button style={styles.button} appearance='outline' status='danger'>DANGER</Button>

    <Button style={styles.button} appearance='outline' status='basic'>BASIC</Button>

    <View style={styles.controlContainer}>
      <Button style={styles.button} appearance='outline' status='control'>CONTROL</Button>
    </View>

  </Layout>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    margin: 8,
  },
  controlContainer: {
    borderRadius: 4,
    margin: 8,
    backgroundColor: '#3366FF',
  },
});
