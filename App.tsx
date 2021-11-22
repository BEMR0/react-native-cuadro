import React from 'react'
import { SafeAreaView } from 'react-native';

import { CuadroTlf } from './src/screens/CuadroTlf';
import { CuadroEntero } from './src/screens/CuadroEntero';


const App = () => {
    return (
        <SafeAreaView style={{flex:1}}>

        {/* <CuadroTlf/> */}
        <CuadroEntero/>


        </SafeAreaView>

    )
}

export default App


