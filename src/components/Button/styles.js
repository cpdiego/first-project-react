import styled from "styled-components";

export const Button = styled.button`
    width: 342px;
    height: 74px;
    margin-top: 130px;

    border-radius: 14px;
    border: ${props => props.isBack ? '1px solid #FFFFFF' : 'none'};
    background: ${props => props.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.80)'};

    color: #FFFFFF;
    font-size: 17px;
    font-style: normal;
    font-weight: bold;
    line-height: 28px;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }

    img {
        transform: ${props => props.isBack && 'rotateY(180deg)'};
    }
`;