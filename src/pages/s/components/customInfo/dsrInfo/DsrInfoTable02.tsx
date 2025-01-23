import Table from "../../../../../components/table/Table";
import Tbody from "../../../../../components/table/Tbody";
import Td from "../../../../../components/table/Td";
import Tr from "../../../../../components/table/Tr";

export default function DsrInfoTable02() {
  return (
    <Table minWidth={1076} height={75}>
      <Tbody>
        <Tr>
          <Td type="label">DSR 기준일자</Td>
          <Td type="label">총대출 DSR 비율</Td>
          <Td type="label">기대출 DSR 비율</Td>
          <Td type="label">기대출 DSR 산출금액</Td>
          <Td type="label">대출금액</Td>
          <Td type="label">예상 DSR 결과</Td>
          <Td type="label">실질대환금액</Td>
          <Td type="label">대환 DSR 금액</Td>
          <Td type="label">차주단위DSR 적용여부</Td>
          <Td type="label">총 대출금액</Td>
        </Tr>
        <Tr>
          <Td type="text">2024-12-31</Td>
          <Td type="text" align="right">
            33.59295 %
          </Td>
          <Td type="text" align="right">
            11.84136 %
          </Td>
          <Td type="text" align="right">
            100,000,000
          </Td>
          <Td type="text" align="right">
            33.59296 %
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
          <Td type="text">해당없음</Td>
          <Td type="text" align="right">
            100,000,000
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
