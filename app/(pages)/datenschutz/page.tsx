import Link from "next/link";

const Datenschutz = () => {
    return (
        <div className="my-28 max-w-3xl mx-auto p-6 text-gray-800">
            <h1 className="text-3xl font-bold mb-4">Datenschutzerklärung</h1>

            <p className="mb-4">
                Wir freuen uns sehr über Ihr Interesse an unserem Verein. Datenschutz hat einen hohen Stellenwert für den
                Skiclub Wehingen. Eine Nutzung unserer Internetseite ist grundsätzlich ohne die Angabe personenbezogener Daten
                möglich. Sollten Sie besondere Services unseres Vereins über unsere Internetseite in Anspruch nehmen, könnte
                jedoch eine Verarbeitung personenbezogener Daten erforderlich werden.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">1. Begriffsbestimmungen</h2>
            <p className="mb-4">
                Unsere Datenschutzerklärung beruht auf den Begrifflichkeiten der Datenschutz-Grundverordnung (DSGVO). Sie soll
                für alle verständlich sein.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">a) Personenbezogene Daten</h3>
            <p className="mb-4">
                Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare
                natürliche Person beziehen, z. B. Name, Adresse oder E-Mail.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">b) Verarbeitung</h3>
            <p className="mb-4">
                Verarbeitung ist jeder Vorgang im Zusammenhang mit personenbezogenen Daten, z. B. Erhebung, Speicherung oder
                Nutzung.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">c) Verantwortlicher</h3>
            <p className="mb-4">
                Verantwortlicher ist die natürliche oder juristische Person, die über die Zwecke und Mittel der Verarbeitung von
                personenbezogenen Daten entscheidet. Verantwortlich für diese Seite:
            </p>
            <p className="font-semibold">Skiclub Wehingen e.V.</p>
            <p>1. Vorsitzender: Horst Weible</p>
            <p>Rebbergweg 5, 79798 Jestetten</p>
            <a href="mailto:horst@sc-wehingen.de" className="text-orange-500 hover:underline">
                horst@sc-wehingen.de
            </a>

            <h2 className="text-2xl font-semibold mt-6 mb-2">2. Datenschutzmaßnahmen</h2>
            <p className="mb-4">
                Der Skiclub Wehingen hat technische und organisatorische Maßnahmen umgesetzt, um den bestmöglichen Schutz der
                über diese Internetseite verarbeiteten personenbezogenen Daten sicherzustellen. Dennoch kann ein absoluter
                Schutz nicht gewährleistet werden.
            </p>
            {/* Abschnitt 2: Name und Anschrift des Verantwortlichen */}
            <section>
                <h2 className="text-2xl font-semibold mt-6 mb-2">
                    2. Name und Anschrift des für die Verarbeitung Verantwortlichen
                </h2>
                <p className="mb-2">
                    Verantwortlicher im Sinne der Datenschutz-Grundverordnung, sonstiger in den Mitgliedstaaten der Europäischen Union geltenden
                    Datenschutzgesetze und anderer Bestimmungen mit datenschutzrechtlichem Charakter ist:
                </p>
                <p className="font-semibold">Skiclub Wehingen e.V</p>
                <p>
                    Walter Staiger<br />
                    Bogenstr. 23<br />
                    78564 Wehingen
                </p>
                <p>Tel.: 07426 / 520364</p>
                <p>
                    E-Mail:{" "}
                    <a href="mailto:walter@sc-wehingen.de" className="text-orange-500 hover:underline">
                        walter@sc-wehingen.de
                    </a>
                </p>
                <p>
                    Website:{" "}
                    <a
                        href="https://www.sc-wehingen.de"
                        className="text-orange-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        www.sc-wehingen.de
                    </a>
                </p>
            </section>

            {/* Abschnitt 3: Cookies */}
            <section>
                <h2 className="text-2xl font-semibold mt-6 mb-2">3. Cookies</h2>
                <p className="mb-4">
                    Die Internetseiten des Skiclub Wehingen verwenden Cookies. Cookies sind Textdateien, welche über einen Internetbrowser auf einem
                    Computersystem abgelegt und gespeichert werden.
                </p>
                <p className="mb-4">
                    Zahlreiche Internetseiten und Server verwenden Cookies. Viele Cookies enthalten eine sogenannte Cookie-ID. Eine Cookie-ID ist eine
                    eindeutige Kennung des Cookies. Sie besteht aus einer Zeichenfolge, durch welche Internetseiten und Server dem konkreten Internetbrowser
                    zugeordnet werden können, in dem das Cookie gespeichert wurde. Dies ermöglicht es den besuchten Internetseiten und Servern, den
                    individuellen Browser der betroffenen Person von anderen Internetbrowsern, die andere Cookies enthalten, zu unterscheiden.
                </p>
                <p className="mb-4">
                    Durch den Einsatz von Cookies kann der Skiclub Wehingen den Nutzern dieser Internetseite nutzerfreundlichere Services bereitstellen,
                    die ohne die Cookie-Setzung nicht möglich wären. Mittels eines Cookies können die Informationen und Angebote auf unserer Internetseite
                    im Sinne des Benutzers optimiert werden. Cookies ermöglichen uns, die Benutzer unserer Internetseite wiederzuerkennen. Zweck dieser
                    Wiedererkennung ist es, den Nutzern die Verwendung unserer Internetseite zu erleichtern. Der Benutzer einer Internetseite, die Cookies
                    verwendet, muss beispielsweise nicht bei jedem Besuch erneut seine Zugangsdaten eingeben – dies wird vom auf dem Computersystem
                    gespeicherten Cookie übernommen. Ein weiteres Beispiel ist das Cookie eines Warenkorbes im Online-Shop, das sich die dort abgelegten Artikel merkt.
                </p>
                <p className="mb-4">
                    Die betroffene Person kann die Setzung von Cookies durch unsere Internetseite jederzeit mittels entsprechender Einstellung des
                    genutzten Internetbrowsers verhindern und damit der Setzung von Cookies dauerhaft widersprechen. Ferner können bereits gesetzte
                    Cookies jederzeit gelöscht werden. Wird die Setzung von Cookies deaktiviert, sind unter Umständen nicht alle Funktionen unserer
                    Internetseite vollumfänglich nutzbar.
                </p>
            </section>

            {/* Abschnitt 4: Erfassung von allgemeinen Daten und Informationen */}
            <section>
                <h2 className="text-2xl font-semibold mt-6 mb-2">
                    4. Erfassung von allgemeinen Daten und Informationen
                </h2>
                <p className="mb-4">
                    Die Internetseite des Skiclub Wehingen erfasst mit jedem Aufruf durch eine betroffene Person oder ein automatisiertes System eine Reihe
                    von allgemeinen Daten und Informationen. Diese werden in den Logfiles des Servers gespeichert. Erfasst werden können:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>verwendete Browsertypen und Versionen</li>
                    <li>das verwendete Betriebssystem</li>
                    <li>die Referrer (die Internetseite, von welcher ein Zugriff erfolgt)</li>
                    <li>angesteuerte Unterwebseiten</li>
                    <li>Datum und Uhrzeit eines Zugriffs</li>
                    <li>IP-Adresse</li>
                    <li>Internet-Service-Provider des zugreifenden Systems</li>
                    <li>sonstige ähnliche Daten zur Gefahrenabwehr</li>
                </ul>
                <p className="mb-4">
                    Diese Daten dienen dazu, die Inhalte unserer Internetseite korrekt auszuliefern, die Werbung zu optimieren, die Funktionsfähigkeit unserer
                    Systeme zu gewährleisten und im Falle eines Cyberangriffs die notwendigen Informationen bereitzustellen. Die anonym erhobenen Daten werden
                    getrennt von personenbezogenen Daten gespeichert.
                </p>
            </section>

            {/* Abschnitt 5: Kontaktmöglichkeit */}
            <section>
                <h2 className="text-2xl font-semibold mt-6 mb-2">
                    5. Kontaktmöglichkeit über die Internetseite
                </h2>
                <p className="mb-4">
                    Unsere Internetseite enthält Angaben, die eine schnelle elektronische Kontaktaufnahme ermöglichen – inklusive E-Mail-Adresse. Werden
                    über E-Mail oder ein Kontaktformular personenbezogene Daten übermittelt, werden diese gespeichert, um eine Bearbeitung oder Kontaktaufnahme
                    zu ermöglichen. Eine Weitergabe an Dritte erfolgt nicht.
                </p>
            </section>

            {/* Abschnitt 6: Routinemäßige Löschung */}
            <section>
                <h2 className="text-2xl font-semibold mt-6 mb-2">
                    6. Routinemäßige Löschung und Sperrung von personenbezogenen Daten
                </h2>
                <p className="mb-4">
                    Personenbezogene Daten werden nur so lange gespeichert, wie es zur Erfüllung des Speicherungszwecks erforderlich ist oder gesetzliche
                    Vorgaben dies erfordern. Läuft eine gesetzliche Speicherfrist ab oder entfällt der Zweck, werden die Daten routinemäßig gesperrt oder
                    gelöscht.
                </p>
            </section>

            {/* Abschnitt 7: Rechte der betroffenen Person */}
            <section>
                <h2 className="text-2xl font-semibold mt-6 mb-2">
                    7. Rechte der betroffenen Person
                </h2>

                <h3 className="text-xl font-semibold mt-4 mb-2">a) Recht auf Bestätigung</h3>
                <p className="mb-4">
                    Jede betroffene Person hat das Recht, eine Bestätigung darüber zu verlangen, ob sie betreffende personenbezogene Daten verarbeitet werden.
                </p>

                <h3 className="text-xl font-semibold mt-4 mb-2">b) Recht auf Auskunft</h3>
                <p className="mb-4">
                    Jede betroffene Person hat das Recht, unentgeltliche Auskunft über die zu ihrer Person gespeicherten Daten zu erhalten. Dies umfasst
                    Informationen zu Verarbeitungszwecken, den Kategorien der Daten, den Empfängern, der geplanten Speicherdauer und weiteren Details.
                </p>

                <h3 className="text-xl font-semibold mt-4 mb-2">c) Recht auf Berichtigung</h3>
                <p className="mb-4">
                    Jede betroffene Person hat das Recht, die unverzügliche Berichtigung unrichtiger oder unvollständiger Daten zu verlangen.
                </p>

                <h3 className="text-xl font-semibold mt-4 mb-2">d) Recht auf Löschung (Recht auf Vergessen werden)</h3>
                <p className="mb-4">
                    Jede betroffene Person hat das Recht, zu verlangen, dass ihre personenbezogenen Daten gelöscht werden, sofern die Verarbeitung nicht mehr
                    erforderlich ist oder ein gesetzlicher Löschgrund besteht. Werden Daten öffentlich gemacht, ergreifen wir angemessene Maßnahmen, um
                    auch andere Verantwortliche zur Löschung zu verpflichten.
                </p>

                <h3 className="text-xl font-semibold mt-4 mb-2">e) Recht auf Einschränkung der Verarbeitung</h3>
                <p className="mb-4">
                    Jede betroffene Person hat das Recht, die Einschränkung der Verarbeitung ihrer Daten zu verlangen, beispielsweise wenn die Richtigkeit
                    der Daten bestritten wird oder die Verarbeitung unrechtmäßig ist.
                </p>
            </section>
            <h2>f) Recht auf Datenübertragbarkeit</h2>
            <p>
                Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien-
                und Verordnungsgeber gewährte Recht, die sie betreffenden personenbezogenen Daten, welche durch die
                betroffene Person einem Verantwortlichen bereitgestellt wurden, in einem strukturierten, gängigen und
                maschinenlesbaren Format zu erhalten. Sie hat außerdem das Recht, diese Daten einem anderen Verantwortlichen
                ohne Behinderung durch den Verantwortlichen, dem die personenbezogenen Daten bereitgestellt wurden, zu
                übermitteln, sofern die Verarbeitung auf der Einwilligung gemäß Art. 6 Abs. 1 Buchstabe a DS-GVO oder Art. 9
                Abs. 2 Buchstabe a DS-GVO oder auf einem Vertrag gemäß Art. 6 Abs. 1 Buchstabe b DS-GVO beruht und die
                Verarbeitung mithilfe automatisierter Verfahren erfolgt, sofern die Verarbeitung nicht für die Wahrnehmung
                einer Aufgabe erforderlich ist, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt
                erfolgt, welche dem Verantwortlichen übertragen wurde.
            </p>
            <p>
                Ferner hat die betroffene Person bei der Ausübung ihres Rechts auf Datenübertragbarkeit gemäß Art. 20 Abs. 1
                DS-GVO das Recht, zu erwirken, dass die personenbezogenen Daten direkt von einem Verantwortlichen an einen
                anderen Verantwortlichen übermittelt werden, soweit dies technisch machbar ist und sofern hiervon nicht die
                Rechte und Freiheiten anderer Personen beeinträchtigt werden.
            </p>
            <p>
                Zur Geltendmachung des Rechts auf Datenübertragbarkeit kann sich die betroffene Person jederzeit an einen
                Mitarbeiter des Skiclub Wehingen wenden.
            </p>

            <h2>g) Recht auf Widerspruch</h2>
            <p>
                Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien-
                und Verordnungsgeber gewährte Recht, aus Gründen, die sich aus ihrer besonderen Situation ergeben, jederzeit
                gegen die Verarbeitung sie betreffender personenbezogener Daten, die aufgrund von Art. 6 Abs. 1 Buchstaben e
                oder f DS-GVO erfolgt, Widerspruch einzulegen. Dies gilt auch für ein auf diese Bestimmungen gestütztes
                Profiling.
            </p>
            <p>
                Der Skiclub Wehingen verarbeitet die personenbezogenen Daten im Falle des Widerspruchs nicht mehr, es sei
                denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die den Interessen, Rechten
                und Freiheiten der betroffenen Person überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung
                oder Verteidigung von Rechtsansprüchen.
            </p>
            <p>
                Verarbeitet der Skiclub Wehingen personenbezogene Daten, um Direktwerbung zu betreiben, so hat die
                betroffene Person das Recht, jederzeit Widerspruch gegen die Verarbeitung der personenbezogenen Daten zum
                Zwecke derartiger Werbung einzulegen. Dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung
                in Verbindung steht. Widerspricht die betroffene Person gegenüber dem Skiclub Wehingen der Verarbeitung für
                Zwecke der Direktwerbung, so wird der Skiclub Wehingen die personenbezogenen Daten nicht mehr für diese
                Zwecke verarbeiten.
            </p>
            <p>
                Zudem hat die betroffene Person das Recht, aus Gründen, die sich aus ihrer besonderen Situation ergeben,
                gegen die sie betreffende Verarbeitung personenbezogener Daten, die bei dem Skiclub Wehingen zu
                wissenschaftlichen oder historischen Forschungszwecken oder zu statistischen Zwecken gemäß Art. 89 Abs. 1
                DS-GVO erfolgen, Widerspruch einzulegen, es sei denn, eine solche Verarbeitung ist zur Erfüllung einer im
                öffentlichen Interesse liegenden Aufgabe erforderlich.
            </p>
            <p>
                Zur Ausübung des Rechts auf Widerspruch kann sich die betroffene Person direkt jeden Mitarbeiter des Skiclub
                Wehingen oder einen anderen Mitarbeiter wenden. Der betroffenen Person steht es ferner frei, im Zusammenhang
                mit der Nutzung von Diensten der Informationsgesellschaft, ungeachtet der Richtlinie 2002/58/EG, ihr
                Widerspruchsrecht mittels automatisierter Verfahren auszuüben, bei denen technische Spezifikationen
                verwendet werden.
            </p>

            <h2>h) Automatisierte Entscheidungen im Einzelfall einschließlich Profiling</h2>
            <p>
                Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien-
                und Verordnungsgeber gewährte Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung —
                einschließlich Profiling — beruhenden Entscheidung unterworfen zu werden, die ihr gegenüber rechtliche
                Wirkung entfaltet oder sie in ähnlicher Weise erheblich beeinträchtigt, sofern die Entscheidung (1) nicht
                für den Abschluss oder die Erfüllung eines Vertrags zwischen der betroffenen Person und dem Verantwortlichen
                erforderlich ist, oder (2) aufgrund von Rechtsvorschriften der Union oder der Mitgliedstaaten, denen der
                Verantwortliche unterliegt, zulässig ist und diese Rechtsvorschriften angemessene Maßnahmen zur Wahrung der
                Rechte und Freiheiten sowie der berechtigten Interessen der betroffenen Person enthalten oder (3) mit
                ausdrücklicher Einwilligung der betroffenen Person erfolgt.
            </p>
            <p>
                Ist die Entscheidung (1) für den Abschluss oder die Erfüllung eines Vertrags zwischen der betroffenen Person
                und dem Verantwortlichen erforderlich oder (2) erfolgt sie mit ausdrücklicher Einwilligung der betroffenen
                Person, trifft der Skiclub Wehingen angemessene Maßnahmen, um die Rechte und Freiheiten sowie die
                berechtigten Interessen der betroffenen Person zu wahren, wozu mindestens das Recht auf Erwirkung des
                Eingreifens einer Person seitens des Verantwortlichen, auf Darlegung des eigenen Standpunkts und auf
                Anfechtung der Entscheidung gehört.
            </p>
            <p>
                Möchte die betroffene Person Rechte mit Bezug auf automatisierte Entscheidungen geltend machen, kann sie
                sich hierzu jederzeit an einen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden.
            </p>

            <h2>i) Recht auf Widerruf einer datenschutzrechtlichen Einwilligung</h2>
            <p>
                Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das vom Europäischen Richtlinien-
                und Verordnungsgeber gewährte Recht, eine Einwilligung zur Verarbeitung personenbezogener Daten jederzeit zu
                widerrufen.
            </p>
            <p>
                Möchte die betroffene Person ihr Recht auf Widerruf einer Einwilligung geltend machen, kann sie sich hierzu
                jederzeit an einen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden.
            </p>

            <h2>8. Rechtsgrundlage der Verarbeitung</h2>
            <p>
                Art. 6 I lit. a DS-GVO dient unserem Unternehmen als Rechtsgrundlage für Verarbeitungsvorgänge, bei denen
                wir eine Einwilligung für einen bestimmten Verarbeitungszweck einholen. Ist die Verarbeitung
                personenbezogener Daten zur Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist,
                erforderlich, wie dies beispielsweise bei Verarbeitungsvorgängen der Fall ist, die für eine Lieferung von
                Waren oder die Erbringung einer sonstigen Leistung oder Gegenleistung notwendig sind, so beruht die
                Verarbeitung auf Art. 6 I lit. b DS-GVO. Gleiches gilt für solche Verarbeitungsvorgänge die zur Durchführung
                vorvertraglicher Maßnahmen erforderlich sind, etwa in Fällen von Anfragen zur unseren Produkten oder
                Leistungen. Unterliegt unser Unternehmen einer rechtlichen Verpflichtung durch welche eine Verarbeitung von
                personenbezogenen Daten erforderlich wird, wie beispielsweise zur Erfüllung steuerlicher Pflichten, so
                basiert die Verarbeitung auf Art. 6 I lit. c DS-GVO. In seltenen Fällen könnte die Verarbeitung von
                personenbezogenen Daten erforderlich werden, um lebenswichtige Interessen der betroffenen Person oder einer
                anderen natürlichen Person zu schützen. Dies wäre beispielsweise der Fall, wenn ein Besucher in unserem
                Betrieb verletzt werden würde und daraufhin sein Name, sein Alter, seine Krankenkassendaten oder sonstige
                lebenswichtige Informationen an einen Arzt, ein Krankenhaus oder sonstige Dritte weitergegeben werden
                müssten. Dann würde die Verarbeitung auf Art. 6 I lit. d DS-GVO beruhen. Letztlich könnten
                Verarbeitungsvorgänge auf Art. 6 I lit. f DS-GVO beruhen. Auf dieser Rechtsgrundlage basieren
                Verarbeitungsvorgänge, die von keiner der vorgenannten Rechtsgrundlagen erfasst werden, wenn die
                Verarbeitung zur Wahrung eines berechtigten Interesses unseres Unternehmens oder eines Dritten erforderlich
                ist, sofern die Interessen, Grundrechte und Grundfreiheiten des Betroffenen nicht überwiegen. Solche
                Verarbeitungsvorgänge sind uns insbesondere deshalb gestattet, weil sie durch den Europäischen Gesetzgeber
                besonders erwähnt wurden. Er vertrat insoweit die Auffassung, dass ein berechtigtes Interesse anzunehmen
                sein könnte, wenn die betroffene Person ein Kunde des Verantwortlichen ist (Erwägungsgrund 47 Satz 2
                DS-GVO).
            </p>

            <h2>9. Berechtigte Interessen an der Verarbeitung, die von dem Verantwortlichen oder einem Dritten verfolgt
                werden</h2>
            <p>
                Basiert die Verarbeitung personenbezogener Daten auf Artikel 6 I lit. f DS-GVO ist unser berechtigtes
                Interesse die Durchführung unserer Geschäftstätigkeit zugunsten des Wohlergehens all unserer Mitarbeiter und
                unserer Anteilseigner.
            </p>

            <h2>10. Dauer, für die die personenbezogenen Daten gespeichert werden</h2>
            <p>
                Das Kriterium für die Dauer der Speicherung von personenbezogenen Daten ist die jeweilige gesetzliche
                Aufbewahrungsfrist. Nach Ablauf der Frist werden die entsprechenden Daten routinemäßig gelöscht, sofern sie
                nicht mehr zur Vertragserfüllung oder Vertragsanbahnung erforderlich sind.
            </p>

            <h2>11. Gesetzliche oder vertragliche Vorschriften zur Bereitstellung der personenbezogenen Daten;
                Erforderlichkeit für den Vertragsabschluss; Verpflichtung der betroffenen Person, die personenbezogenen
                Daten bereitzustellen; mögliche Folgen der Nichtbereitstellung</h2>
            <p>
                Wir klären Sie darüber auf, dass die Bereitstellung personenbezogener Daten zum Teil gesetzlich
                vorgeschrieben ist (z.B. Steuervorschriften) oder sich auch aus vertraglichen Regelungen (z.B. Angaben zum
                Vertragspartner) ergeben kann. Mitunter kann es zu einem Vertragsschluss erforderlich sein, dass eine
                betroffene Person uns personenbezogene Daten zur Verfügung stellt, die in der Folge durch uns verarbeitet
                werden müssen. Die betroffene Person ist beispielsweise verpflichtet uns personenbezogene Daten
                bereitzustellen, wenn unser Unternehmen mit ihr einen Vertrag abschließt. Eine Nichtbereitstellung der
                personenbezogenen Daten hätte zur Folge, dass der Vertrag mit dem Betroffenen nicht geschlossen werden
                könnte. Vor einer Bereitstellung personenbezogener Daten durch den Betroffenen muss sich der Betroffene an
                einen unserer Mitarbeiter wenden. Unser Mitarbeiter klärt den Betroffenen einzelfallbezogen darüber auf, ob
                die Bereitstellung der personenbezogenen Daten gesetzlich oder vertraglich vorgeschrieben oder für den
                Vertragsabschluss erforderlich ist, ob eine Verpflichtung besteht, die personenbezogenen Daten
                bereitzustellen, und welche Folgen die Nichtbereitstellung der personenbezogenen Daten hätte.
            </p>

            <h2>12. Bestehen einer automatisierten Entscheidungsfindung</h2>
            <p>
                Als verantwortungsbewusstes Unternehmen verzichten wir auf eine automatische Entscheidungsfindung oder ein
                Profiling.
            </p>

            <h2>FOSSI_H02</h2>

            <p>
                Sollten Sie etwas vermissen, so lassen Sie es uns wissen. Am besten senden Sie uns eine Mitteilung Mail oder
                eine E-Mail an “Vorstand [at] sc-wehingen.de”
            </p>
        </div>
    );
};

export default Datenschutz;
