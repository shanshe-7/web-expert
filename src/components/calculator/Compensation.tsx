import { CalculatorState } from "../../utils/types";
import {
  Line,
  CompensationsWrapper,
  CompensationWrapper,
  CompensationHeader,
  CompensationDays,
  CompensationPrice,
  DailyAllowance,
  CompensationTotalHeader,
  CompensationTotalPrice,
} from "./components";

const Compensation = (props: CalculatorState) => {
  const { emplCompDays, healthInsuranceDays, sickDays, dailyAllowance } = props;
  return (
    <>
      <Line />
      <CompensationsWrapper>
        <CompensationWrapper>
          <CompensationHeader>The employer compensates</CompensationHeader>
          <CompensationDays>{emplCompDays} days</CompensationDays>
          <CompensationPrice>
            {(emplCompDays * dailyAllowance).toFixed(2)}€
          </CompensationPrice>
          <DailyAllowance>
            Daily allowance <br /> {dailyAllowance}€
          </DailyAllowance>
        </CompensationWrapper>
        <CompensationWrapper>
          <CompensationHeader>Health Insurance compensates</CompensationHeader>
          <CompensationDays>{healthInsuranceDays} days</CompensationDays>
          <CompensationPrice>
            {(healthInsuranceDays * dailyAllowance).toFixed(2)}€
          </CompensationPrice>
          <DailyAllowance>
            Daily allowance <br /> {dailyAllowance}€
          </DailyAllowance>
        </CompensationWrapper>
      </CompensationsWrapper>
      <Line />
      <CompensationTotalHeader>
        {`Compensation total for ${sickDays} days (net)`}
      </CompensationTotalHeader>
      <CompensationTotalPrice>
        {(
          emplCompDays * dailyAllowance +
          healthInsuranceDays * dailyAllowance
        ).toFixed(2)}
        €
      </CompensationTotalPrice>
    </>
  );
};

export default Compensation;
