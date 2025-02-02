import PBCheckbox from "../../../../../components/PBCheckbox";
import PBTable from "../../../../../components/table/PBTable";
import PBTbody from "../../../../../components/table/PBTbody";
import PBTd from "../../../../../components/table/PBTd";
import PBTr from "../../../../../components/table/PBTr";

export default function DsrInfoTable01() {
  const TableData = [
    {
      financialInstitution: "스마트저축은행",
      branchName: "엔투소프트",
      balance: "100,000,000",
      occurrenceDate: "2024-12-31",
      changeDate: "2024-12-31",
      dsrChangeDate: "2024-12-31",
      estimatedDSR: "100,000,000",
      accountNumber: "123-12-1234567",
      loanType: "신용",
      dsrCalculationType: "-",
      regulationLoanType: "-",
      linkedOrGroupLoanType: "-",
    },
    {
      financialInstitution: "스마트저축은행",
      branchName: "엔투소프트",
      balance: "100,000,000",
      occurrenceDate: "2024-12-31",
      changeDate: "2024-12-31",
      dsrChangeDate: "2024-12-31",
      estimatedDSR: "100,000,000",
      accountNumber: "1234567-12-34567",
      loanType: "담보",
      dsrCalculationType: "-",
      regulationLoanType: "-",
      linkedOrGroupLoanType: "-",
    },
    {
      financialInstitution: "스마트저축은행",
      branchName: "엔투소프트",
      balance: "100,000,000",
      occurrenceDate: "2024-12-31",
      changeDate: "2024-12-31",
      dsrChangeDate: "2024-12-31",
      estimatedDSR: "100,000,000",
      accountNumber: "1234567-12-34567",
      loanType: "담보",
      dsrCalculationType: "-",
      regulationLoanType: "-",
      linkedOrGroupLoanType: "-",
    },
  ];

  return (
    <PBTable minWidth={1449} height={158} borderTop>
      <PBTbody>
        <PBTr>
          <PBTd type="label" colSpan={2}>
            No.
          </PBTd>
          <PBTd type="label">금융기관</PBTd>
          <PBTd type="label">점포명</PBTd>
          <PBTd type="label">잔액</PBTd>
          <PBTd type="label">발생일</PBTd>
          <PBTd type="label">변동일</PBTd>
          <PBTd type="label">DSR변동일</PBTd>
          <PBTd type="label">DSR추정액</PBTd>
          <PBTd type="label">계좌번호</PBTd>
          <PBTd type="label">대출구분</PBTd>
          <PBTd type="label">DSR산정구분</PBTd>
          <PBTd type="label">규제대상 대출구분</PBTd>
          <PBTd type="label">연계대출 및 집단대출 구분</PBTd>
        </PBTr>
        {TableData.map((item, index) => (
          <PBTr key={index}>
            <PBTd>
              <div className="flex items-center justify-center">
                <PBCheckbox isChecked />
              </div>
            </PBTd>
            <PBTd type="text">{index + 1}</PBTd>
            <PBTd type="text" align="left">
              {item.financialInstitution}
            </PBTd>
            <PBTd type="text" align="left">
              {item.branchName}
            </PBTd>
            <PBTd type="text" align="right">
              {item.balance}
            </PBTd>
            <PBTd type="text">{item.occurrenceDate}</PBTd>
            <PBTd type="text">{item.changeDate}</PBTd>
            <PBTd type="text">{item.dsrChangeDate}</PBTd>
            <PBTd type="text" align="right">
              {item.estimatedDSR}
            </PBTd>
            <PBTd type="text">{item.accountNumber}</PBTd>
            <PBTd type="text">{item.loanType}</PBTd>
            <PBTd type="text">{item.dsrCalculationType}</PBTd>
            <PBTd type="text">{item.regulationLoanType}</PBTd>
            <PBTd type="text">{item.linkedOrGroupLoanType}</PBTd>
          </PBTr>
        ))}
      </PBTbody>
    </PBTable>
  );
}
