import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ProgressBarAndroid, SafeAreaView } from 'react-native';


const Challenge = ({ title, reward, onStart }) => (
  <View style={styles.challengeContainer}>
    <Text style={styles.challengeTitle}>{title}</Text>
    <Text style={styles.challengeReward}>Reward: {reward} tokens</Text>
    <TouchableOpacity onPress={onStart} style={styles.startButton}>
      <Text style={styles.startButtonText}>Start</Text>
    </TouchableOpacity>
  </View>
);

export default function Challenges() {
  const handleStart = (bounty) => {
    // Logic to handle challenge start
    console.log(`Starting ${bounty}`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.levelInfoContainer}>
          <Text style={styles.levelText}>Level 3 - CAR 1</Text>
          <Text style={styles.nftText}>Next NFT: Silver @ Level 5</Text>
          <ProgressBarAndroid 
            style={styles.progressBar}
            styleAttr="Horizontal"
            indeterminate={false}
            progress={0.7}
            color="#4CAF50"
          />
          <Text style={styles.xpText}>80/100 XP</Text>
        </View>
        <View style={styles.bountiesContainer}>
          <Text style={styles.bountiesTitle}>BOUNTIES</Text>
          <Challenge title="Bounty 1 - xyz" reward="5" onStart={() => handleStart("Bounty 1")} />
          <Challenge title="Bounty 2 - zzz" reward="5" onStart={() => handleStart("Bounty 2")} />
          <Challenge title="Bounty 3 - AAA" reward="5" onStart={() => handleStart("Bounty 3")} />
          <Challenge title="Bounty 4 - PIL" reward="5" onStart={() => handleStart("Bounty 4")} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff', // Adjust the background color as needed
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  levelInfoContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingTop: 20,
  },
  levelText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  nftText: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 4,
  },
  xpText: {
    fontSize: 16,
    marginBottom: 10,
  },
  bountiesContainer: {
    padding: 20,
  },
  bountiesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  
  challengeContainer: {
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  challengeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  challengeReward: {
    fontSize: 14,
    marginBottom: 10,
  },
  progressBar: {
    height: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#e0e0e0', // Background color for the unfilled part of the progress bar
  },
  startButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  startButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
