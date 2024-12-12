import 'react-native-gesture-handler';
import React, { useContext, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext } from './AuthProvider'; // AuthContext 가져오기

// 스크린 파일 임포트
import Login from './app/login/Login';
import Register from './app/login/register/SignUpScreen';
import MainScreen from './app/MainScreen/MainScreen';
import FindMy from './app/login/FindAccount/FindMy';
import AccountRecoveryScreen from './app/login/FindAccount/AccountRecoveryScreen';
import PersonalInfoEditPage from './app/MainScreen/PersonalInfoEditPage';
import WithdrawalPage from './app/MainScreen/WithdrawalPage';
import WithdrawalErrorPage from './app/MainScreen/WithdrawalErrorPage';
import FinalWithdrawalPage from './app/MainScreen/FinalWithdrawalPage';
import WithdrawalCompletePage from './app/MainScreen/WithdrawalCompletePage';
import PaymentMethodsPage01 from './app/MainScreen/PaymentMethodsPage01';
import PaymentMethodsPage02 from './app/MainScreen/PaymentMethodsPage02';
import PaymentMethodsPage03 from './app/MainScreen/PaymentMethodsPage03';
import ProfileEditPage from './app/MainScreen/ProfileEditPage';
import ProfileEditPage02 from './app/MainScreen/ProfileEditPage02';
import SignupSuccessPage from './app/MainScreen/SignupSuccessPage';
import AccountRecoveryPage from './app/MainScreen/AccountRecoveryPage';
import FindIDPage from './app/MainScreen/FindIDPage';
import FindIDResultPage from './app/MainScreen/FindIDResultPage';
import FindPasswordPage from './app/MainScreen/FindPasswordPage';
import FindPasswordResultPage from './app/MainScreen/FindPasswordResultPage';
import AccountNotFoundPage from './app/MainScreen/AccountNotFoundPage';
import AutoLoginPage from './app/MainScreen/AutoLoginPage';
import LocationGuide from './app/MainScreen/LocationGuide';
import RentalStart from './app/MainScreen/RentalStart';
import Rental from './app/MainScreen/Rental';
import ReturnConfirmation from './app/MainScreen/ReturnConfirmation';
import Renting from './app/MainScreen/Renting';
import Camera from './app/MainScreen/Camera';
import BoardScreen from './app/MainScreen/BoardScreen';
import BoardWrite from './app/MainScreen/BoardWrite';
import Mypage from './app/MainScreen/mypage';

const Stack = createStackNavigator();

// AuthStack: 로그인 관련 스택
const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="AccountRecoveryScreen" component={AccountRecoveryScreen} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="FindMy" component={FindMy} />
  </Stack.Navigator>
);

// AppStack: 메인 화면 스택
const AppStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MainScreen" component={MainScreen} />
    <Stack.Screen name="Mypage" component={Mypage} />
    <Stack.Screen name="PersonalInfoEditPage" component={PersonalInfoEditPage} />
    <Stack.Screen name="WithdrawalPage" component={WithdrawalPage} />
    <Stack.Screen name="WithdrawalErrorPage" component={WithdrawalErrorPage} />
    <Stack.Screen name="FinalWithdrawalPage" component={FinalWithdrawalPage} />
    <Stack.Screen name="WithdrawalCompletePage" component={WithdrawalCompletePage} />
    <Stack.Screen name="PaymentMethodsPage01" component={PaymentMethodsPage01} />
    <Stack.Screen name="PaymentMethodsPage02" component={PaymentMethodsPage02} />
    <Stack.Screen name="PaymentMethodsPage03" component={PaymentMethodsPage03} />
    <Stack.Screen name="ProfileEditPage" component={ProfileEditPage} />
    <Stack.Screen name="ProfileEditPage02" component={ProfileEditPage02} />
    <Stack.Screen name="SignupSuccessPage" component={SignupSuccessPage} />
    <Stack.Screen name="AccountRecoveryPage" component={AccountRecoveryPage} />
    <Stack.Screen name="FindIDPage" component={FindIDPage} />
    <Stack.Screen name="FindIDResultPage" component={FindIDResultPage} />
    <Stack.Screen name="FindPasswordPage" component={FindPasswordPage} />
    <Stack.Screen name="FindPasswordResultPage" component={FindPasswordResultPage} />
    <Stack.Screen name="AccountNotFoundPage" component={AccountNotFoundPage} />
    <Stack.Screen name="AutoLoginPage" component={AutoLoginPage} />
    <Stack.Screen name="LocationGuide" component={LocationGuide} />
    <Stack.Screen name="RentalStart" component={RentalStart} />
    <Stack.Screen name="Rental" component={Rental} />
    <Stack.Screen name="ReturnConfirmation" component={ReturnConfirmation} />
    <Stack.Screen name="Renting" component={Renting} />
    <Stack.Screen name="Camera" component={Camera} />
    <Stack.Screen name="BoardScreen" component={BoardScreen} />
    <Stack.Screen name="BoardWrite" component={BoardWrite} />
  </Stack.Navigator>
);

// const Rental = () => {
//   <Stack.Navigator>
//     <Stack.Screen name="Rental" component={Rental}></Stack.Screen>
//     <Stack.Screen name="Renting" component={Renting}></Stack.Screen>
//     <Stack.Screen name="RentalStart" component={RentalStart}></Stack.Screen>
//   </Stack.Navigator>
// }

// 네비게이터 컴포넌트
const AppNavigator = () => {
  const { isLoggedIn, checkLoginStatus } = useContext(AuthContext);

  useEffect(() => {
    checkLoginStatus();
  }, [checkLoginStatus]);

  return isLoggedIn ? <AppStack /> : <AuthStack />;
};

export default AppNavigator;