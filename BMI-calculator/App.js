import { useState } from 'react';
import { Alert, Button, Modal, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const[age,setage] = useState("")
  const[height,setheight] = useState("")
  const[weight,setweight] = useState("")

  return (
    <SafeAreaView style={styles.container}>
      
      <Text style={styles.title}>BMI Calculator</Text>
      <View style={styles.box}> 

        <Text style={styles.age}>Age</Text>
      
        <TextInput placeholder='Enter your age' style={styles.input1} value={age} onChangeText={setage}>
        </TextInput>

        <Text style={styles.age}>Height</Text>

        <TextInput placeholder='cm' style={styles.input2} value={height} onChangeText={setheight}>  
        </TextInput>

        <Text style={styles.age}>Weight</Text>

        <TextInput placeholder='Kg' style={styles.input3} value={weight} onChangeText={setweight}> 
        </TextInput>

        <Pressable onPress={() => Alert.alert("Result",calculateBMI(height,weight))}>
          <Text style={styles.button}>Calculate BMI</Text>
        </Pressable>

        

      </View>
    </SafeAreaView>
  );
}

const calculateBMI = (height,weight) => {

  const ans = ((weight/(height*height))*10000).toFixed(1)
  var condition = ""

  if(ans < 16.0){
    condition = "Severe Thinness";
  }
  else if((ans < 17.0)&&(ans > 16.0)) {
    condition = "Moderate Thinness";
  }
  else if((ans < 18.5)&&(ans > 17.0)){
    condition = "Mild Thinness";
  }
  else if((ans < 25.0)&&(ans > 18.5)){
    condition = "Normal";
  }
  else if((ans < 30)&&(ans > 25)){
    condition = "Overweight";
  }
  else if((ans < 35.0)&&(ans > 30)){
    condition = "Obese class 1";
  }
  else if((ans < 40)&&(ans > 35)){
    condition = "Obese class 2";
  }
  else if((ans > 40)){
    condition = "Obese class 3";
  }
  else{
    return("Enter Age , Height and Weight"+"\n"+"Try again");
  }
  return("BMI : " + ans + " " + condition);  
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#ADD8E6"
  },
  box:{
    width:"80%",
    height:"50%",
    backgroundColor:"#E0FFFF",
    borderRadius:20,
    padding:20,
    elevation:5
  },
  title:{
    fontWeight:"bold",
    fontSize:40,
    color:"#0000FF",
    textAlign:"center",
    paddingBottom:40,
  },
  input1:{
    width:180,
    height:50,
    borderColor:"#C0C0C0",
    borderRadius:20,
    borderWidth:1,
    padding:15,
    fontSize:17,
    fontWeight:"bold",
    marginLeft:"30%",
    position:"absolute",
    top:10,
    left:20
  },
  input2:{
    width:180,
    height:50,
    borderColor:"#C0C0C0",
    borderRadius:20,
    borderWidth:1,
    padding:15,
    fontSize:17,
    fontWeight:"bold",
    marginLeft:"30%",
    position:"absolute",
    top:95,
    left:20
  },
  input3:{
    width:180,
    height:50,
    borderColor:"#C0C0C0",
    borderRadius:20,
    borderWidth:1,
    padding:15,
    fontSize:17,
    fontWeight:"bold",
    marginLeft:"30%",
    position:"absolute",
    top:180,
    left:20
  },
  age:{
    fontSize:20,
    fontWeight:"bold",
    marginBottom:60
  },
  button:{
    backgroundColor:"blue",
    color:"white",
    textAlign:"center",
    padding:20,
    borderRadius:25,
    fontSize:20,
  }
});
