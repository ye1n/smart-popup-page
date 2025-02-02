import PBButton from "../../../../components/PBButton";
import PBCheckbox from "../../../../components/PBCheckbox";
import PBInput from "../../../../components/PBInput";
import PBTable from "../../../../components/table/PBTable";
import PBTbody from "../../../../components/table/PBTbody";
import PBTd from "../../../../components/table/PBTd";
import PBTr from "../../../../components/table/PBTr";

export default function CustomerInfoTable03() {
  return (
    <PBTable minWidth={554} borderTop>
      <PBTbody>
        <PBTr>
          <PBTd align="left" type="label">
            관리파트
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="리테일금융" />
          </PBTd>
          <PBTd align="left" type="label">
            <div className="flex items-center justify-between">
              담당자
              <button
                className="bg-custom-white w-[17px] h-[18px]"
                onClick={() => {}}
              >
                ?
              </button>
            </div>
          </PBTd>
          <PBTd colSpan={2}>
            <div className="flex items-center mr-1">
              <PBInput align="left" defaultValue="관리담당자" />
              <PBButton label="조회" variant="table-gray" onClick={() => {}} />
            </div>
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd align="left" type="label">
            현재배정그룹
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="1구간" />
          </PBTd>
          <PBTd align="left" type="label">
            이전배정그룹
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="PDS" />
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="2024-01-01" />
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd align="left" type="label">
            심사자
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="홍길동" />
          </PBTd>
          <PBTd align="left" type="label">
            <div className="flex items-center justify-between">
              마케팅
              <button
                className="bg-custom-white w-[17px] h-[18px]"
                onClick={() => {}}
              >
                ?
              </button>
            </div>
          </PBTd>
          <PBTd colSpan={2}>
            <div className="flex items-center justify-center mr-1">
              <PBInput align="left" defaultValue="추가담당자" />
              <PBCheckbox label="자동배정중지" />
            </div>
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd align="left" type="label">
            약속일시
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="2024-01-01" />
          </PBTd>
          <PBTd align="left" type="label">
            약속금액
          </PBTd>
          <PBTd colSpan={2}>
            <div className="flex items-center mr-1">
              <PBInput align="left" defaultValue="100,000,000" />
              <PBButton label="취소" variant="table-gray" onClick={() => {}} />
            </div>
          </PBTd>
        </PBTr>
      </PBTbody>
    </PBTable>
  );
}
