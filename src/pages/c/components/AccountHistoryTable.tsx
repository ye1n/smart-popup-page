import PBTable from "../../../components/table/PBTable";
import PBTbody from "../../../components/table/PBTbody";
import PBTd from "../../../components/table/PBTd";
import PBTr from "../../../components/table/PBTr";

export default function AccountHistoryTable() {
  const TableData = [
    {
      customerName: "김저축",
      dateOfBirth: "900101",
      branch: "92",
      manager: "홍길동",
      productName: "M200010010",
      loanDate: "2024-01-31",
      loanBalance: "100,000,000",
      lastTransactionDate: "2024-10-30",
      nextPaymentDueDate: "2024-10-30",
      overdueDays: "0",
      principalRepayment: "100,000,000",
      interest: "100,000,000",
      overdueFee: "100,000,000",
      overdueInterest: "100,000,000",
      advancePayment: "100,000,000",
      shortfallAmount: "100,000,000",
    },
    {
      customerName: "김저축",
      dateOfBirth: "900101",
      branch: "92",
      manager: "홍길동",
      productName: "M200010010",
      loanDate: "2024-01-31",
      loanBalance: "100,000,000",
      lastTransactionDate: "2024-10-30",
      nextPaymentDueDate: "2024-10-30",
      overdueDays: "13",
      principalRepayment: "100,000,000",
      interest: "100,000,000",
      overdueFee: "100,000,000",
      overdueInterest: "100,000,000",
      advancePayment: "100,000,000",
      shortfallAmount: "100,000,000",
    },
    {
      customerName: "김저축",
      dateOfBirth: "900101",
      branch: "92",
      manager: "홍길동",
      productName: "M200010010",
      loanDate: "2024-01-31",
      loanBalance: "100,000,000",
      lastTransactionDate: "2024-10-30",
      nextPaymentDueDate: "2024-10-30",
      overdueDays: "4",
      principalRepayment: "100,000,000",
      interest: "100,000,000",
      overdueFee: "100,000,000",
      overdueInterest: "100,000,000",
      advancePayment: "100,000,000",
      shortfallAmount: "100,000,000",
    },
    {
      customerName: "김저축",
      dateOfBirth: "900101",
      branch: "92",
      manager: "홍길동",
      productName: "M200010010",
      loanDate: "2024-01-31",
      loanBalance: "100,000,000",
      lastTransactionDate: "2024-10-30",
      nextPaymentDueDate: "2024-10-30",
      overdueDays: "229",
      principalRepayment: "100,000,000",
      interest: "100,000,000",
      overdueFee: "100,000,000",
      overdueInterest: "100,000,000",
      advancePayment: "100,000,000",
      shortfallAmount: "100,000,000",
    },
  ];

  return (
    <PBTable minWidth={1425} height={234} borderTop>
      <PBTbody>
        <PBTr>
          <PBTd type="label">No.</PBTd>
          <PBTd type="label">고객명</PBTd>
          <PBTd type="label">생년월일</PBTd>
          <PBTd type="label">지점</PBTd>
          <PBTd type="label">담당자</PBTd>
          <PBTd type="label">상품명</PBTd>
          <PBTd type="label">대출일</PBTd>
          <PBTd type="label">대출잔액</PBTd>
          <PBTd type="label">최종거래일</PBTd>
          <PBTd type="label">차기이수일</PBTd>
          <PBTd type="label">연체일수</PBTd>
          <PBTd type="label">상환원금</PBTd>
          <PBTd type="label">이자</PBTd>
          <PBTd type="label">연체료</PBTd>
          <PBTd type="label">연체이자</PBTd>
          <PBTd type="label">가수금</PBTd>
          <PBTd type="label">부족금액</PBTd>
        </PBTr>
        {TableData.map((item, index) => (
          <PBTr key={index}>
            <PBTd type="text">{index + 1}</PBTd>
            <PBTd type="text">{item.customerName}</PBTd>
            <PBTd type="text">{item.dateOfBirth}</PBTd>
            <PBTd type="text">{item.branch}</PBTd>
            <PBTd type="text">{item.manager}</PBTd>
            <PBTd type="text">{item.productName}</PBTd>
            <PBTd type="text">{item.loanDate}</PBTd>
            <PBTd type="text">{item.loanBalance}</PBTd>
            <PBTd type="text">{item.lastTransactionDate}</PBTd>
            <PBTd type="text">{item.nextPaymentDueDate}</PBTd>
            <PBTd type="text">{item.overdueDays}</PBTd>
            <PBTd type="text" align="right">
              {item.principalRepayment}
            </PBTd>
            <PBTd type="text" align="right">
              {item.interest}
            </PBTd>
            <PBTd type="text" align="right">
              {item.overdueFee}
            </PBTd>
            <PBTd type="text" align="right">
              {item.overdueInterest}
            </PBTd>
            <PBTd type="text" align="right">
              {item.advancePayment}
            </PBTd>
            <PBTd type="text" align="right">
              {item.shortfallAmount}
            </PBTd>
          </PBTr>
        ))}
      </PBTbody>
    </PBTable>
  );
}
