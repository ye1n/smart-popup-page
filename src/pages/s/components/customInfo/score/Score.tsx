import PBButton from "../../../../../components/PBButton";
import ScoreTable from "./ScoreTable";

export default function Score() {
  return (
    <div>
      <div className="flex items-end justify-between mb-2">
        <p className="text-xs font-bold text-pb-custom-black">내/외부 평점</p>
        <PBButton
          variant="white-outline-shadow"
          label="TOSS스코어"
          onClick={() => {}}
        />
      </div>
      <ScoreTable />
    </div>
  );
}
