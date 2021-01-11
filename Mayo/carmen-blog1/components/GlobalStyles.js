import {Global,css,jsx} from '@emotion/react';  

const GlobalStyles = () => {
    return (
        <>
        <Global styles={css`
          body{
              color:red;
          }
        `}/>
        </>
    );
}

export default GlobalStyles;