import d1 from '../assets/images/d1.jpeg'
import { Div, HR, SubHeading, RegularText} from '../components/GlobalComponents'
import useWindowDimensions from '../utils/WindowDimensions'

const Step = ({height, children, step : {n, text}}) => {
    const {width} = useWindowDimensions()

    return (
        <Div width={"85%"} height={height} flexDirection={"column"}>
            <HR horizontal width={"100%"}/>
            
            <Div height={"90%"} flexDirection={width >= 768 ? "row" : "column"}>
                
                <Div width={ width >= 768 ? "50%" : "100%"} height={width >= 768 ? "100%" : "55%"} style={ width >= 768 ? { order: `${ n % 2 === 0 ? "1": "0" }`} : {}} flexDirection={"column"}>
                    <SubHeading>STEP {n}</SubHeading>
                    <Div width="90%" height={"70%"} flexDirection={"column"}>
                        <RegularText color={"#1D5B5E"} textAlign={"justify"}>{text}</RegularText>
                    </Div>
                </Div>
                <Div width={ width >= 768 ? "50%" : "100%"} height={width >= 768 ? "100%" : "45%"} style={width >= 768 ? { order: `${n % 2 === 0 ? "0": "1" }`} : {}}>
                    <img src={d1} alt={`step ${n} to buy bukele`} width={width >= 1050 ? "50%" : "80%"}/>
                </Div>
            </Div>
        </Div>
    )
}
export default Step;