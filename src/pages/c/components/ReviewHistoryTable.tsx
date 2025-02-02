import PBTable from "../../../components/table/PBTable";
import PBTbody from "../../../components/table/PBTbody";
import PBTd from "../../../components/table/PBTd";
import PBTr from "../../../components/table/PBTr";

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
    <PBTable minWidth={1251} height={234} borderTop>
      <PBTbody>
        <PBTr>
          <PBTd type="label">No.</PBTd>
          <PBTd type="label">고객명</PBTd>
          <PBTd type="label">생년월일</PBTd>
          <PBTd type="label">지점</PBTd>
          <PBTd type="label">담당자</PBTd>
          <PBTd type="label">상품명</PBTd>
          <PBTd type="label">신청일</PBTd>
          <PBTd type="label">심사상태</PBTd>
          <PBTd type="label">대출일</PBTd>
          <PBTd type="label">대출금액</PBTd>
          <PBTd type="label">금리</PBTd>
          <PBTd type="label">기간</PBTd>
          <PBTd type="label">접수경로</PBTd>
          <PBTd type="label">거절사유</PBTd>
          <PBTd type="label">심사메모</PBTd>
        </PBTr>
        {TableData.map((item, index) => (
          <PBTr key={index}>
            <PBTd type="text">{index + 1}</PBTd>
            <PBTd type="text">{item.customerName}</PBTd>
            <PBTd type="text">{item.dateOfBirth}</PBTd>
            <PBTd type="text">{item.branch}</PBTd>
            <PBTd type="text">{item.manager}</PBTd>
            <PBTd type="text">{item.productName}</PBTd>
            <PBTd type="text">{item.applicationDate}</PBTd>
            <PBTd type="text">{item.reviewStatus}</PBTd>
            <PBTd type="text">{item.loanDate}</PBTd>
            <PBTd type="text" align="right">
              {item.loanAmount}
            </PBTd>
            <PBTd type="text" align="right">
              {item.interestRate}
            </PBTd>
            <PBTd type="text">{item.loanTerm}</PBTd>
            <PBTd type="text">{item.applicationChannel}</PBTd>
            <PBTd type="text">{item.rejectionReason}</PBTd>
            <PBTd type="text">{item.reviewMemo}</PBTd>
          </PBTr>
        ))}
      </PBTbody>
    </PBTable>
  );
}
