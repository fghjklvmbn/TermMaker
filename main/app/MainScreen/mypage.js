import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import BottomNavBar from '../univ/navigation';
import MypageScreen from '../MainScreen/mypagescreen';


const Mypage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <MypageScreen navigation={{navigation}}/>
      <BottomNavBar navigation={{navigation}}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Mypage;
