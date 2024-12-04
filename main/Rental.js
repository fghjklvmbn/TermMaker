import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Rental = ({ navigation, closeRental }) => {
  const handleStartRental = () => {
    console.log("대여하기 버튼 눌림");
    navigation.navigate("Renting");  // Renting 페이지로 이동
  };

  return (
    <View style={styles.container}>
      {/* 하단 정보 영역 */}
      <View style={styles.bottomContainer}>
        <View style={styles.rowContainer}>
          {/* 요금 안내 */}
          <View style={styles.feeBox}>
            <Text style={styles.feeText}>요금 안내</Text>
            <Text style={styles.feeText}>1km당 50원</Text>
            <Text style={styles.feeText}>+</Text>
            <Text style={styles.feeText}>30분당 100원</Text>
          </View>

          {/* 모델명 */}
          <View style={styles.modelContainer}>
            <Text style={styles.modelText}>모델명: ABC123</Text>
          </View>

          {/* 사진 공간 */}
          <View style={styles.photoPlaceholder}>
            <Text style={styles.photoText}>사진 공간</Text>
          </View>
        </View>

        {/* 하단 버튼들 */}
        <View style={styles.actionButtons}>
          {/* 화면 닫기 버튼 */}
          <TouchableOpacity style={styles.closeButton} onPress={closeRental}>
            <Text style={styles.closeButtonText}>화면 닫기</Text>
          </TouchableOpacity>

          {/* 대여하기 버튼 */}
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
  bottomContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // 불투명 회색 배경
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  feeBox: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  feeText: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modelContainer: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  modelText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  photoPlaceholder: {
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    flex: 1,
    marginHorizontal: 5,
  },
  photoText: {
    fontSize: 12,
    color: '#777',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  closeButton: {
    backgroundColor: 'white', // 흰색 배경
    flex: 1,
    paddingVertical: 12,
    marginRight: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  closeButtonText: {
    color: 'black', // 검은색 텍스트
    fontSize: 16,
  },
  rentalButton: {
    backgroundColor: 'white', // 흰색 배경
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  rentalButtonText: {
    color: 'black', // 검은색 텍스트
    fontSize: 16,
  },
});

export default Rental;