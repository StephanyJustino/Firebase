import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#1C1C1C'
    },
    titulo:{
        color:'#00FFFF',
        fontSize:50,
        fontWeight:700,
        textTransform: 'uppercase',
        marginBottom: 30,
        marginTop: -40
    },
    input:{
        width:'70%',
        borderColor:'#00FFFF',
        borderBottomWidth: 2,
        color:'#fff',
        marginVertical: 10,
    },
    btn:{
        width:'35%',
        height: 50,
        backgroundColor:'#00FFFF',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:60,
        marginTop:40
    },
    btnText:{
        fontSize:20,
        fontWeight:600,
        textTransform:'uppercase',
    },
})

export default styles;