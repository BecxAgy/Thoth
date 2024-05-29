import React from "react";
import { LuEye } from "react-icons/lu";

type Props = {
  quantity_views: number;
};

const VisitsCount = ({ quantity_views = 10 }: Props) => {
  return (
    <div className="flex gap-1">
      <LuEye className="text-2xl" />
      <p className="text-[#949494] text-[12px] mt-0.5">{quantity_views}</p>
    </div>
  );
};

export default VisitsCount;
