import styled from 'styled-components/native'
import colors from '../../../themes/colors'
import { StyleSheet } from 'react-native'
export const Container = styled.View`
flex:1
background-color:${colors.primary};

`
export const Separator = styled.View`
height:1px;
border-width:1px;
border-color:${colors.white};
background-color:${colors.white}
`