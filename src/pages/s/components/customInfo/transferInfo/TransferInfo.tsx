import Button from "../../../../../components/Button";
import Checkbox from "../../../../../components/Checkbox";
import Icon from "../../../../../components/Icon";
import Input from "../../../../../components/Input";
import Table from "../../../../../components/table/Table";
import Tbody from "../../../../../components/table/Tbody";
import Td from "../../../../../components/table/Td";
import Tr from "../../../../../components/table/Tr";
import { icons } from "../../../../../constants/icons";
import TransferInfoTable01 from "./TransferInfoTable01";
import TransferInfoTable02 from "./TransferInfoTable02";

export default function TransferInfo() {
  return (
    <div className="flex flex-col h-[298px] overflow-y-auto">
      <div className="mb-2">
        <div className="flex items-end justify-between mb-2">
          <p className="text-xs font-bold text-custom-black">CMS내역 (A)</p>
          <div className="flex gap-1">
            <Button
              variant="icon-white-outline"
              label=""
              icon={<Icon icon={icons.roundPlus} />}
              onClick={() => {}}
            />
            <Button
              variant="icon-white-outline"
              label=""
              icon={<Icon icon={icons.view} />}
              onClick={() => {}}
            />
            <Button
              variant="icon-white-outline"
              label=""
              icon={<Icon icon={icons.lock} />}
              onClick={() => {}}
            />
            <Button
              variant="icon-white-outline"
              label=""
              icon={<Icon icon={icons.unlock} />}
              onClick={() => {}}
            />
            <Button
              variant="icon-white-outline"
              label=""
              icon={<Icon icon={icons.edit} />}
              onClick={() => {}}
            />
            <Button
              variant="icon-white-outline"
              label=""
              icon={<Icon icon={icons.remove} />}
              onClick={() => {}}
            />
          </div>
        </div>
        <TransferInfoTable01 />
      </div>
      <div className="mb-[26px]">
        <div className="flex items-end justify-between mb-2">
          <p className="text-xs font-bold text-custom-black">계좌내역 (B)</p>
          <div className="flex gap-1">
            <Checkbox
              isChecked
              buttonStyle
              checkedColor="#ff9015"
              label="당행자체대환"
            />
            <Checkbox buttonStyle checkedColor="#ff9015" label="권리침해대환" />
            <Checkbox buttonStyle checkedColor="#ff9015" label="대환" />
            <Button
              variant="icon-white-outline"
              label=""
              icon={<Icon icon={icons.roundPlus} />}
              onClick={() => {}}
            />
            <Button
              variant="icon-white-outline"
              label=""
              icon={<Icon icon={icons.view} />}
              onClick={() => {}}
            />
            <Button
              variant="icon-white-outline"
              label=""
              icon={<Icon icon={icons.lock} />}
              onClick={() => {}}
            />
            <Button
              variant="icon-white-outline"
              label=""
              icon={<Icon icon={icons.unlock} />}
              onClick={() => {}}
            />
            <Button
              variant="icon-white-outline"
              label=""
              icon={<Icon icon={icons.edit} />}
              onClick={() => {}}
            />
            <Button
              variant="icon-white-outline"
              label=""
              icon={<Icon icon={icons.remove} />}
              onClick={() => {}}
            />
          </div>
        </div>
        <TransferInfoTable02 />
      </div>
      <table className="mb-4 border-t border-custom-form-line">
        <Tbody>
          <Tr>
            <Td type="label" align="left">
              보증보험 보증료(분할납부예상액)
            </Td>
            <Td>
              <Input align="right" defaultValue="5,730" isRequired readOnly />
            </Td>
            <Td type="label" align="left">
              보증실행 전문 결과 보증료
            </Td>
            <Td>
              <Input align="right" defaultValue="5,730" isRequired readOnly />
            </Td>
          </Tr>
        </Tbody>
      </table>
      <div className="mb-4">
        <div className="mb-2">
          <p className="text-xs font-bold text-custom-black">인지세 설정 (C)</p>
        </div>
        <Table>
          <Tbody>
            <Tr>
              <Td type="label" align="left">
                인지세
              </Td>
              <Td type="text" align="right">
                100,000,000
              </Td>
              <Td type="label" align="left">
                총 이체금액(A+B+C)
              </Td>
              <Td type="text" align="right">
                100,000,000
              </Td>
              <Td type="label" align="left">
                대출액
              </Td>
              <Td type="text" align="right">
                100,000,000
              </Td>
              <Td type="label" align="left">
                결과
              </Td>
              <Td type="text" align="left">
                완료
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
      <div>
        <div className="flex items-end justify-between mb-2">
          <p className="text-xs font-bold text-custom-black">기타정보</p>
          <Button
            variant="white-outline-shadow"
            label="NCCS자서대행"
            onClick={() => {}}
          />
        </div>
        <Table>
          <Tbody>
            <Tr>
              <Td type="label" align="left">
                공증/인감
              </Td>
              <Td type="text" colSpan={3}>
                <div className="flex items-center gap-4">
                  <Checkbox isChecked label="공증인증대상" />
                  <Checkbox label="공증대상" />
                  <Checkbox label="인감대상" />
                  <Checkbox label="소득증빙대상" />
                  <Checkbox label="CMS대상" />
                </div>
              </Td>
            </Tr>
            <Tr>
              <Td type="label" align="left">
                수령지주소
              </Td>
              <Td type="text" align="left" colSpan={3}>
                <Input
                  align="left"
                  defaultValue="경기도 성남시 중원구 갈마치로 288 14 A-730"
                />
              </Td>
            </Tr>
            <Tr>
              <Td type="label" align="left">
                CMS은행
              </Td>
              <Td type="text" align="left">
                <Input align="left" defaultValue="스마트저축은행" />
              </Td>
              <Td type="label" align="left">
                CMS계좌
              </Td>
              <Td type="text" align="left">
                <Input align="left" defaultValue=" 123456-789-00-45613" />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    </div>
  );
}
