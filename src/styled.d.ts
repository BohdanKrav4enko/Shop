import '@mui/material/styles';
import 'styled-components';
import { Theme as MuiTheme } from '@mui/material/styles';
/* eslint-disable @typescript-eslint/no-empty-object-type */
declare module 'styled-components' {
    export interface DefaultTheme extends MuiTheme {}
}
declare module '@mui/material/styles' {
    interface Palette {
        skeleton: {
            start: string;
            middle: string;
        };
    }
    interface PaletteOptions {
        skeleton?: {
            start?: string;
            middle?: string;
        };
    }
}