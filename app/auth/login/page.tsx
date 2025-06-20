import { Suspense } from "react";
import SignIn from "./SignIn";

export default function LoginPage() {


    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SignIn />
        </Suspense>
    )
}
