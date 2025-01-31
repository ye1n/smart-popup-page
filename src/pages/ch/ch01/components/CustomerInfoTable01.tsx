import Input from "../../../../components/Input";
import Table from "../../../../components/table/Table";
import Tbody from "../../../../components/table/Tbody";
import Td from "../../../../components/table/Td";
import Tr from "../../../../components/table/Tr";

export default function CustomerInfoTable01() {
  return (
    <Table minWidth={636} borderTop>
      <Tbody>
        <Tr>
          <Td type="label">전화구분</Td>
          <Td type="label">번호</Td>
          <Td type="label">일반</Td>
          <Td type="label">추심</Td>
          <Td type="label">상태</Td>
          <Td type="label" colSpan={2}>
            비고
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Input defaultValue="휴대전화" />
          </Td>
          <Td>
            <Input defaultValue="010-1234-5678" />
          </Td>
          <Td>
            <Input defaultValue="-" />
          </Td>
          <Td>
            <Input defaultValue="-" />
          </Td>
          <Td>
            <Input defaultValue="결번" />
          </Td>
          <Td colSpan={2}>
            <Input defaultValue="-" />
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Input defaultValue="직장전화" />
          </Td>
          <Td>
            <Input defaultValue="031-1234-5678" />
          </Td>
          <Td>
            <Input defaultValue="-" />
          </Td>
          <Td>
            <Input defaultValue="-" />
          </Td>
          <Td>
            <Input defaultValue="정상" />
          </Td>
          <Td colSpan={2}>
            <Input defaultValue="-" />
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Input defaultValue="기타전화" />
          </Td>
          <Td>
            <Input defaultValue="070-1234-5678" />
          </Td>
          <Td>
            <Input defaultValue="-" />
          </Td>
          <Td>
            <Input defaultValue="-" />
          </Td>
          <Td>
            <Input defaultValue="타인사용" />
          </Td>
          <Td colSpan={2}>
            <Input defaultValue="-" />
          </Td>
        </Tr>
        <Tr>
          <Td type="label">주소구분</Td>
          <Td type="label" colSpan={3}>
            주소
          </Td>
          <Td type="label">상태</Td>
          <Td type="label">소유구분</Td>
          <Td type="label">비고</Td>
        </Tr>
        <Tr>
          <Td>
            <Input defaultValue="실거주지" />
          </Td>
          <Td colSpan={3}>
            <Input defaultValue="경기도 성남시 중원구 갈마치로 288 14  A-730" />
          </Td>
          <Td>
            <Input defaultValue="거주" />
          </Td>
          <Td>
            <Input defaultValue="본인" />
          </Td>
          <Td>
            <Input defaultValue="-" />
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Input defaultValue="등본주소" />
          </Td>
          <Td colSpan={3}>
            <Input defaultValue="-" />
          </Td>
          <Td>
            <Input defaultValue="미거주" />
          </Td>
          <Td>
            <Input defaultValue="부모님" />
          </Td>
          <Td>
            <Input defaultValue="-" />
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Input defaultValue="직장주소" />
          </Td>
          <Td colSpan={3}>
            <Input defaultValue="-" />
          </Td>
          <Td>
            <Input defaultValue="-" />
          </Td>
          <Td>
            <Input defaultValue="-" />
          </Td>
          <Td>
            <Input defaultValue="-" />
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
