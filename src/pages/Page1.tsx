import Button from "../components/Button";
import LabeledInput from "../components/LabeledInput";

export default function Page1() {
  return (
    <div>
      <div className="text-custom-white bg-[#0056a4] h-[30px] flex items-center justify-between p-2">
        <p>심사원장</p>
        <p>X</p>
      </div>
      <div>
        {/* 메인화면 */}
        <div>
          {/* 메인 상단 */}
          <div className="flex gap-6 p-4 bg-custom-bg">
            <LabeledInput label="고객명" id="name" defaultValue="김저축" />
            <div className="flex gap-0.5">
              <LabeledInput
                label="주민등록번호"
                id="registNum"
                defaultValue="900101-1234567"
              />
              <LabeledInput id="" defaultValue="남 만 30세 (호랑이)" />
            </div>
            <div className="flex gap-2">
              <LabeledInput label="상담상태" id="name" defaultValue="전체" />
              <Button label="변경" onClick={() => {}} />
              <LabeledInput id="name" defaultValue="심사중" width="w-[80px]" />
            </div>
            <div className="flex gap-0.5">
              <LabeledInput
                label="접수번호"
                id="name"
                defaultValue="202411210000251"
              />
              <LabeledInput id="name" defaultValue="신규" width="w-[80px]" />
            </div>
          </div>
          <div></div>
        </div>
        {/* 사이드메뉴 */}
        <div></div>
        {/* 우측메모란 */}
        <div></div>
      </div>
    </div>
  );
}
