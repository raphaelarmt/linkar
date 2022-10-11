import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import { RoundedButton } from '../components/roundedButton';
import { spacing, fontSizes } from '../utils/sizes';

export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null);  
  return(
  <View style={styles.container}>
    <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} onChangeText={setSubject} label="Focus on what?"></TextInput>  
      <View style={styles.button}>    
        <RoundedButton style={styles.button} title="+" size={50} onPress={()=>addSubject(subject)}/>
      </View>
    </View>
    
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  inputContainer: {    
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row'
  },
  textInput:{
    flex: 1,
    marginRight:10
  },
  button:{      
    justifyContent:'center',
  }
});
