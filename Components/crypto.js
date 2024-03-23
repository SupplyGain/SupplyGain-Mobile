import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, SafeAreaView } from 'react-native';

const CryptoScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.tokenSection}>
          <Text style={styles.tokenTextTitle}>Ecotokens</Text>
          <Text style={styles.tokenAmount}>150</Text>
          <Text style={styles.tokenTextTitle}>Earning Rate</Text>
          <Text style={styles.tokenRate}>0.5 token/mile</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Connect Wallet</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.nftSection}>
          <Text style={styles.nftTextTitle}>NFT</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.nftImages}>
            <View style={styles.nftItem}>
              <Image source={require('./NFT3.png')} style={styles.nftImage} />
              <Text style={styles.nftName}>Bronze Car</Text>
            </View>
            <View style={styles.nftItem}>
              <Image source={require('./NFT2.png')} style={styles.nftImage} />
              <Text style={styles.nftName}>Common Car</Text>
            </View>
            <View style={styles.nftItem}>
              <Image source={require('./NFT1.png')} style={styles.nftImage} />
              <Text style={styles.nftName}>Welcome NFT</Text>
            </View>
          </ScrollView>
        </View>

        <View style={styles.rankingSection}>
          <Text style={styles.rankingTextTitle}>Company Rankings</Text>
          <View style={styles.rankingContentPlaceholder}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
      },
    container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  tokenSection: {
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  tokenTextTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  tokenAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  tokenRate: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#5cb85c',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  nftSection: {
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    paddingVertical: 20,
    marginBottom: 20,
    // Removed alignItems since ScrollView will handle the content
  },
  nftTextTitle: {
    fontSize: 24, // Increased font size
    fontWeight: 'bold', // Make text bold
    marginBottom: 15,
    alignSelf: 'center', // Center title within the nftSection
  },
  nftImages: {
    paddingLeft: 20, // Added padding for the horizontal ScrollView
  },
  nftItem: {
    marginRight: 25, // Space between items
    alignItems: 'center', // Center items vertically and horizontally
    width: 260, // Adjusted width as per requirement
  },
  nftImage: {
    width: 260, // Adjusted width as per requirement
    height: 220, // Adjusted height as per requirement
    resizeMode: 'cover', // Cover the frame with the image
    borderRadius: 10, // Soften the corners
  },
  nftName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center', // Center text below the image
  },
  arrowButton: {
    alignSelf: 'flex-end',
  },
  arrowText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  rankingSection: {
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    padding: 20,
  },
  rankingTextTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  rankingContentPlaceholder: {
    height: 150,
    backgroundColor: '#ddd',
    borderRadius: 10,
  },
});

export default CryptoScreen;
