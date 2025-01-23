import Icon from "../../../../components/Icon";
import Table from "../../../../components/table/Table";
import Tbody from "../../../../components/table/Tbody";
import Td from "../../../../components/table/Td";
import Tr from "../../../../components/table/Tr";
import { icons } from "../../../../constants/icons";

export default function TransferInfoTable01() {
  const TransferInfoTableData = [
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
    <Table width="min-w-[1751px]">
      <Tbody>
        <Tr>
          <Td type="label" colSpan={2} rowSpan={2}>
            No.
          </Td>
          <Td type="label" rowSpan={2}>
            실명번호
          </Td>
          <Td type="label" rowSpan={2}>
            송금인 실명
          </Td>
          <Td type="label" rowSpan={2}>
            송금인명
          </Td>
          <Td type="label" rowSpan={2}>
            실명구분
          </Td>
          <Td type="label" rowSpan={2}>
            변동일
          </Td>
          <Td type="label" rowSpan={2}>
            수신은행
          </Td>
          <Td type="label" rowSpan={2}>
            수신계좌
          </Td>
          <Td type="label" rowSpan={2}>
            송금금액
          </Td>
          <Td type="label" colSpan={2}>
            수수료
          </Td>
          <Td type="label" rowSpan={2}>
            수수료
          </Td>
          <Td type="label" colSpan={3}>
            수취조회결과
          </Td>
          <Td type="label" rowSpan={2}>
            타행송금결과
          </Td>
        </Tr>
        <Tr>
          <Td type="label">산출구분</Td>
          <Td type="label">현금구분</Td>
          <Td type="label">수취인성명</Td>
          <Td type="label">심사원장</Td>
          <Td type="label">통합이체관리</Td>
        </Tr>
        {TransferInfoTableData.map((item, index) => (
          <Tr key={index}>
            <Td type="text">
              <Icon icon={icons.chk} />
            </Td>
            <Td type="text" align="left">
              {index + 1}
            </Td>
            <Td type="text">{item.realNumber}</Td>
            <Td type="text">{item.senderName}</Td>
            <Td type="text">{item.senderAlias}</Td>
            <Td type="text">{item.nameType}</Td>
            <Td type="text">{item.changeDate}</Td>
            <Td type="text">{item.bank}</Td>
            <Td type="text">{item.account}</Td>
            <Td type="text">{item.amount}</Td>
            <Td type="text">{item.calcType}</Td>
            <Td type="text">{item.cashType}</Td>
            <Td type="text">{item.fee}</Td>
            <Td type="text">{item.recipient}</Td>
            <Td type="text">{item.examiner}</Td>
            <Td type="text">{item.transferMgmt}</Td>
            <Td type="text">{item.transferResult}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
