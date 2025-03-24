import { Inter } from "next/font/google";
import { Button } from "@nextui-org/react";
import PageHead from "@/components/commons/PageHead";
import HomeLayout from "@/components/layouts/HomeLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    // <main
    //   className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    // >
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <PageHead title="Home"/>
      {/* <Button color="primary">Button</Button> */}
      <HomeLayout/>
    </main>
  );
}
