import Table from "../../../components/table/Table";
import Tbody from "../../../components/table/Tbody";
import Td from "../../../components/table/Td";
import Tr from "../../../components/table/Tr";

export default function AccountListTable() {
  const AccountListTableData = [
    {
      productName: "애드론",
      flag01: "-",
      flag02: "-",
      flag03: "-",
      loanDate: "2024-01-01",
      maturityDate: "2024-12-31",
      accountStatus: "정상",
      managementStatus: "기한이익",
      accidentType: "개인회생",
      litigationProgress: "자동차경매",
      nextRepaymentDate: "2025-06-06",
      loanAmount: "100,000,000",
      loanBalance: "100,000,000",
      overdueDays: "1",
      accountNumber: "123-12-12345",
    },
    {
      productName: "오토론",
      flag01: "-",
      flag02: "-",
      flag03: "-",
      loanDate: "2024-01-01",
      maturityDate: "2024-12-31",
      accountStatus: "매각",
      managementStatus: "신용회복",
      accidentType: "가압류",
      litigationProgress: "자동차경매",
      nextRepaymentDate: "2025-06-06",
      loanAmount: "100,000,000",
      loanBalance: "100,000,000",
      overdueDays: "240",
      accountNumber: "123-12-12345",
    },
  ];

  return (
    <Table minWidth={1192}>
      <Tbody>
        <Tr>
          <Td type="label">상품명</Td>
          <Td type="label" colSpan={3}>
            깃발(1,2,3)
          </Td>
          <Td type="label">대출일자</Td>
          <Td type="label">만기일자</Td>
          <Td type="label">계좌상태</Td>
          <Td type="label">관리상태</Td>
          <Td type="label">사고구분</Td>
          <Td type="label">송무진행</Td>
          <Td type="label">차기상환일</Td>
          <Td type="label">대출금액</Td>
          <Td type="label">대출잔액</Td>
          <Td type="label">연체일수</Td>
          <Td type="label">계좌번호</Td>
        </Tr>
        {AccountListTableData.map((item, index) => (
          <Tr key={index}>
            <Td type="text">{item.productName}</Td>
            <Td type="text">{item.flag01}</Td>
            <Td type="text">{item.flag02}</Td>
            <Td type="text">{item.flag03}</Td>
            <Td type="text">{item.loanDate}</Td>
            <Td type="text">{item.maturityDate}</Td>
            <Td type="text">{item.accountStatus}</Td>
            <Td type="text">{item.managementStatus}</Td>
            <Td type="text">{item.accidentType}</Td>
            <Td type="text">{item.litigationProgress}</Td>
            <Td type="text">{item.nextRepaymentDate}</Td>
            <Td type="text" align="right">
              {item.loanAmount}
            </Td>
            <Td type="text" align="right">
              {item.loanBalance}
            </Td>
            <Td type="text">{item.overdueDays}</Td>
            <Td type="text">{item.accountNumber}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
