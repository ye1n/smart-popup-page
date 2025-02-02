import PBTable from "../../../../components/table/PBTable";
import PBTbody from "../../../../components/table/PBTbody";
import PBTd from "../../../../components/table/PBTd";
import PBTr from "../../../../components/table/PBTr";

export default function AccountListTable() {
  const TableData = [
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
    <PBTable minWidth={1214} borderTop>
      <PBTbody>
        <PBTr>
          <PBTd type="label">상품명</PBTd>
          <PBTd type="label" colSpan={3}>
            깃발(1,2,3)
          </PBTd>
          <PBTd type="label">대출일자</PBTd>
          <PBTd type="label">만기일자</PBTd>
          <PBTd type="label">계좌상태</PBTd>
          <PBTd type="label">관리상태</PBTd>
          <PBTd type="label">사고구분</PBTd>
          <PBTd type="label">송무진행</PBTd>
          <PBTd type="label">차기상환일</PBTd>
          <PBTd type="label">대출금액</PBTd>
          <PBTd type="label">대출잔액</PBTd>
          <PBTd type="label">연체일수</PBTd>
          <PBTd type="label">계좌번호</PBTd>
        </PBTr>
        {TableData.map((item, index) => (
          <PBTr key={index}>
            <PBTd type="text">{item.productName}</PBTd>
            <PBTd type="text">{item.flag01}</PBTd>
            <PBTd type="text">{item.flag02}</PBTd>
            <PBTd type="text">{item.flag03}</PBTd>
            <PBTd type="text">{item.loanDate}</PBTd>
            <PBTd type="text">{item.maturityDate}</PBTd>
            <PBTd type="text">{item.accountStatus}</PBTd>
            <PBTd type="text">{item.managementStatus}</PBTd>
            <PBTd type="text">{item.accidentType}</PBTd>
            <PBTd type="text">{item.litigationProgress}</PBTd>
            <PBTd type="text">{item.nextRepaymentDate}</PBTd>
            <PBTd type="text" align="right">
              {item.loanAmount}
            </PBTd>
            <PBTd type="text" align="right">
              {item.loanBalance}
            </PBTd>
            <PBTd type="text">{item.overdueDays}</PBTd>
            <PBTd type="text">{item.accountNumber}</PBTd>
          </PBTr>
        ))}
      </PBTbody>
    </PBTable>
  );
}
