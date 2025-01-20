import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import Input from "../components/Input";
import InputGroup from "../components/InputGroup";
import { SideMenuData, TopBtnData } from "../data/buttonData";
import { useState } from "react";
import Icon from "../components/Icon";
import { icons } from "../constants/icons";
import Label from "../components/Label";
import Tabs from "../components/Tabs";
import Table from "../components/Table";
import CustomerInfoTable from "./components/CustomerInfoTable";

export default function Page1() {
  const [selectedSideMenu, setSelectedSideMenu] = useState(0);
  const customInfoTabs = [
    { id: "basic", label: "기본정보" },
    { id: "assets", label: "자산정보" },
    { id: "dsr", label: "DSR산출정보" },
    { id: "score", label: "스코어" },
    { id: "transfer", label: "송금정보" },
  ];

  return (
    <div className="flex justify-between">
      {/* 메인화면 */}
      <div className="w-full">
        {/* 메인상단 */}
        <div className="flex flex-col gap-4 p-4 bg-custom-bg">
          {/* 메인상단 - 고객정보 */}
          <div className="flex gap-6">
            <InputGroup label="고객명">
              <Input defaultValue="김저축" width="w-[150px]" />
            </InputGroup>
            <InputGroup label="주민등록번호">
              <div className="flex gap-0.5">
                <Input defaultValue="900101-1234567" width="w-[150px]" />
                <Input defaultValue="남 만 30세 (호랑이)" width="w-[150px]" />
              </div>
            </InputGroup>
            <InputGroup label="상담상태">
              <div className="flex gap-2">
                <Dropdown options={["전체"]} width="w-[150px]" />
                <Button label="변경" onClick={() => {}} />
                <Input defaultValue="심사중" width="w-[80px]" />
              </div>
            </InputGroup>
            <InputGroup label="접수번호">
              <div className="flex gap-2">
                <div className="flex gap-0.5">
                  <Input defaultValue="202411210000251" width="w-[150px]" />
                  <Input defaultValue="신규" width="w-[80px]" />
                </div>
                <Button label="식별정보 확인" onClick={() => {}} />
              </div>
            </InputGroup>
          </div>
          {/* 메인하단 - 버튼목록 */}
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
          <div className="flex gap-2">
            <div className="flex border divide-x border-custom-form-line divide-custom-form-line">
              <div className="flex items-center justify-between bg-custom-form-bg w-[122px] h-[26px] p-2">
                <p className="text-xs text-black">진행상태</p>
                <Icon icon={icons.arrRight} />
              </div>
              <div className="flex items-center bg-custom-white w-[122px] h-[26px] p-2">
                <p className="text-xs text-black">진행</p>
              </div>
              <div className="flex items-center justify-between bg-custom-form-bg w-[122px] h-[26px] p-2">
                <p className="text-xs text-black">경과시간</p>
                <Icon icon={icons.arrRight} />
              </div>
              <div className="flex items-center bg-custom-white w-[122px] h-[26px] p-2">
                <p className="text-xs text-black">33일 23시간 58분</p>
              </div>
            </div>
            <Button label="대출정보가져오기" onClick={() => {}} />
            <Button label="안심차단신청조회" onClick={() => {}} />
          </div>
          {/* 판정결과/신청정보 */}
          <div className="flex gap-6">
            <div className="w-1/3">
              <Label label="판정결과" className="mb-2" />
              <Table
                colWidths={["15%", "25%", "25%", "35%"]}
                data={{
                  headers: ["판정", "금리", "한도", "판정일시"],
                  rows: [
                    ["승인", "13.36%", "100,000,000", "2024-12-31 23:33:45"],
                  ],
                }}
              />
            </div>
            <div className="w-2/3">
              <Label label="신청정보" className="mb-2" />
              <Table
                colWidths={[
                  "10%",
                  "10%",
                  "10%",
                  "10%",
                  "10%",
                  "10%",
                  "10%",
                  "10%",
                ]}
                data={{
                  headers: [
                    "SEG구분",
                    "상품유형",
                    "상품명",
                    "채널",
                    "채널상세",
                    "SP업권 경험",
                    "DSR대상",
                    "적합성,적정성",
                  ],
                  rows: [
                    [
                      "일반-테스트",
                      "신용-일반",
                      "애드론-S",
                      "다이렉트",
                      "카카오페이",
                      "Y",
                      "Y",
                      "Y",
                    ],
                  ],
                }}
              />
            </div>
          </div>
          {/* 소득정보/차량정보 */}
          <div className="flex gap-2">
            {/* 소득정보 */}
            <div className="w-1/2">
              <Label label="소득정보" className="mb-2" />
              <Table
                colWidths={["10%", "10%", "10%", "10%", "10%", "10%"]}
                data={{
                  headers: [
                    "플랫폼 제공소득",
                    "증빙소득",
                    "추정소득",
                    "가처분소득",
                    "연간원리금 상환금액",
                    "재직기간",
                  ],
                  rows: [
                    [
                      "100,000,000",
                      "100,000,000",
                      "애드론-S",
                      "100,000,000",
                      "100,000,000",
                      "23년 11개월",
                    ],
                  ],
                }}
              />
            </div>
            {/* 차량정보 */}
            <div className="w-1/2">
              <Label label="차량정보" className="mb-2" />
              <Table
                colWidths={["12%", "22%", "22%", "22%", "22%"]}
                data={{
                  headers: [
                    "담보순위",
                    "차량명칭",
                    "차량모델",
                    "판정일시",
                    "신차가격",
                  ],
                  rows: [["선순위", "-", "-", "2024-12-31 23:33:45", "입력"]],
                }}
              />
            </div>
          </div>
          {/* 고객정보/소득정보 */}
          <div className="flex gap-2">
            {/* 고객정보 */}
            <div className="flex flex-col w-1/2 gap-2">
              <Label label="고객정보" />
              <div className="flex items-center justify-between">
                <Tabs tabs={customInfoTabs} />
                <div className="flex gap-2">
                  <Button label="신분증 진위확인" onClick={() => {}} />
                  <Button label="KCB소유부동산" onClick={() => {}} />
                </div>
              </div>
              <CustomerInfoTable />
            </div>
            {/* 소득정보 */}
            <div className="flex flex-col w-1/2 gap-2">
              <Label label="소득정보" />
              <div>
                <Button label="건보료계산기" onClick={() => {}} />
              </div>
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
            <Label label="약정정보" />
            <div className="flex gap-2">
              <Button label="약정정보 저장" onClick={() => {}} />
              <Button label="알람" onClick={() => {}} />
              <Button label="상환액계산기" onClick={() => {}} />
              <Button label="이기종계산기" onClick={() => {}} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        {/* 사이드메뉴 */}
        <div className="shadow-lg w-20 h-fit bg-custom-white py-[10px] rounded-b-lg">
          <div className="flex flex-col divide-y border-y border-custom-btn-line divide-custom-btn-line">
            {SideMenuData.map((item, index) => (
              <div key={index} className="w-20">
                <button
                  key={index}
                  className={`w-full flex flex-col items-center justify-center rounded-lg h-[56px] transition ${
                    selectedSideMenu === index
                      ? "bg-custom-secondary shadow-inner text-custom-white"
                      : "bg-custom-white text-custom-black"
                  }`}
                  onClick={() => setSelectedSideMenu(index)}
                >
                  {item.icon && (
                    <Icon
                      icon={item.icon}
                      width="20"
                      height="20"
                      className="text-custom-white"
                    />
                  )}
                  <p className="text-xs whitespace-pre-wrap">{item.label}</p>
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* 우측메모란 */}
        <div className="w-[268px] p-4 flex flex-col gap-4">
          {/* 메모 */}
          <div className="flex flex-col w-full gap-2">
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
            <textarea className="w-full h-[250px] border outline-none resize-none border-custom-form-line border-t-[#333333] text-xs text-custom-black p-2" />
          </div>
          {/* 문자발송 및 메모이력확인 */}
          <div className="flex flex-col w-full gap-2">
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
            <textarea className="w-full h-[542px] border outline-none resize-none border-custom-form-line border-t-[#333333] text-xs text-custom-black p-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
