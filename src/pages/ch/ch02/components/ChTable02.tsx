import PBTable from "../../../../components/table/PBTable";
import PBTbody from "../../../../components/table/PBTbody";
import PBTd from "../../../../components/table/PBTd";
import PBTr from "../../../../components/table/PBTr";

export default function ChTable02() {
  const TableData = [
    {
      round: "3",
      calculationType: "입력",
      baseAmount: "100,000,000",
      calculationStartDate: "2024-01-01",
      calculationEndDate: "2024-12-31",
      calculationDays: "100",
      appliedRate: "2.5%",
      principalRepayment: "100,000,000",
      calculatedAmount: "100,000,000",
      denominatorDays: "2",
      interestReduction: "30,000",
      excessInterestReduction: "100,000,000",
      receivedAmount: "100,000,000",
    },
    {
      round: "2",
      calculationType: "입력",
      baseAmount: "100,000,000",
      calculationStartDate: "2024-01-01",
      calculationEndDate: "2024-12-31",
      calculationDays: "28",
      appliedRate: "11.32%",
      principalRepayment: "100,000,000",
      calculatedAmount: "100,000,000",
      denominatorDays: "13",
      interestReduction: "0",
      excessInterestReduction: "100,000,000",
      receivedAmount: "100,000,000",
    },
    {
      round: "1",
      calculationType: "입력",
      baseAmount: "100,000,000",
      calculationStartDate: "2024-01-01",
      calculationEndDate: "2024-12-31",
      calculationDays: "1",
      appliedRate: "7.4%",
      principalRepayment: "100,000,000",
      calculatedAmount: "100,000,000",
      denominatorDays: "0",
      interestReduction: "100,000,000",
      excessInterestReduction: "100,000,000",
      receivedAmount: "100,000,000",
    },
  ];

  return (
    <PBTable minWidth={1205} borderTop>
      <PBTbody>
        <PBTr>
          <PBTd type="label">No.</PBTd>
          <PBTd type="label">회차</PBTd>
          <PBTd type="label">계산구분</PBTd>
          <PBTd type="label">기준금액</PBTd>
          <PBTd type="label">계산시작일</PBTd>
          <PBTd type="label">계산종료일</PBTd>
          <PBTd type="label">계산일수</PBTd>
          <PBTd type="label">적용이율</PBTd>
          <PBTd type="label">상환원금</PBTd>
          <PBTd type="label">계산금액</PBTd>
          <PBTd type="label">분모일수</PBTd>
          <PBTd type="label">감면이자</PBTd>
          <PBTd type="label">이자율초과감면이자</PBTd>
          <PBTd type="label">수납금액</PBTd>
        </PBTr>
        {TableData.map((item, index) => (
          <PBTr key={index}>
            <PBTd type="text">{index + 1}</PBTd>
            <PBTd type="text">{item.round}</PBTd>
            <PBTd type="text">{item.calculationType}</PBTd>
            <PBTd type="text" align="right">
              {item.baseAmount}
            </PBTd>
            <PBTd type="text">{item.calculationStartDate}</PBTd>
            <PBTd type="text">{item.calculationEndDate}</PBTd>
            <PBTd type="text">{item.calculationDays}</PBTd>
            <PBTd type="text">{item.appliedRate}</PBTd>
            <PBTd type="text" align="right">
              {item.principalRepayment}
            </PBTd>
            <PBTd type="text" align="right">
              {item.calculatedAmount}
            </PBTd>
            <PBTd type="text">{item.denominatorDays}</PBTd>
            <PBTd type="text" align="right">
              {item.interestReduction}
            </PBTd>
            <PBTd type="text" align="right">
              {item.excessInterestReduction}
            </PBTd>
            <PBTd type="text" align="right">
              {item.receivedAmount}
            </PBTd>
          </PBTr>
        ))}
      </PBTbody>
    </PBTable>
  );
}
