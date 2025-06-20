import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

export default async function isAuthorized(): Promise<boolean> {
  const session = await getServerSession(options);
  return session !== null;
}
