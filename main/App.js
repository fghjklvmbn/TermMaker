//import React from 'react';

//import  Mypage from "./app/mypage";
//import PersonalInfoPage from './app/PersonalInfoEditPage';
//import WithdrawalPage from './app/WithdrawalPage';
//import WithdrawalErrorPage from './app/WithdrawalErrorPage';
///import FinalWithdrawalPage from './app/FinalWithdrawalPage';
//import WithdrawalCompletePage from './app/WithdrawalCompletePage';
//import PaymentMethodsPage01 from './app/PaymentMethodsPage01';
//import PaymentMethodsPage02 from './app/PaymentMethodsPage02';
//import PaymentMethodsPage03 from './app/PaymentMethodsPage03';
//import ProfileEditPage from './app/ProfileEditPage';
//import ProfileEditPage02 from './app/ProfileEditPage02';
//import PersonalInfoEditPage from './app/PersonalInfoEditPage';
//import LogoutSuccessPage from './app/SignupSuccessPage';
//import SignupSuccessPage from './app/SignupSuccessPage';
//import AccountRecoveryPage from './app/AccountRecoveryPage';
//import MainScreen from './app/MainScreen';
//import FindIDPage from './app/FindIDPage';
//import FindIDResultPage from './app/FindIDResultPage';
//import FindPasswordPage from './app/FindPasswordPage';
//import FindPasswordResultPage from './app/FindPasswordResultPage';
//import AccountNotFoundPage from './app/AccountNotFoundPage';
//import AutoLoginPage from './app/AutoLoginPage';

//export default function App() {
//  return (
//    <Mypage></Mypage>
//  );
//};


//ㄹ
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Mypage from "./app/mypage";
import PersonalInfoEditPage from './app/PersonalInfoEditPage';
import WithdrawalPage from './app/WithdrawalPage';
import WithdrawalErrorPage from './app/WithdrawalErrorPage';
import FinalWithdrawalPage from './app/FinalWithdrawalPage';
import WithdrawalCompletePage from './app/WithdrawalCompletePage';
import PaymentMethodsPage01 from './app/PaymentMethodsPage01';
import PaymentMethodsPage02 from './app/PaymentMethodsPage02';
import PaymentMethodsPage03 from './app/PaymentMethodsPage03';
import ProfileEditPage from './app/ProfileEditPage';
import ProfileEditPage02 from './app/ProfileEditPage02';
import LogoutSuccessPage from './app/SignupSuccessPage';
import SignupSuccessPage from './app/SignupSuccessPage';
import AccountRecoveryPage from './app/AccountRecoveryPage';
import MainScreen from './app/MainScreen';
import FindIDPage from './app/FindIDPage';
import FindIDResultPage from './app/FindIDResultPage';
import FindPasswordPage from './app/FindPasswordPage';
import FindPasswordResultPage from './app/FindPasswordResultPage';
import AccountNotFoundPage from './app/AccountNotFoundPage';
import AutoLoginPage from './app/AutoLoginPage';
import LocationGuide from './app/LocationGuide';
import RentalStart from './app/RentalStart';
import Rental from './app/Rental';
import ReturnConfirmation from './app/ReturnConfirmation';
import Renting from './app/Renting';
import Camera from './app/Camera';
import BoardScreen from './app/BoardScreen';
import BoardWrite from './app/BoardWrite';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
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
        <Stack.Screen name="MainScreen" component={MainScreen} />
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
    </NavigationContainer>
  );
}





//export default function App() {
//  return (
//    <AutoLoginPage></AutoLoginPage>
//  );
//}

//수정
//import React from 'react';
//import { View } from 'react-native'; // View를 react-native에서 import
//import Mypage from './app/mypage'; // Mypage import

//export default function App() {
//  return (
//    <View>
//      <Mypage />
//    </View>
//  );
//}

//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: '#fff',
//    alignItems: 'center',
//    justifyContent: 'center',
//  },
//});
