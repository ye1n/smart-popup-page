import Dropdown from "../../../components/Dropdown";
import Icon from "../../../components/Icon";
import Input from "../../../components/Input";
import Table from "../../../components/table/Table";
import Tbody from "../../../components/table/Tbody";
import Td from "../../../components/table/Td";
import Tr from "../../../components/table/Tr";
import { icons } from "../../../constants/icons";

export default function IncomeInfoTable() {
  return (
    <Table minWidth={734} height={298}>
      <Tbody>
        <Tr>
          <Td type="label" align="left">
            직업
          </Td>
          <Td>
            <Dropdown
              align="left"
              options={[{ label: "개인사업자", value: "" }]}
              isRequired
            />
          </Td>
          <Td type="label" align="left">
            직업구분(CDD)
          </Td>
          <Td colSpan={5}>
            <Dropdown
              align="left"
              options={[{ label: "선택", value: "" }]}
              isRequired
            />
          </Td>
        </Tr>
        <Tr>
          <Td type="label" align="left">
            직장명
          </Td>
          <Td>
            <Input align="left" defaultValue="엔투소프트" isRequired />
          </Td>
          <Td type="label" align="left">
            직종
          </Td>
          <Td>
            <Dropdown
              align="left"
              options={[{ label: "외감법인 코스닥", value: "" }]}
              isRequired
            />
          </Td>
          <Td type="label" align="left">
            직급
          </Td>
          <Td>
            <Dropdown
              align="left"
              options={[{ label: "파트타이머", value: "" }]}
              isRequired
            />
          </Td>
          <Td type="label" align="left">
            종업원수
          </Td>
          <Td>
            <Dropdown
              align="left"
              options={[{ label: "1000인 이상", value: "" }]}
              isRequired
            />
          </Td>
        </Tr>
        <Tr>
          <Td type="label" align="left">
            사업장형태
          </Td>
          <Td>
            <Dropdown
              align="left"
              options={[{ label: "자가", value: "" }]}
              isRequired
            />
          </Td>
          <Td type="label" align="left">
            사업장보증금
          </Td>
          <Td>
            <Input align="right" defaultValue="100,000,000" isRequired />
          </Td>
          <Td type="label" align="left">
            사업장월세
          </Td>
          <Td>
            <Input align="right" defaultValue="100,000,000" isRequired />
          </Td>
          <Td type="label" align="left">
            수입형태
          </Td>
          <Td>
            <Dropdown
              align="left"
              options={[{ label: "고정+실적급", value: "" }]}
              isRequired
            />
          </Td>
        </Tr>
        <Tr>
          <Td type="label" align="left" rowSpan={2}>
            직장주소
          </Td>
          <Td>
            <Input align="left" defaultValue="123-456" />
          </Td>
          <Td colSpan={4}>
            <Input
              align="left"
              defaultValue="경기도 성남시 중원구 상대원동 5460 성남SKV1타워 A동 730호"
            />
          </Td>
          <Td type="label" align="left">
            직장전화
          </Td>
          <Td>
            <Input align="left" defaultValue="010-1234-5678" isRequired />
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Input align="left" defaultValue="12345" />
          </Td>
          <Td colSpan={4}>
            <Input
              align="left"
              defaultValue="경기도 성남시 중원구 갈마치로 288 14 A-730"
            />
          </Td>
          <Td type="label" align="left">
            <div className="flex items-center gap-1">
              사업자번호
              <button
                onClick={() => {}}
                className="p-[1px] bg-white rounded-sm"
              >
                <Icon icon={icons.search} />
              </button>
            </div>
          </Td>
          <Td>
            <Input align="left" defaultValue="123-12-12345" isRequired />
          </Td>
        </Tr>
        <Tr>
          <Td type="label" align="left">
            월수입
          </Td>
          <Td>
            <Input align="right" defaultValue="100,000,000" isRequired />
          </Td>
          <Td type="label" align="left">
            연수입
          </Td>
          <Td>
            <Input align="right" defaultValue="100,000,000" isRequired />
          </Td>
          <Td type="label" align="left">
            수령방법
          </Td>
          <Td>
            <Dropdown
              align="left"
              options={[{ label: "통장+현금", value: "" }]}
              isRequired
            />
          </Td>
          <Td type="label" align="left">
            급여일
          </Td>
          <Td>
            <Input align="left" defaultValue="11" />
          </Td>
        </Tr>
        <Tr>
          <Td type="label" align="left">
            4대보험
          </Td>
          <Td>
            <Dropdown
              align="left"
              options={[{ label: "직장피부양자", value: "" }]}
              isRequired
            />
          </Td>
          <Td type="label" align="left">
            스크래핑일시
          </Td>
          <Td>
            <Input align="right" defaultValue="2024-01-11 23:33:45" />
          </Td>
          <Td colSpan={2}>
            <Dropdown
              align="left"
              options={[{ label: "증빙소득", value: "" }]}
              isRequired
            />
          </Td>
          <Td colSpan={2}>
            <Dropdown
              align="left"
              options={[{ label: "근로소득원천징수영수증", value: "" }]}
              isRequired
            />
          </Td>
        </Tr>
        <Tr>
          <Td type="label" align="left">
            개업년월
          </Td>
          <Td>
            <Input align="left" defaultValue="2024-01-01" />
          </Td>
          <Td type="label" align="left">
            재직기간
          </Td>
          <Td>
            <Input align="left" defaultValue="37년 11개월" />
          </Td>
          <Td type="label" align="left" colSpan={2}>
            사업증빙서류
          </Td>
          <Td colSpan={2}>
            <Dropdown
              align="left"
              options={[{ label: "사업자등록증명원", value: "" }]}
              isRequired
            />
          </Td>
        </Tr>
        <Tr>
          <Td type="label" align="left">
            산출연소득
          </Td>
          <Td>
            <Input align="right" defaultValue="100,000,000" isRequired />
          </Td>
          <Td type="label" align="left">
            산출월소득
          </Td>
          <Td>
            <Input align="right" defaultValue="100,000,000" isRequired />
          </Td>
          <Td type="label" align="left" colSpan={2}>
            연소득
          </Td>
          <Td colSpan={2}>
            <Input align="right" defaultValue="100,000,000" isRequired />
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
