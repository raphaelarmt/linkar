import React from 'react';
import {View, StyleSheet} from 'react-native';
import { RoundedButton } from '../components/roundedButton';

export const Timing = ({addTime}) => {
  return(
    <>
    <View style={styles.timing}>
      <RoundedButton size={75} title='10' onPress={()=>addTime(10)}/>
    </View>
    <View style={styles.timing}>
      <RoundedButton size={75} title='15' onPress={()=>addTime(15)}/>
    </View>
    <View style={styles.timing}>
      <RoundedButton size={75} title='20' onPress={()=>addTime(20)}/>
    </View>    
    </>
    
  )
}

const styles = StyleSheet.create({
  timing:{   
    flex:1,
    alignItems:'center',    
    
  },  
})