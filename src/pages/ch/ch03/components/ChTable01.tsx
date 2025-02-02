import PBTable from "../../../../components/table/PBTable";
import PBTbody from "../../../../components/table/PBTbody";
import PBTd from "../../../../components/table/PBTd";
import PBTr from "../../../../components/table/PBTr";

export default function ChTable01() {
  return (
    <PBTable minWidth={468} height={158} borderTop>
      <PBTbody>
        <PBTr>
          <PBTd type="label">사고구분</PBTd>
          <PBTd type="label">등록일자</PBTd>
          <PBTd type="label">계좌번호</PBTd>
          <PBTd type="label">진행상태</PBTd>
          <PBTd type="label">법원명</PBTd>
          <PBTd type="label">사건번호</PBTd>
        </PBTr>
        <PBTr>
          <PBTd type="text">입력</PBTd>
          <PBTd type="text">입력</PBTd>
          <PBTd type="text">123-12-12345678</PBTd>
          <PBTd type="text">입력</PBTd>
          <PBTd type="text">입력</PBTd>
          <PBTd type="text">입력</PBTd>
        </PBTr>
      </PBTbody>
    </PBTable>
  );
}
