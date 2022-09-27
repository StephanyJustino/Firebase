import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import db from '../../config/firebaseConfig'
import styles from './styles';

export default function Login({navigation}) {

    const [email, setEmail] = useState('');
    const [senha,  setSenha] = useState('');

    const Login = () =>{
      if(email === '' || senha ===''){
        alert('Digite email e senha!')
      }else{
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, senha)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigation.navigate('Home')
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            switch (errorCode) {
              case 'auth/user-not-found':
                alert('Usuário não cadastrado.');
              break;
              case 'auth/invalid-email':
                alert('Email inválido.');
              break;
              case 'auth/wrong-password':
                alert('Senha inválida.');
              break;
              case 'auth/user-disabled':
                alert('Usuário deasbilitado.');
              break;
            }
          });
      }
    }

 return (
   <View style={styles.container}>
       <Text style={styles.titulo}>Login</Text>
       <TextInput
        style={styles.input}
        placeholder='Digite seu email'
        type='text'
        onChangeText={(text) => setEmail(text)}
        value={email}
       />
       <TextInput
        style={styles.input}
        placeholder='Digite sua senha'
        type='text'
        onChangeText={(text) => setSenha(text)}
        value={senha}
       />
      <View>
        <Text style={styles.textCadastro}>Você ainda não se cadastrou? 
          <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
            <View style={styles.btnCadastro}>Cadastre-se</View>
          </TouchableOpacity>
        </Text>
      </View>
       

       <TouchableOpacity style={styles.btn} onPress={Login}>
         <Text style={styles.btnText}>Entrar</Text>
       </TouchableOpacity>
   </View>
  );
}