export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      <section className="bg-gray-100 py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Praxis für Verhaltenstherapie - Berlin-Steglitz</h1>
        <p className="text-lg mb-2">Prof. Dr. Jakob Fink-Lamotte</p>
        <p className="text-md text-gray-600">Psychotherapie für Zwangserkrankungen</p>
      </section>

      <section className="py-12 px-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Über mich</h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src="/profilbild.jpg"
            alt="Profilbild Jakob Fink-Lamotte"
            className="w-40 h-40 rounded-full object-cover border shadow"
          />

          <p>
            Ich bin approbierter Psychologischer Psychotherapeut mit dem Schwerpunkt Verhaltenstherapie. Spezialisiert auf die Behandlung von Zwangsstörungen. Mehr Informationen finden Sie auf meiner{' '}
            <a className="text-blue-600 underline" href="https://www.uni-potsdam.de/de/klinische-psychologie/prof-dr-jakob-fink-lamotte/biographie" target="_blank" rel="noopener noreferrer">
              universitären Profilseite.
            </a>.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-12 px-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Angebot</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Verhaltenstherapie für Erwachsene</li>
          <li>Schwerpunkt: Zwangsstörungen</li>
          <li>Einzelsitzungen (50 Minuten)</li>
          <li>2–4 Stunden Therapieverfügbarkeit pro Woche</li>
          <li>Selbstzahlerleistung</li>
        </ul>
      </section>

      <section className="py-12 px-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Ablauf & Kosten</h2>
        <p className="mb-2">Eine Therapiesitzung (50 Minuten) kostet 120 €. Die Behandlung erfolgt ausschließlich für Selbstzahler. Termine sind begrenzt verfügbar.</p>
      </section>

      <section className="bg-gray-100 py-12 px-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Kontakt & Terminbuchung</h2>
          <p className="mb-4">
            Sie können direkt einen Termin online buchen oder mich per{' '}
          <a href="mailto:mail@praxis-finklamotte.de" className="text-blue-600 underline">E-Mail kontaktieren</a>.
        </p>
      </section>

      <footer className="text-center text-sm text-gray-500 py-8">
        <p>
          © {new Date().getFullYear()} Praxis für Verhaltenstherapie –{' '}
          <a href="/impressum" className="underline text-gray-600 hover:text-gray-800">Impressum</a> &nbsp;|&nbsp;
          <a href="/datenschutz" className="underline text-gray-600 hover:text-gray-800">Datenschutz</a> &nbsp;|&nbsp;
          Bildrechte: Tobias Hopfgarten       
        </p>
      </footer>

    </main>
  );
}
