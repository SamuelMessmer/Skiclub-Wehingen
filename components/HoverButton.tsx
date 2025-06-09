import Link from "next/link";

export default function HoverButton() {
    return (
        <div className="fixed left-3 bottom-10 sm:left-8 sm:bottom-10 z-50">
            <Link target="_blank" href="http://www.fossiliuslauf.sc-wehingen.de/anmeldung/anmeldung-2025.html">
                <div className="px-7 py-4  w-fit border-2 rounded-full shadow-2xl bg-orange-500  hover:bg-orange-600 hover:scale-105 duration-200">
                    <h1 className=" text-white text-xl font-bold"><span className="hidden sm:inline-block">HIER</span> ANMELDEN</h1>
                </div>
            </Link>
        </div>
    );
}
