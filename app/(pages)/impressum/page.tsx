
const Impressum = () => {
    return (
        <div>
            <div className="my-28 max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
                <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 text-orange-600">Impressum</h1>

                <p className="mb-4 text-gray-700">
                    Mit Urteil vom 12. Mai 1998 hat das Landgericht Hamburg entschieden,
                    dass man durch die Ausbringung eines Links die Inhalte der gelinkten
                    Seite ggf. mit zu verantworten hat. Dies kann, so das LG, nur dadurch
                    verhindert werden, dass man sich ausdrücklich von diesen Inhalten distanziert.
                    Für alle Links von unserer Seite auf andere Seiten im Internet gilt:
                    Wir erklären ausdrücklich, dass wir keinerlei Einfluss auf die Gestaltung
                    und die Inhalte der gelinkten Seiten haben. Deshalb distanzieren wir
                    uns hiermit ausdrücklich von allen Inhalten aller gelinkten Seiten auf dieser Homepage
                    und machen uns diese Inhalte nicht zu eigen. Diese Erklärung gilt für alle
                    auf dieser Homepage angezeigten Links und für alle Inhalte der Seiten, zu denen
                    die bei uns sichtbaren Banner, Buttons und Links führen.
                </p>

                <h2 className="text-2xl font-semibold text-orange-500 mt-6">Verantwortlich für diese Seite</h2>
                <p className="mt-2 text-gray-700">Skiclub Wehingen e.V.<br /> mit seinem 1. Vorsitzenden:</p>

                <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                    <p className="text-lg font-medium">Horst Weible</p>
                    <p>Rebbergweg 5</p>
                    <p>79798 Jestetten</p>
                </div>

                <p className="mt-4">
                    <a className="text-blue-600 hover:underline" href="mailto:horst@sc-wehingen.de">
                        horst@sc-wehingen.de
                    </a>
                </p>

                <p className="mt-4 text-gray-700">Steuer-Nr. 21105/30603</p>
                <p className="mt-1 text-gray-700">Vereinsregister Spaichingen Nr. 195 vom 5.11.1979</p>
            </div>
        </div>
    );
}

export default Impressum;
