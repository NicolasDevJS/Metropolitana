import theme from '../styles'
import { DefaultTheme } from './../app/styled/styled.d';

type Theme = typeof theme.dark


declare module "styled-components"{
    export interface DefaultTheme extends Theme {}

}

