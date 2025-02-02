import PBInput from "../../../../components/PBInput";
import PBTable from "../../../../components/table/PBTable";
import PBTbody from "../../../../components/table/PBTbody";
import PBTd from "../../../../components/table/PBTd";
import PBTr from "../../../../components/table/PBTr";

export default function ChTable01() {
  return (
    <PBTable minWidth={1205} borderTop>
      <PBTbody>
        <PBTr>
          <PBTd align="left" type="label">
            고객번호
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="입력" />
          </PBTd>
          <PBTd align="left" type="label">
            상품
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="입력" />
          </PBTd>
          <PBTd align="left" type="label">
            CMS/자동이체상태
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="입력" />
          </PBTd>
          <PBTd align="left" type="label">
            정상이율
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="입력" />
          </PBTd>
          <PBTd align="left" type="label">
            가지급금
          </PBTd>
          <PBTd>
            <PBInput align="right" defaultValue="100,000,000" />
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd align="left" type="label">
            휴대폰번호
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="입력" />
          </PBTd>
          <PBTd align="left" type="label">
            대출금액
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="입력" />
          </PBTd>
          <PBTd align="left" type="label">
            대출잔액
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="입력" />
          </PBTd>
          <PBTd align="left" type="label">
            연체이율
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="입력" />
          </PBTd>
          <PBTd align="left" type="label">
            계좌가수금
          </PBTd>
          <PBTd>
            <PBInput align="right" defaultValue="100,000,000" />
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd align="left" type="label">
            수신부금계좌
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="입력" />
          </PBTd>
          <PBTd align="left" type="label">
            만기일자
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="입력" />
          </PBTd>
          <PBTd align="left" type="label">
            가상계좌번호
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="입력" />
          </PBTd>
          <PBTd align="left" type="label">
            가상계좌처리
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="입력" />
          </PBTd>
          <PBTd align="left" type="label">
            요구불잔액
          </PBTd>
          <PBTd>
            <PBInput align="right" defaultValue="100,000,000" />
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd align="left" type="label">
            매회부금액
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="입력" />
          </PBTd>
          <PBTd align="left" type="label">
            연체일수
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="입력" />
          </PBTd>
          <PBTd align="left" type="label">
            차기원금납입일
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="입력" />
          </PBTd>
          <PBTd align="left" type="label">
            수납 후 결과
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="입력" />
          </PBTd>
          <PBTd align="left" type="label">
            별단예금잔액
          </PBTd>
          <PBTd>
            <PBInput align="right" defaultValue="100,000,000" />
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd align="left" type="label">
            최종이수일
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="입력" />
          </PBTd>
          <PBTd align="left" type="label">
            상환후차기이자납입일
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="입력" />
          </PBTd>
          <PBTd align="left" type="label">
            차진행/납입/연체 회차(원금/이자)
          </PBTd>
          <PBTd>
            <PBInput align="right" defaultValue="30/2" />
          </PBTd>
          <PBTd>
            <PBInput align="right" defaultValue="101/5" />
          </PBTd>
          <PBTd>
            <PBInput align="right" defaultValue="0/0" />
          </PBTd>
          <PBTd align="left" type="label">
            이자제한차감금액
          </PBTd>
          <PBTd>
            <PBInput align="right" defaultValue="100,000,000" />
          </PBTd>
        </PBTr>
      </PBTbody>
    </PBTable>
  );
}
