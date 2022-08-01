import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';

function MemberSign({navigation}) {
  const [userName, setUserName] = useState(null);
  const [userSurName, setUserSurName] = useState(null);
  const [userAge, setUserAge] = useState(null);
  const [userMail, setUserMail] = useState(null);

  function handleSubmit() {
    if (!userName || !userSurName || !userAge || !userMail) {
      Alert.alert('Tiger Fitness Salonu', 'Bilgiler boş bırakılamaz!');
      return;
    }

    const user = {
      userName,
      userSurName,
      userAge,
      userMail,
    };
    navigation.navigate('MemberResultScreen', {user});
  }

  return (
    <View>
      {/* <Text>Member Sign</Text> */}
      <Input
        label="Üye Adı"
        placeholder="Üye ismini giriniz..."
        onChangeText={setUserName}
      />
      <Input
        label="Üye Soyadı"
        placeholder="Üye soyismini giriniz..."
        onChangeText={setUserSurName}
      />
      <Input
        label="Üye Yaşı"
        placeholder="Üye yaşını giriniz..."
        onChangeText={setUserAge}
      />
      <Input
        label="Üye E-Posta"
        placeholder="E-posta adresinizi giriniz..."
        onChangeText={setUserMail}
      />
      <Button text="Kaydı Tamamla" onPress={handleSubmit} />
    </View>
  );
}

export default MemberSign;
