import Table from "../../../../components/table/Table";
import Tbody from "../../../../components/table/Tbody";
import Td from "../../../../components/table/Td";
import Tr from "../../../../components/table/Tr";

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
    <Table minWidth={1205}>
      <Tbody>
        <Tr>
          <Td type="label">No.</Td>
          <Td type="label">회차</Td>
          <Td type="label">계산구분</Td>
          <Td type="label">기준금액</Td>
          <Td type="label">계산시작일</Td>
          <Td type="label">계산종료일</Td>
          <Td type="label">계산일수</Td>
          <Td type="label">적용이율</Td>
          <Td type="label">상환원금</Td>
          <Td type="label">계산금액</Td>
          <Td type="label">분모일수</Td>
          <Td type="label">감면이자</Td>
          <Td type="label">이자율초과감면이자</Td>
          <Td type="label">수납금액</Td>
        </Tr>
        {TableData.map((item, index) => (
          <Tr key={index}>
            <Td type="text">{index + 1}</Td>
            <Td type="text">{item.round}</Td>
            <Td type="text">{item.calculationType}</Td>
            <Td type="text" align="right">
              {item.baseAmount}
            </Td>
            <Td type="text">{item.calculationStartDate}</Td>
            <Td type="text">{item.calculationEndDate}</Td>
            <Td type="text">{item.calculationDays}</Td>
            <Td type="text">{item.appliedRate}</Td>
            <Td type="text" align="right">
              {item.principalRepayment}
            </Td>
            <Td type="text" align="right">
              {item.calculatedAmount}
            </Td>
            <Td type="text">{item.denominatorDays}</Td>
            <Td type="text" align="right">
              {item.interestReduction}
            </Td>
            <Td type="text" align="right">
              {item.excessInterestReduction}
            </Td>
            <Td type="text" align="right">
              {item.receivedAmount}
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
