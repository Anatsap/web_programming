import styled from 'styled-components';
import { Button } from 'antd';

export const SectionWrapper = styled.div`
    display: flex;

    background-position: center;
    background-repeat: no-repeat;
    justify-content: space-between;   
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: #D2C8BE;
    padding: 0 200px;

`;
export const StyledText = styled.div`
    text-align: start;
    width: 400px;
    justify-content: flex-start;
    padding-top: 70px;
    color: white;
    font-size: 16px;
    h1 {
        font-size: 40px;
        color: white;
    }
`
export const StyledButton = styled(Button)`
    background: transparent;
    border-radius: 0px;
    color: white;
`;

export const CardWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 20px;
`