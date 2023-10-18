import { css,keyframes,ThemeProvider, createGlobalStyle} from "styled-components"
import styled from "styled-components"


const CompStyle=()=>{
    let mainColor='#db7093',
    mainAlphaColor='#db709380';
    
    const setTransitionTime=(time)=>`all ${time}s ease`;

    const fadeIn= keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
    `






    const Myh3=styled.h3`
    padding: 2rem;
    text-align: center;
    /* color: ${(props)=>props.color}; */
    color: ${({color})=>color};
    /* Condicionamos el color */
    color: ${({color})=>color||'#d41c1c'};
    background-color: ${mainColor};
    transition:${setTransitionTime('1')};
    animation: ${fadeIn} 2s ease-in-out;
    
    ${({isButton})=>isButton && css`
     margin: auto;
     max-width: 50%;
     border-radius: 0%.25rem;
     cursor: pointer;
     &:hover{
        background-color:green !important;
     }
    `}

    &:hover{
        background-color: ${mainAlphaColor};
    }
    `


    const light={
        color:'#222',
        bgColor:'#DDD'
    }

    const dark={
        color:'#DDD',
        bgColor:'#222'
    }
    
    const Box=styled.div`
    padding: 1rem;
    margin: 1rem;
    color:${({theme})=>theme.color};
    background-color: ${({theme})=>theme.bgColor};
    animation: ${fadeIn} 2s ease-in;`
    const BoxRound=styled(Box)`
      border-radius: 1rem;
    `

    
    return(
        <>
        <h2>Componentes Estilizados</h2>
        <Myh3> H3 Estilizado con Styles Component</Myh3>
        <Myh3 color='#61dafd'> H3 Estilizado con Styles Component</Myh3>
        <Myh3 isButton>Soy un H3 Estilizado como boton</Myh3>
        <ThemeProvider theme={light}>
          <Box> Souy una caja light</Box>
          <BoxRound> Soy una caja redondeada Light  </BoxRound>
        </ThemeProvider>
        <ThemeProvider theme={dark}>
          <Box> Souy una caja light</Box>
          <BoxRound> Soy una caja redondeada Dark  </BoxRound>
        </ThemeProvider>
        </>
    )
}

export default CompStyle