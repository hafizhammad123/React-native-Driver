import { useState } from "react";
import { Text, TextInput, View,TouchableOpacity, Button} from "react-native";
import { SignUpPage } from "../Config/Firebase";

function RegisterPage ({ navigation}){

const [name, setName] = useState()
const [lastname, setLastName] = useState()
const [conutry, setConutry] = useState()
const [city, setCity] = useState()
const [bike, setBike] = useState()
const [inputEamil , setinputEamil] = useState()
const [inputPassword , setinputPassword] = useState()

async function RegisterBTN (){
    if(!name || !lastname || !conutry || !city || !bike || !inputEamil ||!inputPassword){
        alert("Enter all filed fill bro")
        return
    }
    
    try{
        await SignUpPage({inputEamil, inputPassword, name , lastname, conutry , city, bike})
        setBike("")
        setCity("")
        setConutry("")
        setLastName("")
        setName("")
        setinputEamil("")
        setinputPassword("")
        navigation.navigate("Login")
       }catch (erorr){
           console.log(erorr)
         }
    
}

    return<>
    <View>
        <Text>Register Page</Text>

        <TextInput placeholder="enter your Frist Name" onChangeText={setName} value={name}/>
        <TextInput placeholder="enter your Last Name" onChangeText={setLastName} value={lastname}/>
        <TextInput placeholder="enter your Conutry" onChangeText={setConutry} value={conutry}/>
        <TextInput placeholder="enter your City" onChangeText={setCity} value={city}/>
        <TextInput placeholder="enter your Bike Number" onChangeText={setBike} value={bike}/>
        <TextInput placeholder="enter your email" onChangeText={setinputEamil} value={inputEamil}/>
        <TextInput placeholder="enter your password" secureTextEntry={true} onChangeText={setinputPassword}
        value={inputPassword} />

         <TouchableOpacity  onPress={() => navigation.navigate('Login')}>
         <Text>Don't have an account Click here..</Text>
         </TouchableOpacity>

         <Button title="REGISTER" onPress={RegisterBTN} />


    </View>
    
    </>
}
export default RegisterPage;