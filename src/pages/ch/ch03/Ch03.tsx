import { useState } from "react";
import Input from "../../../components/Input";
import InputGroup from "../../../components/InputGroup";
import Tabs, { Tab } from "../../../components/Tabs";
import Button from "../../../components/Button";
import Icon from "../../../components/Icon";
import { icons } from "../../../constants/icons";
import Dropdown from "../../../components/Dropdown";
import Label from "../../../components/Label";
import Table from "../../../components/table/Table";
import Tbody from "../../../components/table/Tbody";
import Tr from "../../../components/table/Tr";
import Td from "../../../components/table/Td";
import ChTable01 from "./components/ChTable01";
import Checkbox from "../../../components/Checkbox";
import ChTable02 from "./components/ChTable02";

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
      <div className="flex items-center gap-6 p-4 bg-custom-bg">
        <InputGroup label="고객명">
          <Input defaultValue="김저축" width={150} />
        </InputGroup>
        <InputGroup label="고객고유번호">
          <Input defaultValue="999011123456" width={150} />
        </InputGroup>
        <InputGroup label="고객번호">
          <Input defaultValue="996176-******" width={150} />
        </InputGroup>
      </div>
      {/* 메인하단 */}
      <div className="flex flex-col gap-4 p-4">
        <div className="grid grid-cols-2 gap-6">
          {/* 사고이력 */}
          <div>
            <div className="flex items-start justify-between mb-2">
              <Label label="사고이력" />
              <div className="flex gap-4">
                <div className="flex gap-2">
                  <Checkbox buttonStyle label="접수" />
                  <Checkbox buttonStyle label="진행" />
                  <Checkbox buttonStyle label="종결" />
                </div>
                <Button label="조회" onClick={() => {}} />
              </div>
            </div>
            <ChTable01 />
          </div>
          {/* 연결계좌 */}
          <div>
            <div className="flex items-start justify-between mb-2">
              <Label label="연결계좌" />
            </div>
            <ChTable02 />
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex flex-col gap-2">
            <Tabs
              tabs={topTabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              width={105}
            />
            <Table minWidth={1033} borderTop={false}>
              <Tbody>
                <Tr>
                  <Td type="label" align="left">
                    진행상태
                  </Td>
                  <Td>
                    <Dropdown
                      align="left"
                      options={[{ label: "선택", value: "" }]}
                    />
                  </Td>
                  <Td type="label" align="left">
                    관할법원
                  </Td>
                  <Td>
                    <Dropdown
                      align="left"
                      options={[{ label: "선택", value: "" }]}
                    />
                  </Td>
                  <Td type="label" align="left">
                    사건번호
                  </Td>
                  <Td>
                    <Input align="left" defaultValue="입력" />
                  </Td>
                  <Td type="label" align="left">
                    마이데이터
                  </Td>
                  <Td>
                    <div className="flex items-center mr-1">
                      <Input align="left" defaultValue="2024-01-01 13:11" />
                      <Button
                        label="사건조회"
                        variant="table-gray"
                        onClick={() => {}}
                      />
                    </div>
                  </Td>
                </Tr>
                <Tr>
                  <Td type="label" align="left">
                    계좌번호
                  </Td>
                  <Td>
                    <Input align="left" defaultValue="입력" />
                  </Td>
                  <Td type="label" align="left">
                    채권번호
                  </Td>
                  <Td>
                    <Input align="left" defaultValue="입력" />
                  </Td>
                  <Td type="label" align="left">
                    계좌신고일자
                  </Td>
                  <Td>
                    <Input
                      align="left"
                      defaultValue="2024-01-01"
                      icon={<Icon icon={icons.calendar} />}
                      iconPosition="right"
                    />
                  </Td>
                  <Td type="label" align="left">
                    변제금 수취용 계좌
                  </Td>
                  <Td>
                    <Input align="left" defaultValue="입력" />
                  </Td>
                </Tr>
              </Tbody>
            </Table>
            <Table minWidth={1033} borderTop={false}>
              <Tbody>
                <Tr>
                  <Td type="label" align="left">
                    신청일자
                  </Td>
                  <Td>
                    <Input
                      align="left"
                      defaultValue="2024-01-01"
                      icon={<Icon icon={icons.calendar} />}
                      iconPosition="right"
                    />
                  </Td>
                  <Td type="label" align="left">
                    금지일자
                  </Td>
                  <Td>
                    <Input
                      align="left"
                      defaultValue="2024-01-01"
                      icon={<Icon icon={icons.calendar} />}
                      iconPosition="right"
                    />
                  </Td>
                  <Td type="label" align="left">
                    개시일자
                  </Td>
                  <Td>
                    <Input
                      align="left"
                      defaultValue="2024-01-01"
                      icon={<Icon icon={icons.calendar} />}
                      iconPosition="right"
                    />
                  </Td>
                  <Td type="label" align="left">
                    만기일자
                  </Td>
                  <Td>
                    <Input
                      align="left"
                      defaultValue="2024-01-01"
                      icon={<Icon icon={icons.calendar} />}
                      iconPosition="right"
                    />
                  </Td>
                </Tr>
                <Tr>
                  <Td type="label" align="left">
                    면책일자
                  </Td>
                  <Td>
                    <Input
                      align="left"
                      defaultValue="2024-01-01"
                      icon={<Icon icon={icons.calendar} />}
                      iconPosition="right"
                    />
                  </Td>
                  <Td type="label" align="left">
                    신청취하일자
                  </Td>
                  <Td>
                    <Input
                      align="left"
                      defaultValue="2024-01-01"
                      icon={<Icon icon={icons.calendar} />}
                      iconPosition="right"
                    />
                  </Td>
                  <Td type="label" align="left">
                    기각일자
                  </Td>
                  <Td>
                    <Input
                      align="left"
                      defaultValue="2024-01-01"
                      icon={<Icon icon={icons.calendar} />}
                      iconPosition="right"
                    />
                  </Td>
                  <Td type="label" align="left">
                    폐지일자
                  </Td>
                  <Td>
                    <Input
                      align="left"
                      defaultValue="2024-01-01"
                      icon={<Icon icon={icons.calendar} />}
                      iconPosition="right"
                    />
                  </Td>
                </Tr>
                <Tr>
                  <Td type="label" align="left">
                    항고일자
                  </Td>
                  <Td>
                    <Input
                      align="left"
                      defaultValue="2024-01-01"
                      icon={<Icon icon={icons.calendar} />}
                      iconPosition="right"
                    />
                  </Td>
                  <Td type="label" align="left">
                    기각/폐지 취소일자
                  </Td>
                  <Td>
                    <Input
                      align="left"
                      defaultValue="2024-01-01"
                      icon={<Icon icon={icons.calendar} />}
                      iconPosition="right"
                    />
                  </Td>
                  <Td type="label" align="left">
                    (법원)출금대상잔액
                  </Td>
                  <Td>
                    <Input align="right" defaultValue="100,000,000" />
                  </Td>
                  <Td type="label" align="left">
                    (법원)미납회차
                  </Td>
                  <Td>
                    <Input align="right" defaultValue="100,000,000" />
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </div>
          {/* 메모 */}
          <div className="flex flex-col gap-2">
            <div className="flex items-start justify-between">
              <Label label="메모" />
              <Button label="등록" onClick={() => {}} />
            </div>
            <textarea className="w-[146px] h-[499px] border outline-none resize-none border-custom-form-line border-t-[#333333] text-xs text-custom-black p-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
