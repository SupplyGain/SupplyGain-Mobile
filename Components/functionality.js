
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FunctionalityPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.pageTitle}>Functionality Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  backText: {
    fontSize: 16,
    color: 'blue',
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default FunctionalityPage;
