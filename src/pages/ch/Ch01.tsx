import { useState } from "react";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import SideMenu from "../../components/common/SideMenu";
import Dropdown from "../../components/Dropdown";
import Icon from "../../components/Icon";
import Input from "../../components/Input";
import InputGroup from "../../components/InputGroup";
import Label from "../../components/Label";
import Table from "../../components/table/Table";
import Tbody from "../../components/table/Tbody";
import Td from "../../components/table/Td";
import Tr from "../../components/table/Tr";
import Tabs, { Tab } from "../../components/Tabs";
import { icons } from "../../constants/icons";
import { ChSideMenuData } from "../../data/Data";
import AccountListTable from "./components/AccountListTable";
import CustomerInfoTable01 from "./components/CustomerInfoTable01";
import CustomerInfoTable02 from "./components/CustomerInfoTable02";
import CustomerInfoTable03 from "./components/CustomerInfoTable03";
import CustomerInfoTable04 from "./components/CustomerInfoTable04";
import CustomerInfoTable05 from "./components/CustomerInfoTable05";
import Radio from "../../components/Radio";

export default function Ch01() {
  const counselTabs = [
    { id: "tab01", label: "업무요청" },
    { id: "tab02", label: "SMS발송" },
  ];

  const [activeTab, setActiveTab] = useState<Tab>(counselTabs[0]);

  const openPopup = (route: string) => {
    const width = 1280;
    const height = 720;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;
    const windowFeatures = `width=${width},height=${height},left=${left},top=${top},scrollbars=no,resizable=no`;
    window.open(route, "_blank", windowFeatures);
  };

  return (
    <div className="flex pr-4">
      {/* 메인 */}
      <div>
        {/* 메인상단 */}
        <div className="grid grid-cols-3 gap-6 p-4 bg-custom-bg">
          <div className="flex items-center col-span-2 gap-6">
            <InputGroup>
              <div className="flex gap-0.5">
                <Input defaultValue="김저축" width={150} />
                <Input defaultValue="900101-1234567" width={150} />
                <Input defaultValue="남 만 30세 (호랑이)" width={150} />
              </div>
            </InputGroup>
            <InputGroup label="고객번호">
              <div className="flex items-center gap-0.5">
                <Input defaultValue="202411210000251" width={150} />
                <Button
                  label="?"
                  variant="white-outline-shadow"
                  onClick={() => {}}
                />
                <Input defaultValue="개인" width={80} />
              </div>
              <Button label="고객통합뷰" onClick={() => {}} />
              <Button label="채권관리히스토리" onClick={() => {}} />
            </InputGroup>
          </div>
          <div className="flex items-center col-span-1 gap-6">
            <InputGroup label="채널상세">
              <Input defaultValue="채널명" width={150} />
            </InputGroup>
            <InputGroup label="IVR">
              <Input defaultValue="IVR연결종류" width={150} />
            </InputGroup>
          </div>
        </div>
        {/* 메인하단 */}
        <div className="grid grid-cols-3 gap-6 p-4">
          {/* 좌측 */}
          <div className="flex flex-col col-span-2 gap-4">
            <div className="grid grid-cols-2 gap-7">
              <div className="flex items-center gap-2 border-t bg-custom-form-bg border-[#333333] py-2 px-4">
                <div className="bg-[#d92222] h-[24px] text-custom-white text-xs px-2 py-1 cursor-default">
                  경매
                </div>
                <div className="bg-[#d92222] h-[24px] text-custom-white text-xs px-2 py-1 cursor-default">
                  개인희생
                </div>
              </div>
              <Table>
                <Tbody>
                  <Tr>
                    <Td type="gray-label" align="left">
                      <div className="flex items-center justify-between">
                        BS생성일
                        <Icon icon={icons.arrRight} />
                      </div>
                    </Td>
                    <Td type="text" align="left">
                      2024-01-01
                    </Td>
                    <Td type="gray-label" align="left">
                      추가대출한도
                    </Td>
                    <Td type="text" align="right">
                      100,000,000
                    </Td>
                    <Td type="text" align="left">
                      _등급
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </div>
            {/* 고객정보 */}
            <div className="flex flex-col gap-2">
              <Label label="고객정보" />
              <div className="grid grid-cols-2 gap-7">
                <div className="flex flex-col gap-2">
                  <CustomerInfoTable01 />
                  <CustomerInfoTable02 />
                </div>
                <div className="flex flex-col gap-2">
                  <CustomerInfoTable03 />
                  <CustomerInfoTable04 />
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <Button label="증명서" onClick={() => {}} />
                <Button label="사고관리" onClick={() => openPopup("/ch3")} />
                <Button label="송무관리" onClick={() => {}} />
              </div>
              <div className="flex gap-2">
                <Button label="KCB부동산" onClick={() => {}} />
                <Button label="부동산등기부조회" onClick={() => {}} />
                <Button label="추가대출거절이력" onClick={() => {}} />
                <Button label="조기경보" onClick={() => {}} />
                <Button label="민원관리" onClick={() => {}} />
                <Button label="우편이력" onClick={() => {}} />
                <Button label="우편발송" onClick={() => {}} />
                <Button label="금융재기상담" onClick={() => {}} />
                <Button label="접촉금지설정" onClick={() => {}} />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between px-4 py-2 bg-custom-form-bg">
                <div className="flex items-center gap-4">
                  <div className="flex gap-8">
                    <InputGroup label="회수등급">
                      <Input defaultValue="2" width={33} />
                    </InputGroup>
                    <InputGroup label="회수난이도">
                      <Input defaultValue="5" width={33} />
                    </InputGroup>
                  </div>
                  <Button label="IFIS사후관리상태" onClick={() => {}} />
                </div>
                <div className="flex gap-2">
                  <Button label="SMS금지" onClick={() => {}} />
                  <Button label="DM금지" onClick={() => {}} />
                  <Radio buttonStyle label="특수채권" isChecked />
                  <Checkbox
                    buttonStyle
                    isChecked
                    checkedColor="#ff9015"
                    label="안내전화금지"
                  />
                  <Checkbox
                    buttonStyle
                    checkedColor="#ff9015"
                    label="만기연장1차상담완료"
                  />
                  <Checkbox
                    buttonStyle
                    checkedColor="#ff9015"
                    label="권리침해안내제외"
                  />
                  <Checkbox
                    buttonStyle
                    checkedColor="#ff9015"
                    label="가상계좌자동중지"
                  />
                </div>
              </div>
              <CustomerInfoTable05 />
              <div className="flex gap-2">
                <Button label="온라인" onClick={() => openPopup("/ch2")} />
                <Button label="거래내역" onClick={() => {}} />
                <Button label="심사원장" onClick={() => {}} />
                <Button label="부동산담보" onClick={() => {}} />
                <Button label="차량정보" onClick={() => {}} />
                <Button label="특수채권" onClick={() => {}} />
                <Button label="자서대행" onClick={() => {}} />
                <Button label="약정일변경" onClick={() => {}} />
                <Button label="금리인하" onClick={() => {}} />
                <Button label="만기연장" onClick={() => {}} />
                <Button label="채무조정신청" onClick={() => {}} />
              </div>
            </div>
            {/* 계좌목록 */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <Label label="계좌목록" />
                <div className="flex items-center gap-2">
                  <Checkbox buttonStyle label="해지포함 (해지건수: 10)" />
                  <Table width={244} borderTop={false}>
                    <Tbody>
                      <Tr>
                        <Td type="gray-label" align="left">
                          잔액합계
                        </Td>
                        <Td type="text" align="left">
                          100,000,000
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </div>
              </div>
              <AccountListTable />
            </div>
          </div>
          {/* 우측 */}
          <div className="flex flex-col col-span-1 gap-4">
            <div className="flex gap-2">
              <Button label="마케팅동의이력" onClick={() => {}} />
              <Button label="약관동의이력" onClick={() => {}} />
            </div>
            <Table minWidth={522} borderTop={false}>
              <Tbody>
                <Tr>
                  <Td type="label">부재</Td>
                  <Td type="label">접촉문자</Td>
                  <Td type="label">접촉통화</Td>
                  <Td type="label">접촉우편</Td>
                  <Td type="label">금일접촉</Td>
                  <Td type="label">금주추심</Td>
                </Tr>
                <Tr>
                  <Td type="text">2</Td>
                  <Td type="text">45</Td>
                  <Td type="text">0</Td>
                  <Td type="text">103</Td>
                  <Td type="text">0</Td>
                  <Td type="text">
                    <p className="text-[#fb5a28] font-bold">9</p>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
            {/* 상담이력 */}
            <div className="flex flex-col gap-2">
              <Label label="상담이력" />
              <div className="flex items-center gap-2">
                <Checkbox buttonStyle label="전체" />
                <Checkbox buttonStyle label="최근 6개월" />
                <Checkbox buttonStyle label="고객기준" />
                <Checkbox buttonStyle label="문자포함" />
                <Checkbox buttonStyle label="자동포함" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Input
                    defaultValue=""
                    align="left"
                    width={122}
                    className="border"
                    placeholder="검색"
                    icon={<Icon icon={icons.search} />}
                    iconPosition="right"
                  />
                  <Input
                    defaultValue=""
                    align="left"
                    width={122}
                    className="border"
                    placeholder="상담구분검색"
                    icon={<Icon icon={icons.search} />}
                    iconPosition="right"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Button label="엑셀" onClick={() => {}} />
                  <Button label="조회" onClick={() => {}} />
                </div>
              </div>
              <Table minWidth={522} borderTop={false}>
                <Tbody>
                  <Tr>
                    <Td type="label">등록일시</Td>
                    <Td type="label">등록자</Td>
                    <Td type="label">약속일시</Td>
                    <Td type="label">약속금액</Td>
                    <Td type="label">상담구분</Td>
                  </Tr>
                  <Tr>
                    <Td type="text">2024-10-01 23:23</Td>
                    <Td type="text">홍길동</Td>
                    <Td type="text">2024-10-01 23:23</Td>
                    <Td type="text" align="right">
                      100,000,000
                    </Td>
                    <Td type="text">연체통화</Td>
                  </Tr>
                  <Tr>
                    <Td colSpan={5}>
                      <textarea className="block w-full p-2 text-xs outline-none resize-none text-custom-black" />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td type="text">2024-10-01 23:23</Td>
                    <Td type="text">홍길동</Td>
                    <Td type="text">2024-10-01 23:23</Td>
                    <Td type="text" align="right">
                      100,000,000
                    </Td>
                    <Td type="text">연체통화</Td>
                  </Tr>
                  <Tr>
                    <Td colSpan={5}>
                      <textarea className="block w-full p-2 text-xs outline-none resize-none text-custom-black" />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td type="text">2024-10-01 23:23</Td>
                    <Td type="text">홍길동</Td>
                    <Td type="text">2024-10-01 23:23</Td>
                    <Td type="text" align="right">
                      100,000,000
                    </Td>
                    <Td type="text">연체통화</Td>
                  </Tr>
                  <Tr>
                    <Td colSpan={5}>
                      <textarea className="block w-full p-2 text-xs outline-none resize-none text-custom-black" />
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </div>
            {/* 회수메모 */}
            <div className="flex flex-col gap-2">
              <div className="flex items-start justify-between">
                <Label label="회수메모" />
                <Button label="등록" onClick={() => {}} />
              </div>
              <textarea className="w-full h-[120px] border outline-none resize-none border-custom-form-line border-t-[#333333] text-xs text-custom-black p-2" />
            </div>
            {/* 상담등록 */}
            <div className="flex flex-col gap-2">
              <Label label="상담등록" />
              <div className="flex justify-between">
                <Tabs
                  tabs={counselTabs}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
                <Button label="등록" onClick={() => {}} />
              </div>
              <Table minWidth={522} borderTop={false}>
                <Tbody>
                  <Tr>
                    <Td type="label" align="left">
                      상담구분
                    </Td>
                    <Td colSpan={3}>
                      <Dropdown
                        align="left"
                        options={[{ label: "선택", value: "" }]}
                      />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td type="label" align="left">
                      중요도
                    </Td>
                    <Td>
                      <Dropdown
                        align="left"
                        options={[{ label: "선택", value: "" }]}
                      />
                    </Td>
                    <Td type="label" align="left">
                      통화자
                    </Td>
                    <Td>
                      <Dropdown
                        align="left"
                        options={[{ label: "선택", value: "" }]}
                      />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td type="label" align="left">
                      약속일시
                    </Td>
                    <Td>
                      <Input align="left" defaultValue="2024-01-01" />
                    </Td>
                    <Td type="label" align="left">
                      약속금액
                    </Td>
                    <Td>
                      <Input align="right" defaultValue="100,000,000" />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td colSpan={4}>
                      <textarea className="block w-full h-[120px] outline-none resize-none text-xs text-custom-black p-2" />
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
      {/* 사이드메뉴 */}
      <SideMenu data={ChSideMenuData} />
    </div>
  );
}
