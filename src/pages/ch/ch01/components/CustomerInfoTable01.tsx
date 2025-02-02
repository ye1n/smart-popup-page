import PBInput from "../../../../components/PBInput";
import PBTable from "../../../../components/table/PBTable";
import PBTbody from "../../../../components/table/PBTbody";
import PBTd from "../../../../components/table/PBTd";
import PBTr from "../../../../components/table/PBTr";

export default function CustomerInfoTable01() {
  return (
    <PBTable minWidth={636} borderTop>
      <PBTbody>
        <PBTr>
          <PBTd type="label">전화구분</PBTd>
          <PBTd type="label">번호</PBTd>
          <PBTd type="label">일반</PBTd>
          <PBTd type="label">추심</PBTd>
          <PBTd type="label">상태</PBTd>
          <PBTd type="label" colSpan={2}>
            비고
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd>
            <PBInput defaultValue="휴대전화" />
          </PBTd>
          <PBTd>
            <PBInput defaultValue="010-1234-5678" />
          </PBTd>
          <PBTd>
            <PBInput defaultValue="-" />
          </PBTd>
          <PBTd>
            <PBInput defaultValue="-" />
          </PBTd>
          <PBTd>
            <PBInput defaultValue="결번" />
          </PBTd>
          <PBTd colSpan={2}>
            <PBInput defaultValue="-" />
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd>
            <PBInput defaultValue="직장전화" />
          </PBTd>
          <PBTd>
            <PBInput defaultValue="031-1234-5678" />
          </PBTd>
          <PBTd>
            <PBInput defaultValue="-" />
          </PBTd>
          <PBTd>
            <PBInput defaultValue="-" />
          </PBTd>
          <PBTd>
            <PBInput defaultValue="정상" />
          </PBTd>
          <PBTd colSpan={2}>
            <PBInput defaultValue="-" />
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd>
            <PBInput defaultValue="기타전화" />
          </PBTd>
          <PBTd>
            <PBInput defaultValue="070-1234-5678" />
          </PBTd>
          <PBTd>
            <PBInput defaultValue="-" />
          </PBTd>
          <PBTd>
            <PBInput defaultValue="-" />
          </PBTd>
          <PBTd>
            <PBInput defaultValue="타인사용" />
          </PBTd>
          <PBTd colSpan={2}>
            <PBInput defaultValue="-" />
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd type="label">주소구분</PBTd>
          <PBTd type="label" colSpan={3}>
            주소
          </PBTd>
          <PBTd type="label">상태</PBTd>
          <PBTd type="label">소유구분</PBTd>
          <PBTd type="label">비고</PBTd>
        </PBTr>
        <PBTr>
          <PBTd>
            <PBInput defaultValue="실거주지" />
          </PBTd>
          <PBTd colSpan={3}>
            <PBInput defaultValue="경기도 성남시 중원구 갈마치로 288 14  A-730" />
          </PBTd>
          <PBTd>
            <PBInput defaultValue="거주" />
          </PBTd>
          <PBTd>
            <PBInput defaultValue="본인" />
          </PBTd>
          <PBTd>
            <PBInput defaultValue="-" />
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd>
            <PBInput defaultValue="등본주소" />
          </PBTd>
          <PBTd colSpan={3}>
            <PBInput defaultValue="-" />
          </PBTd>
          <PBTd>
            <PBInput defaultValue="미거주" />
          </PBTd>
          <PBTd>
            <PBInput defaultValue="부모님" />
          </PBTd>
          <PBTd>
            <PBInput defaultValue="-" />
          </PBTd>
        </PBTr>
        <PBTr>
          <PBTd>
            <PBInput defaultValue="직장주소" />
          </PBTd>
          <PBTd colSpan={3}>
            <PBInput defaultValue="-" />
          </PBTd>
          <PBTd>
            <PBInput defaultValue="-" />
          </PBTd>
          <PBTd>
            <PBInput defaultValue="-" />
          </PBTd>
          <PBTd>
            <PBInput defaultValue="-" />
          </PBTd>
        </PBTr>
      </PBTbody>
    </PBTable>
  );
}
