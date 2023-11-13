import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
   body{
    background: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: "Roboto Slab", serif;
    
}

   a {
    text-decoration:none;
   }
    button, a {
         cursor: pointer;
         transition: filter 0.2s;
        
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }
`;
