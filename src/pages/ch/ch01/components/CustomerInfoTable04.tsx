import PBInput from "../../../../components/PBInput";
import PBTable from "../../../../components/table/PBTable";
import PBTbody from "../../../../components/table/PBTbody";
import PBTd from "../../../../components/table/PBTd";
import PBTr from "../../../../components/table/PBTr";

export default function CustomerInfoTable04() {
  return (
    <PBTable minWidth={554}>
      <PBTbody>
        <PBTr>
          <PBTd align="left" type="label">
            상품명
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="상품명" />
          </PBTd>
          <PBTd align="left" type="label">
            여신계좌
          </PBTd>
          <PBTd colSpan={2}>
            <PBInput align="left" defaultValue="입력" />
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd align="left" type="label">
            계좌상태
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="입력" />
          </PBTd>
          <PBTd align="left" type="label">
            가상계좌
          </PBTd>
          <PBTd colSpan={2}>
            <PBInput align="left" defaultValue="입력" />
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd align="left" type="label">
            대출금액
          </PBTd>
          <PBTd>
            <PBInput align="right" defaultValue="100,000,000" />
          </PBTd>
          <PBTd align="left" type="label">
            연결수신계좌
          </PBTd>
          <PBTd colSpan={2}>
            <PBInput align="left" defaultValue="입력" />
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd align="left" type="label">
            대출잔액
          </PBTd>
          <PBTd>
            <PBInput align="right" defaultValue="100,000,000" />
          </PBTd>
          <PBTd align="left" type="label">
            계좌관리상태
          </PBTd>
          <PBTd colSpan={2}>
            <PBInput align="left" defaultValue="입력" />
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd align="left" type="label">
            담보번호
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="입력" />
          </PBTd>
          <PBTd align="left" type="label">
            처분정보
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="처분" />
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="수익매각" />
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd align="left" type="label">
            압류건수
          </PBTd>
          <PBTd>
            <PBInput align="left" defaultValue="입력" />
          </PBTd>
          <PBTd align="left" type="label">
            원부조회일자
          </PBTd>
          <PBTd colSpan={2}>
            <PBInput align="left" defaultValue="입력" />
          </PBTd>
        </PBTr>
      </PBTbody>
    </PBTable>
  );
}
