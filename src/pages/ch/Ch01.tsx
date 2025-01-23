import Button from "../../components/Button";
import SideMenu from "../../components/common/SideMenu";
import Input from "../../components/Input";
import InputGroup from "../../components/InputGroup";
import { ChSideMenuData } from "../../data/Data";
import CustomerInfoTable01 from "./components/CustomerInfoTable01";
import CustomerInfoTable02 from "./components/CustomerInfoTable02";
import CustomerInfoTable03 from "./components/CustomerInfoTable03";
import CustomerInfoTable04 from "./components/CustomerInfoTable04";

export default function Ch01() {
  return (
    <div className="flex pr-9">
      {/* 메인 */}
      <div className="w-full">
        {/* 메인상단 */}
        <div className="flex gap-6 p-4 bg-custom-bg">
          <InputGroup>
            <div className="flex gap-0.5">
              <Input defaultValue="김저축" width="w-[150px]" />
              <Input defaultValue="900101-1234567" width="w-[150px]" />
              <Input defaultValue="남 만 30세 (호랑이)" width="w-[150px]" />
            </div>
          </InputGroup>
          <InputGroup label="고객번호">
            <div className="flex gap-0.5">
              <Input defaultValue="202411210000251" width="w-[150px]" />
              <Input defaultValue="개인" width="w-[80px]" />
            </div>
            <Button label="고객통합뷰" onClick={() => {}} />
            <Button label="채권관리히스토리" onClick={() => {}} />
          </InputGroup>
        </div>
        {/* 메인하단 */}
        <div>
          {/* 좌측 */}
          <div>
            <div className="grid grid-cols-2 p-4 gap-7">
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
          {/* 우측 */}
          <div></div>
        </div>
      </div>
      {/* 사이드메뉴 */}
      <SideMenu data={ChSideMenuData} />
    </div>
  );
}
