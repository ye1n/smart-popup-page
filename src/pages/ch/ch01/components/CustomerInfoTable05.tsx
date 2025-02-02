import PBButton from "../../../../components/PBButton";
import PBDropdown from "../../../../components/PBDropdown";
import PBInput from "../../../../components/PBInput";
import PBTable from "../../../../components/table/PBTable";
import PBTbody from "../../../../components/table/PBTbody";
import PBTd from "../../../../components/table/PBTd";
import PBTr from "../../../../components/table/PBTr";

export default function CustomerInfoTable05() {
  return (
    <PBTable minWidth={1214} borderTop>
      <PBTbody>
        <PBTr>
          <PBTd align="left" type="label">
            상품명
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="애드론-자동대출" />
          </PBTd>
          <PBTd align="left" type="label">
            계좌상태
          </PBTd>
          <PBTd colSpan={2}>
            <PBInput align="left" defaultValue="입력" />
          </PBTd>
          <PBTd align="left" type="label">
            계좌관리상태
          </PBTd>
          <PBTd colSpan={2}>
            <PBDropdown
              align="left"
              options={[{ label: "기한이익상실", value: "" }]}
            />
          </PBTd>
          <PBTd align="left" type="label">
            자산건전성분류
          </PBTd>
          <PBTd colSpan={2}>
            <PBDropdown
              align="left"
              options={[{ label: "요주의", value: "" }]}
            />
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd align="left" type="label">
            여신계좌
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="123-12-1234567" />
          </PBTd>
          <PBTd align="left" type="label">
            대출일자/약정일
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="2024-01-01" />
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="10" />
          </PBTd>
          <PBTd align="left" type="label">
            최종이수일
          </PBTd>
          <PBTd colSpan={2}>
            <PBInput align="left" defaultValue="2024-01-01" />
          </PBTd>
          <PBTd align="left" type="label">
            최종입금일
          </PBTd>
          <PBTd colSpan={2}>
            <PBInput align="left" defaultValue="2024-01-01" />
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd align="left" type="label">
            가상계좌
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="123-12-1234567" />
          </PBTd>
          <PBTd align="left" type="label">
            만기일자(기간)
          </PBTd>
          <PBTd colSpan={2}>
            <PBInput align="left" defaultValue="(경과시 색표시)" isRequired />
          </PBTd>
          <PBTd align="left" type="label">
            차기상환일
          </PBTd>
          <PBTd colSpan={2}>
            <PBInput align="left" defaultValue="(경과시 색표시)" isRequired />
          </PBTd>
          <PBTd align="left" type="label">
            IFIS동기화
          </PBTd>
          <PBTd colSpan={2}>
            <div className="flex items-center mr-1">
              <PBInput align="left" defaultValue="2024-01-01" />
              <PBButton label="조회" variant="table-gray" onClick={() => {}} />
            </div>
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd align="left" type="label">
            사후관리계좌
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="123-12-1234567" />
          </PBTd>
          <PBTd align="left" type="label">
            대출금액
          </PBTd>
          <PBTd colSpan={2}>
            <PBInput align="right" defaultValue="100,000,000" />
          </PBTd>
          <PBTd align="left" type="label">
            소멸시효완성일
          </PBTd>
          <PBTd colSpan={2}>
            <div className="flex items-center mr-1">
              <PBInput align="left" defaultValue="2024-01-01" />
              <PBButton label="상세" variant="table-gray" onClick={() => {}} />
            </div>
          </PBTd>
          <PBTd align="left" type="label">
            납입원금
          </PBTd>
          <PBTd colSpan={2}>
            <PBInput align="right" defaultValue="100,000,000" />
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd align="left" type="label">
            자동이체연결계좌
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="123-12-1234567" />
          </PBTd>
          <PBTd align="left" type="label">
            대출잔액
          </PBTd>
          <PBTd colSpan={2}>
            <PBInput align="right" defaultValue="100,000,000" />
          </PBTd>
          <PBTd align="left" type="label">
            기한이익상실일
          </PBTd>
          <PBTd colSpan={2}>
            <PBInput align="left" defaultValue="(경과시 색표시)" isRequired />
          </PBTd>
          <PBTd align="left" type="label">
            납입이자
          </PBTd>
          <PBTd colSpan={2}>
            <PBInput align="right" defaultValue="100,000,000" />
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd align="left" type="label">
            CMS계좌
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="국민123-12-1234567" />
          </PBTd>
          <PBTd align="left" type="label">
            상환방법
          </PBTd>
          <PBTd colSpan={2}>
            <PBDropdown
              align="left"
              options={[{ label: "원리금균등", value: "" }]}
            />
          </PBTd>
          <PBTd align="left" type="label">
            상환회차/연체횟수
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="2회" />
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="10회" />
          </PBTd>
          <PBTd align="left" type="label">
            중도상환수수료율/금액
          </PBTd>
          <PBTd>
            <PBInput align="right" defaultValue="2.5%" />
          </PBTd>
          <PBTd>
            <PBInput align="right" defaultValue="100,000,000" />
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd align="left" type="label">
            CMS계좌상태
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="-" />
          </PBTd>
          <PBTd align="left" type="label">
            정상금리/연체금리
          </PBTd>
          <PBTd>
            <PBInput align="right" defaultValue="100,000,000" />
          </PBTd>
          <PBTd>
            <PBInput align="right" defaultValue="100,000,000" />
          </PBTd>
          <PBTd align="left" type="label">
            연체일수/실연체일
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="2일" />
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="10일(중앙회기준)" />
          </PBTd>
          <PBTd align="left" type="label">
            가지급금
          </PBTd>
          <PBTd colSpan={2}>
            <PBInput align="right" defaultValue="100,000,000" />
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd align="left" type="label">
            CMS재출금일자
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="2024-01-01" />
          </PBTd>
          <PBTd align="left" type="label">
            연체시작일
          </PBTd>
          <PBTd colSpan={2}>
            <PBInput align="left" defaultValue="2024-01-01" />
          </PBTd>
          <PBTd align="left" type="label">
            연체회차/최장연수
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="2회" />
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="10일" />
          </PBTd>
          <PBTd align="left" type="label">
            상환예정금액
          </PBTd>
          <PBTd colSpan={2}>
            <PBInput align="right" defaultValue="100,000,000" />
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd align="left" type="label">
            자금용도
          </PBTd>
          <PBTd>
            <PBDropdown
              align="left"
              options={[{ label: "생활자금", value: "" }]}
            />
          </PBTd>
          <PBTd align="left" type="label">
            사업자등록번호
          </PBTd>
          <PBTd colSpan={2}>
            <div className="flex items-center mr-1">
              <PBInput align="left" defaultValue="123-12-12345" />
              <PBButton label="조회" variant="table-gray" onClick={() => {}} />
            </div>
          </PBTd>
          <PBTd align="left" type="label">
            누적연체일수
          </PBTd>
          <PBTd colSpan={2}>
            <PBInput align="left" defaultValue="10" />
          </PBTd>
          <PBTd align="left" type="label">
            연체해소금액
          </PBTd>
          <PBTd colSpan={2}>
            <PBInput align="right" defaultValue="100,000,000" />
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd align="left" type="label">
            완제사유
          </PBTd>
          <PBTd>
            <PBDropdown
              align="left"
              options={[{ label: "자발적", value: "" }]}
            />
          </PBTd>
          <PBTd align="left" type="label">
            상환유형
          </PBTd>
          <PBTd colSpan={2}>
            <div className="flex items-center mr-1">
              <PBInput align="left" defaultValue="-" />
              <PBButton label="저장" variant="table-gray" onClick={() => {}} />
            </div>
          </PBTd>
          <PBTd align="left" type="label">
            완제방어
          </PBTd>
          <PBTd colSpan={2}>
            <PBDropdown align="left" options={[{ label: "성공", value: "" }]} />
          </PBTd>
          <PBTd align="left" type="label">
            완납예상금액
          </PBTd>
          <PBTd colSpan={2}>
            <PBInput align="right" defaultValue="100,000,000" />
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd align="left" type="label">
            추가대출가능여부
          </PBTd>
          <PBTd>
            <PBDropdown align="left" options={[{ label: "가능", value: "" }]} />
          </PBTd>
          <PBTd align="left" type="label">
            마케팅처리사유
          </PBTd>
          <PBTd colSpan={2}>
            <div className="flex items-center mr-1">
              <PBInput align="left" defaultValue="만기미달" />
              <PBButton label="저장" variant="table-gray" onClick={() => {}} />
            </div>
          </PBTd>
          <PBTd align="left" type="label">
            심사결재특이사항
          </PBTd>
          <PBTd colSpan={2}>
            <PBInput align="left" defaultValue="심사원장에서 끌고옴" />
          </PBTd>
          <PBTd align="left" type="label">
            저당해지
          </PBTd>
          <PBTd colSpan={2}>
            <PBDropdown align="left" options={[{ label: "수동", value: "" }]} />
          </PBTd>
        </PBTr>
      </PBTbody>
    </PBTable>
  );
}
