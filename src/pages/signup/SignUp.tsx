import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet } from 'react-native'
import { Button, HelperText, TextInput } from "react-native-paper";
import { signUpProp } from "../../routes/params/AuthStackParams";
import validateCPF from "../../helper/validateCPF";
import validateEmail from "../../helper/validateEmail";
import validatePw from "../../helper/validatePw";



export default function SignUp() {
    
    const navigation = useNavigation<signUpProp>()

    const [cpf, setCpf] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [pw, setPw] = React.useState("")
   
    const [cpfError, setCpfError]= React.useState("")
    const [emailError, setEmailError] = React.useState("")
    const [pwError, setPwError] = React.useState("")
    //const [pw2Error, setPw2Error] = React.useState("")

    function cadastroApertado(){
        const cpfE = validateCPF(cpf);
        const emailE = validateEmail(email);
        const pwE = validatePw(pw);
        if ( cpfE || emailE || pwE ) {
            setCpfError(cpfE)
            setEmailError(emailE)
            setPwError(pwE)
           
            return
        } else{
            setCpf("")
            setEmail("")
            setPw("")
            setCpfError("")
            setEmailError("")
            setPwError("")
            //setPw2Error("")
            navigation.navigate("SignIn")
        }
    }

    return (
        <View style={styles.container}>
          <Text style={{ fontWeight:"500", fontSize:24, alignSelf:"center", marginTop:20}}>Cadastro</Text>
            <View style={ styles.signInContainer }>
                <View style={styles.textInputContainer}>
                    <TextInput 
                        mode='outlined' 
                        label={'Nome Completo'} 
                        style={styles.textInputStyle}
                    />
                    <HelperText type="error" visible={true}>{/*erro no nome?*/ }</HelperText>

                </View>
                <View style={styles.textInputContainer}>
                    <TextInput 
                        mode='outlined' 
                        label={'CPF'} 
                        onChangeText={(text) => {setCpf(text)}}
                        style={styles.textInputStyle}

                    />
                    <HelperText type="error" visible={true}>{cpfError}</HelperText>

                </View>
                <View style={styles.textInputContainer}>
                    <TextInput 
                        mode='outlined' label={'Email'} 
                        onChangeText={(text) => {setEmail(text)}}
                        style={styles.textInputStyle}
                    />
                    <HelperText type="error" visible={true}>{emailError}</HelperText>
                    
                </View>
                <View style={styles.textInputContainer}>
                    <TextInput 
                        mode='outlined' 
                        label={'Senha'} 
                        secureTextEntry={true}
                        onChangeText={(text) => {setPw(text)}}
                        style={styles.textInputStyle}
                    />
                    <HelperText type="error" visible={true}>{pwError}</HelperText>
                </View>
                {/* textInput confirmar senha (descomentar o pw2Error)
                <View style={styles.textInputContainer}>
                    <TextInput 
                        mode='outlined' 
                        label={'Confirmar senha'} 
                        secureTextEntry={true}
                        onChangeText={
                            (text) => { 
                                if( text.length > 0 && pw.includes(text) ){
                                    setPw2Error("")
                                } else 
                                    setPw2Error("As senhas não são iguais") 
                            }
                        }
                        style={styles.textInputStyle}
                    />
                    <HelperText type="error" visible={true}>{pw2Error}</HelperText>

                </View> */}
            </View>
            <View style={styles.buttonContainer}>
                <Button style={styles.buttonStyle} 
                mode="outlined" 
                color="grey" 
                    onPress={() => navigation.goBack()}>
                Voltar
                </Button>
                <Button style={styles.buttonStyle} color="red" 
                mode="contained" onPress={() => cadastroApertado()}>
                    Cadastrar
                </Button>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        ...StyleSheet.absoluteFillObject,
        justifyContent:"center",
    },
    signInContainer:{
        flexDirection: "column",
        margin: 10,
        padding: 10,
    },
    textInputContainer:{
        marginVertical: 0
    },
    textInputStyle:{
        height: 40,
    },
    buttonContainer:{
        flexDirection: "row",
        justifyContent:"center",
    },
    buttonStyle:{
        margin: 10,
        padding: 10,
    },


})