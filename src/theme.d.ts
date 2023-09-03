import {PaletteColor} from "@mui/material/styles";

declare module '@mui/material/styles' {

    interface Palette {
      bg?: PaletteColor,
      txt?: paletteColor
    }
  
    interface PaletteOptions {
      bg?: PaletteColorOptions,
      txt?: PaletteColorOptions
    }
  }