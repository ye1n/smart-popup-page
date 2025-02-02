import PBCheckbox from "../../../../components/PBCheckbox";
import PBTable from "../../../../components/table/PBTable";
import PBTbody from "../../../../components/table/PBTbody";
import PBTd from "../../../../components/table/PBTd";
import PBTr from "../../../../components/table/PBTr";

export default function ChTable02() {
  const TableData = [
    {
      accountNumber: "123-12-12345678",
      productName: "입력",
      accountStatus: "입력",
      progressStatus: "입력",
      courtName: "입력",
      caseNumber: "입력",
    },
    {
      accountNumber: "123-12-12345678",
      productName: "입력",
      accountStatus: "입력",
      progressStatus: "입력",
      courtName: "입력",
      caseNumber: "입력",
    },
  ];

  return (
    <PBTable minWidth={468} height={158} borderTop>
      <PBTbody>
        <PBTr>
          <PBTd type="label">-</PBTd>
          <PBTd type="label">계좌번호</PBTd>
          <PBTd type="label">상품명</PBTd>
          <PBTd type="label">계좌상태</PBTd>
          <PBTd type="label">진행상태</PBTd>
          <PBTd type="label">법원명</PBTd>
          <PBTd type="label">사건번호</PBTd>
        </PBTr>
        {TableData.map((item, index) => (
          <PBTr key={index}>
            <PBTd>
              <div className="flex items-center justify-center">
                <PBCheckbox isChecked />
              </div>
            </PBTd>
            <PBTd type="text">{item.accountNumber}</PBTd>
            <PBTd type="text">{item.productName}</PBTd>
            <PBTd type="text">{item.accountStatus}</PBTd>
            <PBTd type="text">{item.progressStatus}</PBTd>
            <PBTd type="text">{item.courtName}</PBTd>
            <PBTd type="text">{item.caseNumber}</PBTd>
          </PBTr>
        ))}
      </PBTbody>
    </PBTable>
  );
}
