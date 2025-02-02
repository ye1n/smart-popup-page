import PBCheckbox from "../../../../../components/PBCheckbox";
import PBTable from "../../../../../components/table/PBTable";
import PBTbody from "../../../../../components/table/PBTbody";
import PBTd from "../../../../../components/table/PBTd";
import PBTr from "../../../../../components/table/PBTr";

export default function TransferInfoTable01() {
  const TableData = [
    {
      realNumber: "1234567",
      senderName: "홍길동",
      senderAlias: "",
      nameType: "",
      changeDate: "2024-12-31",
      bank: "",
      account: "",
      amount: "100,000,000",
      calcType: "",
      cashType: "",
      fee: "100,000,000",
      recipient: "",
      examiner: "",
      transferMgmt: "",
      transferResult: "",
    },
  ];

  return (
    <PBTable minWidth={1751} borderTop>
      <PBTbody>
        <PBTr>
          <PBTd type="label" colSpan={2} rowSpan={2}>
            No.
          </PBTd>
          <PBTd type="label" rowSpan={2}>
            실명번호
          </PBTd>
          <PBTd type="label" rowSpan={2}>
            송금인 실명
          </PBTd>
          <PBTd type="label" rowSpan={2}>
            송금인명
          </PBTd>
          <PBTd type="label" rowSpan={2}>
            실명구분
          </PBTd>
          <PBTd type="label" rowSpan={2}>
            변동일
          </PBTd>
          <PBTd type="label" rowSpan={2}>
            수신은행
          </PBTd>
          <PBTd type="label" rowSpan={2}>
            수신계좌
          </PBTd>
          <PBTd type="label" rowSpan={2}>
            송금금액
          </PBTd>
          <PBTd type="label" colSpan={2}>
            수수료
          </PBTd>
          <PBTd type="label" rowSpan={2}>
            수수료
          </PBTd>
          <PBTd type="label" colSpan={3}>
            수취조회결과
          </PBTd>
          <PBTd type="label" rowSpan={2}>
            타행송금결과
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd type="label">산출구분</PBTd>
          <PBTd type="label">현금구분</PBTd>
          <PBTd type="label">수취인성명</PBTd>
          <PBTd type="label">심사원장</PBTd>
          <PBTd type="label">통합이체관리</PBTd>
        </PBTr>
        {TableData.map((item, index) => (
          <PBTr key={index}>
            <PBTd>
              <div className="flex items-center justify-center">
                <PBCheckbox isChecked />
              </div>
            </PBTd>
            <PBTd type="text">{index + 1}</PBTd>
            <PBTd type="text">{item.realNumber}</PBTd>
            <PBTd type="text">{item.senderName}</PBTd>
            <PBTd type="text">{item.senderAlias}</PBTd>
            <PBTd type="text">{item.nameType}</PBTd>
            <PBTd type="text">{item.changeDate}</PBTd>
            <PBTd type="text">{item.bank}</PBTd>
            <PBTd type="text">{item.account}</PBTd>
            <PBTd type="text" align="right">
              {item.amount}
            </PBTd>
            <PBTd type="text">{item.calcType}</PBTd>
            <PBTd type="text">{item.cashType}</PBTd>
            <PBTd type="text" align="right">
              {item.fee}
            </PBTd>
            <PBTd type="text">{item.recipient}</PBTd>
            <PBTd type="text">{item.examiner}</PBTd>
            <PBTd type="text">{item.transferMgmt}</PBTd>
            <PBTd type="text">{item.transferResult}</PBTd>
          </PBTr>
        ))}
      </PBTbody>
    </PBTable>
  );
}
