import Button from "../../components/Button";
import Dropdown from "../../components/Dropdown";
import Input from "../../components/Input";
import InputGroup from "../../components/InputGroup";
import Label from "../../components/Label";
import Radio from "../../components/Radio";
import Table from "../../components/table/Table";
import Tbody from "../../components/table/Tbody";
import Td from "../../components/table/Td";
import Tr from "../../components/table/Tr";
import AccountHistoryTable from "./components/accountHistoryTable";
import ReviewHistoryTable from "./components/ReviewHistoryTable";

export default function C() {
  return (
    <div className="flex">
      <div className="w-full">
        {/* 메인상단 */}
        <div className="flex flex-col gap-2 p-4 bg-custom-bg">
          <div className="flex gap-6">
            <InputGroup label="고객명">
              <Input defaultValue="김저축" width={150} />
            </InputGroup>
            <InputGroup label="생년월일">
              <Input defaultValue="1994-01-01" width={150} />
            </InputGroup>
            <InputGroup label="전화번호">
              <Input defaultValue="01012345678" width={150} />
              <Button label="조회" onClick={() => {}} />
              <Button label="초기화" onClick={() => {}} />
            </InputGroup>
            <InputGroup label="기고객여부">
              <Input defaultValue="Y" width={80} />
            </InputGroup>
            <InputGroup label="고객번호">
              <Input defaultValue="123456789" width={150} />
            </InputGroup>
            <InputGroup label="직장명">
              <Input defaultValue="엔투소프트" width={150} />
            </InputGroup>
          </div>
          <div className="flex gap-6">
            <InputGroup label="실거주지">
              <Input
                align="left"
                defaultValue="경기도 성남시 중원구 상대원동 5460 성남SKV1타워 A동 730호"
                width={605}
              />
            </InputGroup>
            <InputGroup label="주민등록주소">
              <Input
                align="left"
                defaultValue="경기도 성남시 중원구 상대원동 5460 성남SKV1타워 A동 730호"
                width={605}
              />
            </InputGroup>
          </div>
        </div>
        {/* 메인하단 */}
        <div className="flex flex-col gap-4 py-4 pl-4">
          {/* 심사이력/계좌이력 */}
          <div className="grid grid-cols-2 gap-6">
            {/* 심사이력 */}
            <div className="flex flex-col col-span-1 gap-2">
              <Label label="심사이력" />
              <ReviewHistoryTable />
              <Table minWidth={734}>
                <Tbody>
                  <Tr>
                    <Td type="label">고객명</Td>
                    <Td type="label">생년월일</Td>
                    <Td type="label">지점</Td>
                    <Td type="label">담당자</Td>
                    <Td type="label">상품명</Td>
                    <Td type="label">신청일</Td>
                  </Tr>
                  <Tr>
                    <Td type="text">김저축</Td>
                    <Td type="text">900101</Td>
                    <Td type="text">92</Td>
                    <Td type="text">홍길동</Td>
                    <Td type="text">M200010010</Td>
                    <Td type="text">2024-12-31</Td>
                  </Tr>
                  <Tr>
                    <Td type="label">심사상태</Td>
                    <Td type="label">대출일</Td>
                    <Td type="label">대출금액</Td>
                    <Td type="label">금리</Td>
                    <Td type="label">기간</Td>
                    <Td type="label">접수경로</Td>
                  </Tr>
                  <Tr>
                    <Td type="text">1000</Td>
                    <Td type="text">2024-10-30</Td>
                    <Td type="text" align="right">
                      100,000,000
                    </Td>
                    <Td type="text" align="right">
                      2.5 %
                    </Td>
                    <Td type="text">0</Td>
                    <Td type="text">2024-12-31</Td>
                  </Tr>
                  <Tr>
                    <Td type="label">거절사유</Td>
                    <Td type="label" colSpan={5}>
                      심사메모
                    </Td>
                  </Tr>
                  <Tr>
                    <Td type="text">1000</Td>
                    <Td type="text" colSpan={5}></Td>
                  </Tr>
                </Tbody>
              </Table>
            </div>
            {/* 계좌이력 */}
            <div className="flex flex-col col-span-1 gap-2">
              <Label label="계좌이력" />
              <AccountHistoryTable />
              <Table minWidth={734}>
                <Tbody>
                  <Tr>
                    <Td type="label">고객명</Td>
                    <Td type="label">생년월일</Td>
                    <Td type="label">지점</Td>
                    <Td type="label">담당자</Td>
                    <Td type="label">상품명</Td>
                    <Td type="label">대출일</Td>
                  </Tr>
                  <Tr>
                    <Td type="text">김저축</Td>
                    <Td type="text">900101</Td>
                    <Td type="text">92</Td>
                    <Td type="text">홍길동</Td>
                    <Td type="text">M200010010</Td>
                    <Td type="text">2024-01-31</Td>
                  </Tr>
                  <Tr>
                    <Td type="label">계약상태</Td>
                    <Td type="label">대출금</Td>
                    <Td type="label">대출잔액</Td>
                    <Td type="label">최종거래일</Td>
                    <Td type="label">차기이수일</Td>
                    <Td type="label">연체일수</Td>
                  </Tr>
                  <Tr>
                    <Td type="text">1000</Td>
                    <Td type="text" align="right">
                      100,000,000
                    </Td>
                    <Td type="text" align="right">
                      100,000,000
                    </Td>
                    <Td type="text">2024-10-30</Td>
                    <Td type="text">2024-10-30</Td>
                    <Td type="text">0</Td>
                  </Tr>
                  <Tr>
                    <Td type="label">상환원금</Td>
                    <Td type="label">이자</Td>
                    <Td type="label">연체료</Td>
                    <Td type="label">연체이자</Td>
                    <Td type="label">가수금</Td>
                    <Td type="label">부족금액</Td>
                  </Tr>
                  <Tr>
                    <Td type="text" align="right">
                      100,000,000
                    </Td>
                    <Td type="text" align="right">
                      100,000,000
                    </Td>
                    <Td type="text" align="right">
                      100,000,000
                    </Td>
                    <Td type="text" align="right">
                      100,000,000
                    </Td>
                    <Td type="text" align="right">
                      100,000,000
                    </Td>
                    <Td type="text" align="right">
                      100,000,000
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
              <div className="flex gap-2">
                <Button label="온라인 조회" onClick={() => {}} />
                <Button label="SMS 발송" onClick={() => {}} />
              </div>
            </div>
          </div>
          <div className="flex gap-6">
            <Table
              minWidth={1131}
              height={404}
              className="col-span-2"
              borderTop
            >
              <Tbody>
                <Tr>
                  <Td type="label">No.</Td>
                  <Td type="label">1차상담유형</Td>
                  <Td type="label">2차상담유형</Td>
                  <Td type="label">인/아웃바운드 구분</Td>
                  <Td type="label">통화구분</Td>
                  <Td type="label">상담전화구분</Td>
                  <Td type="label">유입경로</Td>
                  <Td type="label">등록일자</Td>
                  <Td type="label">등록시간</Td>
                  <Td type="label">주택소유구분코드</Td>
                </Tr>
              </Tbody>
            </Table>
            <div className="flex flex-col col-span-1 gap-2 w-[334px]">
              <Table width={334} height={150} borderTop>
                <Tbody>
                  <Tr>
                    <Td type="label">No.</Td>
                    <Td type="label">상담유형</Td>
                  </Tr>
                </Tbody>
              </Table>
              <Table width={334}>
                <Tbody>
                  <Tr>
                    <Td type="label">인/아웃바운드</Td>
                    <Td>
                      <div className="flex items-center gap-4 px-2 py-1">
                        <Radio label="인바운드" />
                        <Radio label="아웃바운드" isChecked />
                      </div>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
              <Table width={334}>
                <Tbody>
                  <Tr>
                    <Td type="label" align="left">
                      통화구분
                    </Td>
                    <Td>
                      <Dropdown
                        align="left"
                        options={[{ label: "선택", value: "" }]}
                        isRequired
                      />
                    </Td>
                    <Td type="label" align="left">
                      상담전화구분
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
                      유입경로
                    </Td>
                    <Td>
                      <Dropdown
                        align="left"
                        options={[{ label: "선택", value: "" }]}
                        isRequired
                      />
                    </Td>
                    <Td type="label" align="left">
                      통화결과
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
                    <Td colSpan={4}>
                      <textarea className="block w-full h-[128px] outline-none resize-none text-xs text-custom-black p-2" />
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
              <div className="flex self-end gap-2">
                <Button label="초기화" onClick={() => {}} />
                <Button label="상담저장 후 종결" onClick={() => {}} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 우측 테이블 */}
      <div className="flex flex-col gap-4 m-4">
        <Table width={374} height={485} borderTop>
          <Tbody>
            <Tr>
              <Td type="label">No.</Td>
              <Td type="label">접수일시</Td>
              <Td type="label">고객명</Td>
              <Td type="label">접수경로</Td>
              <Td type="label">상담구분</Td>
            </Tr>
          </Tbody>
        </Table>
        <Table width={374} height={485} borderTop>
          <Tbody>
            <Tr>
              <Td type="label">No.</Td>
              <Td type="label">예약일</Td>
              <Td type="label">예약시간</Td>
              <Td type="label">메모</Td>
              <Td type="label">등록자</Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    </div>
  );
}
