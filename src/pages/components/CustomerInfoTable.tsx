import Button from "../../components/Button";
import Dropdown from "../../components/Dropdown";
import Input from "../../components/Input";
import Td from "../../components/Td";

export default function CustomerInfoTable() {
  return (
    <div className="border-t border-t-[#333333]">
      <table className="w-full break-keep">
        <tbody>
          <tr>
            <Td type="label" align="left">
              고객명
            </Td>
            <Td colSpan={3}>
              <Input defaultValue="김저축" />
            </Td>
            <Td type="label" align="left">
              주민등록번호
            </Td>
            <Td>
              <Input defaultValue="입력" />
            </Td>
            <Td type="label" align="left">
              휴대폰
            </Td>
            <Td colSpan={2}>
              <Dropdown options={["LG U+ 알뜰폰"]} isRequired />
            </Td>
            <Td>
              <Input defaultValue="010-1234-5678" isRequired />
            </Td>
          </tr>
          <tr>
            <Td type="label" align="left">
              자택전화
            </Td>
            <Td>
              <Dropdown options={["유"]} isRequired />
            </Td>
            <Td colSpan={2}>
              <Input defaultValue="031-7009-1234" isRequired />
            </Td>
            <Td type="label" align="left">
              이메일
            </Td>
            <Td>
              <Input defaultValue="smarttest@nave.com" />
            </Td>
            <Td type="label" align="left">
              부동산보유
            </Td>
            <Td>
              <Dropdown options={["Y"]} isRequired />
            </Td>
            <Td type="label" align="left">
              군필
            </Td>
            <Td>
              <Dropdown options={["방위산업체"]} isRequired />
            </Td>
          </tr>
          <tr>
            <Td type="label" align="left">
              신청금액
            </Td>
            <Td colSpan={3}>
              <Input defaultValue="100,000,000" />
            </Td>
            <Td type="label" align="left">
              자금용도
            </Td>
            <Td>
              <Dropdown options={["자택구입목적"]} />
            </Td>
            <Td type="label" align="left">
              광고유형
            </Td>
            <Td colSpan={3}>
              <Dropdown options={["아파트"]} isRequired />
            </Td>
          </tr>
          <tr>
            <Td type="label" align="left" rowSpan={6}>
              주소
            </Td>
            <Td type="label" align="left" colSpan={2}>
              등본정보
            </Td>
            <Td colSpan={2}>
              <Dropdown options={["자가"]} isRequired />
            </Td>
            <Td>
              <Dropdown options={["아파트"]} isRequired />
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
          </tr>
          <tr>
            <Td type="label" align="left" colSpan={2}>
              번지
            </Td>
            <Td colSpan={2}>
              <Input defaultValue="123-456" />
            </Td>
            <Td colSpan={5}>
              <Input defaultValue="경기도 성남시 중원구 상대원동 5460 성남SKV1타워 A동 730호" />
            </Td>
          </tr>
          <tr>
            <Td type="label" align="left" colSpan={2}>
              도로명
            </Td>
            <Td colSpan={2}>
              <Input defaultValue="12345" />
            </Td>
            <Td colSpan={5}>
              <Input defaultValue="경기도 성남시 중원구 갈마치로 288 14  A-730" />
            </Td>
          </tr>
          <tr>
            <Td type="label" align="left" colSpan={2}>
              실거주지 정보
            </Td>
            <Td colSpan={2}>
              <Dropdown options={["전세"]} isRequired />
            </Td>
            <Td>
              <Dropdown options={["임대아파트"]} isRequired />
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
          </tr>
          <tr>
            <Td type="label" align="left" colSpan={2}>
              번지
            </Td>
            <Td colSpan={2}>
              <Input defaultValue="123-456" />
            </Td>
            <Td colSpan={5}>
              <Input
                align="left"
                defaultValue="경기도 성남시 중원구 상대원동 5460 성남SKV1타워 A동 730호"
              />
            </Td>
          </tr>
          <tr>
            <Td type="label" align="left" colSpan={2}>
              도로명
            </Td>
            <Td colSpan={2}>
              <Input defaultValue="12345" />
            </Td>
            <Td colSpan={5}>
              <Input
                align="left"
                defaultValue="경기도 성남시 중원구 갈마치로 288 14  A-730"
              />
            </Td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
