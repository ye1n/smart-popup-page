import { useState } from "react";
import AccountListTable from "./components/AccountListTable";
import CustomerInfoTable01 from "./components/CustomerInfoTable01";
import CustomerInfoTable02 from "./components/CustomerInfoTable02";
import CustomerInfoTable03 from "./components/CustomerInfoTable03";
import CustomerInfoTable04 from "./components/CustomerInfoTable04";
import CustomerInfoTable05 from "./components/CustomerInfoTable05";
import PBInputGroup from "../../../components/PBInputGroup";
import PBInput from "../../../components/PBInput";
import PBTd from "../../../components/table/PBTd";
import PBTbody from "../../../components/table/PBTbody";
import PBTable from "../../../components/table/PBTable";
import PBTr from "../../../components/table/PBTr";
import PBIcon from "../../../components/PBIcon";
import { icons } from "../../../constants/icons";
import PBButton from "../../../components/PBButton";
import PBCheckbox from "../../../components/PBCheckbox";
import PBLabel from "../../../components/PBLabel";
import PBDropdown from "../../../components/PBDropdown";
import PBSideMenu from "../../../components/common/PBSideMenu";
import { ChSideMenuData } from "../../../data/Data";
import PBTabs, { Tab } from "../../../components/PBTabs";
import PBRadio from "../../../components/PBRadio";
import PBBadge from "../../../components/PBBadge";
import PBTextarea from "../../../components/PBTextarea";

export default function Ch01() {
  const counselTabs = [
    { id: "tab01", label: "업무요청" },
    { id: "tab02", label: "SMS발송" },
  ];

  const [activeTab, setActiveTab] = useState<Tab>(counselTabs[0]);

  const openPopup = (route: string) => {
    const width = 1280;
    const height = 860;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;
    const windowFeatures = `width=${width},height=${height},left=${left},top=${top},scrollbars=no,resizable=no`;
    window.open(route, "_blank", windowFeatures);
  };

  return (
    <div className="flex pr-4">
      {/* 메인 */}
      <div>
        {/* 메인(파란색 영역) */}
        <div className="grid grid-cols-7 gap-6 p-4 bg-pb-custom-bg">
          <div className="flex items-center col-span-5 gap-6">
            <PBInputGroup>
              <div className="flex gap-0.5">
                <PBInput defaultValue="김저축" width={150} />
                <PBInput defaultValue="900101-1234567" width={150} />
                <PBInput defaultValue="남 만 30세 (호랑이)" width={150} />
              </div>
            </PBInputGroup>
            <PBInputGroup label="고객번호">
              <div className="flex items-center gap-0.5">
                <PBInput defaultValue="202411210000251" width={150} />
                <PBButton
                  label="?"
                  variant="white-outline-shadow"
                  onClick={() => {}}
                />
                <PBInput defaultValue="개인" width={80} />
              </div>
              <PBButton label="고객통합뷰" onClick={() => {}} />
              <PBButton label="채권관리히스토리" onClick={() => {}} />
            </PBInputGroup>
          </div>
          <div className="flex items-center col-span-2 gap-6">
            <PBInputGroup label="채널상세">
              <PBInput defaultValue="채널명" width={150} />
            </PBInputGroup>
            <PBInputGroup label="IVR">
              <PBInput defaultValue="IVR연결종류" width={150} />
            </PBInputGroup>
          </div>
        </div>
        {/* 메인(흰색 영역) */}
        <div className="grid grid-cols-7 gap-6 p-4">
          {/* 좌측 */}
          <div className="flex flex-col col-span-5 gap-4">
            <div className="grid grid-cols-2 gap-7">
              <div className="flex items-center gap-2 border-t bg-pb-custom-form-bg border-[#333333] py-2 px-4">
                <PBBadge text="경매" />
                <PBBadge text="개인희생" />
              </div>
              <PBTable borderTop>
                <PBTbody>
                  <PBTr>
                    <PBTd type="gray-label" align="left">
                      <div className="flex items-center justify-between">
                        BS생성일
                        <PBIcon icon={icons.arrRight} />
                      </div>
                    </PBTd>
                    <PBTd type="text" align="left">
                      2024-01-01
                    </PBTd>
                    <PBTd type="gray-label" align="left">
                      추가대출한도
                    </PBTd>
                    <PBTd type="text" align="right">
                      100,000,000
                    </PBTd>
                    <PBTd type="text" align="left">
                      _등급
                    </PBTd>
                  </PBTr>
                </PBTbody>
              </PBTable>
            </div>
            {/* 고객정보 */}
            <div className="flex flex-col gap-2">
              <PBLabel label="고객정보" />
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
                <PBButton label="증명서" onClick={() => {}} />
                <PBButton label="사고관리" onClick={() => openPopup("/ch3")} />
                <PBButton label="송무관리" onClick={() => {}} />
              </div>
              <div className="flex gap-2">
                <PBButton label="KCB부동산" onClick={() => {}} />
                <PBButton label="부동산등기부조회" onClick={() => {}} />
                <PBButton label="추가대출거절이력" onClick={() => {}} />
                <PBButton label="조기경보" onClick={() => {}} />
                <PBButton label="민원관리" onClick={() => {}} />
                <PBButton label="우편이력" onClick={() => {}} />
                <PBButton label="우편발송" onClick={() => {}} />
                <PBButton label="금융재기상담" onClick={() => {}} />
                <PBButton label="접촉금지설정" onClick={() => {}} />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between px-4 py-2 bg-pb-custom-form-bg">
                <div className="flex items-center gap-4">
                  <div className="flex gap-8">
                    <PBInputGroup label="회수등급">
                      <PBInput defaultValue="2" width={33} />
                    </PBInputGroup>
                    <PBInputGroup label="회수난이도">
                      <PBInput defaultValue="5" width={33} />
                    </PBInputGroup>
                  </div>
                  <PBButton label="IFIS사후관리상태" onClick={() => {}} />
                </div>
                <div className="flex gap-2">
                  <PBButton label="SMS금지" onClick={() => {}} />
                  <PBButton label="DM금지" onClick={() => {}} />
                  <PBRadio buttonStyle label="특수채권" isChecked />
                  <PBCheckbox
                    buttonStyle
                    isChecked
                    checkedColor="#ff9015"
                    label="안내전화금지"
                  />
                  <PBCheckbox
                    buttonStyle
                    checkedColor="#ff9015"
                    label="만기연장1차상담완료"
                  />
                  <PBCheckbox
                    buttonStyle
                    checkedColor="#ff9015"
                    label="권리침해안내제외"
                  />
                  <PBCheckbox
                    buttonStyle
                    checkedColor="#ff9015"
                    label="가상계좌자동중지"
                  />
                </div>
              </div>
              <CustomerInfoTable05 />
              <div className="flex gap-2">
                <PBButton label="온라인" onClick={() => openPopup("/ch2")} />
                <PBButton label="거래내역" onClick={() => {}} />
                <PBButton label="심사원장" onClick={() => {}} />
                <PBButton label="부동산담보" onClick={() => {}} />
                <PBButton label="차량정보" onClick={() => {}} />
                <PBButton label="특수채권" onClick={() => {}} />
                <PBButton label="자서대행" onClick={() => {}} />
                <PBButton label="약정일변경" onClick={() => {}} />
                <PBButton label="금리인하" onClick={() => {}} />
                <PBButton label="만기연장" onClick={() => {}} />
                <PBButton label="채무조정신청" onClick={() => {}} />
              </div>
            </div>
            {/* 계좌목록 */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <PBLabel label="계좌목록" />
                <div className="flex items-center gap-2">
                  <PBCheckbox buttonStyle label="해지포함 (해지건수: 10)" />
                  <PBTable width={244}>
                    <PBTbody>
                      <PBTr>
                        <PBTd type="gray-label" align="left">
                          잔액합계
                        </PBTd>
                        <PBTd type="text" align="left">
                          100,000,000
                        </PBTd>
                      </PBTr>
                    </PBTbody>
                  </PBTable>
                </div>
              </div>
              <AccountListTable />
            </div>
          </div>
          {/* 우측 */}
          <div className="flex flex-col col-span-2 gap-4">
            <div className="flex gap-2">
              <PBButton label="마케팅동의이력" onClick={() => {}} />
              <PBButton label="약관동의이력" onClick={() => {}} />
            </div>
            <PBTable minWidth={494}>
              <PBTbody>
                <PBTr>
                  <PBTd type="label">부재</PBTd>
                  <PBTd type="label">접촉문자</PBTd>
                  <PBTd type="label">접촉통화</PBTd>
                  <PBTd type="label">접촉우편</PBTd>
                  <PBTd type="label">금일접촉</PBTd>
                  <PBTd type="label">금주추심</PBTd>
                </PBTr>
                <PBTr>
                  <PBTd type="text">2</PBTd>
                  <PBTd type="text">45</PBTd>
                  <PBTd type="text">0</PBTd>
                  <PBTd type="text">103</PBTd>
                  <PBTd type="text">0</PBTd>
                  <PBTd type="text">
                    <p className="text-[#fb5a28] font-bold">9</p>
                  </PBTd>
                </PBTr>
              </PBTbody>
            </PBTable>
            {/* 상담이력 */}
            <div className="flex flex-col gap-2">
              <PBLabel label="상담이력" />
              <div className="flex items-center gap-2">
                <PBCheckbox buttonStyle label="전체" />
                <PBCheckbox buttonStyle label="최근 6개월" />
                <PBCheckbox buttonStyle label="고객기준" />
                <PBCheckbox buttonStyle label="문자포함" />
                <PBCheckbox buttonStyle label="자동포함" />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <PBInput
                    defaultValue=""
                    align="left"
                    width={122}
                    className="border"
                    placeholder="검색"
                    icon={<PBIcon icon={icons.search} />}
                    iconPosition="right"
                  />
                  <PBInput
                    defaultValue=""
                    align="left"
                    width={122}
                    className="border"
                    placeholder="상담구분검색"
                    icon={<PBIcon icon={icons.search} />}
                    iconPosition="right"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <PBButton label="엑셀" onClick={() => {}} />
                  <PBButton label="조회" onClick={() => {}} />
                </div>
              </div>
              <PBTable minWidth={494}>
                <PBTbody>
                  <PBTr>
                    <PBTd type="label">등록일시</PBTd>
                    <PBTd type="label">등록자</PBTd>
                    <PBTd type="label">약속일시</PBTd>
                    <PBTd type="label">약속금액</PBTd>
                    <PBTd type="label">상담구분</PBTd>
                  </PBTr>
                  <PBTr>
                    <PBTd type="text">2024-10-01 23:23</PBTd>
                    <PBTd type="text">홍길동</PBTd>
                    <PBTd type="text">2024-10-01 23:23</PBTd>
                    <PBTd type="text" align="right">
                      100,000,000
                    </PBTd>
                    <PBTd type="text">연체통화</PBTd>
                  </PBTr>
                  <PBTr>
                    <PBTd colSpan={5}>
                      <PBTextarea />
                    </PBTd>
                  </PBTr>
                  <PBTr>
                    <PBTd type="text">2024-10-01 23:23</PBTd>
                    <PBTd type="text">홍길동</PBTd>
                    <PBTd type="text">2024-10-01 23:23</PBTd>
                    <PBTd type="text" align="right">
                      100,000,000
                    </PBTd>
                    <PBTd type="text">연체통화</PBTd>
                  </PBTr>
                  <PBTr>
                    <PBTd colSpan={5}>
                      <PBTextarea />
                    </PBTd>
                  </PBTr>
                  <PBTr>
                    <PBTd type="text">2024-10-01 23:23</PBTd>
                    <PBTd type="text">홍길동</PBTd>
                    <PBTd type="text">2024-10-01 23:23</PBTd>
                    <PBTd type="text" align="right">
                      100,000,000
                    </PBTd>
                    <PBTd type="text">연체통화</PBTd>
                  </PBTr>
                  <PBTr>
                    <PBTd colSpan={5}>
                      <PBTextarea />
                    </PBTd>
                  </PBTr>
                </PBTbody>
              </PBTable>
            </div>
            {/* 회수메모 */}
            <div className="flex flex-col gap-2">
              <div className="flex items-start justify-between">
                <PBLabel label="회수메모" />
                <PBButton label="등록" onClick={() => {}} />
              </div>
              <PBTextarea height={120} border />
            </div>
            {/* 상담등록 */}
            <div className="flex flex-col gap-2">
              <PBLabel label="상담등록" />
              <div className="flex justify-between">
                <PBTabs
                  tabs={counselTabs}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
                <PBButton label="등록" onClick={() => {}} />
              </div>
              <PBTable minWidth={494}>
                <PBTbody>
                  <PBTr>
                    <PBTd type="label" align="left">
                      상담구분
                    </PBTd>
                    <PBTd colSpan={3}>
                      <PBDropdown
                        align="left"
                        options={[{ label: "선택", value: "" }]}
                      />
                    </PBTd>
                  </PBTr>
                  <PBTr>
                    <PBTd type="label" align="left">
                      중요도
                    </PBTd>
                    <PBTd>
                      <PBDropdown
                        align="left"
                        options={[{ label: "선택", value: "" }]}
                      />
                    </PBTd>
                    <PBTd type="label" align="left">
                      통화자
                    </PBTd>
                    <PBTd>
                      <PBDropdown
                        align="left"
                        options={[{ label: "선택", value: "" }]}
                      />
                    </PBTd>
                  </PBTr>
                  <PBTr>
                    <PBTd type="label" align="left">
                      약속일시
                    </PBTd>
                    <PBTd>
                      <PBInput align="left" defaultValue="2024-01-01" />
                    </PBTd>
                    <PBTd type="label" align="left">
                      약속금액
                    </PBTd>
                    <PBTd>
                      <PBInput align="right" defaultValue="100,000,000" />
                    </PBTd>
                  </PBTr>
                  <PBTr>
                    <PBTd colSpan={4}>
                      <PBTextarea height={120} />
                    </PBTd>
                  </PBTr>
                </PBTbody>
              </PBTable>
            </div>
          </div>
        </div>
      </div>
      {/* 사이드메뉴 */}
      <PBSideMenu data={ChSideMenuData} />
    </div>
  );
}
