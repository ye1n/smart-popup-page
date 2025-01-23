import Dropdown from "../../../../components/Dropdown";
import Icon from "../../../../components/Icon";
import Input from "../../../../components/Input";
import Table from "../../../../components/table/Table";
import Tbody from "../../../../components/table/Tbody";
import Td from "../../../../components/table/Td";
import Tr from "../../../../components/table/Tr";
import { icons } from "../../../../constants/icons";

export default function AssetsInfoTable() {
  return (
    <Table minWidth={734} height={298}>
      <Tbody>
        <Tr>
          <Td type="label" align="left" rowSpan={8}>
            <div className="flex items-center gap-2">
              부동산 정보
              <button onClick={() => {}}>
                <Icon icon={icons.roundPlus} />
              </button>
            </div>
          </Td>
          <Td type="label" rowSpan={4}>
            1
          </Td>
          <Td type="label" colSpan={2}>
            형태
          </Td>
          <Td type="label">실거래가 (만원)</Td>
          <Td type="label">건물내역</Td>
          <Td type="label" colSpan={2}>
            총 저당금액(만원)
          </Td>
          <Td type="label">저당 건수</Td>
        </Tr>
        <Tr>
          <Td colSpan={2}>
            <Input defaultValue="아파트" />
          </Td>
          <Td>
            <Input align="right" defaultValue="100,000,000" />
          </Td>
          <Td>
            <Input align="right" defaultValue="㎡" />
          </Td>
          <Td colSpan={2}>
            <Input align="right" defaultValue="100,000,000" />
          </Td>
          <Td>
            <Input defaultValue="-" />
          </Td>
        </Tr>
        <Tr>
          <Td type="label" align="left">
            주소
          </Td>
          <Td colSpan={5}>
            <Input
              align="left"
              defaultValue="경기도 성남시 중원구 갈마치로 288번지 14 SKV1타워 A동 730호"
            />
          </Td>
          <Td rowSpan={2}>
            <Dropdown
              height="h-[52px]"
              options={[{ label: "실거주주소", value: "" }]}
            />
          </Td>
        </Tr>
        <Tr>
          <Td type="label" align="left">
            저당내용
          </Td>
          <Td colSpan={5}>
            <Input align="left" defaultValue="저당내용 직접입력" />
          </Td>
        </Tr>
        <Tr>
          <Td type="label" rowSpan={4}>
            2
          </Td>
          <Td type="label" colSpan={2}>
            형태
          </Td>
          <Td type="label">실거래가 (만원)</Td>
          <Td type="label">건물내역</Td>
          <Td type="label" colSpan={2}>
            총 저당금액(만원)
          </Td>
          <Td type="label">저당 건수</Td>
        </Tr>
        <Tr>
          <Td colSpan={2}>
            <Input defaultValue="아파트" />
          </Td>
          <Td>
            <Input align="right" defaultValue="100,000,000" />
          </Td>
          <Td>
            <Input align="right" defaultValue="㎡" />
          </Td>
          <Td colSpan={2}>
            <Input align="right" defaultValue="100,000,000" />
          </Td>
          <Td>
            <Input defaultValue="-" />
          </Td>
        </Tr>
        <Tr>
          <Td type="label" align="left">
            주소
          </Td>
          <Td colSpan={5}>
            <Input
              align="left"
              defaultValue="경기도 성남시 중원구 갈마치로 288번지 14 SKV1타워 A동 730호"
            />
          </Td>
          <Td rowSpan={2}>
            <Dropdown
              height="h-[52px]"
              options={[{ label: "신규주소", value: "" }]}
            />
          </Td>
        </Tr>
        <Tr>
          <Td type="label" align="left">
            저당내용
          </Td>
          <Td colSpan={5}>
            <Input align="left" defaultValue="저당내용 직접입력" />
          </Td>
        </Tr>
        <Tr>
          <Td type="label" align="left" colSpan={3}>
            차량정보
          </Td>
          <Td colSpan={2}>
            <Input align="left" defaultValue="유" />
          </Td>
          <Td type="label" align="left" colSpan={2}>
            차량번호
          </Td>
          <Td colSpan={2}>
            <Input align="left" defaultValue="서울 12가 3456" />
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
