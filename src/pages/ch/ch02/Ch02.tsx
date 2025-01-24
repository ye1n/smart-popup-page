import { useState } from "react";
import Input from "../../../components/Input";
import InputGroup from "../../../components/InputGroup";
import Tabs, { Tab } from "../../../components/Tabs";
import Button from "../../../components/Button";
import Icon from "../../../components/Icon";
import { icons } from "../../../constants/icons";
import ChTable01 from "./components/ChTable01";
import ChTable02 from "./components/ChTable02";
import Dropdown from "../../../components/Dropdown";
import ChTable03 from "./components/ChTable03";
import Label from "../../../components/Label";
import Table from "../../../components/table/Table";
import Tbody from "../../../components/table/Tbody";
import Tr from "../../../components/table/Tr";
import Td from "../../../components/table/Td";

export default function Ch02() {
  const topTabs = [
    { id: "topTab01", label: "여신상환조회" },
    { id: "topTab02", label: "여신거래내역" },
    { id: "topTab03", label: "가상계좌거래내역" },
    { id: "topTab04", label: "가수/가지급금" },
    { id: "topTab05", label: "CMS" },
    { id: "topTab06", label: "과잉이자감면내역" },
    { id: "topTab07", label: "계좌별이율변경" },
    { id: "topTab08", label: "수신계좌거래내역" },
  ];

  const [activeTab, setActiveTab] = useState<Tab>(topTabs[0]);

  return (
    <div>
      {/* 메인상단 */}
      <div className="flex items-center gap-6 p-4 bg-custom-bg">
        <InputGroup label="고객명">
          <Input defaultValue="김저축" width={150} />
        </InputGroup>
        <InputGroup label="고객번호">
          <Input defaultValue="999011123456" width={150} />
        </InputGroup>
        <InputGroup label="대출번호">
          <Input defaultValue="9961760000005" width={150} />
        </InputGroup>
        <InputGroup label="가상계좌번호">
          <Input defaultValue="123-12-1234567-1234" width={150} />
        </InputGroup>
      </div>
      {/* 메인하단 */}
      <div className="flex flex-col gap-4 p-4">
        {/* section1 */}
        <Tabs
          tabs={topTabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          width={105}
        />
        {/* section2 */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between border-t bg-custom-form-bg border-[#333333] py-2 px-4">
            <div className="flex gap-8">
              <InputGroup label="상환구분">
                <Input align="left" defaultValue="10-원리금수납" width={128} />
              </InputGroup>
              <InputGroup label="상환금액">
                <Input align="right" defaultValue="100,000,000" width={100} />
              </InputGroup>
              <InputGroup label="상환원금">
                <Input align="right" defaultValue="100,000,000" width={100} />
              </InputGroup>
              <InputGroup label="회차">
                <Input align="left" defaultValue="30" width={44} />
              </InputGroup>
              <InputGroup label="기산일자">
                <Input
                  align="left"
                  defaultValue="2024-01-01"
                  width={128}
                  icon={<Icon icon={icons.calendar} />}
                  iconPosition="right"
                />
              </InputGroup>
              <InputGroup label="계산종료일">
                <Input
                  align="left"
                  defaultValue="2024-12-31"
                  width={128}
                  icon={<Icon icon={icons.calendar} />}
                  iconPosition="right"
                />
              </InputGroup>
            </div>
            <Button label="조회" onClick={() => {}} />
          </div>
          <ChTable01 />
        </div>
        {/* section3 */}
        <ChTable02 />
        {/* section4 */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-8 px-4 py-2 bg-custom-form-bg">
            <InputGroup label="약정일">
              <div className="flex items-center pr-1 bg-custom-white">
                <Dropdown
                  align="left"
                  options={[{ label: "31", value: "" }]}
                  width={66}
                />
                <Button
                  variant="table-gray"
                  label="약정일변경"
                  onClick={() => {}}
                />
              </div>
              <p className="font-bold text-[#d92222] text-[11px]">
                ※ 연계계좌처리금지
              </p>
            </InputGroup>
            <InputGroup label="연락처">
              <div className="flex gap-0.5">
                <Input defaultValue="010-1234-5678" width={100} />
                <Dropdown
                  align="left"
                  options={[{ label: "선택", value: "" }]}
                  width={150}
                />
              </div>
              <Button label="SMS발송" onClick={() => {}} />
            </InputGroup>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <ChTable03 />
            <div className="flex flex-col gap-4">
              {/* 가수금 */}
              <div>
                <Label label="가수금" className="mb-2" />
                <div className="flex items-center gap-2">
                  <Table width={546} borderTop={false}>
                    <Tbody>
                      <Tr>
                        <Td type="label" align="left">
                          가수금
                        </Td>
                        <Td>
                          <Input align="right" defaultValue="100,000,000" />
                        </Td>
                        <Td>
                          <Dropdown
                            align="left"
                            options={[{ label: "선택", value: "" }]}
                          />
                        </Td>
                        <Td type="label" align="left">
                          이동금액
                        </Td>
                        <Td>
                          <Input align="right" defaultValue="100,000,000" />
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                  <Button label="가수금 이동" onClick={() => {}} />
                </div>
              </div>
              {/* 가지급금 */}
              <div>
                <Label label="가지급금" className="mb-2" />
                <Table width={273} borderTop={false}>
                  <Tbody>
                    <Tr>
                      <Td type="label" align="left">
                        가지급금
                      </Td>
                      <Td>
                        <Input align="right" defaultValue="100,000,000" />
                      </Td>
                      <Td>
                        <Input align="right" defaultValue="100,000,000" />
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </div>
              {/* 요구불예금 */}
              <div>
                <Label label="요구불예금" className="mb-2" />
                <Table width={453} borderTop={false}>
                  <Tbody>
                    <Tr>
                      <Td type="label" align="left">
                        거래구분
                      </Td>
                      <Td>
                        <Dropdown
                          align="left"
                          options={[{ label: "선택", value: "" }]}
                        />
                      </Td>
                      <Td type="label" align="left">
                        연동/대체계좌
                      </Td>
                      <Td>
                        <Dropdown
                          align="left"
                          options={[{ label: "선택", value: "" }]}
                        />
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </div>
              {/* 상환처리 */}
              <div className="flex flex-col gap-2 ">
                <Label label="상환처리" />
                <div className="flex items-center gap-2">
                  <Table width={445} borderTop={false}>
                    <Tbody>
                      <Tr>
                        <Td type="label" align="left">
                          상환재원
                        </Td>
                        <Td>
                          <Dropdown
                            align="left"
                            options={[
                              { label: "채무자(관련인변제포함)", value: "" },
                            ]}
                          />
                        </Td>
                        <Td type="label" align="left">
                          부족금
                        </Td>
                        <Td>
                          <Input align="right" defaultValue="100,000,000" />
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                  <Button
                    variant="white-outline-shadow"
                    label="상환처리"
                    onClick={() => {}}
                  />
                  <Button label="CMS즉시출금" onClick={() => {}} />
                </div>
                <div className="flex items-end gap-2">
                  <Table width={180} borderTop={false}>
                    <Tbody>
                      <Tr>
                        <Td type="label" align="left">
                          상환적요
                        </Td>
                        <Td>
                          <Input align="left" defaultValue="입력" />
                        </Td>
                      </Tr>
                      <Tr>
                        <Td type="label" align="left">
                          미징수적요
                        </Td>
                        <Td>
                          <Input align="left" defaultValue="입력" />
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                  <div className="flex items-center gap-2">
                    <Table width={180} borderTop={false}>
                      <Tbody>
                        <Tr>
                          <Td type="label" align="left">
                            입금예약금액
                          </Td>
                          <Td>
                            <Input align="right" defaultValue="100,000,000" />
                          </Td>
                        </Tr>
                      </Tbody>
                    </Table>
                    <Button label="상환처리 예약" onClick={() => {}} />
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="inline-block bg-[#d9222219] rounded-[10px] py-0.5 px-2">
                    <p className="text-[10px] text-[#d92222]">
                      {`※ 부족금이 0보다 작거나 같은 경우 상환처리가 가능합니다. (단, 가수금 > 가지급금)`}
                    </p>
                  </div>
                  <div className="inline-block bg-custom-gray-1 bg-opacity-10 rounded-[10px] py-0.5 px-2">
                    <p className="text-[10px] text-custom-gray-1">
                      {`※ 상환총합계 (원금+이자+미징수-과잉-환출이자)`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
