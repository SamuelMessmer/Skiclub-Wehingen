import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Impressum = () => {
    return (
        <div className="my-28 max-w-3xl mx-auto p-6 text-gray-800">
            <h1 className="text-3xl font-bold mb-6 text-orange-600">Impressum</h1>

            {/* Verantwortlicher */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-orange-500">Angaben gemäß § 5 TMG</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold">Skiclub Wehingen e.V.</p>
                    <p>Vertreten durch den 1. Vorsitzenden:</p>
                    <p className="mt-2 font-medium">Horst Weible</p>
                    <p>Rebbergweg 5</p>
                    <p>79798 Jestetten</p>
                    <p className="mt-3">
                        Telefon: <a href="tel:+497426520364" className="text-orange-500 hover:underline">07745 922688</a>
                    </p>
                    <p>
                        E-Mail: <a href="mailto:vorstand@sc-wehingen.de" className="text-orange-500 hover:underline">vorstand@sc-wehingen.de</a>
                    </p>
                </div>
            </section>

            {/* Registerangaben */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-orange-500">Registereintrag</h2>
                <p>Eingetragen im Vereinsregister</p>
                <p>Registergericht: Amtsgericht Spaichingen</p>
                <p>Registernummer: VR 195</p>
                <p>Steuernummer: 21105/30603</p>
                <p className="mt-2">Umsatzsteuer-Identifikationsnummer (USt-IdNr.): gemäß § 27a UStG nicht erforderlich</p>
            </section>

            {/* Haftungsausschluss */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-orange-500">Haftungsausschluss</h2>

                <h3 className="text-xl font-semibold mt-4 mb-2">1. Inhalt des Onlineangebotes</h3>
                <p className="mb-4">
                    Der Verein übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität der
                    bereitgestellten Informationen.
                </p>

                <h3 className="text-xl font-semibold mt-4 mb-2">2. Verweise und Links</h3>
                <p className="mb-4">
                    Für direkte oder indirekte Verweise auf fremde Webseiten (Hyperlinks), die außerhalb des Verantwortungsbereiches
                    des Vereins liegen, würde eine Haftungsverpflichtung ausschließlich in dem Fall in Kraft treten, in dem der Verein
                    von den Inhalten Kenntnis hat und es ihm technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger
                    Inhalte zu verhindern.
                </p>
                <p className="mb-4">
                    Der Verein erklärt hiermit ausdrücklich, dass zum Zeitpunkt der Linksetzung keine illegalen Inhalte auf
                    den zu verlinkenden Seiten erkennbar waren. Auf die aktuelle und zukünftige Gestaltung, die Inhalte oder
                    die Urheberschaft der verlinkten/verknüpften Seiten hat der Verein keinerlei Einfluss. Deshalb distanziert
                    er sich hiermit ausdrücklich von allen Inhalten aller verlinkten/verknüpften Seiten, die nach der Linksetzung
                    verändert wurden.
                </p>

                <h3 className="text-xl font-semibold mt-4 mb-2">3. Urheber- und Kennzeichenrecht</h3>
                <p className="mb-4">
                    Alle auf dieser Website veröffentlichten Inhalte (Texte, Bilder, Grafiken, Logos) unterliegen dem deutschen
                    Urheberrecht. Jede vom deutschen Urheberrecht nicht zugelassene Verwertung bedarf vorheriger schriftlicher
                    Zustimmung des Vereins.
                </p>
            </section>

            {/* Streitbeilegung */}
            <section>
                <h2 className="text-2xl font-semibold mb-4 text-orange-500">Streitbeilegung</h2>
                <p className="mb-4">
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                    <a
                        href="https://ec.europa.eu/consumers/odr"
                        className="text-orange-500 hover:underline ml-1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://ec.europa.eu/consumers/odr
                    </a>
                </p>
                <p>
                    Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer
                    Verbraucherschlichtungsstelle teilzunehmen.
                </p>
            </section>

            {/* Werbung für mich */}
            <div className="mt-8 py-4 border-t text-sm text-gray-500">
                <p>Diese Webseite wurde von Samuel Meßmer Designed und selbstständig programmiert. </p>
                <Link
                    href={"https://github.com/samuelmessmer"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2"
                >
                    Mein GitHub-Profil für mehr Informationen:
                    <FaGithub size={25} className="hover:scale-125 duration-250" />
                </Link>
            </div>

            {/* Aktualitätshinweis */}
            <div className="pt-4 border-t text-sm text-gray-500">
                <p>Dieses Impressum wurde zuletzt aktualisiert am 01. Januar 2024</p>
            </div>
        </div>
    );
}

export default Impressum;