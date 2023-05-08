import { Footer } from "@/components/common/Footer";
import { Nav } from "@/components/common/Nav";
import { ChildrenProps } from "@/types";

export default function Layout({ children }: ChildrenProps) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
