import PBDropdown from "../../../../../components/PBDropdown";
import PBIcon from "../../../../../components/PBIcon";
import PBInput from "../../../../../components/PBInput";
import PBTable from "../../../../../components/table/PBTable";
import PBTbody from "../../../../../components/table/PBTbody";
import PBTd from "../../../../../components/table/PBTd";
import PBTr from "../../../../../components/table/PBTr";
import { icons } from "../../../../../constants/icons";

export default function AssetsInfoTable() {
  return (
    <PBTable minWidth={734} height={298} borderTop>
      <PBTbody>
        <PBTr>
          <PBTd type="label" align="left" rowSpan={8}>
            <div className="flex items-center gap-2">
              부동산 정보
              <button onClick={() => {}}>
                <PBIcon icon={icons.roundPlus} />
              </button>
            </div>
          </PBTd>
          <PBTd type="label" rowSpan={4}>
            1
          </PBTd>
          <PBTd type="label" colSpan={2}>
            형태
          </PBTd>
          <PBTd type="label">실거래가 (만원)</PBTd>
          <PBTd type="label">건물내역</PBTd>
          <PBTd type="label" colSpan={2}>
            총 저당금액(만원)
          </PBTd>
          <PBTd type="label">저당 건수</PBTd>
        </PBTr>
        <PBTr>
          <PBTd colSpan={2}>
            <PBInput defaultValue="아파트" />
          </PBTd>
          <PBTd>
            <PBInput align="right" defaultValue="100,000,000" />
          </PBTd>
          <PBTd>
            <PBInput align="right" defaultValue="㎡" />
          </PBTd>
          <PBTd colSpan={2}>
            <PBInput align="right" defaultValue="100,000,000" />
          </PBTd>
          <PBTd>
            <PBInput defaultValue="-" />
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd type="label" align="left">
            주소
          </PBTd>
          <PBTd colSpan={5}>
            <PBInput
              align="left"
              defaultValue="경기도 성남시 중원구 갈마치로 288번지 14 SKV1타워 A동 730호"
            />
          </PBTd>
          <PBTd rowSpan={2}>
            <PBDropdown
              height={52}
              options={[{ label: "실거주주소", value: "" }]}
            />
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd type="label" align="left">
            저당내용
          </PBTd>
          <PBTd colSpan={5}>
            <PBInput align="left" defaultValue="저당내용 직접입력" />
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd type="label" rowSpan={4}>
            2
          </PBTd>
          <PBTd type="label" colSpan={2}>
            형태
          </PBTd>
          <PBTd type="label">실거래가 (만원)</PBTd>
          <PBTd type="label">건물내역</PBTd>
          <PBTd type="label" colSpan={2}>
            총 저당금액(만원)
          </PBTd>
          <PBTd type="label">저당 건수</PBTd>
        </PBTr>
        <PBTr>
          <PBTd colSpan={2}>
            <PBInput defaultValue="아파트" />
          </PBTd>
          <PBTd>
            <PBInput align="right" defaultValue="100,000,000" />
          </PBTd>
          <PBTd>
            <PBInput align="right" defaultValue="㎡" />
          </PBTd>
          <PBTd colSpan={2}>
            <PBInput align="right" defaultValue="100,000,000" />
          </PBTd>
          <PBTd>
            <PBInput defaultValue="-" />
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd type="label" align="left">
            주소
          </PBTd>
          <PBTd colSpan={5}>
            <PBInput
              align="left"
              defaultValue="경기도 성남시 중원구 갈마치로 288번지 14 SKV1타워 A동 730호"
            />
          </PBTd>
          <PBTd rowSpan={2}>
            <PBDropdown
              height={52}
              options={[{ label: "신규주소", value: "" }]}
            />
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd type="label" align="left">
            저당내용
          </PBTd>
          <PBTd colSpan={5}>
            <PBInput align="left" defaultValue="저당내용 직접입력" />
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd type="label" align="left" colSpan={3}>
            차량정보
          </PBTd>
          <PBTd colSpan={2}>
            <PBInput align="left" defaultValue="유" />
          </PBTd>
          <PBTd type="label" align="left" colSpan={2}>
            차량번호
          </PBTd>
          <PBTd colSpan={2}>
            <PBInput align="left" defaultValue="서울 12가 3456" />
          </PBTd>
        </PBTr>
      </PBTbody>
    </PBTable>
  );
}
