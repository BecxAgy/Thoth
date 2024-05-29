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

const ProfileMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="bg-gradient-to-r from-blue-200 to-orange-500 hover:from-blue-500 hover:to-yellow-500 rounded-full h-12 w-12" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-lg">
        <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href={"/profile"}>Perfil</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          {" "}
          <Link href={"/reports"}>Relatórios</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          {" "}
          <Link href={"/projects"}>Projetos</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileMenu;
