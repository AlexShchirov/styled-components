import React from "react";
import { MoneyType } from "./App";
import styled from "styled-components";

type CurrentBankomatPropsType = {
    money: MoneyType;
};
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {
    return (
        <Banknote
            colors={
                props.money.banknotes === "Dollars" ? "chartreuse" : "cadetblue"
            }
        >
            <Name> {props.money.banknotes}</Name>
            <Nominal>{props.money.value}</Nominal>
        </Banknote>
    );
};

type PropsType = {
    colors: "chartreuse" | "cadetblue";
};

const Banknote = styled.div<PropsType>`
    background-color: ${(props) => props.colors};
    width: 400px;
    height: 200px;
    margin: 10px;
`;

// const GreenBanknote = styled.div`
//   background-color: chartreuse;
//   width: 400px;
//   height: 200px;
//   margin: 10px;
// `
//
// const BlueBanknote = styled.div`
//   background-color: cadetblue;
//   width: 400px;
//   height: 200px;
//   margin: 10px;
// `

const Name = styled.div`
    display: flex;
    justify-content: center;
    font-size: 30px;
`;

const Nominal = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
    font-size: 60px;
`;
