import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import Input from "../components/Input";
import InputGroup from "../components/InputGroup";
import { SideMenuData, TopBtnData } from "../data/buttonData";
import { useState } from "react";
import Icon from "../components/Icon";
import { icons } from "../constants/icons";

export default function Page1() {
  const [selectedSideMenu, setSelectedSideMenu] = useState(0);

  return (
    <div className="flex">
      {/* 메인화면 */}
      <div>
        {/* 메인상단 */}
        <div className="flex flex-col gap-4 p-4 bg-custom-bg">
          {/* 메인상단 - 고객정보 */}
          <div className="flex gap-6">
            <InputGroup label="고객명">
              <Input defaultValue="김저축" />
            </InputGroup>
            <InputGroup label="주민등록번호">
              <div className="flex gap-0.5">
                <Input defaultValue="900101-1234567" />
                <Input defaultValue="남 만 30세 (호랑이)" />
              </div>
            </InputGroup>
            <InputGroup label="상담상태">
              <div className="flex gap-2">
                <Dropdown placeholder="전체" options={[]} width="w-[150px]" />
                <Button label="변경" onClick={() => {}} />
                <Input defaultValue="심사중" width="w-[80px]" />
              </div>
            </InputGroup>
            <InputGroup label="접수번호">
              <div className="flex gap-2">
                <div className="flex gap-0.5">
                  <Input defaultValue="202411210000251" />
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
            <div className="flex border border-custom-form-line">
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
          <div></div>
          {/* 소득정보/차량정보 */}
          {/* 고객정보/소득정보 */}
          {/* 임대아파트정보 */}
          {/* 약정정보 */}
        </div>
      </div>
      {/* 사이드메뉴 */}
      <div className="shadow-lg w-20 bg-custom-white py-[10px] rounded-b-lg">
        <div className="flex flex-col divide-y border-y border-custom-btn-line divide-custom-btn-line">
          {SideMenuData.map((item, index) => (
            <div className="w-20">
              <button
                key={index}
                className={`w-full flex flex-col items-center justify-center bg-custom-white rounded-lg h-[56px] transition ${
                  selectedSideMenu === index
                    ? "bg-custom-secondary shadow-inner text-custom-white"
                    : "text-custom-black"
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
      <div className=""></div>
    </div>
  );
}
