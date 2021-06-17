import styled from '@emotion/styled';
import {ReactComponent as rocket} from '../../assets/images/one.svg'
import {ReactComponent as chartSvg} from '../../assets/images/chart.svg'
import {ReactComponent as group} from '../../assets/images/group.svg'
import { RegularText, H4, Button} from '../../components/GlobalComponents';
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
//Extras
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