import Button from "../../../components/Button";
import Dropdown from "../../../components/Dropdown";
import Input from "../../../components/Input";
import Table from "../../../components/table/Table";
import Tbody from "../../../components/table/Tbody";
import Td from "../../../components/table/Td";
import Tr from "../../../components/table/Tr";

export default function CustomerInfoTable05() {
  return (
    <Table minWidth={1214}>
      <Tbody>
        <Tr>
          <Td align="left" type="label">
            상품명
          </Td>
          <Td>
            <Input align="left" defaultValue="애드론-자동대출" />
          </Td>
          <Td align="left" type="label">
            계좌상태
          </Td>
          <Td colSpan={2}>
            <Input align="left" defaultValue="입력" />
          </Td>
          <Td align="left" type="label">
            계좌관리상태
          </Td>
          <Td colSpan={2}>
            <Dropdown
              align="left"
              options={[{ label: "기한이익상실", value: "" }]}
            />
          </Td>
          <Td align="left" type="label">
            자산건전성분류
          </Td>
          <Td colSpan={2}>
            <Dropdown align="left" options={[{ label: "요주의", value: "" }]} />
          </Td>
        </Tr>
        <Tr>
          <Td align="left" type="label">
            여신계좌
          </Td>
          <Td>
            <Input align="left" defaultValue="123-12-1234567" />
          </Td>
          <Td align="left" type="label">
            대출일자/약정일
          </Td>
          <Td>
            <Input align="left" defaultValue="2024-01-01" />
          </Td>
          <Td>
            <Input align="left" defaultValue="10" />
          </Td>
          <Td align="left" type="label">
            최종이수일
          </Td>
          <Td colSpan={2}>
            <Input align="left" defaultValue="2024-01-01" />
          </Td>
          <Td align="left" type="label">
            최종입금일
          </Td>
          <Td colSpan={2}>
            <Input align="left" defaultValue="2024-01-01" />
          </Td>
        </Tr>
        <Tr>
          <Td align="left" type="label">
            가상계좌
          </Td>
          <Td>
            <Input align="left" defaultValue="123-12-1234567" />
          </Td>
          <Td align="left" type="label">
            만기일자(기간)
          </Td>
          <Td colSpan={2}>
            <Input align="left" defaultValue="(경과시 색표시)" isRequired />
          </Td>
          <Td align="left" type="label">
            차기상환일
          </Td>
          <Td colSpan={2}>
            <Input align="left" defaultValue="(경과시 색표시)" isRequired />
          </Td>
          <Td align="left" type="label">
            IFIS동기화
          </Td>
          <Td colSpan={2}>
            <div className="flex items-center mr-1">
              <Input align="left" defaultValue="2024-01-01" />
              <Button label="조회" variant="table-gray" onClick={() => {}} />
            </div>
          </Td>
        </Tr>
        <Tr>
          <Td align="left" type="label">
            사후관리계좌
          </Td>
          <Td>
            <Input align="left" defaultValue="123-12-1234567" />
          </Td>
          <Td align="left" type="label">
            대출금액
          </Td>
          <Td colSpan={2}>
            <Input align="right" defaultValue="100,000,000" />
          </Td>
          <Td align="left" type="label">
            소멸시효완성일
          </Td>
          <Td colSpan={2}>
            <div className="flex items-center mr-1">
              <Input align="left" defaultValue="2024-01-01" />
              <Button label="상세" variant="table-gray" onClick={() => {}} />
            </div>
          </Td>
          <Td align="left" type="label">
            납입원금
          </Td>
          <Td colSpan={2}>
            <Input align="right" defaultValue="100,000,000" />
          </Td>
        </Tr>
        <Tr>
          <Td align="left" type="label">
            자동이체연결계좌
          </Td>
          <Td>
            <Input align="left" defaultValue="123-12-1234567" />
          </Td>
          <Td align="left" type="label">
            대출잔액
          </Td>
          <Td colSpan={2}>
            <Input align="right" defaultValue="100,000,000" />
          </Td>
          <Td align="left" type="label">
            기한이익상실일
          </Td>
          <Td colSpan={2}>
            <Input align="left" defaultValue="(경과시 색표시)" isRequired />
          </Td>
          <Td align="left" type="label">
            납입이자
          </Td>
          <Td colSpan={2}>
            <Input align="right" defaultValue="100,000,000" />
          </Td>
        </Tr>
        <Tr>
          <Td align="left" type="label">
            CMS계좌
          </Td>
          <Td>
            <Input align="left" defaultValue="국민123-12-1234567" />
          </Td>
          <Td align="left" type="label">
            상환방법
          </Td>
          <Td colSpan={2}>
            <Dropdown
              align="left"
              options={[{ label: "원리금균등", value: "" }]}
            />
          </Td>
          <Td align="left" type="label">
            상환회차/연체횟수
          </Td>
          <Td>
            <Input align="left" defaultValue="2회" />
          </Td>
          <Td>
            <Input align="left" defaultValue="10회" />
          </Td>
          <Td align="left" type="label">
            중도상환수수료율/금액
          </Td>
          <Td>
            <Input align="right" defaultValue="2.5%" />
          </Td>
          <Td>
            <Input align="right" defaultValue="100,000,000" />
          </Td>
        </Tr>
        <Tr>
          <Td align="left" type="label">
            CMS계좌상태
          </Td>
          <Td>
            <Input align="left" defaultValue="-" />
          </Td>
          <Td align="left" type="label">
            정상금리/연체금리
          </Td>
          <Td>
            <Input align="right" defaultValue="100,000,000" />
          </Td>
          <Td>
            <Input align="right" defaultValue="100,000,000" />
          </Td>
          <Td align="left" type="label">
            연체일수/실연체일
          </Td>
          <Td>
            <Input align="left" defaultValue="2일" />
          </Td>
          <Td>
            <Input align="left" defaultValue="10일(중앙회기준)" />
          </Td>
          <Td align="left" type="label">
            가지급금
          </Td>
          <Td colSpan={2}>
            <Input align="right" defaultValue="100,000,000" />
          </Td>
        </Tr>
        <Tr>
          <Td align="left" type="label">
            CMS재출금일자
          </Td>
          <Td>
            <Input align="left" defaultValue="2024-01-01" />
          </Td>
          <Td align="left" type="label">
            연체시작일
          </Td>
          <Td colSpan={2}>
            <Input align="left" defaultValue="2024-01-01" />
          </Td>
          <Td align="left" type="label">
            연체회차/최장연수
          </Td>
          <Td>
            <Input align="left" defaultValue="2회" />
          </Td>
          <Td>
            <Input align="left" defaultValue="10일" />
          </Td>
          <Td align="left" type="label">
            상환예정금액
          </Td>
          <Td colSpan={2}>
            <Input align="right" defaultValue="100,000,000" />
          </Td>
        </Tr>
        <Tr>
          <Td align="left" type="label">
            자금용도
          </Td>
          <Td>
            <Dropdown
              align="left"
              options={[{ label: "생활자금", value: "" }]}
            />
          </Td>
          <Td align="left" type="label">
            사업자등록번호
          </Td>
          <Td colSpan={2}>
            <div className="flex items-center mr-1">
              <Input align="left" defaultValue="123-12-12345" />
              <Button label="조회" variant="table-gray" onClick={() => {}} />
            </div>
          </Td>
          <Td align="left" type="label">
            누적연체일수
          </Td>
          <Td colSpan={2}>
            <Input align="left" defaultValue="10" />
          </Td>
          <Td align="left" type="label">
            연체해소금액
          </Td>
          <Td colSpan={2}>
            <Input align="right" defaultValue="100,000,000" />
          </Td>
        </Tr>
        <Tr>
          <Td align="left" type="label">
            완제사유
          </Td>
          <Td>
            <Dropdown align="left" options={[{ label: "자발적", value: "" }]} />
          </Td>
          <Td align="left" type="label">
            상환유형
          </Td>
          <Td colSpan={2}>
            <div className="flex items-center mr-1">
              <Input align="left" defaultValue="-" />
              <Button label="저장" variant="table-gray" onClick={() => {}} />
            </div>
          </Td>
          <Td align="left" type="label">
            완제방어
          </Td>
          <Td colSpan={2}>
            <Dropdown align="left" options={[{ label: "성공", value: "" }]} />
          </Td>
          <Td align="left" type="label">
            완납예상금액
          </Td>
          <Td colSpan={2}>
            <Input align="right" defaultValue="100,000,000" />
          </Td>
        </Tr>
        <Tr>
          <Td align="left" type="label">
            추가대출가능여부
          </Td>
          <Td>
            <Dropdown align="left" options={[{ label: "가능", value: "" }]} />
          </Td>
          <Td align="left" type="label">
            마케팅처리사유
          </Td>
          <Td colSpan={2}>
            <div className="flex items-center mr-1">
              <Input align="left" defaultValue="만기미달" />
              <Button label="저장" variant="table-gray" onClick={() => {}} />
            </div>
          </Td>
          <Td align="left" type="label">
            심사결재특이사항
          </Td>
          <Td colSpan={2}>
            <Input align="left" defaultValue="심사원장에서 끌고옴" />
          </Td>
          <Td align="left" type="label">
            저당해지
          </Td>
          <Td colSpan={2}>
            <Dropdown align="left" options={[{ label: "수동", value: "" }]} />
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
