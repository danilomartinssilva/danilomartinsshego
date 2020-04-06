import styled from "styled-components/native";
import { Dimensions } from "react-native";
const { width } = Dimensions.get('window')


export const Container = styled.KeyboardAvoidingView`
  flex:1;
  align-items:center;
  background-color:#483434;
  padding:20px;
  justify-content:center

  

`
export const Title = styled.Text`
font-size:18px;
color:#FFF;
`
export const Input = styled.TextInput`
width:${width - 50}px
height:40px;
background:#4D4545;
border-radius:20px;
margin:10px;
padding-horizontal:10px;
font-size:12px;
color:#FFF
`
export const SubmitButton = styled.TouchableOpacity`
width:${width - 50}px;
height:40px;
background:#6B9978;
border-radius:20px;
margin:10px;
align-items:center;
justify-content:center;

`
export const AddUserButton = styled.TouchableOpacity`
width:${width - 50}px;
height:40px;
background:#996B6B;
border-radius:20px;
margin:10px;
align-items:center;
justify-content:center;

`
export const TextSubmitButton = styled.Text`
color:#000;
font-size:12px;
text-transform:uppercase;

`



