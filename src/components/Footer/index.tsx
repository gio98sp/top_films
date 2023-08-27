export const Footer = () => {
  return (
    <footer className="p-6 md:p-8 bg-third text-primary">
      <div className="text-center m-auto gap-x-16 gap-y-6 max-w-screen-lg">
        <p>
          Este site utiliza a&nbsp;
          <a
            href="https://developer.themoviedb.org/reference/intro/getting-started"
            target="_blank"
          >
            <strong>API</strong>
          </a>
          &nbsp; da&nbsp;
          <a href="https://www.themoviedb.org/" target="_blank">
            <strong>TMDb</strong>
          </a>
          &nbsp; para realizar buscas de Filmes e Séries em seu banco de dados.
        </p>
      </div>
    </footer>
  );
};
