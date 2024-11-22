import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>ReTrack</Text>
      <View style={styles.icons}>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={35} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileIcon}>
          <Ionicons name="person-circle-outline" size={35} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 27,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',
  },
  profileIcon: {
    marginLeft: 16,
  },
});

export default Header;
