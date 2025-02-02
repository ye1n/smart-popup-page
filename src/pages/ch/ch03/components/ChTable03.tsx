import PBTable from "../../../../components/table/PBTable";
import PBTbody from "../../../../components/table/PBTbody";
import PBTd from "../../../../components/table/PBTd";
import PBTr from "../../../../components/table/PBTr";

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
    <PBTable minWidth={717} height={286} borderTop>
      <PBTbody>
        <PBTr>
          <PBTd type="label" rowSpan={2}></PBTd>
          <PBTd type="label" colSpan={3}>
            변제계획
          </PBTd>
          <PBTd type="label" colSpan={5}>
            변제거래내역
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd type="label">회차</PBTd>
          <PBTd type="label">변제예정일</PBTd>
          <PBTd type="label">변제예정금액</PBTd>
          <PBTd type="label">입금일</PBTd>
          <PBTd type="label">입금액</PBTd>
          <PBTd type="label">누적입금액</PBTd>
          <PBTd type="label">회차미납액</PBTd>
          <PBTd type="label">OPB(입금후)</PBTd>
        </PBTr>
        {TableData.map((item, index) => (
          <PBTr key={index}>
            <PBTd type="text">{index + 1}</PBTd>
            <PBTd type="text">{item.round}</PBTd>
            <PBTd type="text">{item.expectedRepaymentDate}</PBTd>
            <PBTd type="text" align="right">
              {item.expectedRepaymentAmount}
            </PBTd>
            <PBTd type="text">{item.depositDate}</PBTd>
            <PBTd type="text" align="right">
              {item.depositAmount}
            </PBTd>
            <PBTd type="text" align="right">
              {item.cumulativeDepositAmount}
            </PBTd>
            <PBTd type="text" align="right">
              {item.unpaidAmountPerRound}
            </PBTd>
            <PBTd type="text" align="right">
              {item.opbAfterDeposit}
            </PBTd>
          </PBTr>
        ))}
      </PBTbody>
    </PBTable>
  );
}
