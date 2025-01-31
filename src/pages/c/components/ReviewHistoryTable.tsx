import Table from "../../../components/table/Table";
import Tbody from "../../../components/table/Tbody";
import Td from "../../../components/table/Td";
import Tr from "../../../components/table/Tr";

export default function ReviewHistoryTable() {
  const TableData = [
    {
      customerName: "김저축",
      dateOfBirth: "900101",
      branch: "92",
      manager: "홍길동",
      productName: "M200010010",
      applicationDate: "2024-01-31",
      reviewStatus: "1000",
      loanDate: "2024-10-30",
      loanAmount: "100,000,000",
      interestRate: "%",
      loanTerm: "-",
      applicationChannel: "-",
      rejectionReason: "-",
      reviewMemo: "-",
    },
    {
      customerName: "김저축",
      dateOfBirth: "900101",
      branch: "92",
      manager: "홍길동",
      productName: "M200010010",
      applicationDate: "2024-01-31",
      reviewStatus: "1000",
      loanDate: "2024-10-30",
      loanAmount: "100,000,000",
      interestRate: "%",
      loanTerm: "-",
      applicationChannel: "-",
      rejectionReason: "-",
      reviewMemo: "-",
    },
    {
      customerName: "김저축",
      dateOfBirth: "900101",
      branch: "92",
      manager: "홍길동",
      productName: "M200010010",
      applicationDate: "2024-01-31",
      reviewStatus: "1000",
      loanDate: "2024-10-30",
      loanAmount: "100,000,000",
      interestRate: "%",
      loanTerm: "-",
      applicationChannel: "-",
      rejectionReason: "-",
      reviewMemo: "-",
    },
    {
      customerName: "김저축",
      dateOfBirth: "900101",
      branch: "92",
      manager: "홍길동",
      productName: "M200010010",
      applicationDate: "2024-01-31",
      reviewStatus: "1000",
      loanDate: "2024-10-30",
      loanAmount: "100,000,000",
      interestRate: "%",
      loanTerm: "-",
      applicationChannel: "-",
      rejectionReason: "-",
      reviewMemo: "-",
    },
    {
      customerName: "김저축",
      dateOfBirth: "900101",
      branch: "92",
      manager: "홍길동",
      productName: "M200010010",
      applicationDate: "2024-01-31",
      reviewStatus: "1000",
      loanDate: "2024-10-30",
      loanAmount: "100,000,000",
      interestRate: "%",
      loanTerm: "-",
      applicationChannel: "-",
      rejectionReason: "-",
      reviewMemo: "-",
    },
    {
      customerName: "김저축",
      dateOfBirth: "900101",
      branch: "92",
      manager: "홍길동",
      productName: "M200010010",
      applicationDate: "2024-01-31",
      reviewStatus: "1000",
      loanDate: "2024-10-30",
      loanAmount: "100,000,000",
      interestRate: "%",
      loanTerm: "-",
      applicationChannel: "-",
      rejectionReason: "-",
      reviewMemo: "-",
    },
    {
      customerName: "김저축",
      dateOfBirth: "900101",
      branch: "92",
      manager: "홍길동",
      productName: "M200010010",
      applicationDate: "2024-01-31",
      reviewStatus: "1000",
      loanDate: "2024-10-30",
      loanAmount: "100,000,000",
      interestRate: "%",
      loanTerm: "-",
      applicationChannel: "-",
      rejectionReason: "-",
      reviewMemo: "-",
    },
    {
      customerName: "김저축",
      dateOfBirth: "900101",
      branch: "92",
      manager: "홍길동",
      productName: "M200010010",
      applicationDate: "2024-01-31",
      reviewStatus: "1000",
      loanDate: "2024-10-30",
      loanAmount: "100,000,000",
      interestRate: "%",
      loanTerm: "-",
      applicationChannel: "-",
      rejectionReason: "-",
      reviewMemo: "-",
    },
  ];

  return (
    <Table minWidth={1251} height={234} borderTop>
      <Tbody>
        <Tr>
          <Td type="label">No.</Td>
          <Td type="label">고객명</Td>
          <Td type="label">생년월일</Td>
          <Td type="label">지점</Td>
          <Td type="label">담당자</Td>
          <Td type="label">상품명</Td>
          <Td type="label">신청일</Td>
          <Td type="label">심사상태</Td>
          <Td type="label">대출일</Td>
          <Td type="label">대출금액</Td>
          <Td type="label">금리</Td>
          <Td type="label">기간</Td>
          <Td type="label">접수경로</Td>
          <Td type="label">거절사유</Td>
          <Td type="label">심사메모</Td>
        </Tr>
        {TableData.map((item, index) => (
          <Tr key={index}>
            <Td type="text">{index + 1}</Td>
            <Td type="text">{item.customerName}</Td>
            <Td type="text">{item.dateOfBirth}</Td>
            <Td type="text">{item.branch}</Td>
            <Td type="text">{item.manager}</Td>
            <Td type="text">{item.productName}</Td>
            <Td type="text">{item.applicationDate}</Td>
            <Td type="text">{item.reviewStatus}</Td>
            <Td type="text">{item.loanDate}</Td>
            <Td type="text" align="right">
              {item.loanAmount}
            </Td>
            <Td type="text" align="right">
              {item.interestRate}
            </Td>
            <Td type="text">{item.loanTerm}</Td>
            <Td type="text">{item.applicationChannel}</Td>
            <Td type="text">{item.rejectionReason}</Td>
            <Td type="text">{item.reviewMemo}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
