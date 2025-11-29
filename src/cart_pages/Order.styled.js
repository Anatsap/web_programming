import styled from 'styled-components';

export const Header = styled.div`
  text-align: center;
  margin-bottom: 20px;
  font-size: 32px;
  font-weight: 700;
  color: #4a3f35;
`;

export const Fields = styled.div`
  width: 420px;
  margin: 40px auto;
  padding: 30px;
  background-color: #f5eee6;
  border-radius: 16px;
  box-shadow: 0 4px 14px rgba(0,0,0,0.12);
  display: flex;
  flex-direction: column;
  gap: 18px;

  .email-item {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  input, textarea {
    padding: 12px;
    font-size: 16px;
    border-radius: 10px;
    border: 1px solid #d8cfc3;
    background: #fff;
    outline: none;
  }

  textarea {
    height: 140px;
    resize: none;
  }

  button {
    padding: 12px;
    border-radius: 10px;
    background: #e3d3c4;
    border: none;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    background: #d7c2b0;
  }
`;
