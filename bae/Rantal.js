//Rantal.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Rantal = ({ navigation }) => {
  const handleReport = () => {
    console.log("신고 버튼 눌림");
  };

  const handleClose = () => {
    console.log("화면 닫기 버튼 눌림");
    navigation.goBack();
  };

  const handleStartRental = () => {
    console.log("대여하기 버튼 눌림");
    navigation.navigate("Renting");
  };

  return (
    <View style={styles.container}>
      {/* 지도 공간 */}
      <View style={styles.mapContainer}>
        <Text style={styles.mapPlaceholder}>지도 표시 (추후 구현)</Text>
      </View>

      {/* 하단 버튼 공간 */}
      <View style={styles.bottomContainer}>
        <View style={styles.rowContainer}>
          {/* 가격 설명 박스 */}
          <View style={styles.feeBox}>
            <Text style={styles.feeText}>요금 안내</Text>
            <Text style={styles.feeText}>1km당 50원</Text>
            <Text style={styles.feeText}>+</Text>
            <Text style={styles.feeText}>30분당 100원</Text>
          </View>

          {/* 모델명과 신고 버튼 */}
          <View style={styles.modelContainer}>
            <Text style={styles.modelText}>모델명: ABC123</Text>
            <TouchableOpacity style={styles.reportButton} onPress={handleReport}>
              <Text style={styles.reportButtonText}>신고</Text>
            </TouchableOpacity>
          </View>

          {/* 사진 공간 */}
          <View style={styles.photoPlaceholder}>
            <Text style={styles.photoText}>사진 공간</Text>
          </View>
        </View>

        {/* 화면 닫기와 대여하기 버튼 */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
            <Text style={styles.closeButtonText}>화면 닫기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rentalButton} onPress={handleStartRental}>
            <Text style={styles.rentalButtonText}>대여하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 4, // 지도 공간 비율
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapPlaceholder: {
    color: '#888',
    fontSize: 16,
  },
  bottomContainer: {
    flex: 2, // 하단 공간 비율
    backgroundColor: '#f8f8f8',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  rowContainer: {
    flexDirection: 'row', // 가로 배치
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  feeBox: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1, // 각 요소 동일 비율
    marginHorizontal: 5,
  },
  feeText: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modelContainer: {
    alignItems: 'center',
    flex: 1, // 각 요소 동일 비율
    marginHorizontal: 5,
  },
  modelText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  reportButton: {
    backgroundColor: 'red',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  reportButtonText: {
    color: 'white',
    fontSize: 12,
  },
  photoPlaceholder: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1, // 각 요소 동일 비율
    marginHorizontal: 5,
  },
  photoText: {
    color: '#555',
    fontSize: 12,
    textAlign: 'center',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  closeButton: {
    flex: 1,
    backgroundColor: '#d9d9d9',
    padding: 15,
    marginRight: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'black',
    fontSize: 16,
  },
  rentalButton: {
    flex: 1,
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  rentalButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Rantal;
