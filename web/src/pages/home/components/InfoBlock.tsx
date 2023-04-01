import styled from "@emotion/styled";
import React from "react";

const StyleDiv = styled.div<{ bgColor: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 260px;
  height: 150px;
  border-radius: 15px;
  padding: 20px;
  cursor: pointer;
  background-color: ${(props) => props.bgColor};
  color: #fff;
  margin-right: 20px;
  .logo {
    font-size: 20px;
    margin-bottom: 30px;
  }
  .value {
    color: #fff;
    font-size: 20px;
    margin-bottom: 5px;
  }
  .text {
    font-size: 14px;
  }
`;

interface IProps {
  icon: JSX.Element;
  value: number;
  text: string;
  bgColor: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

/**
 * 信息块
 */
const InfoBlock: React.FC<IProps> = (props) => {
  return (
    <StyleDiv bgColor={props.bgColor} onClick={props.onClick}>
      <div className='logo'>{props.icon}</div>

      <div>
        <div className='value'>{props.value}</div>
        <div className='text'>{props.text}</div>
      </div>
    </StyleDiv>
  );
};

export default InfoBlock;
