import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

export default async function Home() {
  const session = await auth();
  return (
    <>
      <h1 className="h1-bold text-white">Hello World</h1>
      <h1 className="h1-bold text-white">Hello World</h1>
      <h1 className="font-space-grotesk">Hello World</h1>

      <form
        action={async () => {
          "use server";

          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button type="submit">Log Out</Button>
      </form>
    </>
  );
}
