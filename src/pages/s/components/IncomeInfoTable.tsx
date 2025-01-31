import { useState } from "react";
import Dropdown from "../../../components/Dropdown";
import Icon from "../../../components/Icon";
import Input from "../../../components/Input";
import Table from "../../../components/table/Table";
import Tbody from "../../../components/table/Tbody";
import Td from "../../../components/table/Td";
import Tr from "../../../components/table/Tr";
import { icons } from "../../../constants/icons";
import Checkbox from "../../../components/Checkbox";

export default function IncomeInfoTable() {
  const [selectedJob, setSelectedJob] = useState("self_employed");

  return (
    <Table minWidth={734} height={298} borderTop>
      <Tbody>
        <Tr>
          <Td type="label" align="left">
            직업
          </Td>
          <Td>
            <Dropdown
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
          </Td>
          <Td type="label" align="left">
            직업구분(CDD)
          </Td>
          {selectedJob === "self_employed" ? (
            <Td colSpan={5}>
              <Dropdown
                align="left"
                options={[{ label: "선택", value: "" }]}
                isRequired
              />
            </Td>
          ) : selectedJob === "employee" ? (
            <Td colSpan={5}>
              <Dropdown
                align="left"
                options={[{ label: "선택", value: "" }]}
                isRequired
              />
            </Td>
          ) : (
            <Td colSpan={3}>
              <Dropdown
                align="left"
                options={[{ label: "선택", value: "" }]}
                isRequired
              />
            </Td>
          )}
        </Tr>
        {selectedJob === "self_employed" && (
          <>
            <Tr>
              <Td type="label" align="left">
                직장명
              </Td>
              <Td>
                <Input align="left" defaultValue="엔투소프트" isRequired />
              </Td>
              <Td type="label" align="left">
                직종
              </Td>
              <Td>
                <Dropdown
                  align="left"
                  options={[{ label: "외감법인 코스닥", value: "" }]}
                  isRequired
                />
              </Td>
              <Td type="label" align="left">
                직급
              </Td>
              <Td>
                <Dropdown
                  align="left"
                  options={[{ label: "파트타이머", value: "" }]}
                  isRequired
                />
              </Td>
              <Td type="label" align="left">
                종업원수
              </Td>
              <Td>
                <Dropdown
                  align="left"
                  options={[{ label: "1000인 이상", value: "" }]}
                  isRequired
                />
              </Td>
            </Tr>
            <Tr>
              <Td type="label" align="left">
                사업장형태
              </Td>
              <Td>
                <Dropdown
                  align="left"
                  options={[{ label: "자가", value: "" }]}
                  isRequired
                />
              </Td>
              <Td type="label" align="left">
                사업장보증금
              </Td>
              <Td>
                <Input align="right" defaultValue="100,000,000" isRequired />
              </Td>
              <Td type="label" align="left">
                사업장월세
              </Td>
              <Td>
                <Input align="right" defaultValue="100,000,000" isRequired />
              </Td>
              <Td type="label" align="left">
                수입형태
              </Td>
              <Td>
                <Dropdown
                  align="left"
                  options={[{ label: "고정+실적급", value: "" }]}
                  isRequired
                />
              </Td>
            </Tr>
            <Tr>
              <Td type="label" align="left" rowSpan={2}>
                직장주소
              </Td>
              <Td>
                <Input align="left" defaultValue="123-456" />
              </Td>
              <Td colSpan={4}>
                <Input
                  align="left"
                  defaultValue="경기도 성남시 중원구 상대원동 5460 성남SKV1타워 A동 730호"
                />
              </Td>
              <Td type="label" align="left">
                직장전화
              </Td>
              <Td>
                <Input align="left" defaultValue="010-1234-5678" isRequired />
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Input align="left" defaultValue="12345" />
              </Td>
              <Td colSpan={4}>
                <Input
                  align="left"
                  defaultValue="경기도 성남시 중원구 갈마치로 288 14 A-730"
                />
              </Td>
              <Td type="label" align="left">
                <div className="flex items-center gap-1">
                  사업자번호
                  <button
                    onClick={() => {}}
                    className="p-[1px] bg-custom-white rounded-sm"
                  >
                    <Icon icon={icons.searchBorder} />
                  </button>
                </div>
              </Td>
              <Td>
                <Input align="left" defaultValue="123-12-12345" isRequired />
              </Td>
            </Tr>
            <Tr>
              <Td type="label" align="left">
                월수입
              </Td>
              <Td>
                <Input align="right" defaultValue="100,000,000" isRequired />
              </Td>
              <Td type="label" align="left">
                연수입
              </Td>
              <Td>
                <Input align="right" defaultValue="100,000,000" isRequired />
              </Td>
              <Td type="label" align="left">
                수령방법
              </Td>
              <Td>
                <Dropdown
                  align="left"
                  options={[{ label: "통장+현금", value: "" }]}
                  isRequired
                />
              </Td>
              <Td type="label" align="left">
                급여일
              </Td>
              <Td>
                <Input align="left" defaultValue="11" />
              </Td>
            </Tr>
            <Tr>
              <Td type="label" align="left">
                4대보험
              </Td>
              <Td>
                <Dropdown
                  align="left"
                  options={[{ label: "직장피부양자", value: "" }]}
                  isRequired
                />
              </Td>
              <Td type="label" align="left">
                스크래핑일시
              </Td>
              <Td>
                <Input align="right" defaultValue="2024-01-11 23:33:45" />
              </Td>
              <Td colSpan={2}>
                <Dropdown
                  align="left"
                  options={[{ label: "증빙소득", value: "" }]}
                  isRequired
                />
              </Td>
              <Td colSpan={2}>
                <Dropdown
                  align="left"
                  options={[{ label: "근로소득원천징수영수증", value: "" }]}
                  isRequired
                />
              </Td>
            </Tr>
            <Tr>
              <Td type="label" align="left">
                개업년월
              </Td>
              <Td>
                <Input align="left" defaultValue="2024-01-01" isRequired />
              </Td>
              <Td type="label" align="left">
                재직기간
              </Td>
              <Td>
                <Input align="left" defaultValue="37년 11개월" />
              </Td>
              <Td type="label" align="left" colSpan={2}>
                사업증빙서류
              </Td>
              <Td colSpan={2}>
                <Dropdown
                  align="left"
                  options={[{ label: "사업자등록증명원", value: "" }]}
                  isRequired
                />
              </Td>
            </Tr>
            <Tr>
              <Td type="label" align="left">
                산출연소득
              </Td>
              <Td>
                <Input align="right" defaultValue="100,000,000" isRequired />
              </Td>
              <Td type="label" align="left">
                산출월소득
              </Td>
              <Td>
                <Input align="right" defaultValue="100,000,000" isRequired />
              </Td>
              <Td type="label" align="left" colSpan={2}>
                연소득
              </Td>
              <Td colSpan={2}>
                <Input align="right" defaultValue="100,000,000" isRequired />
              </Td>
            </Tr>
          </>
        )}

        {selectedJob === "employee" && (
          <>
            <Tr>
              <Td type="label" align="left">
                직장명
              </Td>
              <Td>
                <Input align="left" defaultValue="엔투소프트" />
              </Td>
              <Td type="label" align="left">
                실근무지명
              </Td>
              <Td>
                <Input align="left" defaultValue="엔투소프트" isRequired />
              </Td>
              <Td type="label" align="left">
                부서명
              </Td>
              <Td>
                <Input align="left" defaultValue="운영지원팀" isRequired />
              </Td>
              <Td type="label" align="left">
                직급
              </Td>
              <Td>
                <Dropdown
                  align="left"
                  options={[{ label: "선택", value: "" }]}
                  isRequired
                />
              </Td>
            </Tr>
            <Tr>
              <Td type="label" align="left">
                고용형태
              </Td>
              <Td>
                <Dropdown
                  align="left"
                  options={[{ label: "농축임어업인", value: "" }]}
                  isRequired
                />
              </Td>
              <Td type="label" align="left">
                사원수
              </Td>
              <Td>
                <Dropdown
                  align="left"
                  options={[{ label: "100명 이상", value: "" }]}
                  isRequired
                />
              </Td>
              <Td type="label" align="left">
                급여일
              </Td>
              <Td>
                <Input align="left" defaultValue="31일" isRequired />
              </Td>
              <Td type="label" align="left">
                실제소득(월)
              </Td>
              <Td>
                <Input align="right" defaultValue="100,000,000" isRequired />
              </Td>
            </Tr>
            <Tr>
              <Td type="label" align="left" rowSpan={2}>
                직장주소
              </Td>
              <Td>
                <Input align="left" defaultValue="123-456" />
              </Td>
              <Td colSpan={4}>
                <Input
                  align="left"
                  defaultValue="경기도 성남시 중원구 상대원동 5460 성남SKV1타워 A동 730호"
                />
              </Td>
              <Td type="label" align="left">
                직장전화
              </Td>
              <Td>
                <Input align="left" defaultValue="031-123-4567" isRequired />
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Input align="left" defaultValue="12345" />
              </Td>
              <Td colSpan={4}>
                <Input
                  align="left"
                  defaultValue="경기도 성남시 중원구 갈마치로 288 14 A-730"
                />
              </Td>
              <Td type="label" align="left">
                직통전화
              </Td>
              <Td>
                <Input align="left" defaultValue="010-1236-7894" isRequired />
              </Td>
            </Tr>
            <Tr>
              <Td type="label" align="left">
                4대보험
              </Td>
              <Td>
                <Dropdown
                  align="left"
                  options={[{ label: "직장피부양자", value: "" }]}
                  isRequired
                />
              </Td>
              <Td type="label" align="left">
                스크래핑일시
              </Td>
              <Td>
                <Input align="right" defaultValue="2024-01-11 23:33:45" />
              </Td>
              <Td colSpan={2}>
                <Dropdown
                  align="left"
                  options={[{ label: "증빙소득", value: "" }]}
                  isRequired
                />
              </Td>
              <Td colSpan={2}>
                <Dropdown
                  align="left"
                  options={[{ label: "근로소득원천징수영수증", value: "" }]}
                  isRequired
                />
              </Td>
            </Tr>
            <Tr>
              <Td type="label" align="left">
                취득일
              </Td>
              <Td>
                <Input
                  align="left"
                  defaultValue="2023-12-31"
                  className="font-bold"
                  isRequired
                />
              </Td>
              <Td type="label" align="left">
                재직기간
              </Td>
              <Td>
                <Input
                  align="left"
                  defaultValue="37년 11개월"
                  className="font-bold"
                  isRequired
                />
              </Td>
              <Td type="label" align="left">
                재직증빙
              </Td>
              <Td>
                <Dropdown
                  align="left"
                  options={[{ label: "건강보험 자격..", value: "" }]}
                  isRequired
                />
              </Td>
              <Td type="label" align="left">
                소득증빙기간
              </Td>
              <Td>
                <Input align="left" defaultValue="1년 이상" isRequired />
              </Td>
            </Tr>
            <Tr>
              <Td type="label" align="left">
                산출연소득
              </Td>
              <Td>
                <Input align="right" defaultValue="100,000,000" isRequired />
              </Td>
              <Td type="label" align="left">
                산출월소득
              </Td>
              <Td>
                <Input align="right" defaultValue="100,000,000" isRequired />
              </Td>
              <Td type="label" align="left">
                적용연소득
              </Td>
              <Td>
                <Input align="right" defaultValue="100,000,000" isRequired />
              </Td>
              <Td type="label" align="left">
                적용월소득
              </Td>
              <Td>
                <Input align="right" defaultValue="100,000,000" isRequired />
              </Td>
            </Tr>
          </>
        )}

        {selectedJob === "other" && (
          <>
            <Tr>
              <Td type="label" align="left">
                아르바이트 유무
              </Td>
              <Td colSpan={2}>
                <div className="flex items-center gap-4 px-2">
                  <Checkbox label="유" isChecked />
                  <Checkbox label="무" />
                </div>
              </Td>
              <Td>
                <Dropdown
                  align="left"
                  options={[{ label: "증빙소득", value: "" }]}
                  isRequired
                />
              </Td>
              <Td colSpan={2}>
                <Dropdown
                  align="left"
                  options={[{ label: "근로소득원천징수영수증", value: "" }]}
                  isRequired
                />
              </Td>
            </Tr>
            <Tr>
              <Td type="label" align="left">
                아르바이트명
              </Td>
              <Td colSpan={3}>
                <Input align="left" defaultValue="엔투소프트" />
              </Td>
              <Td type="label" align="left">
                근무시간
              </Td>
              <Td>
                <Input align="left" defaultValue="시 ~ 시" isRequired />
              </Td>
            </Tr>
            <Tr>
              <Td type="label" align="left" rowSpan={2}>
                아르바이트 주소
              </Td>
              <Td>
                <Input align="left" defaultValue="123-456" />
              </Td>
              <Td colSpan={2}>
                <Input
                  align="left"
                  defaultValue="경기도 성남시 중원구 상대원동 5460 성남SKV1타워 A동 730호"
                />
              </Td>
              <Td type="label" align="left">
                직장전화
              </Td>
              <Td>
                <Input align="left" defaultValue="031-123-4567" isRequired />
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Input align="left" defaultValue="12345" />
              </Td>
              <Td colSpan={2}>
                <Input
                  align="left"
                  defaultValue="경기도 성남시 중원구 갈마치로 288 14 A-730"
                />
              </Td>
              <Td type="label" align="left">
                직통전화
              </Td>
              <Td>
                <Input align="left" defaultValue="010-1236-7894" isRequired />
              </Td>
            </Tr>
            <Tr>
              <Td type="label" align="left">
                월수입
              </Td>
              <Td>
                <Input align="right" defaultValue="100,000,000" isRequired />
              </Td>
              <Td type="label" align="left">
                급여일
              </Td>
              <Td>
                <Input align="left" defaultValue="11일" isRequired />
              </Td>
              <Td type="label" align="left">
                연수입
              </Td>
              <Td>
                <Input align="right" defaultValue="100,000,000" />
              </Td>
            </Tr>
          </>
        )}
      </Tbody>
    </Table>
  );
}
