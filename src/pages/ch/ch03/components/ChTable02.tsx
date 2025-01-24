import Checkbox from "../../../../components/Checkbox";
import Table from "../../../../components/table/Table";
import Tbody from "../../../../components/table/Tbody";
import Td from "../../../../components/table/Td";
import Tr from "../../../../components/table/Tr";

export default function ChTable02() {
  return (
    <Table minWidth={468} height={158} borderTop={false}>
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
        <Tr>
          <Td>
            <div className="flex items-center justify-center">
              <Checkbox isChecked />
            </div>
          </Td>
          <Td type="text">123-12-12345678</Td>
          <Td type="text">입력</Td>
          <Td type="text">입력</Td>
          <Td type="text">입력</Td>
          <Td type="text">입력</Td>
          <Td type="text">입력</Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
