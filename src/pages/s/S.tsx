import PBButton from "../../components/PBButton";
import PBDropdown from "../../components/PBDropdown";
import PBInput from "../../components/PBInput";
import PBInputGroup from "../../components/PBInputGroup";
import { SSideMenuData, TopBtnData } from "../../data/Data";
import PBIcon from "../../components/PBIcon";
import { icons } from "../../constants/icons";
import PBLabel from "../../components/PBLabel";
import PBTabs, { Tab } from "../../components/PBTabs";
import IncomeInfoTable from "./components/IncomeInfoTable";
import PBTbody from "../../components/table/PBTbody";
import PBTr from "../../components/table/PBTr";
import PBTd from "../../components/table/PBTd";
import AgreeInfoTable from "./components/AgreeInfoTable";
import PBSideMenu from "../../components/common/PBSideMenu";
import { useState } from "react";
import BasicInfoTable from "./components/customInfo/basicInfo/BasicInfoTable";
import AssetsInfoTable from "./components/customInfo/assetsInfo/AssetsInfoTable";
import PBTable from "../../components/table/PBTable";
import DsrInfo from "./components/customInfo/dsrInfo/DsrInfo";
import Score from "./components/customInfo/score/Score";
import PBTransferInfo from "./components/customInfo/transferInfo/TransferInfo";

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
        <div className="flex flex-col gap-4 p-4 bg-pb-custom-bg">
          <div className="flex gap-6">
            <PBInputGroup label="고객명">
              <PBInput defaultValue="김저축" width={150} />
            </PBInputGroup>
            <PBInputGroup label="주민등록번호">
              <div className="flex gap-0.5">
                <PBInput defaultValue="900101-1234567" width={150} />
                <PBInput defaultValue="남 만 30세 (호랑이)" width={150} />
              </div>
            </PBInputGroup>
            <PBInputGroup label="상담상태">
              <PBDropdown
                options={[{ label: "전체", value: "" }]}
                width={150}
              />
              <PBButton label="변경" onClick={() => {}} />
              <PBInput defaultValue="심사중" width={80} />
            </PBInputGroup>
            <PBInputGroup label="접수번호">
              <div className="flex gap-0.5">
                <PBInput defaultValue="202411210000251" width={150} />
                <PBInput defaultValue="신규" width={80} />
              </div>
              <PBButton label="식별정보 확인" onClick={() => {}} />
            </PBInputGroup>
          </div>
          <div className="grid grid-cols-8 gap-2 w-fit grid-rows-auto">
            {TopBtnData.map((item, index) => (
              <button
                key={index}
                className="flex items-center rounded shadow bg-pb-custom-white w-[120px] h-[26px] px-2"
              >
                {item.icon && <item.icon className="w-5 h-5 mr-2" />}
                <p className="flex-1 text-[11px] font-medium text-pb-custom-black">
                  {item.label}
                </p>
              </button>
            ))}
          </div>
        </div>
        {/* 메인하단 */}
        <div className="flex flex-col gap-4 p-4">
          <div className="flex items-center gap-2">
            <PBTable width={488}>
              <PBTbody>
                <PBTr>
                  <PBTd type="gray-label" align="left">
                    <div className="flex items-center justify-between">
                      진행상태
                      <PBIcon icon={icons.arrRight} />
                    </div>
                  </PBTd>
                  <PBTd type="text" align="left">
                    진행
                  </PBTd>
                  <PBTd type="gray-label" align="left">
                    경과시간
                  </PBTd>
                  <PBTd type="text" align="left">
                    33일 23시간 58분
                  </PBTd>
                </PBTr>
              </PBTbody>
            </PBTable>
            <PBButton label="대출정보가져오기" onClick={() => {}} />
            <PBButton label="안심차단신청조회" onClick={() => {}} />
          </div>
          {/* 판정결과/신청정보 */}
          <div className="grid grid-cols-3 gap-6">
            {/* 판정결과 */}
            <div className="col-span-1">
              <PBLabel label="판정결과" className="mb-2" />
              <PBTable minWidth={488} borderTop>
                <PBTbody>
                  <PBTr>
                    <PBTd type="label">판정</PBTd>
                    <PBTd type="label">금리</PBTd>
                    <PBTd type="label">한도</PBTd>
                    <PBTd type="label">판정일시</PBTd>
                  </PBTr>
                  <PBTr>
                    <PBTd type="text">승인</PBTd>
                    <PBTd type="text" align="right">
                      13.36%
                    </PBTd>
                    <PBTd type="text" align="right">
                      100,000,000
                    </PBTd>
                    <PBTd type="text">2024-12-31 23:33:45</PBTd>
                  </PBTr>
                </PBTbody>
              </PBTable>
            </div>
            {/* 신청정보 */}
            <div className="col-span-2">
              <PBLabel label="신청정보" className="mb-2" />
              <PBTable minWidth={976} borderTop>
                <PBTbody>
                  <PBTr>
                    <PBTd type="label">SEG구분</PBTd>
                    <PBTd type="label">상품유형</PBTd>
                    <PBTd type="label">상품명</PBTd>
                    <PBTd type="label">채널</PBTd>
                    <PBTd type="label">채널상세</PBTd>
                    <PBTd type="label">SP업권 경험</PBTd>
                    <PBTd type="label">DSR대상</PBTd>
                    <PBTd type="label">적합성,적정성</PBTd>
                  </PBTr>
                  <PBTr>
                    <PBTd type="text">일반-테스트</PBTd>
                    <PBTd type="text">신용-일반</PBTd>
                    <PBTd type="text">애드론-S</PBTd>
                    <PBTd type="text">다이렉트</PBTd>
                    <PBTd type="text">카카오페이</PBTd>
                    <PBTd type="text">Y</PBTd>
                    <PBTd type="text">Y</PBTd>
                    <PBTd type="text">Y</PBTd>
                  </PBTr>
                </PBTbody>
              </PBTable>
            </div>
          </div>
          {/* 소득정보/차량정보 */}
          <div className="grid grid-cols-2 gap-6">
            {/* 소득정보 */}
            <div className="col-span-1">
              <PBLabel label="소득정보" className="mb-2" />
              <PBTable minWidth={734} borderTop>
                <PBTbody>
                  <PBTr>
                    <PBTd type="label">플랫폼 제공소득</PBTd>
                    <PBTd type="label">증빙소득</PBTd>
                    <PBTd type="label">추정소득</PBTd>
                    <PBTd type="label">가처분소득</PBTd>
                    <PBTd type="label">연간원리금 상환금액</PBTd>
                    <PBTd type="label">재직기간</PBTd>
                  </PBTr>
                  <PBTr>
                    <PBTd type="text" align="right">
                      100,000,000
                    </PBTd>
                    <PBTd type="text" align="right">
                      100,000,000
                    </PBTd>
                    <PBTd type="text">애드론-S</PBTd>
                    <PBTd type="text" align="right">
                      100,000,000
                    </PBTd>
                    <PBTd type="text" align="right">
                      100,000,000
                    </PBTd>
                    <PBTd type="text">23년 11개월</PBTd>
                  </PBTr>
                </PBTbody>
              </PBTable>
            </div>
            {/* 차량정보 */}
            <div className="col-span-1">
              <PBLabel label="차량정보" className="mb-2" />
              <PBTable minWidth={734} borderTop>
                <PBTbody>
                  <PBTr>
                    <PBTd type="label">담보순위</PBTd>
                    <PBTd type="label">차량명칭</PBTd>
                    <PBTd type="label">차량모델</PBTd>
                    <PBTd type="label">판정일시</PBTd>
                    <PBTd type="label">신차가격</PBTd>
                  </PBTr>
                  <PBTr>
                    <PBTd type="text">선순위</PBTd>
                    <PBTd type="text">-</PBTd>
                    <PBTd type="text">-</PBTd>
                    <PBTd type="text">2024-12-31 23:33:45</PBTd>
                    <PBTd type="text">입력</PBTd>
                  </PBTr>
                </PBTbody>
              </PBTable>
            </div>
          </div>
          {/* 고객정보/소득정보 */}
          <div className="grid grid-cols-2 gap-6">
            {/* 고객정보 */}
            <div className="flex flex-col col-span-1 gap-2">
              <PBLabel label="고객정보" />
              <div className="flex justify-between">
                <PBTabs
                  tabs={customInfoTabs}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
                <div className="flex gap-2">
                  <PBButton label="신분증 진위확인" onClick={() => {}} />
                  <PBButton label="KCB소유부동산" onClick={() => {}} />
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
                <PBTransferInfo />
              )}
            </div>
            {/* 소득정보 */}
            <div className="flex flex-col col-span-1 gap-2">
              <PBLabel label="소득정보" />
              <div className="h-[26px]">
                <PBButton label="건보료계산기" onClick={() => {}} />
              </div>
              <IncomeInfoTable />
            </div>
          </div>
          {/* 임대아파트정보 */}
          <div className="flex flex-col gap-2">
            <PBLabel label="임대아파트정보" />
            <div className="flex gap-2">
              <PBButton label="신분증 진위확인" onClick={() => {}} />
              <PBButton label="담보정보" onClick={() => {}} />
              <PBButton label="채무상환능력" onClick={() => {}} />
              <PBButton label="당행거래내역 조회" onClick={() => {}} />
              <PBButton label="기업일보조회" onClick={() => {}} />
              <PBButton label="CSS 조회결과" onClick={() => {}} />
              <PBButton label="RCLIPS조회결과" onClick={() => {}} />
              <PBButton label="품의서 출력" onClick={() => {}} />
              <PBButton label="LTI계산" onClick={() => {}} />
              <PBButton label="제비용등록" onClick={() => {}} />
              <PBButton label="송금정보" onClick={() => {}} />
              <PBButton label="실행(기표)" onClick={() => {}} />
            </div>
          </div>
          {/* 약정정보 */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <PBLabel label="약정정보" />
              <div className="flex gap-2">
                <PBButton label="약정정보 저장" onClick={() => {}} />
                <PBButton label="알람" onClick={() => {}} />
                <PBButton label="상환액계산기" onClick={() => {}} />
                <PBButton label="이기종계산기" onClick={() => {}} />
              </div>
            </div>
            <AgreeInfoTable />
          </div>
        </div>
      </div>
      {/* 사이드메뉴 */}
      <PBSideMenu data={SSideMenuData} />
      {/* 우측메모란 */}
      <div className="w-[268px] flex flex-col gap-4 m-4">
        {/* 메모 */}
        <div className="flex flex-col gap-2">
          <div className="flex items-start justify-between">
            <PBLabel label="메모" />
            <PBButton label="등록" onClick={() => {}} />
          </div>
          <div className="flex gap-2">
            <PBButton label="심사" variant="white-outline" onClick={() => {}} />
            <PBButton
              label="제휴사통보"
              variant="white-outline"
              onClick={() => {}}
            />
          </div>
          <textarea className="w-[268px] h-[250px] border outline-none resize-none border-pb-custom-form-line border-t-[#333333] text-xs text-pb-custom-black p-2" />
        </div>
        {/* 문자발송 및 메모이력확인 */}
        <div className="flex flex-col h-full gap-2">
          <div className="flex items-start justify-between">
            <PBLabel label="문자발송 및 메모이력확인" />
            <PBButton label="발송" onClick={() => {}} />
          </div>
          <div className="flex flex-wrap gap-2">
            <PBButton
              label="자동문자"
              variant="white-outline"
              onClick={() => {}}
            />
            <PBButton
              label="수동문자"
              variant="white-outline"
              onClick={() => {}}
            />
            <PBButton
              label="자동메모"
              variant="white-outline"
              onClick={() => {}}
            />
            <PBButton
              label="수동메모"
              variant="white-outline"
              onClick={() => {}}
            />
            <PBButton
              label="제휴사메모"
              variant="white-outline"
              onClick={() => {}}
            />
            <PBButton
              label="삭제메모"
              variant="white-outline"
              onClick={() => {}}
            />
            <PBButton
              label="전체메모"
              variant="white-outline"
              onClick={() => {}}
            />
            <PBButton
              label="삭제"
              variant="gray"
              onClick={() => {}}
              className=""
            />
          </div>
          <textarea className="w-[268px] h-full border outline-none resize-none border-pb-custom-form-line border-t-[#333333] text-xs text-pb-custom-black p-2" />
        </div>
      </div>
    </div>
  );
}
