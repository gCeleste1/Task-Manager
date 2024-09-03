import React from "react";
import { Text, View, Image, TextInput, Touchable, TouchableOpacity } from 'react-native';

import {style} from "./styles";
import Logo from '../../assets/logo.png';
import {MaterialIcons} from '@expo/vector-icons';
import { themas } from "../../global/themes";

export default function Login () {
    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image 
                    source={Logo}
                    style={style.logo}
                    resizeMode="contain" /* vai se ajustar de acordo com a caixa */
                />
                <Text style={style.text}>
                    Bem vindo de volta!
                </Text>
            </View>

            <View style={style.boxMid}>
                <Text style={style.titleInput}>ENDEREÇO DE E-MAIL</Text>
                <View style={style.boxInput}>
                    <TextInput style={style.inputt} />

                    <MaterialIcons 
                    name="email"
                    size={20}
                    color={themas.colors.gray} 
                    />
                </View>

                <Text style={style.titleInput}>SENHA</Text>
                <View style={style.boxInput}>
                    <TextInput style={style.inputt} />

                    <MaterialIcons 
                    name="remove-red-eye"
                    size={20}
                    color={themas.colors.gray} 
                    />
                </View>
            </View>

            <View style={style.boxBottom}>
                <TouchableOpacity style={style.buttom}> 
                    <Text style={style.textButtom}>Entrar</Text>
                </TouchableOpacity>
            </View>

            <Text style={style.textBottom}>Não tem conta? <Text style={{color:themas.colors.primary}}>Crie agora!</Text></Text>
        </View>
    )
}