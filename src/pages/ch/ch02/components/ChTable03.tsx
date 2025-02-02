import PBTable from "../../../../components/table/PBTable";
import PBTbody from "../../../../components/table/PBTbody";
import PBTd from "../../../../components/table/PBTd";
import PBTr from "../../../../components/table/PBTr";

export default function ChTable03() {
  return (
    <PBTable minWidth={468} borderTop>
      <PBTbody>
        <PBTr>
          <PBTd align="left" type="label">
            구분
          </PBTd>
          <PBTd type="label">계산금액</PBTd>
          <PBTd type="label">미징수처리</PBTd>
          <PBTd type="label">감면금액</PBTd>
          <PBTd type="label">상환금액</PBTd>
        </PBTr>
        <PBTr>
          <PBTd align="left" type="label">
            납입원금
          </PBTd>
          <PBTd type="text" align="right">
            0
          </PBTd>
          <PBTd type="text" align="right">
            0
          </PBTd>
          <PBTd type="text" align="right">
            0
          </PBTd>
          <PBTd type="text" align="right">
            0
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd align="left" type="label">
            환출이자
          </PBTd>
          <PBTd type="text" align="right">
            0
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
        </PBTr>
        <PBTr>
          <PBTd align="left" type="label">
            정상이자
          </PBTd>
          <PBTd type="text" align="right">
            100,000,000
          </PBTd>
          <PBTd type="text" align="right">
            100,000,000
          </PBTd>
          <PBTd type="text" align="right">
            0
          </PBTd>
          <PBTd type="text" align="right">
            100,000,000
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd align="left" type="label">
            연체료
          </PBTd>
          <PBTd type="text" align="right">
            100,000,000
          </PBTd>
          <PBTd type="text" align="right">
            0
          </PBTd>
          <PBTd type="text" align="right">
            100,000,000
          </PBTd>
          <PBTd type="text" align="right">
            0
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd align="left" type="label">
            연체이자
          </PBTd>
          <PBTd type="text" align="right">
            0
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
        </PBTr>
        <PBTr>
          <PBTd align="left" type="label">
            중도상환
          </PBTd>
          <PBTd type="text" align="right">
            0
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
        </PBTr>
        <PBTr>
          <PBTd align="left" type="label">
            미징수 정상이자
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
          <PBTd type="text" align="right">
            100,000,000
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd align="left" type="label">
            미징수 연체료
          </PBTd>
          <PBTd type="text" align="right">
            0
          </PBTd>
          <PBTd type="text" align="right">
            100,000,000
          </PBTd>
          <PBTd type="text" align="right">
            0
          </PBTd>
          <PBTd type="text" align="right">
            0
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd align="left" type="label">
            미징수 연체이자
          </PBTd>
          <PBTd type="text" align="right">
            100,000,000
          </PBTd>
          <PBTd type="text" align="right">
            100,000,000
          </PBTd>
          <PBTd type="text" align="right">
            0
          </PBTd>
          <PBTd type="text" align="right">
            100,000,000
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd align="left" type="label">
            누적과잉이자
          </PBTd>
          <PBTd type="text" align="right">
            0
          </PBTd>
          <PBTd type="text" align="right">
            0
          </PBTd>
          <PBTd type="text" align="right">
            100,000,000
          </PBTd>
          <PBTd type="text" align="right">
            0
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd align="left" type="label">
            발생과잉이자
          </PBTd>
          <PBTd type="text" align="right">
            100,000,000
          </PBTd>
          <PBTd type="text" align="right">
            0
          </PBTd>
          <PBTd type="text" align="right">
            0
          </PBTd>
          <PBTd type="text" align="right">
            0
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd align="left" type="label">
            합계
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
          <PBTd type="text" align="right">
            100,000,000
          </PBTd>
        </PBTr>
      </PBTbody>
    </PBTable>
  );
}
