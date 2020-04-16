import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import colors from '../../themes/colors'
const { width } = Dimensions.get('window')
export const Container = styled.TouchableOpacity`
width:${width - 60}px;
height:40px;
background-color:${props => props.color || "#8C3F4F"} ;
border-radius:20px;
padding:10px;
align-self:center;
margin:10px;
justify-content:center;
align-items:center;
`
export const Title = styled.Text`
color:${colors.white};
font-size:14px;


`