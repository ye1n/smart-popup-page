import Table from "../../../../components/table/Table";
import Tbody from "../../../../components/table/Tbody";
import Td from "../../../../components/table/Td";
import Tr from "../../../../components/table/Tr";

export default function ChTable03() {
  return (
    <Table minWidth={468}>
      <Tbody>
        <Tr>
          <Td align="left" type="label">
            구분
          </Td>
          <Td type="label">계산금액</Td>
          <Td type="label">미징수처리</Td>
          <Td type="label">감면금액</Td>
          <Td type="label">상환금액</Td>
        </Tr>
        <Tr>
          <Td align="left" type="label">
            납입원금
          </Td>
          <Td type="text" align="right">
            0
          </Td>
          <Td type="text" align="right">
            0
          </Td>
          <Td type="text" align="right">
            0
          </Td>
          <Td type="text" align="right">
            0
          </Td>
        </Tr>
        <Tr>
          <Td align="left" type="label">
            환출이자
          </Td>
          <Td type="text" align="right">
            0
          </Td>
          <Td type="text" align="right">
            100,000,000
          </Td>
          <Td type="text" align="right">
            100,000,000
          </Td>
          <Td type="text" align="right">
            100,000,000
          </Td>
        </Tr>
        <Tr>
          <Td align="left" type="label">
            정상이자
          </Td>
          <Td type="text" align="right">
            100,000,000
          </Td>
          <Td type="text" align="right">
            100,000,000
          </Td>
          <Td type="text" align="right">
            0
          </Td>
          <Td type="text" align="right">
            100,000,000
          </Td>
        </Tr>
        <Tr>
          <Td align="left" type="label">
            연체료
          </Td>
          <Td type="text" align="right">
            100,000,000
          </Td>
          <Td type="text" align="right">
            0
          </Td>
          <Td type="text" align="right">
            100,000,000
          </Td>
          <Td type="text" align="right">
            0
          </Td>
        </Tr>
        <Tr>
          <Td align="left" type="label">
            연체이자
          </Td>
          <Td type="text" align="right">
            0
          </Td>
          <Td type="text" align="right">
            100,000,000
          </Td>
          <Td type="text" align="right">
            100,000,000
          </Td>
          <Td type="text" align="right">
            100,000,000
          </Td>
        </Tr>
        <Tr>
          <Td align="left" type="label">
            중도상환
          </Td>
          <Td type="text" align="right">
            0
          </Td>
          <Td type="text" align="right">
            100,000,000
          </Td>
          <Td type="text" align="right">
            100,000,000
          </Td>
          <Td type="text" align="right">
            100,000,000
          </Td>
        </Tr>
        <Tr>
          <Td align="left" type="label">
            미징수 정상이자
          </Td>
          <Td type="text" align="right">
            100,000,000
          </Td>
          <Td type="text" align="right">
            100,000,000
          </Td>
          <Td type="text" align="right">
            100,000,000
          </Td>
          <Td type="text" align="right">
            100,000,000
          </Td>
        </Tr>
        <Tr>
          <Td align="left" type="label">
            미징수 연체료
          </Td>
          <Td type="text" align="right">
            0
          </Td>
          <Td type="text" align="right">
            100,000,000
          </Td>
          <Td type="text" align="right">
            0
          </Td>
          <Td type="text" align="right">
            0
          </Td>
        </Tr>
        <Tr>
          <Td align="left" type="label">
            미징수 연체이자
          </Td>
          <Td type="text" align="right">
            100,000,000
          </Td>
          <Td type="text" align="right">
            100,000,000
          </Td>
          <Td type="text" align="right">
            0
          </Td>
          <Td type="text" align="right">
            100,000,000
          </Td>
        </Tr>
        <Tr>
          <Td align="left" type="label">
            누적과잉이자
          </Td>
          <Td type="text" align="right">
            0
          </Td>
          <Td type="text" align="right">
            0
          </Td>
          <Td type="text" align="right">
            100,000,000
          </Td>
          <Td type="text" align="right">
            0
          </Td>
        </Tr>
        <Tr>
          <Td align="left" type="label">
            발생과잉이자
          </Td>
          <Td type="text" align="right">
            100,000,000
          </Td>
          <Td type="text" align="right">
            0
          </Td>
          <Td type="text" align="right">
            0
          </Td>
          <Td type="text" align="right">
            0
          </Td>
        </Tr>
        <Tr>
          <Td align="left" type="label">
            합계
          </Td>
          <Td type="text" align="right">
            100,000,000
          </Td>
          <Td type="text" align="right">
            100,000,000
          </Td>
          <Td type="text" align="right">
            100,000,000
          </Td>
          <Td type="text" align="right">
            100,000,000
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
