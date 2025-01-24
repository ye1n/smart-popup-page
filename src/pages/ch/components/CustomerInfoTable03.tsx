import Button from "../../../components/Button";
import Checkbox from "../../../components/Checkbox";
import Input from "../../../components/Input";
import Table from "../../../components/table/Table";
import Tbody from "../../../components/table/Tbody";
import Td from "../../../components/table/Td";
import Tr from "../../../components/table/Tr";

export default function CustomerInfoTable03() {
  return (
    <Table minWidth={554}>
      <Tbody>
        <Tr>
          <Td align="left" type="label">
            관리파트
          </Td>
          <Td>
            <Input align="left" defaultValue="리테일금융" />
          </Td>
          <Td align="left" type="label">
            <div className="flex items-center justify-between">
              담당자
              <button
                className="bg-custom-white w-[17px] h-[18px]"
                onClick={() => {}}
              >
                ?
              </button>
            </div>
          </Td>
          <Td colSpan={2}>
            <div className="flex items-center mr-1">
              <Input align="left" defaultValue="관리담당자" />
              <Button label="조회" variant="table-gray" onClick={() => {}} />
            </div>
          </Td>
        </Tr>
        <Tr>
          <Td align="left" type="label">
            현재배정그룹
          </Td>
          <Td>
            <Input align="left" defaultValue="1구간" />
          </Td>
          <Td align="left" type="label">
            이전배정그룹
          </Td>
          <Td>
            <Input align="left" defaultValue="PDS" />
          </Td>
          <Td>
            <Input align="left" defaultValue="2024-01-01" />
          </Td>
        </Tr>
        <Tr>
          <Td align="left" type="label">
            심사자
          </Td>
          <Td>
            <Input align="left" defaultValue="홍길동" />
          </Td>
          <Td align="left" type="label">
            <div className="flex items-center justify-between">
              마케팅
              <button
                className="bg-custom-white w-[17px] h-[18px]"
                onClick={() => {}}
              >
                ?
              </button>
            </div>
          </Td>
          <Td colSpan={2}>
            <div className="flex items-center justify-center mr-1">
              <Input align="left" defaultValue="추가담당자" />
              <Checkbox label="자동배정중지" />
            </div>
          </Td>
        </Tr>
        <Tr>
          <Td align="left" type="label">
            약속일시
          </Td>
          <Td>
            <Input align="left" defaultValue="2024-01-01" />
          </Td>
          <Td align="left" type="label">
            약속금액
          </Td>
          <Td colSpan={2}>
            <div className="flex items-center mr-1">
              <Input align="left" defaultValue="100,000,000" />
              <Button label="취소" variant="table-gray" onClick={() => {}} />
            </div>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
