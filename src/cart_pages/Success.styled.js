import styled from 'styled-components';
export const Colorr = styled.div`
    background-color: #f7ede2;
`;
export const Styled = styled.div`
    padding: 16px 20px 4px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    table-layout: fixed;
    border-spacing: 10px;
    > div {
        display: flex;
    }
    p {
        font-size: 20px;
    }
    span {
        font-size: 24px;
    }
`;

export const Icons = styled.div`
    display: flex;
    > span, img {
        textAlign: "center";
    }
`