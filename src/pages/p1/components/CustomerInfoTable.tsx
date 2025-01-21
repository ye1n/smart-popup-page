import Button from "../../../components/Button";
import Dropdown from "../../../components/Dropdown";
import Input from "../../../components/Input";
import Table from "../../../components/table/Table";
import Tbody from "../../../components/table/Tbody";
import Td from "../../../components/table/Td";
import Tr from "../../../components/table/Tr";

export default function CustomerInfoTable() {
  return (
    <Table
      maxHeight="h-[298px]"
      // colWidths={[
      //   "10%",
      //   "7%",
      //   "5%",
      //   "8%",
      //   "10%",
      //   "20%",
      //   "10%",
      //   "7%",
      //   "8%",
      //   "15%",
      // ]}
    >
      <Tbody>
        <Tr>
          <Td type="label" align="left">
            고객명
          </Td>
          <Td colSpan={3}>
            <Input align="left" defaultValue="김저축" />
          </Td>
          <Td type="label" align="left">
            주민등록번호
          </Td>
          <Td>
            <Input align="left" defaultValue="입력" />
          </Td>
          <Td type="label" align="left">
            휴대폰
          </Td>
          <Td colSpan={2}>
            <Dropdown align="left" options={["LG U+ 알뜰폰"]} isRequired />
          </Td>
          <Td>
            <Input align="left" defaultValue="010-1234-5678" isRequired />
          </Td>
        </Tr>
        <Tr>
          <Td type="label" align="left">
            자택전화
          </Td>
          <Td>
            <Dropdown align="left" options={["유"]} isRequired />
          </Td>
          <Td colSpan={2}>
            <Input align="left" defaultValue="031-7009-1234" isRequired />
          </Td>
          <Td type="label" align="left">
            이메일
          </Td>
          <Td>
            <Input align="left" defaultValue="smarttest@nave.com" />
          </Td>
          <Td type="label" align="left">
            부동산보유
          </Td>
          <Td>
            <Dropdown align="left" options={["Y"]} isRequired />
          </Td>
          <Td type="label" align="left">
            군필
          </Td>
          <Td>
            <Dropdown align="left" options={["방위산업체"]} isRequired />
          </Td>
        </Tr>
        <Tr>
          <Td type="label" align="left">
            신청금액
          </Td>
          <Td colSpan={3}>
            <Input align="right" defaultValue="100,000,000" />
          </Td>
          <Td type="label" align="left">
            자금용도
          </Td>
          <Td>
            <Dropdown align="left" options={["자택구입목적"]} />
          </Td>
          <Td type="label" align="left">
            광고유형
          </Td>
          <Td colSpan={3}>
            <Dropdown align="left" options={["아파트"]} isRequired />
          </Td>
        </Tr>
        <Tr>
          <Td type="label" align="left" rowSpan={6}>
            주소
          </Td>
          <Td type="label" align="left" colSpan={2}>
            등본정보
          </Td>
          <Td colSpan={2}>
            <Dropdown align="left" options={["자가"]} isRequired />
          </Td>
          <Td>
            <Dropdown align="left" options={["아파트"]} isRequired />
          </Td>
          <Td colSpan={4}>
            <div className="flex gap-1 p-1">
              <Button
                label="등기부조회"
                variant="table-gray"
                onClick={() => {}}
              />
              <Button label="하동" variant="table-gray" onClick={() => {}} />
            </div>
          </Td>
        </Tr>
        <Tr>
          <Td type="label" align="left" colSpan={2}>
            번지
          </Td>
          <Td colSpan={2}>
            <Input align="left" defaultValue="123-456" />
          </Td>
          <Td colSpan={5}>
            <Input
              align="left"
              defaultValue="경기도 성남시 중원구 상대원동 5460 성남SKV1타워 A동 730호"
            />
          </Td>
        </Tr>
        <Tr>
          <Td type="label" align="left" colSpan={2}>
            도로명
          </Td>
          <Td colSpan={2}>
            <Input align="left" defaultValue="12345" />
          </Td>
          <Td colSpan={5}>
            <Input
              align="left"
              defaultValue="경기도 성남시 중원구 갈마치로 288 14  A-730"
            />
          </Td>
        </Tr>
        <Tr>
          <Td type="label" align="left" colSpan={2}>
            실거주지 정보
          </Td>
          <Td colSpan={2}>
            <Dropdown align="left" options={["전세"]} isRequired />
          </Td>
          <Td>
            <Dropdown align="left" options={["임대아파트"]} isRequired />
          </Td>
          <Td colSpan={4}>
            <div className="flex gap-1 p-1">
              <Button
                label="등기부조회"
                variant="table-gray"
                onClick={() => {}}
              />
              <Button label="상동" variant="table-gray" onClick={() => {}} />
            </div>
          </Td>
        </Tr>
        <Tr>
          <Td type="label" align="left" colSpan={2}>
            번지
          </Td>
          <Td colSpan={2}>
            <Input align="left" defaultValue="123-456" />
          </Td>
          <Td colSpan={5}>
            <Input
              align="left"
              defaultValue="경기도 성남시 중원구 상대원동 5460 성남SKV1타워 A동 730호"
            />
          </Td>
        </Tr>
        <Tr>
          <Td type="label" align="left" colSpan={2}>
            도로명
          </Td>
          <Td colSpan={2}>
            <Input align="left" defaultValue="12345" />
          </Td>
          <Td colSpan={5}>
            <Input
              align="left"
              defaultValue="경기도 성남시 중원구 갈마치로 288 14 A-730"
            />
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
