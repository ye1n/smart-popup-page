import Input from "../../../../components/Input";
import Table from "../../../../components/table/Table";
import Tbody from "../../../../components/table/Tbody";
import Td from "../../../../components/table/Td";
import Tr from "../../../../components/table/Tr";

export default function CustomerInfoTable04() {
  return (
    <Table minWidth={554}>
      <Tbody>
        <Tr>
          <Td align="left" type="label">
            상품명
          </Td>
          <Td>
            <Input align="left" defaultValue="상품명" />
          </Td>
          <Td align="left" type="label">
            여신계좌
          </Td>
          <Td colSpan={2}>
            <Input align="left" defaultValue="입력" />
          </Td>
        </Tr>
        <Tr>
          <Td align="left" type="label">
            계좌상태
          </Td>
          <Td>
            <Input align="left" defaultValue="입력" />
          </Td>
          <Td align="left" type="label">
            가상계좌
          </Td>
          <Td colSpan={2}>
            <Input align="left" defaultValue="입력" />
          </Td>
        </Tr>
        <Tr>
          <Td align="left" type="label">
            대출금액
          </Td>
          <Td>
            <Input align="right" defaultValue="100,000,000" />
          </Td>
          <Td align="left" type="label">
            연결수신계좌
          </Td>
          <Td colSpan={2}>
            <Input align="left" defaultValue="입력" />
          </Td>
        </Tr>
        <Tr>
          <Td align="left" type="label">
            대출잔액
          </Td>
          <Td>
            <Input align="right" defaultValue="100,000,000" />
          </Td>
          <Td align="left" type="label">
            계좌관리상태
          </Td>
          <Td colSpan={2}>
            <Input align="left" defaultValue="입력" />
          </Td>
        </Tr>
        <Tr>
          <Td align="left" type="label">
            담보번호
          </Td>
          <Td>
            <Input align="left" defaultValue="입력" />
          </Td>
          <Td align="left" type="label">
            처분정보
          </Td>
          <Td>
            <Input align="left" defaultValue="처분" />
          </Td>
          <Td>
            <Input align="left" defaultValue="수익매각" />
          </Td>
        </Tr>
        <Tr>
          <Td align="left" type="label">
            압류건수
          </Td>
          <Td>
            <Input align="left" defaultValue="입력" />
          </Td>
          <Td align="left" type="label">
            원부조회일자
          </Td>
          <Td colSpan={2}>
            <Input align="left" defaultValue="입력" />
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
