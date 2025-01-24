import Button from "../../components/Button";
import Dropdown from "../../components/Dropdown";
import Input from "../../components/Input";
import InputGroup from "../../components/InputGroup";
import { SSideMenuData, TopBtnData } from "../../data/Data";
import Icon from "../../components/Icon";
import { icons } from "../../constants/icons";
import Label from "../../components/Label";
import Tabs, { Tab } from "../../components/Tabs";
import IncomeInfoTable from "./components/IncomeInfoTable";
import Tbody from "../../components/table/Tbody";
import Tr from "../../components/table/Tr";
import Td from "../../components/table/Td";
import AgreeInfoTable from "./components/AgreeInfoTable";
import SideMenu from "../../components/common/SideMenu";
import { useState } from "react";
import BasicInfoTable from "./components/customInfo/basicInfo/BasicInfoTable";
import AssetsInfoTable from "./components/customInfo/assetsInfo/AssetsInfoTable";
import Table from "../../components/table/Table";
import DsrInfo from "./components/customInfo/dsrInfo/DsrInfo";
import Score from "./components/customInfo/score/Score";
import TransferInfo from "./components/customInfo/transferInfo/TransferInfo";

export default function S() {
  const customInfoTabs = [
    { id: "basicInfo", label: "기본정보" },
    { id: "assetsInfo", label: "자산정보" },
    { id: "dsrInfo", label: "DSR산출정보" },
    { id: "score", label: "스코어" },
    { id: "transferInfo", label: "송금정보" },
  ];

  const [activeTab, setActiveTab] = useState<Tab>(customInfoTabs[0]);

  return (
    <div className="flex">
      {/* 메인 */}
      <div className="grid grid-cols-1">
        {/* 메인상단 */}
        <div className="flex flex-col gap-4 p-4 bg-custom-bg">
          <div className="flex gap-6">
            <InputGroup label="고객명">
              <Input defaultValue="김저축" width={150} />
            </InputGroup>
            <InputGroup label="주민등록번호">
              <div className="flex gap-0.5">
                <Input defaultValue="900101-1234567" width={150} />
                <Input defaultValue="남 만 30세 (호랑이)" width={150} />
              </div>
            </InputGroup>
            <InputGroup label="상담상태">
              <Dropdown options={[{ label: "전체", value: "" }]} width={150} />
              <Button label="변경" onClick={() => {}} />
              <Input defaultValue="심사중" width={80} />
            </InputGroup>
            <InputGroup label="접수번호">
              <div className="flex gap-0.5">
                <Input defaultValue="202411210000251" width={150} />
                <Input defaultValue="신규" width={80} />
              </div>
              <Button label="식별정보 확인" onClick={() => {}} />
            </InputGroup>
          </div>
          <div className="grid grid-cols-8 gap-2 w-fit grid-rows-auto">
            {TopBtnData.map((item, index) => (
              <button
                key={index}
                className="flex items-center rounded shadow bg-custom-white w-[120px] h-[26px] px-2"
              >
                {item.icon && <item.icon className="w-5 h-5 mr-2" />}
                <p className="flex-1 text-[11px] font-medium text-custom-black">
                  {item.label}
                </p>
              </button>
            ))}
          </div>
        </div>
        {/* 메인하단 */}
        <div className="flex flex-col gap-4 p-4">
          <div className="flex items-center gap-2">
            <Table width={488} borderTop={false}>
              <Tbody>
                <Tr>
                  <Td type="gray-label" align="left">
                    <div className="flex items-center justify-between">
                      진행상태
                      <Icon icon={icons.arrRight} />
                    </div>
                  </Td>
                  <Td type="text" align="left">
                    진행
                  </Td>
                  <Td type="gray-label" align="left">
                    경과시간
                  </Td>
                  <Td type="text" align="left">
                    33일 23시간 58분
                  </Td>
                </Tr>
              </Tbody>
            </Table>
            <Button label="대출정보가져오기" onClick={() => {}} />
            <Button label="안심차단신청조회" onClick={() => {}} />
          </div>
          {/* 판정결과/신청정보 */}
          <div className="grid grid-cols-3 gap-6">
            {/* 판정결과 */}
            <div className="col-span-1">
              <Label label="판정결과" className="mb-2" />
              <Table minWidth={488}>
                <Tbody>
                  <Tr>
                    <Td type="label">판정</Td>
                    <Td type="label">금리</Td>
                    <Td type="label">한도</Td>
                    <Td type="label">판정일시</Td>
                  </Tr>
                  <Tr>
                    <Td type="text">승인</Td>
                    <Td type="text" align="right">
                      13.36%
                    </Td>
                    <Td type="text" align="right">
                      100,000,000
                    </Td>
                    <Td type="text">2024-12-31 23:33:45</Td>
                  </Tr>
                </Tbody>
              </Table>
            </div>
            {/* 신청정보 */}
            <div className="col-span-2">
              <Label label="신청정보" className="mb-2" />
              <Table minWidth={976}>
                <Tbody>
                  <Tr>
                    <Td type="label">SEG구분</Td>
                    <Td type="label">상품유형</Td>
                    <Td type="label">상품명</Td>
                    <Td type="label">채널</Td>
                    <Td type="label">채널상세</Td>
                    <Td type="label">SP업권 경험</Td>
                    <Td type="label">DSR대상</Td>
                    <Td type="label">적합성,적정성</Td>
                  </Tr>
                  <Tr>
                    <Td type="text">일반-테스트</Td>
                    <Td type="text">신용-일반</Td>
                    <Td type="text">애드론-S</Td>
                    <Td type="text">다이렉트</Td>
                    <Td type="text">카카오페이</Td>
                    <Td type="text">Y</Td>
                    <Td type="text">Y</Td>
                    <Td type="text">Y</Td>
                  </Tr>
                </Tbody>
              </Table>
            </div>
          </div>
          {/* 소득정보/차량정보 */}
          <div className="grid grid-cols-2 gap-6">
            {/* 소득정보 */}
            <div className="col-span-1">
              <Label label="소득정보" className="mb-2" />
              <Table minWidth={734}>
                <Tbody>
                  <Tr>
                    <Td type="label">플랫폼 제공소득</Td>
                    <Td type="label">증빙소득</Td>
                    <Td type="label">추정소득</Td>
                    <Td type="label">가처분소득</Td>
                    <Td type="label">연간원리금 상환금액</Td>
                    <Td type="label">재직기간</Td>
                  </Tr>
                  <Tr>
                    <Td type="text" align="right">
                      100,000,000
                    </Td>
                    <Td type="text" align="right">
                      100,000,000
                    </Td>
                    <Td type="text">애드론-S</Td>
                    <Td type="text" align="right">
                      100,000,000
                    </Td>
                    <Td type="text" align="right">
                      100,000,000
                    </Td>
                    <Td type="text">23년 11개월</Td>
                  </Tr>
                </Tbody>
              </Table>
            </div>
            {/* 차량정보 */}
            <div className="col-span-1">
              <Label label="차량정보" className="mb-2" />
              <Table minWidth={734}>
                <Tbody>
                  <Tr>
                    <Td type="label">담보순위</Td>
                    <Td type="label">차량명칭</Td>
                    <Td type="label">차량모델</Td>
                    <Td type="label">판정일시</Td>
                    <Td type="label">신차가격</Td>
                  </Tr>
                  <Tr>
                    <Td type="text">선순위</Td>
                    <Td type="text">-</Td>
                    <Td type="text">-</Td>
                    <Td type="text">2024-12-31 23:33:45</Td>
                    <Td type="text">입력</Td>
                  </Tr>
                </Tbody>
              </Table>
            </div>
          </div>
          {/* 고객정보/소득정보 */}
          <div className="grid grid-cols-2 gap-6">
            {/* 고객정보 */}
            <div className="flex flex-col col-span-1 gap-2">
              <Label label="고객정보" />
              <div className="flex justify-between">
                <Tabs
                  tabs={customInfoTabs}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
                <div className="flex gap-2">
                  <Button label="신분증 진위확인" onClick={() => {}} />
                  <Button label="KCB소유부동산" onClick={() => {}} />
                </div>
              </div>
              {activeTab.id === "basicInfo" ? (
                <BasicInfoTable />
              ) : activeTab.id === "assetsInfo" ? (
                <AssetsInfoTable />
              ) : activeTab.id === "dsrInfo" ? (
                <DsrInfo />
              ) : activeTab.id === "score" ? (
                <Score />
              ) : (
                <TransferInfo />
              )}
            </div>
            {/* 소득정보 */}
            <div className="flex flex-col col-span-1 gap-2">
              <Label label="소득정보" />
              <div className="h-[26px]">
                <Button label="건보료계산기" onClick={() => {}} />
              </div>
              <IncomeInfoTable />
            </div>
          </div>
          {/* 임대아파트정보 */}
          <div className="flex flex-col gap-2">
            <Label label="임대아파트정보" />
            <div className="flex gap-2">
              <Button label="신분증 진위확인" onClick={() => {}} />
              <Button label="담보정보" onClick={() => {}} />
              <Button label="채무상환능력" onClick={() => {}} />
              <Button label="당행거래내역 조회" onClick={() => {}} />
              <Button label="기업일보조회" onClick={() => {}} />
              <Button label="CSS 조회결과" onClick={() => {}} />
              <Button label="RCLIPS조회결과" onClick={() => {}} />
              <Button label="품의서 출력" onClick={() => {}} />
              <Button label="LTI계산" onClick={() => {}} />
              <Button label="제비용등록" onClick={() => {}} />
              <Button label="송금정보" onClick={() => {}} />
              <Button label="실행(기표)" onClick={() => {}} />
            </div>
          </div>
          {/* 약정정보 */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <Label label="약정정보" />
              <div className="flex gap-2">
                <Button label="약정정보 저장" onClick={() => {}} />
                <Button label="알람" onClick={() => {}} />
                <Button label="상환액계산기" onClick={() => {}} />
                <Button label="이기종계산기" onClick={() => {}} />
              </div>
            </div>
            <AgreeInfoTable />
          </div>
        </div>
      </div>
      {/* 사이드메뉴 */}
      <SideMenu data={SSideMenuData} />
      {/* 우측메모란 */}
      <div className="w-[268px] flex flex-col gap-4 m-4">
        {/* 메모 */}
        <div className="flex flex-col gap-2">
          <div className="flex items-start justify-between">
            <Label label="메모" />
            <Button label="등록" onClick={() => {}} />
          </div>
          <div className="flex gap-2">
            <Button label="심사" variant="white-outline" onClick={() => {}} />
            <Button
              label="제휴사통보"
              variant="white-outline"
              onClick={() => {}}
            />
          </div>
          <textarea className="w-[268px] h-[250px] border outline-none resize-none border-custom-form-line border-t-[#333333] text-xs text-custom-black p-2" />
        </div>
        {/* 문자발송 및 메모이력확인 */}
        <div className="flex flex-col h-full gap-2">
          <div className="flex items-start justify-between">
            <Label label="문자발송 및 메모이력확인" />
            <Button label="발송" onClick={() => {}} />
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              label="자동문자"
              variant="white-outline"
              onClick={() => {}}
            />
            <Button
              label="수동문자"
              variant="white-outline"
              onClick={() => {}}
            />
            <Button
              label="자동메모"
              variant="white-outline"
              onClick={() => {}}
            />
            <Button
              label="수동메모"
              variant="white-outline"
              onClick={() => {}}
            />
            <Button
              label="제휴사메모"
              variant="white-outline"
              onClick={() => {}}
            />
            <Button
              label="삭제메모"
              variant="white-outline"
              onClick={() => {}}
            />
            <Button
              label="전체메모"
              variant="white-outline"
              onClick={() => {}}
            />
            <Button
              label="삭제"
              variant="gray"
              onClick={() => {}}
              className=""
            />
          </div>
          <textarea className="w-[268px] h-full border outline-none resize-none border-custom-form-line border-t-[#333333] text-xs text-custom-black p-2" />
        </div>
      </div>
    </div>
  );
}
