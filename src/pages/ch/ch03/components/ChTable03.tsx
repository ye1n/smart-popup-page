import Table from "../../../../components/table/Table";
import Tbody from "../../../../components/table/Tbody";
import Td from "../../../../components/table/Td";
import Tr from "../../../../components/table/Tr";

export default function ChTable03() {
  const TableData = [
    {
      round: "3",
      expectedRepaymentDate: "2024-12-31",
      expectedRepaymentAmount: "100,000,000",
      depositDate: "2024-12-31",
      depositAmount: "100,000,000",
      cumulativeDepositAmount: "100,000,000",
      unpaidAmountPerRound: "100,000,000",
      opbAfterDeposit: "100,000,000",
    },
    {
      round: "2",
      expectedRepaymentDate: "2024-12-31",
      expectedRepaymentAmount: "100,000,000",
      depositDate: "2024-12-31",
      depositAmount: "100,000,000",
      cumulativeDepositAmount: "100,000,000",
      unpaidAmountPerRound: "100,000,000",
      opbAfterDeposit: "100,000,000",
    },
    {
      round: "1",
      expectedRepaymentDate: "2024-12-31",
      expectedRepaymentAmount: "100,000,000",
      depositDate: "2024-12-31",
      depositAmount: "100,000,000",
      cumulativeDepositAmount: "100,000,000",
      unpaidAmountPerRound: "100,000,000",
      opbAfterDeposit: "100,000,000",
    },
  ];

  return (
    <Table minWidth={717} height={286} borderTop>
      <Tbody>
        <Tr>
          <Td type="label" rowSpan={2}></Td>
          <Td type="label" colSpan={3}>
            변제계획
          </Td>
          <Td type="label" colSpan={5}>
            변제거래내역
          </Td>
        </Tr>
        <Tr>
          <Td type="label">회차</Td>
          <Td type="label">변제예정일</Td>
          <Td type="label">변제예정금액</Td>
          <Td type="label">입금일</Td>
          <Td type="label">입금액</Td>
          <Td type="label">누적입금액</Td>
          <Td type="label">회차미납액</Td>
          <Td type="label">OPB(입금후)</Td>
        </Tr>
        {TableData.map((item, index) => (
          <Tr key={index}>
            <Td type="text">{index + 1}</Td>
            <Td type="text">{item.round}</Td>
            <Td type="text">{item.expectedRepaymentDate}</Td>
            <Td type="text" align="right">
              {item.expectedRepaymentAmount}
            </Td>
            <Td type="text">{item.depositDate}</Td>
            <Td type="text" align="right">
              {item.depositAmount}
            </Td>
            <Td type="text" align="right">
              {item.cumulativeDepositAmount}
            </Td>
            <Td type="text" align="right">
              {item.unpaidAmountPerRound}
            </Td>
            <Td type="text" align="right">
              {item.opbAfterDeposit}
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
