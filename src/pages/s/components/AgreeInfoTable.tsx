import PBDropdown from "../../../components/PBDropdown";
import PBInput from "../../../components/PBInput";
import PBTable from "../../../components/table/PBTable";
import PBTbody from "../../../components/table/PBTbody";
import PBTd from "../../../components/table/PBTd";
import PBTr from "../../../components/table/PBTr";

export default function AgreeInfoTable() {
  return (
    <PBTable minWidth={1492} borderTop>
      <PBTbody>
        <PBTr>
          <PBTd type="label" align="left">
            심사지점
          </PBTd>
          <PBTd colSpan={2}>
            <PBDropdown
              align="left"
              options={[{ label: "리테일금융본부", value: "" }]}
              isRequired
            />
          </PBTd>
          <PBTd type="label" align="left">
            상환방법
          </PBTd>
          <PBTd colSpan={2}>
            <PBDropdown
              align="left"
              options={[{ label: "원리금균등분할", value: "" }]}
              isRequired
            />
          </PBTd>
          <PBTd type="label" align="left">
            설정금액
          </PBTd>
          <PBTd>
            <PBInput align="right" defaultValue="100,000,000" isRequired />
          </PBTd>
          <PBTd type="label" align="left">
            설정방법
          </PBTd>
          <PBTd>
            <PBDropdown
              align="left"
              options={[{ label: "방문설정", value: "" }]}
              isRequired
            />
          </PBTd>
          <PBTd type="label" align="left">
            심사자
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="홍길동" isRequired />
          </PBTd>
          <PBTd type="label" align="left">
            결재자
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="김길동" isRequired />
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd type="label" align="left">
            납입예정원리금
          </PBTd>
          <PBTd colSpan={2}>
            <PBInput align="right" defaultValue="200,000,000" isRequired />
          </PBTd>
          <PBTd type="label" align="left">
            계약기간
          </PBTd>
          <PBTd colSpan={2}>
            <PBInput align="left" defaultValue="36개월" isRequired />
          </PBTd>
          <PBTd type="label" align="left">
            설정비
          </PBTd>
          <PBTd>
            <PBInput align="right" defaultValue="100,000,000" isRequired />
          </PBTd>
          <PBTd type="label" align="left">
            설정부대비용
          </PBTd>
          <PBTd>
            <PBInput align="right" defaultValue="100,000,000" isRequired />
          </PBTd>
          <PBTd type="label" align="left">
            약정인증방법
          </PBTd>
          <PBTd colSpan={3}>
            <PBDropdown
              align="left"
              options={[{ label: "완료(인증)", value: "" }]}
              isRequired
            />
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd type="label" align="left">
            분할상환금액(매회)
          </PBTd>
          <PBTd colSpan={2}>
            <PBInput align="right" defaultValue="200,000,000" isRequired />
          </PBTd>
          <PBTd type="label" align="left">
            이율/연체이율
          </PBTd>
          <PBTd>
            <PBInput align="right" defaultValue="19.9 %" isRequired />
          </PBTd>
          <PBTd>
            <PBInput align="right" defaultValue="2.5 %" isRequired />
          </PBTd>
          <PBTd type="label" align="left">
            담보한도(a)
          </PBTd>
          <PBTd>
            <PBInput align="right" defaultValue="100,000,000" isRequired />
          </PBTd>
          <PBTd type="label" align="left">
            신용한도(b)
          </PBTd>
          <PBTd>
            <PBInput align="right" defaultValue="100,000,000" isRequired />
          </PBTd>
          <PBTd type="label" align="left">
            결재상태
          </PBTd>
          <PBTd>
            <PBDropdown
              align="left"
              options={[{ label: "보류(연락두절)", value: "" }]}
              isRequired
            />
          </PBTd>
          <PBTd colSpan={2}>
            <PBDropdown
              align="left"
              options={[{ label: "결재상태 상세이유", value: "" }]}
              isRequired
            />
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd type="label" align="left">
            햇살론구분 정보
          </PBTd>
          <PBTd colSpan={2}>
            <PBDropdown
              align="left"
              options={[{ label: "긴급/생계", value: "" }]}
              isRequired
            />
          </PBTd>
          <PBTd type="label" align="left">
            조기상환수수료율
          </PBTd>
          <PBTd colSpan={2}>
            <PBInput align="right" defaultValue="0.5 %" isRequired />
          </PBTd>
          <PBTd type="label" align="left">
            대출금액(a+b)
          </PBTd>
          <PBTd colSpan={3}>
            <PBInput align="right" defaultValue="100,000,000" isRequired />
          </PBTd>
          <PBTd type="label" align="left">
            특이사항
          </PBTd>
          <PBTd colSpan={3}>
            <PBDropdown
              align="left"
              options={[{ label: "선택없음", value: "" }]}
              isRequired
            />
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd type="label" align="left">
            NCCS접수여부 및 청구지선택
          </PBTd>
          <PBTd>
            <PBDropdown
              align="left"
              options={[{ label: "NCCS접수", value: "" }]}
              isRequired
            />
          </PBTd>
          <PBTd>
            <PBDropdown
              align="left"
              options={[{ label: "자택", value: "" }]}
              isRequired
            />
          </PBTd>
          <PBTd type="label" align="left">
            약정일
          </PBTd>
          <PBTd colSpan={2}>
            <PBDropdown
              align="left"
              options={[{ label: "31", value: "" }]}
              isRequired
            />
          </PBTd>
          <PBTd type="label" align="left">
            금리/한도 가감사유
          </PBTd>
          <PBTd colSpan={3}>
            <PBDropdown
              align="left"
              options={[{ label: "소득불안정", value: "" }]}
              isRequired
            />
          </PBTd>
          <PBTd colSpan={4}>
            <PBInput defaultValue="전자서명완료값 표기" isRequired />
          </PBTd>
        </PBTr>
      </PBTbody>
    </PBTable>
  );
}
