import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions, StyleSheet } from 'react-native'
import colors from '../../../../themes/colors';
const { width, height } = Dimensions.get('window')

const ratio = width / height
export const Container = styled.View`
flex:1;
background-color:black;
`
export const Header = styled.View`
height:80px;
width:${width}px;
flex-direction:row;
align-items:center;

justify-content:flex-start;
background-color:black;
margin-vertical:4px;
padding:10px;
`
export const ContainerBio = styled.View`
flex-direction:column;
margin:10px;

`
export const Name = styled.Text`
color:${colors.white};
font-size:12px;
font-weight:bold;
`
export const Option = styled.TouchableOpacity`
position:absolute;
top:10px;
right:10px
`

export const ContainerDescription = styled.View`
margin:10px;
background-color:black;

`
export const Description = styled.Text`
font-size:12px;

color:${colors.white};

`
export const ImageFeed = styled.Image`
width:100%;
height:300px;


`






