import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
  return (
    <>
      <h1 className="h1-bold text-white">Hello World</h1>
      <h1 className="h1-bold text-white">Hello World</h1>
      <h1 className="font-space-grotesk">Hello World</h1>
    </>
  );
}
