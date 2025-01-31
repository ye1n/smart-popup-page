import Table from "../../../../components/table/Table";
import Tbody from "../../../../components/table/Tbody";
import Td from "../../../../components/table/Td";
import Tr from "../../../../components/table/Tr";

export default function ChTable01() {
  return (
    <Table minWidth={468} height={158} borderTop>
      <Tbody>
        <Tr>
          <Td type="label">사고구분</Td>
          <Td type="label">등록일자</Td>
          <Td type="label">계좌번호</Td>
          <Td type="label">진행상태</Td>
          <Td type="label">법원명</Td>
          <Td type="label">사건번호</Td>
        </Tr>
        <Tr>
          <Td type="text">입력</Td>
          <Td type="text">입력</Td>
          <Td type="text">123-12-12345678</Td>
          <Td type="text">입력</Td>
          <Td type="text">입력</Td>
          <Td type="text">입력</Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
