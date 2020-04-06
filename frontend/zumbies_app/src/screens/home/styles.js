import styled from 'styled-components/native'
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window')

export const Container = styled.View`
flex:1

background-color:#000
opacity:.8;


align-items:center
`
export const Title = styled.Text`
font-size:${props => `${props.fontSize}px`};
color: #000;
text-align:center
`;

export const Input = styled.TextInput`

background:#4D4545;
height:50px;
width:${width - 20}px;
`


