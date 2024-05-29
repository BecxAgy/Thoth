import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { GiNotebook } from "react-icons/gi";

const ActionMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <GiNotebook className="w-7 h-7 hover:text-orange-900 " />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-lg">
        <DropdownMenuLabel>Adicionar</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          {" "}
          <Link href={"/new-knowledge"}>Conhecimento</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          {" "}
          <Link href={"/new-project"}>Projeto</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={"/new-report"}>Relatório</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ActionMenu;
