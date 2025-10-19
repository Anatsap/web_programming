import Icon from '@ant-design/icons';
import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: #363636;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 100px;
    align-items: flex-start;
    
    img {
        margin: 40px 0 10px 50px;
    }
    p { 
        margin: 10px 0 10px 50px;
        color: #FFFFFF;
        text-align: flex-start;
        font-weight: 200;
        font-size: 22px;
    }
    span {
            font-size: 24px;
            color: #FFFFFF;
            margin: 10px 0 20px 25px;
        }
    }
`;

export const IconsWrapper = styled.div`
    margin: 10px 0;
`;

export const IconBase = styled(Icon)`
    font-size: 24px;
    color: ${({color}) => color};
`;


export const LogoWrapper = styled.div`
    display: flex;
    align-items: start;
`;

export const StyledText = styled.p`
    margin: 60px 0 0 50px;
`
