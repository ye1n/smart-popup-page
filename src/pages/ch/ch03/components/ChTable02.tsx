import PBCheckbox from "../../../../components/PBCheckbox";
import Table from "../../../../components/table/Table";
import Tbody from "../../../../components/table/Tbody";
import Td from "../../../../components/table/Td";
import Tr from "../../../../components/table/Tr";

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
    <Table minWidth={468} height={158} borderTop>
      <Tbody>
        <Tr>
          <Td type="label">-</Td>
          <Td type="label">계좌번호</Td>
          <Td type="label">상품명</Td>
          <Td type="label">계좌상태</Td>
          <Td type="label">진행상태</Td>
          <Td type="label">법원명</Td>
          <Td type="label">사건번호</Td>
        </Tr>
        {TableData.map((item, index) => (
          <Tr key={index}>
            <Td>
              <div className="flex items-center justify-center">
                <PBCheckbox isChecked />
              </div>
            </Td>
            <Td type="text">{item.accountNumber}</Td>
            <Td type="text">{item.productName}</Td>
            <Td type="text">{item.accountStatus}</Td>
            <Td type="text">{item.progressStatus}</Td>
            <Td type="text">{item.courtName}</Td>
            <Td type="text">{item.caseNumber}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
