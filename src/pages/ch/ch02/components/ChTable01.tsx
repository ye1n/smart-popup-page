import Input from "../../../../components/Input";
import Table from "../../../../components/table/Table";
import Tbody from "../../../../components/table/Tbody";
import Td from "../../../../components/table/Td";
import Tr from "../../../../components/table/Tr";

export default function ChTable01() {
  return (
    <Table minWidth={1205}>
      <Tbody>
        <Tr>
          <Td align="left" type="label">
            고객번호
          </Td>
          <Td>
            <Input align="left" defaultValue="입력" />
          </Td>
          <Td align="left" type="label">
            상품
          </Td>
          <Td>
            <Input align="left" defaultValue="입력" />
          </Td>
          <Td align="left" type="label">
            CMS/자동이체상태
          </Td>
          <Td>
            <Input align="left" defaultValue="입력" />
          </Td>
          <Td align="left" type="label">
            정상이율
          </Td>
          <Td>
            <Input align="left" defaultValue="입력" />
          </Td>
          <Td align="left" type="label">
            가지급금
          </Td>
          <Td>
            <Input align="right" defaultValue="100,000,000" />
          </Td>
        </Tr>
        <Tr>
          <Td align="left" type="label">
            휴대폰번호
          </Td>
          <Td>
            <Input align="left" defaultValue="입력" />
          </Td>
          <Td align="left" type="label">
            대출금액
          </Td>
          <Td>
            <Input align="left" defaultValue="입력" />
          </Td>
          <Td align="left" type="label">
            대출잔액
          </Td>
          <Td>
            <Input align="left" defaultValue="입력" />
          </Td>
          <Td align="left" type="label">
            연체이율
          </Td>
          <Td>
            <Input align="left" defaultValue="입력" />
          </Td>
          <Td align="left" type="label">
            계좌가수금
          </Td>
          <Td>
            <Input align="right" defaultValue="100,000,000" />
          </Td>
        </Tr>
        <Tr>
          <Td align="left" type="label">
            수신부금계좌
          </Td>
          <Td>
            <Input align="left" defaultValue="입력" />
          </Td>
          <Td align="left" type="label">
            만기일자
          </Td>
          <Td>
            <Input align="left" defaultValue="입력" />
          </Td>
          <Td align="left" type="label">
            가상계좌번호
          </Td>
          <Td>
            <Input align="left" defaultValue="입력" />
          </Td>
          <Td align="left" type="label">
            가상계좌처리
          </Td>
          <Td>
            <Input align="left" defaultValue="입력" />
          </Td>
          <Td align="left" type="label">
            요구불잔액
          </Td>
          <Td>
            <Input align="right" defaultValue="100,000,000" />
          </Td>
        </Tr>
        <Tr>
          <Td align="left" type="label">
            매회부금액
          </Td>
          <Td>
            <Input align="left" defaultValue="입력" />
          </Td>
          <Td align="left" type="label">
            연체일수
          </Td>
          <Td>
            <Input align="left" defaultValue="입력" />
          </Td>
          <Td align="left" type="label">
            차기원금납입일
          </Td>
          <Td>
            <Input align="left" defaultValue="입력" />
          </Td>
          <Td align="left" type="label">
            수납 후 결과
          </Td>
          <Td>
            <Input align="left" defaultValue="입력" />
          </Td>
          <Td align="left" type="label">
            별단예금잔액
          </Td>
          <Td>
            <Input align="right" defaultValue="100,000,000" />
          </Td>
        </Tr>
        <Tr>
          <Td align="left" type="label">
            최종이수일
          </Td>
          <Td>
            <Input align="left" defaultValue="입력" />
          </Td>
          <Td align="left" type="label">
            상환후차기이자납입일
          </Td>
          <Td>
            <Input align="left" defaultValue="입력" />
          </Td>
          <Td align="left" type="label">
            차진행/납입/연체 회차(원금/이자)
          </Td>
          <Td>
            <Input align="right" defaultValue="30/2" />
          </Td>
          <Td>
            <Input align="right" defaultValue="101/5" />
          </Td>
          <Td>
            <Input align="right" defaultValue="0/0" />
          </Td>
          <Td align="left" type="label">
            이자제한차감금액
          </Td>
          <Td>
            <Input align="right" defaultValue="100,000,000" />
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
