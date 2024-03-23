import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const Bar = ({ state, descriptors, navigation }) => {
    const Icon = ({ source, index }) => {
        const isSelected = state.index === index;
        const onPress = () => {
            const { route } = descriptors[state.routes[index].key];
            navigation.navigate(route.name);
        };

        return (
            <TouchableOpacity onPress={onPress} style={styles.iconContainer}>
                <Image
                    source={source}
                    style={[
                        styles.icon,
                        { tintColor: isSelected ? '#000' : '#ccc' }, // Highlight selected icon
                    ]}
                />
                {isSelected && <View style={styles.underline} />}
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.barContainer}>
            <Icon source={require('./icons/item1.png')} index={0} />
            <Icon source={require('./icons/item2.png')} index={1} />
            <Icon source={require('./icons/item3.png')} index={2} />
        </View>
    );
};

const styles = StyleSheet.create({
    barContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        paddingBottom: 30, // Adjusted for a taller bar
        paddingTop: 20,
    },
    iconContainer: {
        alignItems: 'center',
    },
    icon: {
        width: 30, // Adjusted icon size for visibility
        height: 30,
    },
    underline: {
        position: 'absolute',
        bottom: -5, // Adjusted position to ensure visibility
        width: 30,
        height: 2,
        backgroundColor: '#000',
    },
});

export default Bar;
