import PBButton from "../../../../components/PBButton";
import PBInput from "../../../../components/PBInput";
import PBTable from "../../../../components/table/PBTable";
import PBTbody from "../../../../components/table/PBTbody";
import PBTd from "../../../../components/table/PBTd";
import PBTr from "../../../../components/table/PBTr";

export default function CustomerInfoTable02() {
  return (
    <PBTable minWidth={636}>
      <PBTbody>
        <PBTr>
          <PBTd align="left" type="label">
            직업구분
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="급여소득자 > 금융업" />
          </PBTd>
          <PBTd align="left" type="label">
            사업자번호
          </PBTd>
          <PBTd colSpan={2}>
            <div className="flex items-center mr-1">
              <PBInput align="left" defaultValue="입력" />
              <PBButton label="조회" variant="table-gray" onClick={() => {}} />
            </div>
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd align="left" type="label">
            직장명
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="스마트저축은행" />
          </PBTd>
          <PBTd align="left" type="label">
            근무상태
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="재직중" />
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="2024-01-01" />
          </PBTd>
        </PBTr>
      </PBTbody>
    </PBTable>
  );
}
