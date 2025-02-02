import { useState } from "react";
import PBInput from "../../../components/PBInput";
import PBInputGroup from "../../../components/PBInputGroup";
import PBTabs, { Tab } from "../../../components/PBTabs";
import PBButton from "../../../components/PBButton";
import PBIcon from "../../../components/PBIcon";
import { icons } from "../../../constants/icons";
import PBDropdown from "../../../components/PBDropdown";
import PBLabel from "../../../components/PBLabel";
import PBTable from "../../../components/table/PBTable";
import PBTbody from "../../../components/table/PBTbody";
import PBTr from "../../../components/table/PBTr";
import PBTd from "../../../components/table/PBTd";
import ChTable01 from "./components/ChTable01";
import PBCheckbox from "../../../components/PBCheckbox";
import ChTable02 from "./components/ChTable02";
import ChTable03 from "./components/ChTable03";
import PBInfoBadge from "../../../components/PBInfoBadge";

export default function Ch03() {
  const topTabs = [
    { id: "topTab01", label: "종합" },
    { id: "topTab02", label: "개인회생" },
    { id: "topTab03", label: "신용회복" },
    { id: "topTab04", label: "새출발기금" },
    { id: "topTab05", label: "파산" },
    { id: "topTab06", label: "사망" },
    { id: "topTab07", label: "기타사고" },
    { id: "topTab08", label: "소각요청" },
  ];

  const [activeTab, setActiveTab] = useState<Tab>(topTabs[0]);

  return (
    <div>
      {/* 메인상단 */}
      <div className="flex items-center gap-6 p-4 bg-pb-custom-bg">
        <PBInputGroup label="고객명">
          <PBInput defaultValue="김저축" width={150} />
        </PBInputGroup>
        <PBInputGroup label="고객고유번호">
          <PBInput defaultValue="999011123456" width={150} />
        </PBInputGroup>
        <PBInputGroup label="고객번호">
          <PBInput defaultValue="996176-******" width={150} />
        </PBInputGroup>
      </div>
      {/* 메인하단 */}
      <div className="flex flex-col gap-4 p-4">
        <div className="grid grid-cols-2 gap-6">
          {/* 사고이력 */}
          <div>
            <div className="flex items-start justify-between mb-2">
              <PBLabel label="사고이력" />
              <div className="flex gap-4">
                <div className="flex gap-2">
                  <PBCheckbox buttonStyle label="접수" />
                  <PBCheckbox buttonStyle label="진행" />
                  <PBCheckbox buttonStyle label="종결" />
                </div>
                <PBButton label="조회" onClick={() => {}} />
              </div>
            </div>
            <ChTable01 />
          </div>
          {/* 연결계좌 */}
          <div>
            <div className="flex items-start justify-between mb-2">
              <PBLabel label="연결계좌" />
            </div>
            <ChTable02 />
          </div>
        </div>
        <div className="flex w-full gap-6">
          <div className="grid w-full grid-cols-3 gap-x-6 gap-y-4">
            <div className="flex flex-col col-span-3 gap-2">
              <PBTabs
                tabs={topTabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                width={105}
              />
              <PBTable minWidth={1033} borderTop>
                <PBTbody>
                  <PBTr>
                    <PBTd type="label" align="left">
                      진행상태
                    </PBTd>
                    <PBTd>
                      <PBDropdown
                        align="left"
                        options={[{ label: "선택", value: "" }]}
                      />
                    </PBTd>
                    <PBTd type="label" align="left">
                      관할법원
                    </PBTd>
                    <PBTd>
                      <PBDropdown
                        align="left"
                        options={[{ label: "선택", value: "" }]}
                      />
                    </PBTd>
                    <PBTd type="label" align="left">
                      사건번호
                    </PBTd>
                    <PBTd>
                      <PBInput align="left" defaultValue="입력" />
                    </PBTd>
                    <PBTd type="label" align="left">
                      마이데이터
                    </PBTd>
                    <PBTd>
                      <div className="flex items-center mr-1">
                        <PBInput align="left" defaultValue="2024-01-01 13:11" />
                        <PBButton
                          label="사건조회"
                          variant="table-gray"
                          onClick={() => {}}
                        />
                      </div>
                    </PBTd>
                  </PBTr>
                  <PBTr>
                    <PBTd type="label" align="left">
                      계좌번호
                    </PBTd>
                    <PBTd>
                      <PBInput align="left" defaultValue="입력" />
                    </PBTd>
                    <PBTd type="label" align="left">
                      채권번호
                    </PBTd>
                    <PBTd>
                      <PBInput align="left" defaultValue="입력" />
                    </PBTd>
                    <PBTd type="label" align="left">
                      계좌신고일자
                    </PBTd>
                    <PBTd>
                      <PBInput
                        align="left"
                        defaultValue="2024-01-01"
                        icon={<PBIcon icon={icons.calendar} />}
                        iconPosition="right"
                      />
                    </PBTd>
                    <PBTd type="label" align="left">
                      변제금 수취용 계좌
                    </PBTd>
                    <PBTd>
                      <PBInput align="left" defaultValue="입력" />
                    </PBTd>
                  </PBTr>
                </PBTbody>
              </PBTable>
              <PBTable minWidth={1033}>
                <PBTbody>
                  <PBTr>
                    <PBTd type="label" align="left">
                      신청일자
                    </PBTd>
                    <PBTd>
                      <PBInput
                        align="left"
                        defaultValue="2024-01-01"
                        icon={<PBIcon icon={icons.calendar} />}
                        iconPosition="right"
                      />
                    </PBTd>
                    <PBTd type="label" align="left">
                      금지일자
                    </PBTd>
                    <PBTd>
                      <PBInput
                        align="left"
                        defaultValue="2024-01-01"
                        icon={<PBIcon icon={icons.calendar} />}
                        iconPosition="right"
                      />
                    </PBTd>
                    <PBTd type="label" align="left">
                      개시일자
                    </PBTd>
                    <PBTd>
                      <PBInput
                        align="left"
                        defaultValue="2024-01-01"
                        icon={<PBIcon icon={icons.calendar} />}
                        iconPosition="right"
                      />
                    </PBTd>
                    <PBTd type="label" align="left">
                      만기일자
                    </PBTd>
                    <PBTd>
                      <PBInput
                        align="left"
                        defaultValue="2024-01-01"
                        icon={<PBIcon icon={icons.calendar} />}
                        iconPosition="right"
                      />
                    </PBTd>
                  </PBTr>
                  <PBTr>
                    <PBTd type="label" align="left">
                      면책일자
                    </PBTd>
                    <PBTd>
                      <PBInput
                        align="left"
                        defaultValue="2024-01-01"
                        icon={<PBIcon icon={icons.calendar} />}
                        iconPosition="right"
                      />
                    </PBTd>
                    <PBTd type="label" align="left">
                      신청취하일자
                    </PBTd>
                    <PBTd>
                      <PBInput
                        align="left"
                        defaultValue="2024-01-01"
                        icon={<PBIcon icon={icons.calendar} />}
                        iconPosition="right"
                      />
                    </PBTd>
                    <PBTd type="label" align="left">
                      기각일자
                    </PBTd>
                    <PBTd>
                      <PBInput
                        align="left"
                        defaultValue="2024-01-01"
                        icon={<PBIcon icon={icons.calendar} />}
                        iconPosition="right"
                      />
                    </PBTd>
                    <PBTd type="label" align="left">
                      폐지일자
                    </PBTd>
                    <PBTd>
                      <PBInput
                        align="left"
                        defaultValue="2024-01-01"
                        icon={<PBIcon icon={icons.calendar} />}
                        iconPosition="right"
                      />
                    </PBTd>
                  </PBTr>
                  <PBTr>
                    <PBTd type="label" align="left">
                      항고일자
                    </PBTd>
                    <PBTd>
                      <PBInput
                        align="left"
                        defaultValue="2024-01-01"
                        icon={<PBIcon icon={icons.calendar} />}
                        iconPosition="right"
                      />
                    </PBTd>
                    <PBTd type="label" align="left">
                      기각/폐지 취소일자
                    </PBTd>
                    <PBTd>
                      <PBInput
                        align="left"
                        defaultValue="2024-01-01"
                        icon={<PBIcon icon={icons.calendar} />}
                        iconPosition="right"
                      />
                    </PBTd>
                    <PBTd type="label" align="left">
                      (법원)출금대상잔액
                    </PBTd>
                    <PBTd>
                      <PBInput align="right" defaultValue="100,000,000" />
                    </PBTd>
                    <PBTd type="label" align="left">
                      (법원)미납회차
                    </PBTd>
                    <PBTd>
                      <PBInput align="right" defaultValue="100,000,000" />
                    </PBTd>
                  </PBTr>
                </PBTbody>
              </PBTable>
            </div>
            {/* 변제계획 및 변제거래내역 */}
            <div className="flex flex-col col-span-2 gap-2">
              <div className="flex items-start justify-between">
                <p className="text-xs font-bold text-pb-custom-black">
                  변제계획 및 변제거래내역
                </p>
                <div className="flex items-center gap-2">
                  <PBInfoBadge text={`업데이트 일시 : 2024-01-01-23:23:23`} />
                  <PBButton label="변제스케줄" onClick={() => {}} />
                </div>
              </div>
              <div>
                <ChTable03 />
                <PBTable width={252}>
                  <PBTbody>
                    <PBTr>
                      <PBTd type="label" align="left">
                        합계
                      </PBTd>
                      <PBTd type="text" align="right">
                        100,000,000
                      </PBTd>
                    </PBTr>
                  </PBTbody>
                </PBTable>
              </div>
            </div>
            {/* 변제요약 */}
            <div className="col-span-1">
              <div className="h-6">
                <p className="text-xs font-bold text-pb-custom-black">
                  변제요약
                </p>
              </div>
              <PBTable minWidth={276} borderTop>
                <PBTbody>
                  <PBTr>
                    <PBTd type="label" align="left">
                      인가시 대출잔액
                    </PBTd>
                    <PBTd type="text" align="left">
                      입력
                    </PBTd>
                  </PBTr>
                  <PBTr>
                    <PBTd type="label" align="left">
                      총 변제 예정금액
                    </PBTd>
                    <PBTd type="text" align="left">
                      입력
                    </PBTd>
                  </PBTr>
                  <PBTr>
                    <PBTd type="label" align="left">
                      변제율
                    </PBTd>
                    <PBTd type="text" align="left">
                      입력
                    </PBTd>
                  </PBTr>
                  <PBTr>
                    <PBTd type="label" align="left">
                      총 변제회차
                    </PBTd>
                    <PBTd type="text" align="left">
                      입력
                    </PBTd>
                  </PBTr>
                  <PBTr>
                    <PBTd type="label" align="left">
                      변제시작일자
                    </PBTd>
                    <PBTd type="text" align="left">
                      입력
                    </PBTd>
                  </PBTr>
                  <PBTr>
                    <PBTd type="label" align="left">
                      변제종료일자
                    </PBTd>
                    <PBTd type="text" align="left">
                      입력
                    </PBTd>
                  </PBTr>
                  <PBTr>
                    <PBTd type="label" align="left">
                      현재회차
                    </PBTd>
                    <PBTd type="text" align="left">
                      입력
                    </PBTd>
                  </PBTr>
                  <PBTr>
                    <PBTd type="label" align="left">
                      납입회차
                    </PBTd>
                    <PBTd type="text" align="left">
                      입력
                    </PBTd>
                  </PBTr>
                  <PBTr>
                    <PBTd type="label" align="left">
                      미납회차
                    </PBTd>
                    <PBTd type="text" align="left">
                      입력
                    </PBTd>
                  </PBTr>
                  <PBTr>
                    <PBTd type="label" align="left">
                      잔여회차
                    </PBTd>
                    <PBTd type="text" align="left">
                      입력
                    </PBTd>
                  </PBTr>
                  <PBTr>
                    <PBTd type="label" align="left">
                      입금 총 액
                    </PBTd>
                    <PBTd type="text" align="left">
                      입력
                    </PBTd>
                  </PBTr>
                  <PBTr>
                    <PBTd type="label" align="left">
                      남은 변제금액(OPB)
                    </PBTd>
                    <PBTd type="text" align="left">
                      입력
                    </PBTd>
                  </PBTr>
                </PBTbody>
              </PBTable>
            </div>
          </div>
          {/* 메모 */}
          <div className="flex flex-col gap-2">
            <div className="flex items-start justify-between">
              <PBLabel label="메모" />
              <PBButton label="등록" onClick={() => {}} />
            </div>
            <textarea className="w-[146px] h-[499px] border outline-none resize-none border-pb-custom-form-line border-t-[#333333] text-xs text-pb-custom-black p-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
