import styled from "styled-components";
import { colors } from "../../config/var";

const WhiteBackground = styled.div`
    background-color: ${colors.white};
    /* border: 1px solid ${colors.light_grey}; */
    height: auto;
    width: ${props => (props.main? "68%" : props.full? "100%" : "30%")};
    padding: 1.5em;
    box-shadow: 0px 0px 3px 0.5px #ced5e2;
    border-radius: 3px;
`;

export default WhiteBackground;