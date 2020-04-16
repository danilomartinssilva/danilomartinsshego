import styled from 'styled-components/native'
import { Dimensions, StyleSheet } from 'react-native'
import colors from '../../themes/colors'
const { width } = Dimensions.get('window')
export const Container = styled.View`
width:${width - 60}px;
height:50px;
border-radius:20px;
background:${colors.primary},
border-width:1px;
border-color:${colors.secondary};
align-self:center;
margin:10px;
`
export const Input = styled.TextInput`
padding:10px;

color:${colors.white};
font-size:14px;

`