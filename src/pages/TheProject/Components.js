import styled from '@emotion/styled';
import {ReactComponent as rocket} from '../../assets/images/one.svg'
import {ReactComponent as chartSvg} from '../../assets/images/chart.svg'
import {ReactComponent as group} from '../../assets/images/group.svg'
//Containers

export const TokenInfoGrid = styled.div`
display: grid;
width: 95%;
height: 10%;
grid-template-columns: repeat(4,1fr);
grid-template-rows: 1fr;
align-items: stretch;
justify-items:stretch;

@media (max-width: 767px){
    height: 40%;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4,1fr);
}
`
export const RoadMap = styled.div`
width: 90%;
height: 80%;
display: grid;
grid-template-columns: 45% 10% 45%;
grid-template-rows: repeat(3, 7.5% 23.3%) 7.5%; 
grid-template-areas: "a b c"  "d e f"  "g h i"  "j k m" "n o p" "q r s" "t u v";
@media (max-width: 767px){
    grid-template-columns: 10% 90%;
    grid-template-rows: repeat(3, 7.5% 23.3%) 7.5%; 
    grid-template-areas: "b a" "e d" "h i" "k m" "o n" "r q" "u c";
}
`
export const TokenomicsGrid = styled.div`
display: grid;
grid-template-columns: 70% 30%;
grid-template-rows: repeat(5,1fr);
width:100%;
height:100%;
justify-items: end;
align-items: center;
@media(max-with: 767px){
    align-items: center;
}
`
//Text
export const RegularText = styled.p`
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,sans-serif;
    font-weight: 400;
    color: ${props => props.color ? props.color : "white"};
    font-size: 1.5rem;
    margin: 0;
    text-align: ${props => props.textAlign ? props.textAlign : 'center'};
    @media (max-width: 767px){
        font-size: 0.9rem;
    }
`

export const H4 = styled.h4`
    font-family: 'ExtendedSecondary', sans-serif;
    color: ${props => props.primary ? "#10222E" : "#045877"};
    font-size: ${props => props.primary ? "1.1rem" : "0.9rem"};
    margin: 10px;
    text-align: center;
    @media (max-width: 768px) {
        font-size: ${props => props.primary ? "0.9rem" : "0.7rem"};
        margin: 5px;
    }
`
export const MainHeading = styled.h2`
    font-family: 'ExtendedMain', sans-serif;
    font-size: 4rem;
    margin: 30px 0;
    letter-spacing: 7px;
    color: #022F40;
    text-align: center;
    @media (max-width: 768px){
        font-size: 2rem;
        
    }
    @media (max-width: 1050px) and (min-width: 768px){
        font-size: 2.5rem;
        margin: 30px 0;
    }
`
export const Heading = styled(MainHeading)`
    font-size: 3.1rem;
    @media (max-width: 768px) and (min-width:350px){
        font-size: 1.5rem;
    }
    @media (max-width: 349px){
        font-size: 1.2rem;
    }
    @media (max-width: 1050px) and (min-width: 768px){
        font-size: 2.1rem;
    }
`
export const SubHeading = styled.h3`
    color: ${props => props.color ? props.color : "#020047"};
    font-family: "ExtendedMain";
    letter-spacing: 5px;
    text-align: ${props => props.textAlign ? props.textAlign : "center"};
    margin: ${props => props.margin ? props.margin : "0"};
    @media(max-width: 767px){
        font-size: 1rem;
    }
`
export const H3 = styled.h3`
    color: ${ props => props.color ? props.color : "#022F40"};
    font-family: "ExtendedMain";
    align-self: center;
    justify-self: center;
    grid-area: ${props => props.area};
    margin: 0;
    @media (min-width: 768px){
        justify-self: ${props => props.justify};
        padding: 0 30px;
    }
`
//Extras
export const HR = styled.div`
    background-color: #022F40;
    width: ${props => props.horizontal ? props.width ? props.width : "80%" : "3px"};
    height: ${props => props.vertical ? props.width : "3px" };
    margin: ${props => props.margin};
`
export const Button = styled.button`
    background-color: transparent;
    border: 3px solid #022F40;
    color: #022F40;
    border-radius: 20px;
    font-family: 'ExtendedSecondary', sans-serif;
    padding: 30px 20px;
    width: 30%;
    @media (max-width: 767px){
        width: 40%;
        font-size: 0.7rem;
        padding: 15px 0;
    }
`
export const Circle = styled.div`
border: 12px solid #022F40;
grid-area: ${props => props.area};
border-radius: 50%;
width: 3vw;
height: 3vw;
align-self: center;
justify-self: center;
@media (max-width: 1050px){
    width: 6vw;
    height: 6vw;
    border: 5px solid #022F40;
}
@media (max-width: 1050px) and (min-width: 768px){
    color: red;
    border: 10px solid #022F40;
}
`
export const Rocket = styled(rocket)`
transform: scaleX(-1) translateX(-20%);
@media (max-width: 767px){
    transform: scale(.7) scaleX(-1);
}
`
export const Chart = styled(chartSvg)`
transform: scale(0.75);
@media (max-width: 767px){
    transform: scale(0.7);
}
@media (max-width: 1050px) and (min-width: 768px){
    transform:scale(1);
}
`
export const Group = styled(group)`
transform: scale(0.75);
@media (max-width: 1050px){
    transform: scale(0.9);
}
`
export const Line = styled.div`
    width: 5px;
    height: 100%;
    background-color: #022F40;
    grid-area: ${props => props.area};
    align-self: center;
    justify-self: center;
`
export const RoadMapText = styled(RegularText)`
color: white;
text-align: justify;
grid-area: ${props => props.area};
font-size: 1.5rem;
@media (max-width: 1050px) and (min-width: 768px){
    font-size: 1.2rem;
}

`
export const TH5 = styled(H4)`
justify-self: start;
`
export const SecondaryButton = styled(Button)`
color: #23BEAE;
border: 3px solid #23BEAE;
@media(max-width: 1050px){
    width: 90%; 
}

@media (max-width: 1050px) and (min-width:768px){
    padding: 20px;
}
`