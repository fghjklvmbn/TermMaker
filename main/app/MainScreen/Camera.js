import React, { useState, useEffect, useRef } from 'react';
import { Camera, CameraCapturedPicture, CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Simplecamera() {
  const navigation = useNavigation();
  const cameraRef = useRef<Camera | null>(null);
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();

  // 사진 찍기 & 저장
  const handleCapture = async () => {
    if (cameraRef.current) {
        const photo = await cameraRef.current.takePictureAsync();
      navigation.navigate('PreviewScreen', { photoUri: photo.uri }); // PreviewScreen으로 URI 전달
    }
  };

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>카메라 사용에 관해 권한이 필요합니다.</Text>
        <Button onPress={requestPermission} title="카메라 권한 허가" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing}>
      </CameraView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>카메라 뒤집기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ReturnConfirmation")}>
            <Text style={styles.text}>사진촬영</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
    bottom: -10,
  },
  buttonContainer: {
    flex: 0.1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    backgroundColor: "#D9D9D9",
    borderRadius: 10,

  },
  button: {
    flex: 3,
    alignSelf: "center",
    alignItems: 'center',
    justifyContent:"center",
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
});