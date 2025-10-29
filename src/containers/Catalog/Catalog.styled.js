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
export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 90%;
  margin: 24px auto;
  padding: 16px 24px;
  border-radius: 16px;
  background: linear-gradient(135deg, #fdfaf6 0%, #f5e8d7 100%);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
    transform: translateY(-2px);
  }

  h3 {
    font-size: 18px;
    font-weight: 600;
    color: #2f3650;
    margin: 0;
    letter-spacing: 0.3px;
  }

  select {
    padding: 10px 14px;
    border-radius: 12px;
    border: 1px solid #ccc;
    background-color: #ffffff;
    font-size: 16px;
    color: #333;
    cursor: pointer;
    outline: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    transition: all 0.2s ease;

  }
`;
