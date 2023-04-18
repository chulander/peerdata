const values = [
  {
    name: "Agile",
    description:
      "Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.",
  },
  {
    name: "Passion",
    description:
      "Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima.",
  },
  {
    name: "Team Spirit",
    description:
      "Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.",
  },
  {
    name: "Integrity",
    description:
      "Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.",
  },
];
export function CompanyValues() {
  return (
    <section className="w-full bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto pt-8 max-w-4xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our values
          </h2>
          <p className="mt-6 text-lg leading-8 text-white">
            Here at PeerData ,we believe only certain types of individuals have
            what it takes to revolutionize how data operates worldwide . As part
            of this culture ,we embrace those within it by understanding
            togetherness leads to amazing accomplishments! All differences &
            exclusive perspectives are welcomed & encouraged so every employee
            puts forth their best effort .
          </p>
          <p className="mt-6 text-lg leading-8 text-white">
            The mysterious quality which separates us from others & gives rise
            to our original approach is acknowledged - Additionally ,Peer Data
            provides an atmosphere allowing for honest self expression without
            shame or inhibition .
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {values.map((value) => (
            <div key={value.name}>
              <dt className="font-semibold text-white">{value.name}</dt>
              <dd className="mt-1 text-white">{value.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default CompanyValues;
