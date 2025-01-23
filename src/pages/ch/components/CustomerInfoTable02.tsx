import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Table from "../../../components/table/Table";
import Tbody from "../../../components/table/Tbody";
import Td from "../../../components/table/Td";
import Tr from "../../../components/table/Tr";

export default function CustomerInfoTable02() {
  return (
    <Table minWidth={636} borderTop={false}>
      <Tbody>
        <Tr>
          <Td align="left" type="label">
            직업구분
          </Td>
          <Td>
            <Input align="left" defaultValue="급여소득자 > 금융업" />
          </Td>
          <Td align="left" type="label">
            사업자번호
          </Td>
          <Td colSpan={2}>
            <div className="flex items-center mr-1">
              <Input align="left" defaultValue="입력" />
              <Button label="조회" variant="table-gray" onClick={() => {}} />
            </div>
          </Td>
        </Tr>
        <Tr>
          <Td align="left" type="label">
            직장명
          </Td>
          <Td>
            <Input align="left" defaultValue="스마트저축은행" />
          </Td>
          <Td align="left" type="label">
            근무상태
          </Td>
          <Td>
            <Input align="left" defaultValue="재직중" />
          </Td>
          <Td>
            <Input align="left" defaultValue="2024-01-01" />
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
