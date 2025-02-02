import PBButton from "../../../../../components/PBButton";
import PBDropdown from "../../../../../components/PBDropdown";
import PBIcon from "../../../../../components/PBIcon";
import PBInput from "../../../../../components/PBInput";
import PBTable from "../../../../../components/table/PBTable";
import PBTbody from "../../../../../components/table/PBTbody";
import PBTd from "../../../../../components/table/PBTd";
import PBTr from "../../../../../components/table/PBTr";
import { icons } from "../../../../../constants/icons";

export default function BasicInfoTable() {
  return (
    <PBTable minWidth={734} height={298} borderTop>
      <PBTbody>
        <PBTr>
          <PBTd type="label" align="left">
            고객명
          </PBTd>
          <PBTd colSpan={3}>
            <div className="flex items-center justify-between">
              <PBInput align="left" defaultValue="김저축" className="flex-1" />
              <div className="flex gap-1 pr-1">
                <PBIcon icon={icons.tableIcon01} className="bg-custom-gray-3" />
                <PBIcon icon={icons.tableIcon02} className="bg-custom-gray-3" />
                <PBIcon icon={icons.tableIcon03} className="bg-custom-gray-3" />
              </div>
            </div>
          </PBTd>
          <PBTd type="label" align="left">
            주민등록번호
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="입력" />
          </PBTd>
          <PBTd type="label" align="left">
            휴대폰
          </PBTd>
          <PBTd colSpan={2}>
            <PBDropdown
              align="left"
              options={[{ label: "LG U+ 알뜰폰", value: "" }]}
              isRequired
            />
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="010-1234-5678" isRequired />
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd type="label" align="left">
            자택전화
          </PBTd>
          <PBTd>
            <PBDropdown
              align="left"
              options={[{ label: "유", value: "" }]}
              isRequired
            />
          </PBTd>
          <PBTd colSpan={2}>
            <PBInput align="left" defaultValue="031-7009-1234" isRequired />
          </PBTd>
          <PBTd type="label" align="left">
            이메일
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="smarttest@nave.com" />
          </PBTd>
          <PBTd type="label" align="left">
            부동산보유
          </PBTd>
          <PBTd>
            <PBDropdown
              align="left"
              options={[{ label: "Y", value: "" }]}
              isRequired
            />
          </PBTd>
          <PBTd type="label" align="left">
            군필
          </PBTd>
          <PBTd>
            <PBDropdown
              align="left"
              options={[{ label: "방위산업체", value: "" }]}
              isRequired
            />
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd type="label" align="left">
            신청금액
          </PBTd>
          <PBTd colSpan={3}>
            <PBInput align="right" defaultValue="100,000,000" />
          </PBTd>
          <PBTd type="label" align="left">
            자금용도
          </PBTd>
          <PBTd>
            <PBDropdown
              align="left"
              options={[{ label: "자택구입목적", value: "" }]}
            />
          </PBTd>
          <PBTd type="label" align="left">
            광고유형
          </PBTd>
          <PBTd colSpan={3}>
            <PBDropdown
              align="left"
              options={[{ label: "아파트", value: "" }]}
              isRequired
            />
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd type="label" align="left" rowSpan={6}>
            주소
          </PBTd>
          <PBTd type="label" align="left" colSpan={2}>
            등본정보
          </PBTd>
          <PBTd colSpan={2}>
            <PBDropdown
              align="left"
              options={[{ label: "자가", value: "" }]}
              isRequired
            />
          </PBTd>
          <PBTd>
            <PBDropdown
              align="left"
              options={[{ label: "아파트", value: "" }]}
              isRequired
            />
          </PBTd>
          <PBTd colSpan={4}>
            <div className="flex gap-1 p-1">
              <PBButton
                label="등기부조회"
                variant="table-gray"
                onClick={() => {}}
              />
              <PBButton label="하동" variant="table-gray" onClick={() => {}} />
            </div>
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd type="label" align="left" colSpan={2}>
            번지
          </PBTd>
          <PBTd colSpan={2}>
            <PBInput align="left" defaultValue="123-456" />
          </PBTd>
          <PBTd colSpan={5}>
            <PBInput
              align="left"
              defaultValue="경기도 성남시 중원구 상대원동 5460 성남SKV1타워 A동 730호"
            />
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd type="label" align="left" colSpan={2}>
            도로명
          </PBTd>
          <PBTd colSpan={2}>
            <PBInput align="left" defaultValue="12345" />
          </PBTd>
          <PBTd colSpan={5}>
            <PBInput
              align="left"
              defaultValue="경기도 성남시 중원구 갈마치로 288 14  A-730"
            />
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd type="label" align="left" colSpan={2}>
            실거주지 정보
          </PBTd>
          <PBTd colSpan={2}>
            <PBDropdown
              align="left"
              options={[{ label: "전세", value: "" }]}
              isRequired
            />
          </PBTd>
          <PBTd>
            <PBDropdown
              align="left"
              options={[{ label: "임대아파트", value: "" }]}
              isRequired
            />
          </PBTd>
          <PBTd colSpan={4}>
            <div className="flex gap-1 p-1">
              <PBButton
                label="등기부조회"
                variant="table-gray"
                onClick={() => {}}
              />
              <PBButton label="상동" variant="table-gray" onClick={() => {}} />
            </div>
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd type="label" align="left" colSpan={2}>
            번지
          </PBTd>
          <PBTd colSpan={2}>
            <PBInput align="left" defaultValue="123-456" />
          </PBTd>
          <PBTd colSpan={5}>
            <PBInput
              align="left"
              defaultValue="경기도 성남시 중원구 상대원동 5460 성남SKV1타워 A동 730호"
            />
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd type="label" align="left" colSpan={2}>
            도로명
          </PBTd>
          <PBTd colSpan={2}>
            <PBInput align="left" defaultValue="12345" />
          </PBTd>
          <PBTd colSpan={5}>
            <PBInput
              align="left"
              defaultValue="경기도 성남시 중원구 갈마치로 288 14 A-730"
            />
          </PBTd>
        </PBTr>
      </PBTbody>
    </PBTable>
  );
}
