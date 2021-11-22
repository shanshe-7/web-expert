import React, { useState, useRef } from "react";
import Compensation from "./Compensation";
import { CalculatorState } from "../../utils/types";
import {
  CalculatorWrapper,
  CalculatorHeader,
  CalculatorForm,
  Label,
  Input,
  InputWrapper,
  CheckBoxLabel,
  CheckBoxWrapper,
  CheckBoxInput,
  CalcButton,
} from "./components";

const Calculator = () => {
  const [calculatorState, setCalculatorState] = useState<CalculatorState>({
    emplCompDays: 0,
    healthInsuranceDays: 0,
    dailyAllowance: 0,

    sickDays: 0,
  });
  const incomeRef = useRef<HTMLInputElement>();
  const sickLeaveDaysRef = useRef<HTMLInputElement>();
  const checkBoxRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const incomeValue = incomeRef.current?.value;
    const sickDays = sickLeaveDaysRef.current?.value;
    const isChecked = checkBoxRef.current?.checked;
    if (!incomeValue || !sickDays) {
      alert("please provide information");
    } else {
      if (+incomeValue < 0 || +sickDays < 0) {
        return alert("please provide correct information");
      }
      if (+sickDays < 4) {
        return setCalculatorState({
          ...calculatorState,
          sickDays: +sickDays,
          emplCompDays: 0,
          healthInsuranceDays: 0,
          dailyAllowance: 0,
        });
      }
      const dailyAllowance = +((Number(incomeValue) / 30) * 0.7 * 0.8).toFixed(
        2
      );
      if (+sickDays < 9 && +sickDays >= 4) {
        setCalculatorState({
          ...calculatorState,
          sickDays: +sickDays,
          emplCompDays: +sickDays - 3,
          dailyAllowance,

          healthInsuranceDays: 0,
        });
      } else {
        if ((+sickDays > 182 && !isChecked) || +sickDays > 240) {
          return alert(
            "The maximum duration of one insurance event is 182 days, unless it’s tuberculosis. For tuberculosis it is up to 240 days"
          );
        }

        setCalculatorState({
          ...calculatorState,
          sickDays: +sickDays,
          emplCompDays: 5,
          dailyAllowance,
          healthInsuranceDays: +sickDays - 8,
        });
      }
    }
  };
  const { emplCompDays, healthInsuranceDays, dailyAllowance, sickDays } =
    calculatorState;

  return (
    <CalculatorWrapper>
      <CalculatorHeader>Compensation Calculator</CalculatorHeader>
      <CalculatorForm onSubmit={handleSubmit}>
        <InputWrapper data-placeholder="€">
          <Label htmlFor="avg-income">Average income</Label>
          <Input
            ref={incomeRef}
            rightPadding={30}
            type="number"
            id="avg-income"
          />
        </InputWrapper>
        <InputWrapper data-placeholder="days">
          <Label htmlFor="sick-leave">Days on sick-leave</Label>
          <Input
            ref={sickLeaveDaysRef}
            rightPadding={60}
            type="number"
            id="sick-leave"
            maxLength={15}
          />
        </InputWrapper>
        <CheckBoxWrapper>
          <CheckBoxInput ref={checkBoxRef} type="checkbox" id="tubercolosis" />
          <CheckBoxLabel htmlFor="tubercolosis">
            I have tubercolosis
          </CheckBoxLabel>
        </CheckBoxWrapper>
        <CalcButton type="Submit">Calculate</CalcButton>
      </CalculatorForm>

      <Compensation
        sickDays={sickDays}
        emplCompDays={emplCompDays}
        healthInsuranceDays={healthInsuranceDays}
        dailyAllowance={dailyAllowance}
      />
    </CalculatorWrapper>
  );
};

export default Calculator;
