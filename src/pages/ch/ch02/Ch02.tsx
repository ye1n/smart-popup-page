import { useState } from "react";
import PBInput from "../../../components/PBInput";
import PBInputGroup from "../../../components/PBInputGroup";
import PBTabs, { Tab } from "../../../components/PBTabs";
import PBButton from "../../../components/PBButton";
import PBIcon from "../../../components/PBIcon";
import { icons } from "../../../constants/icons";
import ChTable01 from "./components/ChTable01";
import ChTable02 from "./components/ChTable02";
import PBDropdown from "../../../components/PBDropdown";
import ChTable03 from "./components/ChTable03";
import PBLabel from "../../../components/PBLabel";
import PBTable from "../../../components/table/PBTable";
import PBTbody from "../../../components/table/PBTbody";
import PBTr from "../../../components/table/PBTr";
import PBTd from "../../../components/table/PBTd";
import PBInfoBadge from "../../../components/PBInfoBadge";

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
        <PBInputGroup label="고객명">
          <PBInput defaultValue="김저축" width={150} />
        </PBInputGroup>
        <PBInputGroup label="고객번호">
          <PBInput defaultValue="999011123456" width={150} />
        </PBInputGroup>
        <PBInputGroup label="대출번호">
          <PBInput defaultValue="9961760000005" width={150} />
        </PBInputGroup>
        <PBInputGroup label="가상계좌번호">
          <PBInput defaultValue="123-12-1234567-1234" width={150} />
        </PBInputGroup>
      </div>
      {/* 메인하단 */}
      <div className="flex flex-col gap-4 p-4">
        {/* section1 */}
        <PBTabs
          tabs={topTabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          width={105}
        />
        {/* section2 */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between border-t bg-custom-form-bg border-[#333333] py-2 px-4">
            <div className="flex gap-8">
              <PBInputGroup label="상환구분">
                <PBInput
                  align="left"
                  defaultValue="10-원리금수납"
                  width={128}
                />
              </PBInputGroup>
              <PBInputGroup label="상환금액">
                <PBInput align="right" defaultValue="100,000,000" width={100} />
              </PBInputGroup>
              <PBInputGroup label="상환원금">
                <PBInput align="right" defaultValue="100,000,000" width={100} />
              </PBInputGroup>
              <PBInputGroup label="회차">
                <PBInput align="left" defaultValue="30" width={44} />
              </PBInputGroup>
              <PBInputGroup label="기산일자">
                <PBInput
                  align="left"
                  defaultValue="2024-01-01"
                  width={128}
                  icon={<PBIcon icon={icons.calendar} />}
                  iconPosition="right"
                />
              </PBInputGroup>
              <PBInputGroup label="계산종료일">
                <PBInput
                  align="left"
                  defaultValue="2024-12-31"
                  width={128}
                  icon={<PBIcon icon={icons.calendar} />}
                  iconPosition="right"
                />
              </PBInputGroup>
            </div>
            <PBButton label="조회" onClick={() => {}} />
          </div>
          <ChTable01 />
        </div>
        {/* section3 */}
        <ChTable02 />
        {/* section4 */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-8 px-4 py-2 bg-custom-form-bg">
            <PBInputGroup label="약정일">
              <div className="flex items-center pr-1 bg-custom-white">
                <PBDropdown
                  align="left"
                  options={[{ label: "31", value: "" }]}
                  width={66}
                />
                <PBButton
                  variant="table-gray"
                  label="약정일변경"
                  onClick={() => {}}
                />
              </div>
              <p className="font-bold text-[#d92222] text-[11px]">
                ※ 연계계좌처리금지
              </p>
            </PBInputGroup>
            <PBInputGroup label="연락처">
              <div className="flex gap-0.5">
                <PBInput defaultValue="010-1234-5678" width={100} />
                <PBDropdown
                  align="left"
                  options={[{ label: "선택", value: "" }]}
                  width={150}
                />
              </div>
              <PBButton label="SMS발송" onClick={() => {}} />
            </PBInputGroup>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <ChTable03 />
            <div className="flex flex-col gap-4">
              {/* 가수금 */}
              <div>
                <PBLabel label="가수금" className="mb-2" />
                <div className="flex items-center gap-2">
                  <PBTable width={546}>
                    <PBTbody>
                      <PBTr>
                        <PBTd type="label" align="left">
                          가수금
                        </PBTd>
                        <PBTd>
                          <PBInput align="right" defaultValue="100,000,000" />
                        </PBTd>
                        <PBTd>
                          <PBDropdown
                            align="left"
                            options={[{ label: "선택", value: "" }]}
                          />
                        </PBTd>
                        <PBTd type="label" align="left">
                          이동금액
                        </PBTd>
                        <PBTd>
                          <PBInput align="right" defaultValue="100,000,000" />
                        </PBTd>
                      </PBTr>
                    </PBTbody>
                  </PBTable>
                  <PBButton label="가수금 이동" onClick={() => {}} />
                </div>
              </div>
              {/* 가지급금 */}
              <div>
                <PBLabel label="가지급금" className="mb-2" />
                <PBTable width={273}>
                  <PBTbody>
                    <PBTr>
                      <PBTd type="label" align="left">
                        가지급금
                      </PBTd>
                      <PBTd>
                        <PBInput align="right" defaultValue="100,000,000" />
                      </PBTd>
                      <PBTd>
                        <PBInput align="right" defaultValue="100,000,000" />
                      </PBTd>
                    </PBTr>
                  </PBTbody>
                </PBTable>
              </div>
              {/* 요구불예금 */}
              <div>
                <PBLabel label="요구불예금" className="mb-2" />
                <PBTable width={453}>
                  <PBTbody>
                    <PBTr>
                      <PBTd type="label" align="left">
                        거래구분
                      </PBTd>
                      <PBTd>
                        <PBDropdown
                          align="left"
                          options={[{ label: "선택", value: "" }]}
                        />
                      </PBTd>
                      <PBTd type="label" align="left">
                        연동/대체계좌
                      </PBTd>
                      <PBTd>
                        <PBDropdown
                          align="left"
                          options={[{ label: "선택", value: "" }]}
                        />
                      </PBTd>
                    </PBTr>
                  </PBTbody>
                </PBTable>
              </div>
              {/* 상환처리 */}
              <div className="flex flex-col gap-2 ">
                <PBLabel label="상환처리" />
                <div className="flex items-center gap-2">
                  <PBTable width={445}>
                    <PBTbody>
                      <PBTr>
                        <PBTd type="label" align="left">
                          상환재원
                        </PBTd>
                        <PBTd>
                          <PBDropdown
                            align="left"
                            options={[
                              { label: "채무자(관련인변제포함)", value: "" },
                            ]}
                          />
                        </PBTd>
                        <PBTd type="label" align="left">
                          부족금
                        </PBTd>
                        <PBTd>
                          <PBInput align="right" defaultValue="100,000,000" />
                        </PBTd>
                      </PBTr>
                    </PBTbody>
                  </PBTable>
                  <PBButton
                    variant="white-outline-shadow"
                    label="상환처리"
                    onClick={() => {}}
                  />
                  <PBButton label="CMS즉시출금" onClick={() => {}} />
                </div>
                <div className="flex items-end gap-2">
                  <PBTable width={180}>
                    <PBTbody>
                      <PBTr>
                        <PBTd type="label" align="left">
                          상환적요
                        </PBTd>
                        <PBTd>
                          <PBInput align="left" defaultValue="입력" />
                        </PBTd>
                      </PBTr>
                      <PBTr>
                        <PBTd type="label" align="left">
                          미징수적요
                        </PBTd>
                        <PBTd>
                          <PBInput align="left" defaultValue="입력" />
                        </PBTd>
                      </PBTr>
                    </PBTbody>
                  </PBTable>
                  <div className="flex items-center gap-2">
                    <PBTable width={180}>
                      <PBTbody>
                        <PBTr>
                          <PBTd type="label" align="left">
                            입금예약금액
                          </PBTd>
                          <PBTd>
                            <PBInput align="right" defaultValue="100,000,000" />
                          </PBTd>
                        </PBTr>
                      </PBTbody>
                    </PBTable>
                    <PBButton label="상환처리 예약" onClick={() => {}} />
                  </div>
                </div>
                <div className="flex gap-2">
                  <PBInfoBadge
                    variant="red"
                    text={`※ 부족금이 0보다 작거나 같은 경우 상환처리가 가능합니다. (단, 가수금 > 가지급금)`}
                  />
                  <PBInfoBadge
                    text={`※ 상환총합계 (원금+이자+미징수-과잉-환출이자)`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
