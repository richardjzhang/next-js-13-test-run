import { postClass } from "@/components/post";
import { randomIntFromInterval } from "@/utils/math";

const BACKGROUND_COLOR = "bg-slate-300";
const TITLE_WIDTHS = ["w-full", "w-4/5", "w-3/5"];

export default function SkeletonPost() {
  return (
    <div>
      <div className={`${postClass} ${BACKGROUND_COLOR}`} />
      <div
        className={`mb-1 h-4 leading-5 w-1/4 rounded-lg ${BACKGROUND_COLOR}`}
      />
      <div
        className={`h-6 leading-5 ${
          TITLE_WIDTHS[randomIntFromInterval(0, 2)]
        } rounded-xl ${BACKGROUND_COLOR}`}
      />
    </div>
  );
}
