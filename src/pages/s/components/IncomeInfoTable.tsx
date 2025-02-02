import { useState } from "react";
import PBDropdown from "../../../components/PBDropdown";
import PBIcon from "../../../components/PBIcon";
import PBInput from "../../../components/PBInput";
import PBTable from "../../../components/table/PBTable";
import PBTbody from "../../../components/table/PBTbody";
import PBTd from "../../../components/table/PBTd";
import PBTr from "../../../components/table/PBTr";
import { icons } from "../../../constants/icons";
import PBCheckbox from "../../../components/PBCheckbox";

export default function IncomeInfoTable() {
  const [selectedJob, setSelectedJob] = useState("self_employed");

  return (
    <PBTable minWidth={734} height={298} borderTop>
      <PBTbody>
        <PBTr>
          <PBTd type="label" align="left">
            직업
          </PBTd>
          <PBTd>
            <PBDropdown
              align="left"
              value={selectedJob}
              options={[
                { label: "개인사업자", value: "self_employed" },
                { label: "직장인", value: "employee" },
                { label: "기타", value: "other" },
              ]}
              isRequired
              onChange={(value) => setSelectedJob(value)}
            />
          </PBTd>
          <PBTd type="label" align="left">
            직업구분(CDD)
          </PBTd>
          {selectedJob === "self_employed" ? (
            <PBTd colSpan={5}>
              <PBDropdown
                align="left"
                options={[{ label: "선택", value: "" }]}
                isRequired
              />
            </PBTd>
          ) : selectedJob === "employee" ? (
            <PBTd colSpan={5}>
              <PBDropdown
                align="left"
                options={[{ label: "선택", value: "" }]}
                isRequired
              />
            </PBTd>
          ) : (
            <PBTd colSpan={3}>
              <PBDropdown
                align="left"
                options={[{ label: "선택", value: "" }]}
                isRequired
              />
            </PBTd>
          )}
        </PBTr>
        {selectedJob === "self_employed" && (
          <>
            <PBTr>
              <PBTd type="label" align="left">
                직장명
              </PBTd>
              <PBTd>
                <PBInput align="left" defaultValue="엔투소프트" isRequired />
              </PBTd>
              <PBTd type="label" align="left">
                직종
              </PBTd>
              <PBTd>
                <PBDropdown
                  align="left"
                  options={[{ label: "외감법인 코스닥", value: "" }]}
                  isRequired
                />
              </PBTd>
              <PBTd type="label" align="left">
                직급
              </PBTd>
              <PBTd>
                <PBDropdown
                  align="left"
                  options={[{ label: "파트타이머", value: "" }]}
                  isRequired
                />
              </PBTd>
              <PBTd type="label" align="left">
                종업원수
              </PBTd>
              <PBTd>
                <PBDropdown
                  align="left"
                  options={[{ label: "1000인 이상", value: "" }]}
                  isRequired
                />
              </PBTd>
            </PBTr>
            <PBTr>
              <PBTd type="label" align="left">
                사업장형태
              </PBTd>
              <PBTd>
                <PBDropdown
                  align="left"
                  options={[{ label: "자가", value: "" }]}
                  isRequired
                />
              </PBTd>
              <PBTd type="label" align="left">
                사업장보증금
              </PBTd>
              <PBTd>
                <PBInput align="right" defaultValue="100,000,000" isRequired />
              </PBTd>
              <PBTd type="label" align="left">
                사업장월세
              </PBTd>
              <PBTd>
                <PBInput align="right" defaultValue="100,000,000" isRequired />
              </PBTd>
              <PBTd type="label" align="left">
                수입형태
              </PBTd>
              <PBTd>
                <PBDropdown
                  align="left"
                  options={[{ label: "고정+실적급", value: "" }]}
                  isRequired
                />
              </PBTd>
            </PBTr>
            <PBTr>
              <PBTd type="label" align="left" rowSpan={2}>
                직장주소
              </PBTd>
              <PBTd>
                <PBInput align="left" defaultValue="123-456" />
              </PBTd>
              <PBTd colSpan={4}>
                <PBInput
                  align="left"
                  defaultValue="경기도 성남시 중원구 상대원동 5460 성남SKV1타워 A동 730호"
                />
              </PBTd>
              <PBTd type="label" align="left">
                직장전화
              </PBTd>
              <PBTd>
                <PBInput align="left" defaultValue="010-1234-5678" isRequired />
              </PBTd>
            </PBTr>
            <PBTr>
              <PBTd>
                <PBInput align="left" defaultValue="12345" />
              </PBTd>
              <PBTd colSpan={4}>
                <PBInput
                  align="left"
                  defaultValue="경기도 성남시 중원구 갈마치로 288 14 A-730"
                />
              </PBTd>
              <PBTd type="label" align="left">
                <div className="flex items-center gap-1">
                  사업자번호
                  <button
                    onClick={() => {}}
                    className="p-[1px] bg-custom-white rounded-sm"
                  >
                    <PBIcon icon={icons.searchBorder} />
                  </button>
                </div>
              </PBTd>
              <PBTd>
                <PBInput align="left" defaultValue="123-12-12345" isRequired />
              </PBTd>
            </PBTr>
            <PBTr>
              <PBTd type="label" align="left">
                월수입
              </PBTd>
              <PBTd>
                <PBInput align="right" defaultValue="100,000,000" isRequired />
              </PBTd>
              <PBTd type="label" align="left">
                연수입
              </PBTd>
              <PBTd>
                <PBInput align="right" defaultValue="100,000,000" isRequired />
              </PBTd>
              <PBTd type="label" align="left">
                수령방법
              </PBTd>
              <PBTd>
                <PBDropdown
                  align="left"
                  options={[{ label: "통장+현금", value: "" }]}
                  isRequired
                />
              </PBTd>
              <PBTd type="label" align="left">
                급여일
              </PBTd>
              <PBTd>
                <PBInput align="left" defaultValue="11" />
              </PBTd>
            </PBTr>
            <PBTr>
              <PBTd type="label" align="left">
                4대보험
              </PBTd>
              <PBTd>
                <PBDropdown
                  align="left"
                  options={[{ label: "직장피부양자", value: "" }]}
                  isRequired
                />
              </PBTd>
              <PBTd type="label" align="left">
                스크래핑일시
              </PBTd>
              <PBTd>
                <PBInput align="right" defaultValue="2024-01-11 23:33:45" />
              </PBTd>
              <PBTd colSpan={2}>
                <PBDropdown
                  align="left"
                  options={[{ label: "증빙소득", value: "" }]}
                  isRequired
                />
              </PBTd>
              <PBTd colSpan={2}>
                <PBDropdown
                  align="left"
                  options={[{ label: "근로소득원천징수영수증", value: "" }]}
                  isRequired
                />
              </PBTd>
            </PBTr>
            <PBTr>
              <PBTd type="label" align="left">
                개업년월
              </PBTd>
              <PBTd>
                <PBInput align="left" defaultValue="2024-01-01" isRequired />
              </PBTd>
              <PBTd type="label" align="left">
                재직기간
              </PBTd>
              <PBTd>
                <PBInput align="left" defaultValue="37년 11개월" />
              </PBTd>
              <PBTd type="label" align="left" colSpan={2}>
                사업증빙서류
              </PBTd>
              <PBTd colSpan={2}>
                <PBDropdown
                  align="left"
                  options={[{ label: "사업자등록증명원", value: "" }]}
                  isRequired
                />
              </PBTd>
            </PBTr>
            <PBTr>
              <PBTd type="label" align="left">
                산출연소득
              </PBTd>
              <PBTd>
                <PBInput align="right" defaultValue="100,000,000" isRequired />
              </PBTd>
              <PBTd type="label" align="left">
                산출월소득
              </PBTd>
              <PBTd>
                <PBInput align="right" defaultValue="100,000,000" isRequired />
              </PBTd>
              <PBTd type="label" align="left" colSpan={2}>
                연소득
              </PBTd>
              <PBTd colSpan={2}>
                <PBInput align="right" defaultValue="100,000,000" isRequired />
              </PBTd>
            </PBTr>
          </>
        )}

        {selectedJob === "employee" && (
          <>
            <PBTr>
              <PBTd type="label" align="left">
                직장명
              </PBTd>
              <PBTd>
                <PBInput align="left" defaultValue="엔투소프트" />
              </PBTd>
              <PBTd type="label" align="left">
                실근무지명
              </PBTd>
              <PBTd>
                <PBInput align="left" defaultValue="엔투소프트" isRequired />
              </PBTd>
              <PBTd type="label" align="left">
                부서명
              </PBTd>
              <PBTd>
                <PBInput align="left" defaultValue="운영지원팀" isRequired />
              </PBTd>
              <PBTd type="label" align="left">
                직급
              </PBTd>
              <PBTd>
                <PBDropdown
                  align="left"
                  options={[{ label: "선택", value: "" }]}
                  isRequired
                />
              </PBTd>
            </PBTr>
            <PBTr>
              <PBTd type="label" align="left">
                고용형태
              </PBTd>
              <PBTd>
                <PBDropdown
                  align="left"
                  options={[{ label: "농축임어업인", value: "" }]}
                  isRequired
                />
              </PBTd>
              <PBTd type="label" align="left">
                사원수
              </PBTd>
              <PBTd>
                <PBDropdown
                  align="left"
                  options={[{ label: "100명 이상", value: "" }]}
                  isRequired
                />
              </PBTd>
              <PBTd type="label" align="left">
                급여일
              </PBTd>
              <PBTd>
                <PBInput align="left" defaultValue="31일" isRequired />
              </PBTd>
              <PBTd type="label" align="left">
                실제소득(월)
              </PBTd>
              <PBTd>
                <PBInput align="right" defaultValue="100,000,000" isRequired />
              </PBTd>
            </PBTr>
            <PBTr>
              <PBTd type="label" align="left" rowSpan={2}>
                직장주소
              </PBTd>
              <PBTd>
                <PBInput align="left" defaultValue="123-456" />
              </PBTd>
              <PBTd colSpan={4}>
                <PBInput
                  align="left"
                  defaultValue="경기도 성남시 중원구 상대원동 5460 성남SKV1타워 A동 730호"
                />
              </PBTd>
              <PBTd type="label" align="left">
                직장전화
              </PBTd>
              <PBTd>
                <PBInput align="left" defaultValue="031-123-4567" isRequired />
              </PBTd>
            </PBTr>
            <PBTr>
              <PBTd>
                <PBInput align="left" defaultValue="12345" />
              </PBTd>
              <PBTd colSpan={4}>
                <PBInput
                  align="left"
                  defaultValue="경기도 성남시 중원구 갈마치로 288 14 A-730"
                />
              </PBTd>
              <PBTd type="label" align="left">
                직통전화
              </PBTd>
              <PBTd>
                <PBInput align="left" defaultValue="010-1236-7894" isRequired />
              </PBTd>
            </PBTr>
            <PBTr>
              <PBTd type="label" align="left">
                4대보험
              </PBTd>
              <PBTd>
                <PBDropdown
                  align="left"
                  options={[{ label: "직장피부양자", value: "" }]}
                  isRequired
                />
              </PBTd>
              <PBTd type="label" align="left">
                스크래핑일시
              </PBTd>
              <PBTd>
                <PBInput align="right" defaultValue="2024-01-11 23:33:45" />
              </PBTd>
              <PBTd colSpan={2}>
                <PBDropdown
                  align="left"
                  options={[{ label: "증빙소득", value: "" }]}
                  isRequired
                />
              </PBTd>
              <PBTd colSpan={2}>
                <PBDropdown
                  align="left"
                  options={[{ label: "근로소득원천징수영수증", value: "" }]}
                  isRequired
                />
              </PBTd>
            </PBTr>
            <PBTr>
              <PBTd type="label" align="left">
                취득일
              </PBTd>
              <PBTd>
                <PBInput
                  align="left"
                  defaultValue="2023-12-31"
                  className="font-bold"
                  isRequired
                />
              </PBTd>
              <PBTd type="label" align="left">
                재직기간
              </PBTd>
              <PBTd>
                <PBInput
                  align="left"
                  defaultValue="37년 11개월"
                  className="font-bold"
                  isRequired
                />
              </PBTd>
              <PBTd type="label" align="left">
                재직증빙
              </PBTd>
              <PBTd>
                <PBDropdown
                  align="left"
                  options={[{ label: "건강보험 자격..", value: "" }]}
                  isRequired
                />
              </PBTd>
              <PBTd type="label" align="left">
                소득증빙기간
              </PBTd>
              <PBTd>
                <PBInput align="left" defaultValue="1년 이상" isRequired />
              </PBTd>
            </PBTr>
            <PBTr>
              <PBTd type="label" align="left">
                산출연소득
              </PBTd>
              <PBTd>
                <PBInput align="right" defaultValue="100,000,000" isRequired />
              </PBTd>
              <PBTd type="label" align="left">
                산출월소득
              </PBTd>
              <PBTd>
                <PBInput align="right" defaultValue="100,000,000" isRequired />
              </PBTd>
              <PBTd type="label" align="left">
                적용연소득
              </PBTd>
              <PBTd>
                <PBInput align="right" defaultValue="100,000,000" isRequired />
              </PBTd>
              <PBTd type="label" align="left">
                적용월소득
              </PBTd>
              <PBTd>
                <PBInput align="right" defaultValue="100,000,000" isRequired />
              </PBTd>
            </PBTr>
          </>
        )}

        {selectedJob === "other" && (
          <>
            <PBTr>
              <PBTd type="label" align="left">
                아르바이트 유무
              </PBTd>
              <PBTd colSpan={2}>
                <div className="flex items-center gap-4 px-2">
                  <PBCheckbox label="유" isChecked />
                  <PBCheckbox label="무" />
                </div>
              </PBTd>
              <PBTd>
                <PBDropdown
                  align="left"
                  options={[{ label: "증빙소득", value: "" }]}
                  isRequired
                />
              </PBTd>
              <PBTd colSpan={2}>
                <PBDropdown
                  align="left"
                  options={[{ label: "근로소득원천징수영수증", value: "" }]}
                  isRequired
                />
              </PBTd>
            </PBTr>
            <PBTr>
              <PBTd type="label" align="left">
                아르바이트명
              </PBTd>
              <PBTd colSpan={3}>
                <PBInput align="left" defaultValue="엔투소프트" />
              </PBTd>
              <PBTd type="label" align="left">
                근무시간
              </PBTd>
              <PBTd>
                <PBInput align="left" defaultValue="시 ~ 시" isRequired />
              </PBTd>
            </PBTr>
            <PBTr>
              <PBTd type="label" align="left" rowSpan={2}>
                아르바이트 주소
              </PBTd>
              <PBTd>
                <PBInput align="left" defaultValue="123-456" />
              </PBTd>
              <PBTd colSpan={2}>
                <PBInput
                  align="left"
                  defaultValue="경기도 성남시 중원구 상대원동 5460 성남SKV1타워 A동 730호"
                />
              </PBTd>
              <PBTd type="label" align="left">
                직장전화
              </PBTd>
              <PBTd>
                <PBInput align="left" defaultValue="031-123-4567" isRequired />
              </PBTd>
            </PBTr>
            <PBTr>
              <PBTd>
                <PBInput align="left" defaultValue="12345" />
              </PBTd>
              <PBTd colSpan={2}>
                <PBInput
                  align="left"
                  defaultValue="경기도 성남시 중원구 갈마치로 288 14 A-730"
                />
              </PBTd>
              <PBTd type="label" align="left">
                직통전화
              </PBTd>
              <PBTd>
                <PBInput align="left" defaultValue="010-1236-7894" isRequired />
              </PBTd>
            </PBTr>
            <PBTr>
              <PBTd type="label" align="left">
                월수입
              </PBTd>
              <PBTd>
                <PBInput align="right" defaultValue="100,000,000" isRequired />
              </PBTd>
              <PBTd type="label" align="left">
                급여일
              </PBTd>
              <PBTd>
                <PBInput align="left" defaultValue="11일" isRequired />
              </PBTd>
              <PBTd type="label" align="left">
                연수입
              </PBTd>
              <PBTd>
                <PBInput align="right" defaultValue="100,000,000" />
              </PBTd>
            </PBTr>
          </>
        )}
      </PBTbody>
    </PBTable>
  );
}
