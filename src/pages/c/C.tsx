import PBButton from "../../components/PBButton";
import PBDropdown from "../../components/PBDropdown";
import PBInput from "../../components/PBInput";
import PBInputGroup from "../../components/PBInputGroup";
import PBLabel from "../../components/PBLabel";
import PBRadio from "../../components/PBRadio";
import PBTable from "../../components/table/PBTable";
import PBTbody from "../../components/table/PBTbody";
import PBTd from "../../components/table/PBTd";
import PBTr from "../../components/table/PBTr";
import AccountHistoryTable from "./components/AccountHistoryTable";
import ReviewHistoryTable from "./components/ReviewHistoryTable";

export default function C() {
  return (
    <div className="flex">
      <div className="w-full">
        {/* 메인상단 */}
        <div className="flex flex-col gap-2 p-4 bg-pb-custom-bg">
          <div className="flex gap-6">
            <PBInputGroup label="고객명">
              <PBInput defaultValue="김저축" width={150} />
            </PBInputGroup>
            <PBInputGroup label="생년월일">
              <PBInput defaultValue="1994-01-01" width={150} />
            </PBInputGroup>
            <PBInputGroup label="전화번호">
              <PBInput defaultValue="01012345678" width={150} />
              <PBButton label="조회" onClick={() => {}} />
              <PBButton label="초기화" onClick={() => {}} />
            </PBInputGroup>
            <PBInputGroup label="기고객여부">
              <PBInput defaultValue="Y" width={80} />
            </PBInputGroup>
            <PBInputGroup label="고객번호">
              <PBInput defaultValue="123456789" width={150} />
            </PBInputGroup>
            <PBInputGroup label="직장명">
              <PBInput defaultValue="엔투소프트" width={150} />
            </PBInputGroup>
          </div>
          <div className="flex gap-6">
            <PBInputGroup label="실거주지">
              <PBInput
                align="left"
                defaultValue="경기도 성남시 중원구 상대원동 5460 성남SKV1타워 A동 730호"
                width={605}
              />
            </PBInputGroup>
            <PBInputGroup label="주민등록주소">
              <PBInput
                align="left"
                defaultValue="경기도 성남시 중원구 상대원동 5460 성남SKV1타워 A동 730호"
                width={605}
              />
            </PBInputGroup>
          </div>
        </div>
        {/* 메인하단 */}
        <div className="flex flex-col gap-4 py-4 pl-4">
          {/* 심사이력/계좌이력 */}
          <div className="grid grid-cols-2 gap-6">
            {/* 심사이력 */}
            <div className="flex flex-col col-span-1 gap-2">
              <PBLabel label="심사이력" />
              <ReviewHistoryTable />
              <PBTable minWidth={734}>
                <PBTbody>
                  <PBTr>
                    <PBTd type="label">고객명</PBTd>
                    <PBTd type="label">생년월일</PBTd>
                    <PBTd type="label">지점</PBTd>
                    <PBTd type="label">담당자</PBTd>
                    <PBTd type="label">상품명</PBTd>
                    <PBTd type="label">신청일</PBTd>
                  </PBTr>
                  <PBTr>
                    <PBTd type="text">김저축</PBTd>
                    <PBTd type="text">900101</PBTd>
                    <PBTd type="text">92</PBTd>
                    <PBTd type="text">홍길동</PBTd>
                    <PBTd type="text">M200010010</PBTd>
                    <PBTd type="text">2024-12-31</PBTd>
                  </PBTr>
                  <PBTr>
                    <PBTd type="label">심사상태</PBTd>
                    <PBTd type="label">대출일</PBTd>
                    <PBTd type="label">대출금액</PBTd>
                    <PBTd type="label">금리</PBTd>
                    <PBTd type="label">기간</PBTd>
                    <PBTd type="label">접수경로</PBTd>
                  </PBTr>
                  <PBTr>
                    <PBTd type="text">1000</PBTd>
                    <PBTd type="text">2024-10-30</PBTd>
                    <PBTd type="text" align="right">
                      100,000,000
                    </PBTd>
                    <PBTd type="text" align="right">
                      2.5 %
                    </PBTd>
                    <PBTd type="text">0</PBTd>
                    <PBTd type="text">2024-12-31</PBTd>
                  </PBTr>
                  <PBTr>
                    <PBTd type="label">거절사유</PBTd>
                    <PBTd type="label" colSpan={5}>
                      심사메모
                    </PBTd>
                  </PBTr>
                  <PBTr>
                    <PBTd type="text">1000</PBTd>
                    <PBTd type="text" colSpan={5}></PBTd>
                  </PBTr>
                </PBTbody>
              </PBTable>
            </div>
            {/* 계좌이력 */}
            <div className="flex flex-col col-span-1 gap-2">
              <PBLabel label="계좌이력" />
              <AccountHistoryTable />
              <PBTable minWidth={734}>
                <PBTbody>
                  <PBTr>
                    <PBTd type="label">고객명</PBTd>
                    <PBTd type="label">생년월일</PBTd>
                    <PBTd type="label">지점</PBTd>
                    <PBTd type="label">담당자</PBTd>
                    <PBTd type="label">상품명</PBTd>
                    <PBTd type="label">대출일</PBTd>
                  </PBTr>
                  <PBTr>
                    <PBTd type="text">김저축</PBTd>
                    <PBTd type="text">900101</PBTd>
                    <PBTd type="text">92</PBTd>
                    <PBTd type="text">홍길동</PBTd>
                    <PBTd type="text">M200010010</PBTd>
                    <PBTd type="text">2024-01-31</PBTd>
                  </PBTr>
                  <PBTr>
                    <PBTd type="label">계약상태</PBTd>
                    <PBTd type="label">대출금</PBTd>
                    <PBTd type="label">대출잔액</PBTd>
                    <PBTd type="label">최종거래일</PBTd>
                    <PBTd type="label">차기이수일</PBTd>
                    <PBTd type="label">연체일수</PBTd>
                  </PBTr>
                  <PBTr>
                    <PBTd type="text">1000</PBTd>
                    <PBTd type="text" align="right">
                      100,000,000
                    </PBTd>
                    <PBTd type="text" align="right">
                      100,000,000
                    </PBTd>
                    <PBTd type="text">2024-10-30</PBTd>
                    <PBTd type="text">2024-10-30</PBTd>
                    <PBTd type="text">0</PBTd>
                  </PBTr>
                  <PBTr>
                    <PBTd type="label">상환원금</PBTd>
                    <PBTd type="label">이자</PBTd>
                    <PBTd type="label">연체료</PBTd>
                    <PBTd type="label">연체이자</PBTd>
                    <PBTd type="label">가수금</PBTd>
                    <PBTd type="label">부족금액</PBTd>
                  </PBTr>
                  <PBTr>
                    <PBTd type="text" align="right">
                      100,000,000
                    </PBTd>
                    <PBTd type="text" align="right">
                      100,000,000
                    </PBTd>
                    <PBTd type="text" align="right">
                      100,000,000
                    </PBTd>
                    <PBTd type="text" align="right">
                      100,000,000
                    </PBTd>
                    <PBTd type="text" align="right">
                      100,000,000
                    </PBTd>
                    <PBTd type="text" align="right">
                      100,000,000
                    </PBTd>
                  </PBTr>
                </PBTbody>
              </PBTable>
              <div className="flex gap-2">
                <PBButton label="온라인 조회" onClick={() => {}} />
                <PBButton label="SMS 발송" onClick={() => {}} />
              </div>
            </div>
          </div>
          <div className="flex gap-6">
            <PBTable
              minWidth={1131}
              height={404}
              className="col-span-2"
              borderTop
            >
              <PBTbody>
                <PBTr>
                  <PBTd type="label">No.</PBTd>
                  <PBTd type="label">1차상담유형</PBTd>
                  <PBTd type="label">2차상담유형</PBTd>
                  <PBTd type="label">인/아웃바운드 구분</PBTd>
                  <PBTd type="label">통화구분</PBTd>
                  <PBTd type="label">상담전화구분</PBTd>
                  <PBTd type="label">유입경로</PBTd>
                  <PBTd type="label">등록일자</PBTd>
                  <PBTd type="label">등록시간</PBTd>
                  <PBTd type="label">주택소유구분코드</PBTd>
                </PBTr>
              </PBTbody>
            </PBTable>
            <div className="flex flex-col col-span-1 gap-2 w-[334px]">
              <PBTable width={334} height={150} borderTop>
                <PBTbody>
                  <PBTr>
                    <PBTd type="label">No.</PBTd>
                    <PBTd type="label">상담유형</PBTd>
                  </PBTr>
                </PBTbody>
              </PBTable>
              <PBTable width={334}>
                <PBTbody>
                  <PBTr>
                    <PBTd type="label">인/아웃바운드</PBTd>
                    <PBTd>
                      <div className="flex items-center gap-4 px-2 py-1">
                        <PBRadio label="인바운드" />
                        <PBRadio label="아웃바운드" isChecked />
                      </div>
                    </PBTd>
                  </PBTr>
                </PBTbody>
              </PBTable>
              <PBTable width={334}>
                <PBTbody>
                  <PBTr>
                    <PBTd type="label" align="left">
                      통화구분
                    </PBTd>
                    <PBTd>
                      <PBDropdown
                        align="left"
                        options={[{ label: "선택", value: "" }]}
                        isRequired
                      />
                    </PBTd>
                    <PBTd type="label" align="left">
                      상담전화구분
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
                      유입경로
                    </PBTd>
                    <PBTd>
                      <PBDropdown
                        align="left"
                        options={[{ label: "선택", value: "" }]}
                        isRequired
                      />
                    </PBTd>
                    <PBTd type="label" align="left">
                      통화결과
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
                    <PBTd colSpan={4}>
                      <textarea className="block w-full h-[128px] outline-none resize-none text-xs text-pb-custom-black p-2" />
                    </PBTd>
                  </PBTr>
                </PBTbody>
              </PBTable>
              <div className="flex self-end gap-2">
                <PBButton label="초기화" onClick={() => {}} />
                <PBButton label="상담저장 후 종결" onClick={() => {}} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 우측 테이블 */}
      <div className="flex flex-col gap-4 m-4">
        <PBTable width={374} height={485} borderTop>
          <PBTbody>
            <PBTr>
              <PBTd type="label">No.</PBTd>
              <PBTd type="label">접수일시</PBTd>
              <PBTd type="label">고객명</PBTd>
              <PBTd type="label">접수경로</PBTd>
              <PBTd type="label">상담구분</PBTd>
            </PBTr>
          </PBTbody>
        </PBTable>
        <PBTable width={374} height={485} borderTop>
          <PBTbody>
            <PBTr>
              <PBTd type="label">No.</PBTd>
              <PBTd type="label">예약일</PBTd>
              <PBTd type="label">예약시간</PBTd>
              <PBTd type="label">메모</PBTd>
              <PBTd type="label">등록자</PBTd>
            </PBTr>
          </PBTbody>
        </PBTable>
      </div>
    </div>
  );
}
