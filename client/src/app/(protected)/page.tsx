import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  let categories = ["react", "node.js", "3dsmax", "unreal", "Spring Boot"];
  return (
    <section className="h-cover flex justify-center gap-10">
      <div className="w-full">
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList className="bg-white ">
            <TabsTrigger className="" value="project">
              Projetos
            </TabsTrigger>
            <TabsTrigger className="" value="reports">
              Relatórios
            </TabsTrigger>
          </TabsList>
          <TabsContent value="project">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="reports">Change your reports here.</TabsContent>
        </Tabs>
      </div>

      <div className="border-l min-w-[40%] lg:min-w-[600px] h-screen max-w-min pl-8 pt-3 max-md:hidden ">
        <div className="flex flex-col gap-10"></div>
        <h2 className="font-medium text-lg">Nossos conhecimentos</h2>
        <div className="flex gap-3 flex-wrap mt-6">
          {categories.map((category, index) => {
            return (
              <button className="bg-gray  p-3 rounded-[20px] hover:bg-gray-200">
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
