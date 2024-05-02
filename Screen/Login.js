import { useState } from "react";
import { Text, View,Button, TextInput, TouchableOpacity } from "react-native";
import { signIn } from "../Config/Firebase";

function LoginPage ({navigation}){

   const [inputEamil , setinputEamil] = useState()
   const [inputPassword , setinputPassword] = useState()
  
 async function LoginBtn () {
    try{
        await signIn({inputEamil, inputPassword})
        setinputEamil("")
        setinputPassword("")
        navigation.navigate("Dashboard")
       }catch (erorr){
           console.log(erorr)
         }
   }
  

    return<>
    <View>
        <Text> LOGIN Page</Text>

         <TextInput placeholder="enter your email" onChangeText={setinputEamil} value={inputEamil}/>
         <TextInput placeholder="enter your password" secureTextEntry={true} onChangeText={setinputPassword} value={inputPassword}/>

         <TouchableOpacity  onPress={() => navigation.navigate('Register')}>
         <Text>Don't have an account Click here..</Text>
         </TouchableOpacity>


    </View>

    <Button
        title="login"
        onPress={LoginBtn}
      />

    </>
}
export default LoginPage;