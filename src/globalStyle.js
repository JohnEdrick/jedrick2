import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    
    --color8 : #E0AAFF;
}
  body {
   
  }
  
  html::-webkit-scrollbar {
    width: 12px; 
  }
  
html::-webkit-scrollbar-track {
  background: #5a5a5a;
  }

html::-webkit-scrollbar-thumb {
    background: transparent;
    box-shadow: 0px 0px 0px 100vh black;
    border-radius: 10px;
  }
`;
