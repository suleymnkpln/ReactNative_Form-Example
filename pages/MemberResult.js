import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function MemberResult({route}) {
  const {user} = route.params;

  return (
    <View>
      <Text style={styles.message}>Kayıt Tamamlandı!</Text>
      <Text style={styles.label}>Üye Adı: {user.userName}</Text>
      <Text style={styles.label}>Üye Soyadı: {user.userSurName}</Text>
      <Text style={styles.label}>Üye Yaş: {user.userAge}</Text>
      <Text style={styles.label}>Üye E-posta: {user.userMail}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 5,
  },
  message: {
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
    color: '#9fa8da',
  },
});

export default MemberResult;
