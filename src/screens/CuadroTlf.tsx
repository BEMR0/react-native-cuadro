import React from 'react'
import { View, StyleSheet } from 'react-native';


export const CuadroTlf = () => {
    return (
        <View style={styles.container}>
            <View style={styles.caja15}/>
            <View style={styles.caja16}/>
            <View style={styles.caja17}/>
            <View style={styles.caja18}/>
            <View style={styles.caja19}/>   
            <View style={styles.caja20}/>
            <View style={styles.cajagrande}/>
            <View style={styles.circulogrande}/>
            <View style={styles.circulograndederecha}/>
            <View style={styles.circulomediano}/>
            <View style={styles.circulopequeño}/>
            <View style={styles.caja9}/>
            <View style={styles.caja10}/>
            <View style={styles.caja11}/>
            <View style={styles.caja12}/>
            <View style={styles.caja13}/>   
            <View style={styles.caja14}/>
            <View style={styles.caja5}/>
            <View style={styles.caja6}/>
            <View style={styles.caja7}/>
            <View style={styles.caja8}/>
            <View style={styles.caja1}/>
            <View style={styles.caja2}/>
            <View style={styles.caja3}/>
            <View style={styles.caja4}/>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',

    },
    caja1:{
        width: 75,
        height: 75,
        backgroundColor: '#0050EE',

    },
    caja2:{
        width: 75,
        height: 75,
        backgroundColor: '#0050EE',
        alignSelf: "flex-end",
        position: 'absolute',
        top: 0
    },
    caja3:{
        height: 75,
        width: 75,
        backgroundColor: '#0050EE',
        alignSelf: "flex-end",
        position: 'absolute',
        right: 0,
        bottom: 0

    },
    caja4:{
        width: 75,
        height: 75,
        backgroundColor: '#0050EE',
        position: 'absolute',
        bottom: 0

    },
    caja5:{
        width: 75,
        height: 75,
        backgroundColor: '#FEFF89',
        position: 'absolute',
        top: 37.50,
        left: 37.50
    },
    caja6:{
        height: 75,
        width: 75,
        backgroundColor: '#FEFF89',
        position: 'absolute',
        right: 37.50,
        top: 37.50
    },
    caja7:{
        width: 75,
        height: 75,
        backgroundColor: '#FEFF89',
        position: 'absolute',
        bottom: 37.50,
        left: 37.50

    },
    caja8:{
        width: 75,
        height: 75,
        backgroundColor: '#FEFF89',
        position: 'absolute',
        bottom: 37.50,
        right: 37.50
    },
    caja9:{
        height: 37.50,
        width: 500,
        backgroundColor: '#E51500', 
        position: 'absolute',
        left:37.50
    },
    caja10:{
        width: 500,
        height: 37.50,
        backgroundColor: '#E51500',
        position: 'absolute',
        bottom: 0,
        left: 37.50

    },
    caja11:{
        width: 75,
        height: 75,
        backgroundColor: '#E51500',
        position: 'absolute',
        bottom: 75,
        right: 75

    },
    caja12:{
        height: 75,
        width: 75,
        backgroundColor: '#E51500',
        position: 'absolute',
        bottom: 75,
        left: 75
    },
    caja13:{
        width: 75,
        height: 75,
        backgroundColor: '#E51500',
        top: 75,
        right: 75,
        position: 'absolute',
    },
    caja14:{
        height: 75,
        width: 75,
        backgroundColor: '#E51500',
        position: 'absolute',
        top: 75,
        left: 75
    },
    caja15:{
        height: 800,
        width: 37.50,
        backgroundColor: '#5FA917',
        position: 'absolute',
        left: 0
    },
    caja16:{
        height: 800,
        width: 37.50,
        backgroundColor: '#5FA917',
        position: 'absolute',
        right: 0
    },
    caja17:{
        height: 75,
        width: 75,
        backgroundColor: '#5FA917',
        position: 'absolute',
        bottom: 100,
        right: 100
    },
    caja18:{
        height: 75,
        width: 75,
        backgroundColor: '#5FA917',
        position: 'absolute',
        top: 100,
        left: 100
    },
    caja19:{
        height: 75,
        width: 75,
        backgroundColor: '#5FA917',
        position: 'absolute',
        top: 100,
        right: 100
    },
    caja20:{
        height: 75,
        width: 75,
        backgroundColor: '#5FA917',
        position: 'absolute',
        bottom: 100,
        left: 100
    },
    caja21:{
        height: 75,
        width: 75,
        backgroundColor: '#E51500',
        position: 'absolute',
        bottom: 100,
        right: 100
    },
    cajagrande:{
        height: 475,
        width: 110,
        backgroundColor: '#A900FD',
        position: 'absolute',
        bottom: 150,
        right: 150

    },
    circulogrande:{
        height: 110,
        width: 55,
        backgroundColor: '#EFA20B',
        borderBottomStartRadius:100,
        borderTopStartRadius:100,
        bottom: 350,
        right: 205,
        position: 'absolute'     

    },
    circulograndederecha:{
        height: 110,
        width: 55,
        backgroundColor: '#F96800',
        borderBottomRightRadius: 100,
        borderTopEndRadius: 100,
        bottom: 350,
        right: 150,
        position: 'absolute'     

    },
    circulomediano:{
        height: 80,
        width: 80,
        backgroundColor:"#0050EE",
        borderRadius: 100,
        bottom: 365,
        right: 165,
        position: 'absolute'     

    },
    circulopequeño:{
        height: 40,
        width: 40,
        backgroundColor:"white",
        borderRadius: 100,
        bottom:385,
        right: 185,
        position: 'absolute'      

    },


    
});
