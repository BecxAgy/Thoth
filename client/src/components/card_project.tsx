import Image from "next/image";
import React from "react";
import { LuEye, LuQrCode } from "react-icons/lu";
import VisitsCount from "./visits-count";
import CategoryChip from "./category_chip";
import { Button } from "./ui/button";

const CardProject = () => {
  return (
    <div className="bg-white shadow-lg rounded-xl md:h-[250px] relative ">
      <div className="flex md:flex-row flex-col  ">
        <img
          src="/background_card.jpg"
          alt="background"
          className=" md:rounded-e-xl md:h-[250px] rounded-xl "
        />
        <div className="p-5 w-full ">
          <div className=" flex justify-between">
            <h1 className="text-[15px] font-medium">Titulo do Projeto</h1>
            <div className="flex gap-2 ">
              <VisitsCount quantity_views={10} />
              <LuQrCode className="text-2xl" />
            </div>
          </div>
          <div className="">
            <div className="flex overflow-y-auto gap-3 py-1">
              <CategoryChip category="React" color="FFD3B6" />
              <CategoryChip category="Node.js" color="009FF0" />
            </div>
            <p className="text-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              tincidunt malesuada diam sit amet maximus. Duis venenatis lacinia{" "}
            </p>
          </div>
          <div className="flex justify-end ">
            <Button className="rounded-xl  text-[12px] my-2">Ver mais</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
