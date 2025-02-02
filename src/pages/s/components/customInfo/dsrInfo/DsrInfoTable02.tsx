import PBTable from "../../../../../components/table/PBTable";
import PBTbody from "../../../../../components/table/PBTbody";
import PBTd from "../../../../../components/table/PBTd";
import PBTr from "../../../../../components/table/PBTr";

export default function DsrInfoTable02() {
  return (
    <PBTable minWidth={1076} height={75} borderTop>
      <PBTbody>
        <PBTr>
          <PBTd type="label">DSR 기준일자</PBTd>
          <PBTd type="label">총대출 DSR 비율</PBTd>
          <PBTd type="label">기대출 DSR 비율</PBTd>
          <PBTd type="label">기대출 DSR 산출금액</PBTd>
          <PBTd type="label">대출금액</PBTd>
          <PBTd type="label">예상 DSR 결과</PBTd>
          <PBTd type="label">실질대환금액</PBTd>
          <PBTd type="label">대환 DSR 금액</PBTd>
          <PBTd type="label">차주단위DSR 적용여부</PBTd>
          <PBTd type="label">총 대출금액</PBTd>
        </PBTr>
        <PBTr>
          <PBTd type="text">2024-12-31</PBTd>
          <PBTd type="text" align="right">
            33.59295 %
          </PBTd>
          <PBTd type="text" align="right">
            11.84136 %
          </PBTd>
          <PBTd type="text" align="right">
            100,000,000
          </PBTd>
          <PBTd type="text" align="right">
            33.59296 %
          </PBTd>
          <PBTd type="text" align="right">
            100,000,000
          </PBTd>
          <PBTd type="text" align="right">
            100,000,000
          </PBTd>
          <PBTd type="text" align="right">
            100,000,000
          </PBTd>
          <PBTd type="text">해당없음</PBTd>
          <PBTd type="text" align="right">
            100,000,000
          </PBTd>
        </PBTr>
      </PBTbody>
    </PBTable>
  );
}
