import Dropdown from "../../../components/Dropdown";
import Input from "../../../components/Input";
import Table from "../../../components/table/Table";
import Tbody from "../../../components/table/Tbody";
import Td from "../../../components/table/Td";
import Tr from "../../../components/table/Tr";

export default function AgreeInfoTable() {
  return (
    <Table minWidth={1492} borderTop>
      <Tbody>
        <Tr>
          <Td type="label" align="left">
            심사지점
          </Td>
          <Td colSpan={2}>
            <Dropdown
              align="left"
              options={[{ label: "리테일금융본부", value: "" }]}
              isRequired
            />
          </Td>
          <Td type="label" align="left">
            상환방법
          </Td>
          <Td colSpan={2}>
            <Dropdown
              align="left"
              options={[{ label: "원리금균등분할", value: "" }]}
              isRequired
            />
          </Td>
          <Td type="label" align="left">
            설정금액
          </Td>
          <Td>
            <Input align="right" defaultValue="100,000,000" isRequired />
          </Td>
          <Td type="label" align="left">
            설정방법
          </Td>
          <Td>
            <Dropdown
              align="left"
              options={[{ label: "방문설정", value: "" }]}
              isRequired
            />
          </Td>
          <Td type="label" align="left">
            심사자
          </Td>
          <Td>
            <Input align="left" defaultValue="홍길동" isRequired />
          </Td>
          <Td type="label" align="left">
            결재자
          </Td>
          <Td>
            <Input align="left" defaultValue="김길동" isRequired />
          </Td>
        </Tr>
        <Tr>
          <Td type="label" align="left">
            납입예정원리금
          </Td>
          <Td colSpan={2}>
            <Input align="right" defaultValue="200,000,000" isRequired />
          </Td>
          <Td type="label" align="left">
            계약기간
          </Td>
          <Td colSpan={2}>
            <Input align="left" defaultValue="36개월" isRequired />
          </Td>
          <Td type="label" align="left">
            설정비
          </Td>
          <Td>
            <Input align="right" defaultValue="100,000,000" isRequired />
          </Td>
          <Td type="label" align="left">
            설정부대비용
          </Td>
          <Td>
            <Input align="right" defaultValue="100,000,000" isRequired />
          </Td>
          <Td type="label" align="left">
            약정인증방법
          </Td>
          <Td colSpan={3}>
            <Dropdown
              align="left"
              options={[{ label: "완료(인증)", value: "" }]}
              isRequired
            />
          </Td>
        </Tr>
        <Tr>
          <Td type="label" align="left">
            분할상환금액(매회)
          </Td>
          <Td colSpan={2}>
            <Input align="right" defaultValue="200,000,000" isRequired />
          </Td>
          <Td type="label" align="left">
            이율/연체이율
          </Td>
          <Td>
            <Input align="right" defaultValue="19.9 %" isRequired />
          </Td>
          <Td>
            <Input align="right" defaultValue="2.5 %" isRequired />
          </Td>
          <Td type="label" align="left">
            담보한도(a)
          </Td>
          <Td>
            <Input align="right" defaultValue="100,000,000" isRequired />
          </Td>
          <Td type="label" align="left">
            신용한도(b)
          </Td>
          <Td>
            <Input align="right" defaultValue="100,000,000" isRequired />
          </Td>
          <Td type="label" align="left">
            결재상태
          </Td>
          <Td>
            <Dropdown
              align="left"
              options={[{ label: "보류(연락두절)", value: "" }]}
              isRequired
            />
          </Td>
          <Td colSpan={2}>
            <Dropdown
              align="left"
              options={[{ label: "결재상태 상세이유", value: "" }]}
              isRequired
            />
          </Td>
        </Tr>
        <Tr>
          <Td type="label" align="left">
            햇살론구분 정보
          </Td>
          <Td colSpan={2}>
            <Dropdown
              align="left"
              options={[{ label: "긴급/생계", value: "" }]}
              isRequired
            />
          </Td>
          <Td type="label" align="left">
            조기상환수수료율
          </Td>
          <Td colSpan={2}>
            <Input align="right" defaultValue="0.5 %" isRequired />
          </Td>
          <Td type="label" align="left">
            대출금액(a+b)
          </Td>
          <Td colSpan={3}>
            <Input align="right" defaultValue="100,000,000" isRequired />
          </Td>
          <Td type="label" align="left">
            특이사항
          </Td>
          <Td colSpan={3}>
            <Dropdown
              align="left"
              options={[{ label: "선택없음", value: "" }]}
              isRequired
            />
          </Td>
        </Tr>
        <Tr>
          <Td type="label" align="left">
            NCCS접수여부 및 청구지선택
          </Td>
          <Td>
            <Dropdown
              align="left"
              options={[{ label: "NCCS접수", value: "" }]}
              isRequired
            />
          </Td>
          <Td>
            <Dropdown
              align="left"
              options={[{ label: "자택", value: "" }]}
              isRequired
            />
          </Td>
          <Td type="label" align="left">
            약정일
          </Td>
          <Td colSpan={2}>
            <Dropdown
              align="left"
              options={[{ label: "31", value: "" }]}
              isRequired
            />
          </Td>
          <Td type="label" align="left">
            금리/한도 가감사유
          </Td>
          <Td colSpan={3}>
            <Dropdown
              align="left"
              options={[{ label: "소득불안정", value: "" }]}
              isRequired
            />
          </Td>
          <Td colSpan={4}>
            <Input defaultValue="전자서명완료값 표기" isRequired />
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
