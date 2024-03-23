import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
import productsData from './Components/products.json';

// A function to map product names to image requires
const getImage = (productName) => {
  switch (productName) {
    case 'Product 1':
      return require('./proto4.png');
    case 'Product 2':
      return require('./proto5.png');
    case 'Product 3':
      return require('./proto1.png');
    case 'Product 4':
      return require('./Proto2.png');
    case 'Product 5':
      return require('./proto3.png');
    default:
      return require('./Proto2.png'); // Have a default image in case none match
  }
};

const MainScreen = ({ navigation }) => {

    const Listing = ({ productData }) => (
      <TouchableOpacity onPress={() => navigation.navigate('ProductPage', { productData })}>
        <Image source={getImage(productData.productName)} style={styles.listingImage} />
        <Text style={styles.productName}>{productData.productName}</Text>
        <View style={styles.co2Box}>
          <Text style={styles.co2Text}>CO2 Em: {productData.carbonEmission}</Text>
        </View>
      </TouchableOpacity>
    );
  
    const Section = ({ title, data }) => (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.listingsContainer}>
            {data.map((productData, index) => (
              <Listing key={index} productData={productData} />
            ))}
          </View>
        </ScrollView>
      </View>
    );

    return (
      <View style={styles.container}>
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search..."
            placeholderTextColor="#888"
          />
        </View>
        <ScrollView style={styles.contentContainer}>
          <Section title="Suggested" data={productsData} />
          <Section title="Most Sustainable" data={productsData} />
          <Section title="Cars" data={productsData} />
        </ScrollView>
      </View>
    );
}
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    searchBarContainer: {
      marginTop: 30,
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    searchBar: {
      height: 40,
      marginTop: 10,
      backgroundColor: '#f2f2f2',
      borderRadius: 5,
      paddingHorizontal: 15,
    },
    contentContainer: {
      flex: 1,
      paddingHorizontal: 10,
    },
    sectionContainer: {
      marginTop: 20,
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    listingsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    listingImage: {
        width: 200, // Adjust as needed
        height: 200, // Adjust as needed
        resizeMode: 'contain',
        margin: 10, // Ensure there's space around each image
    },
    listing: {
        backgroundColor: '#f9f9f9',
        padding: 20, // Adjust as needed
        borderRadius: 5,
        width: 220, // Adjust as needed for larger listings
        alignItems: 'center',
        marginHorizontal: 15, // Adjust spacing between items
        marginBottom: 20,
    },
    
    productName: {
      fontSize: 16, // Slightly larger font size
      fontWeight: 'bold',
      marginTop: 5, // Added space above the product name
      marginBottom: 4, // Slightly increased space above CO2 Box
    },
    co2Box: {
      backgroundColor: 'red',
      paddingHorizontal: 6, // Smaller padding to reduce width
      paddingVertical: 2, // Smaller padding to reduce height
      borderRadius: 2,
      alignSelf: 'flex-start', // Align to the start of the listing item
    },
    co2Text: {
      fontSize: 12, // Slightly larger text to remain legible
      color: 'white',
    },
  });
  
  

export default MainScreen;