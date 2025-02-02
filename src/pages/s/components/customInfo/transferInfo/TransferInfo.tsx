import PBButton from "../../../../../components/PBButton";
import PBCheckbox from "../../../../../components/PBCheckbox";
import PBIcon from "../../../../../components/PBIcon";
import PBInput from "../../../../../components/PBInput";
import PBTable from "../../../../../components/table/PBTable";
import PBTbody from "../../../../../components/table/PBTbody";
import PBTd from "../../../../../components/table/PBTd";
import PBTr from "../../../../../components/table/PBTr";
import { icons } from "../../../../../constants/icons";
import PBTransferInfoTable01 from "./TransferInfoTable01";
import PBTransferInfoTable02 from "./TransferInfoTable02";

export default function TransferInfo() {
  return (
    <div className="flex flex-col h-[298px] overflow-y-auto custom-scrollbar">
      <div className="mb-2">
        <div className="flex items-end justify-between mb-2">
          <p className="text-xs font-bold text-pb-custom-black">CMS내역 (A)</p>
          <div className="flex gap-1">
            <PBButton
              variant="icon-white-outline"
              label=""
              icon={<PBIcon icon={icons.roundPlus} />}
              onClick={() => {}}
            />
            <PBButton
              variant="icon-white-outline"
              label=""
              icon={<PBIcon icon={icons.view} />}
              onClick={() => {}}
            />
            <PBButton
              variant="icon-white-outline"
              label=""
              icon={<PBIcon icon={icons.lock} />}
              onClick={() => {}}
            />
            <PBButton
              variant="icon-white-outline"
              label=""
              icon={<PBIcon icon={icons.unlock} />}
              onClick={() => {}}
            />
            <PBButton
              variant="icon-white-outline"
              label=""
              icon={<PBIcon icon={icons.edit} />}
              onClick={() => {}}
            />
            <PBButton
              variant="icon-white-outline"
              label=""
              icon={<PBIcon icon={icons.remove} />}
              onClick={() => {}}
            />
          </div>
        </div>
        <PBTransferInfoTable01 />
      </div>
      <div className="mb-[26px]">
        <div className="flex items-end justify-between mb-2">
          <p className="text-xs font-bold text-pb-custom-black">계좌내역 (B)</p>
          <div className="flex gap-1">
            <PBCheckbox
              isChecked
              buttonStyle
              checkedColor="#ff9015"
              label="당행자체대환"
            />
            <PBCheckbox
              buttonStyle
              checkedColor="#ff9015"
              label="권리침해대환"
            />
            <PBCheckbox buttonStyle checkedColor="#ff9015" label="대환" />
            <PBButton
              variant="icon-white-outline"
              label=""
              icon={<PBIcon icon={icons.roundPlus} />}
              onClick={() => {}}
            />
            <PBButton
              variant="icon-white-outline"
              label=""
              icon={<PBIcon icon={icons.view} />}
              onClick={() => {}}
            />
            <PBButton
              variant="icon-white-outline"
              label=""
              icon={<PBIcon icon={icons.lock} />}
              onClick={() => {}}
            />
            <PBButton
              variant="icon-white-outline"
              label=""
              icon={<PBIcon icon={icons.unlock} />}
              onClick={() => {}}
            />
            <PBButton
              variant="icon-white-outline"
              label=""
              icon={<PBIcon icon={icons.edit} />}
              onClick={() => {}}
            />
            <PBButton
              variant="icon-white-outline"
              label=""
              icon={<PBIcon icon={icons.remove} />}
              onClick={() => {}}
            />
          </div>
        </div>
        <PBTransferInfoTable02 />
      </div>
      <div className="mb-4">
        <PBTable borderTop>
          <PBTbody>
            <PBTr>
              <PBTd type="label" align="left">
                보증보험 보증료(분할납부예상액)
              </PBTd>
              <PBTd>
                <PBInput
                  align="right"
                  defaultValue="5,730"
                  isRequired
                  readOnly
                />
              </PBTd>
              <PBTd type="label" align="left">
                보증실행 전문 결과 보증료
              </PBTd>
              <PBTd>
                <PBInput
                  align="right"
                  defaultValue="5,730"
                  isRequired
                  readOnly
                />
              </PBTd>
            </PBTr>
          </PBTbody>
        </PBTable>
      </div>
      <div className="mb-4">
        <div className="mb-2">
          <p className="text-xs font-bold text-pb-custom-black">
            인지세 설정 (C)
          </p>
        </div>
        <PBTable borderTop>
          <PBTbody>
            <PBTr>
              <PBTd type="label" align="left">
                인지세
              </PBTd>
              <PBTd type="text" align="right">
                100,000,000
              </PBTd>
              <PBTd type="label" align="left">
                총 이체금액(A+B+C)
              </PBTd>
              <PBTd type="text" align="right">
                100,000,000
              </PBTd>
              <PBTd type="label" align="left">
                대출액
              </PBTd>
              <PBTd type="text" align="right">
                100,000,000
              </PBTd>
              <PBTd type="label" align="left">
                결과
              </PBTd>
              <PBTd type="text" align="left">
                완료
              </PBTd>
            </PBTr>
          </PBTbody>
        </PBTable>
      </div>
      <div>
        <div className="flex items-end justify-between mb-2">
          <p className="text-xs font-bold text-pb-custom-black">기타정보</p>
          <PBButton
            variant="white-outline-shadow"
            label="NCCS자서대행"
            onClick={() => {}}
          />
        </div>
        <PBTable borderTop>
          <PBTbody>
            <PBTr>
              <PBTd type="label" align="left">
                공증/인감
              </PBTd>
              <PBTd colSpan={3}>
                <div className="flex items-center gap-4 px-2">
                  <PBCheckbox isChecked label="공증인증대상" />
                  <PBCheckbox label="공증대상" />
                  <PBCheckbox label="인감대상" />
                  <PBCheckbox label="소득증빙대상" />
                  <PBCheckbox label="CMS대상" />
                </div>
              </PBTd>
            </PBTr>
            <PBTr>
              <PBTd type="label" align="left">
                수령지주소
              </PBTd>
              <PBTd align="left" colSpan={3}>
                <PBInput
                  align="left"
                  defaultValue="경기도 성남시 중원구 갈마치로 288 14 A-730"
                />
              </PBTd>
            </PBTr>
            <PBTr>
              <PBTd type="label" align="left">
                CMS은행
              </PBTd>
              <PBTd align="left">
                <PBInput align="left" defaultValue="스마트저축은행" />
              </PBTd>
              <PBTd type="label" align="left">
                CMS계좌
              </PBTd>
              <PBTd align="left">
                <PBInput align="left" defaultValue=" 123456-789-00-45613" />
              </PBTd>
            </PBTr>
          </PBTbody>
        </PBTable>
      </div>
    </div>
  );
}
