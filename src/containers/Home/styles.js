import styled from "styled-components";

import Background1 from "../../assets/backgroundHome.svg";

export const Container = styled.div`
    background: url('${Background1}');
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    height: 100%;    
`;

export const Image = styled.img`
    margin-top: 30px;
`;

export const InputLabel = styled.p`
    color: #EEEEEE;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.408px;
    margin-left: 25px;
`;

export const Input = styled.input`
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    width: 342px;
    height: 58px;
    padding-left: 25px;
    margin-bottom: 34px;

    border: none;
    outline: none;

    color: #FFFFFF;
    font-size: 20px;
    font-style: normal;
    font-weight: normal;
    line-height: 28px;
`;