import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

function ProductPage({ route, navigation }) {
    const { productData } = route.params;
    const [readMore, setReadMore] = useState(false);

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.container}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Text style={styles.backButtonText}>{"<   back"}</Text>
                </TouchableOpacity>
                <Text style={styles.productName}>{productData.productName}</Text>
                <Image style={styles.productImage} source={getImage(productData.productName)} />
                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>{productData.carbonEmission}</Text>
                    <Text style={styles.infoText}>{productData.tokens}</Text>
                </View>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.button}>
                      <Text style={styles.buttonText}>Prove Purchase</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.descriptionTitle}>Product description:</Text>
                <Text 
                    style={styles.descriptionText}
                    numberOfLines={readMore ? null : 5}
                >
                    {productData.productDescription}
                </Text>
                {productData.productDescription.split(' ').length > 50 && (
                    <TouchableOpacity onPress={() => setReadMore(!readMore)}>
                        <Text style={styles.readMoreText}>{readMore ? 'Read Less' : 'Read More'}</Text>
                    </TouchableOpacity>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

// Add the getImage function (same as in MainScreen.js)
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

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white' // Set the background color to white
    },
    backButton: {
        padding: 10, // Increase the tap area
        marginLeft: 10,
        marginBottom: 5,
    },
    backButtonText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
    },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    padding: 10,
  },
  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
    width: 300,
  },
  buttonContainer: {
    alignItems: 'center', // This will center the button horizontally
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingHorizontal: 25, // Added horizontal padding
  },
  descriptionText: {
    fontSize: 16,
    color: '#666',
    paddingHorizontal: 25, // Added horizontal padding
  },
  readMoreText: {
        color: '#0645AD',
      marginTop: 5,
      paddingHorizontal: 25,
  },
});

export default ProductPage;
