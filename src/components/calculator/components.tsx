import styled from "styled-components";

export const CalculatorWrapper = styled.section`
  width: 320px;
  min-width: 320px;
  height: fit-content;
  background: #fff;
  position: relative;
  margin-top: 25px;
  display: flex;
  align-items: center;
  flex-direction: column;

  :before,
  :after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 100%;
    border-bottom: 25px solid #fff;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
  }

  :after {
    bottom: auto;
    top: 100%;
    border-bottom: none;
    border-top: 25px solid #fff;
  }
  @media only screen and (max-width: 375px) {
    width: 280px;
    min-width: 280px;
    border-top: 0.1px solid #fff;
  }
`;

export const CalculatorHeader = styled.h4`
  color: #111317;
  font: 24px Sora-b;
  line-height: 25px;
  margin-top: 55px;
  width: calc(100% - 40px);
`;

export const CalculatorForm = styled.form`
  width: calc(100% - 40px);
`;

export const Label = styled.label`
  display: block;
  margin: 20px 0px 5px 0px;
  font: 14px Sora-r;
  line-height: 20px;
`;

export const Input = styled.input<any>`
  height: 50px;
  width: 100%;

  border-radius: 4px;
  border: 2px solid #d3dae8;

  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  padding-left: 10px;
  padding-right: ${({ rightPadding }) => `${rightPadding}px`};
  font: 18px Sora-r;
  line-height: 30px;
`;

export const InputWrapper = styled.div`
  position: relative;

  ::after {
    position: absolute;
    right: 10px;
    bottom: 10px;
    font: 18px Sora-b;
    line-height: 30px;
    content: attr(data-placeholder);
    pointer-events: none;
  }
`;

export const CheckBoxWrapper = styled.div`
  width: calc(100% - 40px);
  display: flex;
  margin-top: 20px;
  align-items: center;
`;

export const CheckBoxLabel = styled.label`
  font: 14px Sora-r;
  line-height: 20px;
`;

export const CheckBoxInput = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  appearance: none;
  border-radius: 4px;
  outline: none;
  border: 2px solid #d3dae8;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  :checked::after {
    font-size: 13px;
    content: "✓";
    color: #111317;
  }
`;

export const CalcButton = styled.button<any>`
  height: 60px;
  width: 169px;
  background: linear-gradient(90deg, #911812 0%, #e1261c 100%);
  border-radius: 30px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font: 18px Sora-b;
  line-height: 20px;
  color: white;
  cursor: pointer;
  border: none;
`;

export const Line = styled.div`
  width: 100%;
  margin: 20px 0px;
  height: 1px;
  background: #e9edf4;
`;

export const CompensationsWrapper = styled.div`
  width: calc(100% - 40px);
  display: flex;
`;

export const CompensationWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CompensationHeader = styled.h6`
  font: 14px Sora-r;
  line-height: 15px;
  text-align: center;
`;

export const CompensationDays = styled.p`
  font: 14px Sora-b;
  line-height: 15px;
  text-align: center;
  margin-bottom: 10px;
  color: #111317;
`;

export const CompensationPrice = styled.p`
  font: 18px Sora-b;
  line-height: 20px;
  text-align: center;
  color: #111317;
`;

export const DailyAllowance = styled.p`
  font: 12px Sora-r;
  line-height: 15px;
  text-align: center;
  color: #7a818e;
`;

export const CompensationTotalHeader = styled.h6`
  font: 14px Sora-r;
  line-height: 15px;
  text-align: center;
  color: #111317;
`;

export const CompensationTotalPrice = styled.p`
  font: 24px Sora-b;
  line-height: 30px;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 55px;
  color: #111317;
`;
