import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        alignItems:'center',
        justifyContent:'center'
    },
    boxTop:{
        width:'100%',
        height:Dimensions.get('window').height/3, /* Dimensions é um componente do React Native para observar o tamanho das telas */
        alignItems:'center',
        justifyContent:'center'
    },
    boxMid:{
        width:'100%',
        height:Dimensions.get('window').height/4,
        paddingHorizontal:37
    },
    boxBottom:{
        alignItems:'center',
        // justifyContent:'center',
        width:'100%',
        height:Dimensions.get('window').height/4,
    },
    logo:{ 
        width:80,
        height:80
    },
    text:{
        fontWeight:'bold',
        marginTop:40,
        fontSize:18
    },
    titleInput:{
        marginLeft:5,
        color:themas.colors.gray,
        marginTop:20
    },
    boxInput:{
        width:'100%',
        height:40,
        borderWidth:1,
        borderRadius:40,
        marginTop:10,
        flexDirection:'row', //por padrão o React tem como formato dos seus componentes como COLUNAS, portanto como desejo colocar um item do lado do outro, transformei este item em formato LINHA
        alignItems:'center',
        paddingHorizontal:5,
        backgroundColor:themas.colors.lightGray,
        borderColor: themas.colors.lightGray, //coloquei a mesma cor do fundo, para sumir a linha da borda
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
            },
            input:{
                borderRadius:40,
                height:'100%',
                width:'90%',
    },
    inputt:{
        height:'100%',
        width:'90%',
        borderRadius:40,
        paddingLeft:5,
    },
    buttom:{
        width:200,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:themas.colors.primary,
        borderRadius:40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,

        elevation: 20,
    },
    textButtom:{
        fontSize:16,
        color:'#FFFF',
        fontWeight:'bold',
    },
    textBottom:{
        fontSize:16,
        color:themas.colors.gray,

    },

})