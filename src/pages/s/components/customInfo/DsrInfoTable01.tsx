import Checkbox from "../../../../components/Checkbox";
import Table from "../../../../components/table/Table";
import Tbody from "../../../../components/table/Tbody";
import Td from "../../../../components/table/Td";
import Tr from "../../../../components/table/Tr";

export default function DsrInfoTable01() {
  const DsrInfoTableData = [
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
    <Table minWidth={1449} height={158}>
      <Tbody>
        <Tr>
          <Td type="label" colSpan={2}>
            No.
          </Td>
          <Td type="label">금융기관</Td>
          <Td type="label">점포명</Td>
          <Td type="label">잔액</Td>
          <Td type="label">발생일</Td>
          <Td type="label">변동일</Td>
          <Td type="label">DSR변동일</Td>
          <Td type="label">DSR추정액</Td>
          <Td type="label">계좌번호</Td>
          <Td type="label">대출구분</Td>
          <Td type="label">DSR산정구분</Td>
          <Td type="label">규제대상 대출구분</Td>
          <Td type="label">연계대출 및 집단대출 구분</Td>
        </Tr>
        {DsrInfoTableData.map((item, index) => (
          <Tr key={index}>
            <Td>
              <div className="flex items-center justify-center">
                <Checkbox isChecked onClick={() => {}} />
              </div>
            </Td>
            <Td type="text">{index + 1}</Td>
            <Td type="text" align="left">
              {item.financialInstitution}
            </Td>
            <Td type="text" align="left">
              {item.branchName}
            </Td>
            <Td type="text" align="right">
              {item.balance}
            </Td>
            <Td type="text">{item.occurrenceDate}</Td>
            <Td type="text">{item.changeDate}</Td>
            <Td type="text">{item.dsrChangeDate}</Td>
            <Td type="text" align="right">
              {item.estimatedDSR}
            </Td>
            <Td type="text">{item.accountNumber}</Td>
            <Td type="text">{item.loanType}</Td>
            <Td type="text">{item.dsrCalculationType}</Td>
            <Td type="text">{item.regulationLoanType}</Td>
            <Td type="text">{item.linkedOrGroupLoanType}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
