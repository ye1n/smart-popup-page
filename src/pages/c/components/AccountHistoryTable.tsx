import Table from "../../../components/table/Table";
import Tbody from "../../../components/table/Tbody";
import Td from "../../../components/table/Td";
import Tr from "../../../components/table/Tr";

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
    <Table minWidth={1425} height={234} borderTop>
      <Tbody>
        <Tr>
          <Td type="label">No.</Td>
          <Td type="label">고객명</Td>
          <Td type="label">생년월일</Td>
          <Td type="label">지점</Td>
          <Td type="label">담당자</Td>
          <Td type="label">상품명</Td>
          <Td type="label">대출일</Td>
          <Td type="label">대출잔액</Td>
          <Td type="label">최종거래일</Td>
          <Td type="label">차기이수일</Td>
          <Td type="label">연체일수</Td>
          <Td type="label">상환원금</Td>
          <Td type="label">이자</Td>
          <Td type="label">연체료</Td>
          <Td type="label">연체이자</Td>
          <Td type="label">가수금</Td>
          <Td type="label">부족금액</Td>
        </Tr>
        {TableData.map((item, index) => (
          <Tr key={index}>
            <Td type="text">{index + 1}</Td>
            <Td type="text">{item.customerName}</Td>
            <Td type="text">{item.dateOfBirth}</Td>
            <Td type="text">{item.branch}</Td>
            <Td type="text">{item.manager}</Td>
            <Td type="text">{item.productName}</Td>
            <Td type="text">{item.loanDate}</Td>
            <Td type="text">{item.loanBalance}</Td>
            <Td type="text">{item.lastTransactionDate}</Td>
            <Td type="text">{item.nextPaymentDueDate}</Td>
            <Td type="text">{item.overdueDays}</Td>
            <Td type="text" align="right">
              {item.principalRepayment}
            </Td>
            <Td type="text" align="right">
              {item.interest}
            </Td>
            <Td type="text" align="right">
              {item.overdueFee}
            </Td>
            <Td type="text" align="right">
              {item.overdueInterest}
            </Td>
            <Td type="text" align="right">
              {item.advancePayment}
            </Td>
            <Td type="text" align="right">
              {item.shortfallAmount}
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
