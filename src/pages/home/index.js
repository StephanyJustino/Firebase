import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { getAuth, signOut } from "firebase/auth";
import styles from './styles';

export default function Home({navigation}) {

  function Logout() {
    const auth = getAuth();
    signOut(auth).then(() => {
        // Sign-out successful.
        navigation.navigate("Login")
    }).catch((error) => {
        // An error happened.
    });
}

 return (
   <View style={styles.container}>
       <Text style={styles.text}>Olá amigo</Text>
       <TouchableOpacity onPress={() => { Logout() }}><Text style={styles.btnDesconectar}>Desconectar</Text></TouchableOpacity>
   </View>
  );
}

