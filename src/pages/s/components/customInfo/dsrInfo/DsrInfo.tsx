import Checkbox from "../../../../../components/Checkbox";
import DsrInfoTable01 from "./DsrInfoTable01";
import DsrInfoTable02 from "./DsrInfoTable02";

export default function DsrInfo() {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <div className="mb-2">
          <p className="text-xs font-bold text-custom-black">
            대출 현금서비스 실질 DSR 상세정보 조회
          </p>
        </div>
        <DsrInfoTable01 />
      </div>
      <div>
        <div className="flex items-end justify-between mb-2">
          <p className="text-xs font-bold text-custom-black">DSR 조회내역</p>
          <div className="flex gap-2">
            <Checkbox buttonStyle label="DSR 조회" onClick={() => {}} />
            <Checkbox
              isChecked
              buttonStyle
              checkedColor="#ff9015"
              label="예상 DSR 조회"
              onClick={() => {}}
            />
          </div>
        </div>
        <DsrInfoTable02 />
      </div>
    </div>
  );
}
