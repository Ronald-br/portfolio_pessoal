import Link from "next/link";

export const metadata = {
  title: "Meus Projetos | Ronald Vieira",
  description:
    "Conheça os projetos acadêmicos desenvolvidos por Ronald Vieira durante sua formação em ADS.",
};

export default function Projetos() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Menu de navegação */}
      <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 px-8 py-6">

        <h1 className="text-2xl font-bold text-cyan-400">
          Meu Portfólio
        </h1>

        <div className="flex gap-6">
          <Link href="/" className="hover:text-cyan-400">
            Início
          </Link>

          <Link href="/sobre" className="hover:text-cyan-400">
            Sobre
          </Link>

          <Link href="/projetos" className="text-cyan-400">
            Projetos
          </Link>
        </div>

      </nav>

      {/* Conteúdo principal */}
      <section className="mx-auto max-w-6xl px-6 py-16">

        <h2 className="mb-4 text-center text-4xl font-bold">
          Meus <span className="text-cyan-400">Projetos</span>
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-400">
          Conheça alguns dos projetos que desenvolvi durante
          minha formação acadêmica em Análise e Desenvolvimento
          de Sistemas.
        </p>

        {/* Grade de projetos */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* Projeto 1 */}
          <article className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-500">

            <h3 className="mb-4 text-xl font-bold text-cyan-400">
              Bloco de Notas Seguro
            </h3>

            <p className="mb-6 leading-7 text-gray-300">
              Aplicação web desenvolvida com Laravel,
              permitindo o gerenciamento de notas pessoais
              com autenticação de usuários, criptografia,
              operações CRUD e controle de acesso.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="rounded bg-slate-800 px-3 py-1 text-sm">
                PHP
              </span>
              <span className="rounded bg-slate-800 px-3 py-1 text-sm">
                Laravel
              </span>
              <span className="rounded bg-slate-800 px-3 py-1 text-sm">
                Banco de Dados
              </span>
            </div>

          </article>

          {/* Projeto 2 */}
          <article className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-500">

            <h3 className="mb-4 text-xl font-bold text-cyan-400">
              Sistema de Pedidos
            </h3>

            <p className="mb-6 leading-7 text-gray-300">
              Sistema desenvolvido para simular o gerenciamento
              de pedidos de uma pastelaria, utilizando
              tecnologias web e integração entre
              frontend e backend.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="rounded bg-slate-800 px-3 py-1 text-sm">
                HTML
              </span>
              <span className="rounded bg-slate-800 px-3 py-1 text-sm">
                JavaScript
              </span>
              <span className="rounded bg-slate-800 px-3 py-1 text-sm">
                PHP
              </span>
            </div>

          </article>

          {/* Projeto 3 */}
          <article className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-500">

            <h3 className="mb-4 text-xl font-bold text-cyan-400">
              Qualidade de Software
            </h3>

            <p className="mb-6 leading-7 text-gray-300">
              Atividades acadêmicas envolvendo análise
              de falhas de software, elaboração de casos
              de teste, validação de requisitos e
              identificação de problemas em sistemas.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="rounded bg-slate-800 px-3 py-1 text-sm">
                QA
              </span>
              <span className="rounded bg-slate-800 px-3 py-1 text-sm">
                Testes
              </span>
              <span className="rounded bg-slate-800 px-3 py-1 text-sm">
                Git
              </span>
            </div>

          </article>

        </div>

        {/* Botão de retorno */}
        <div className="mt-14 text-center">

          <Link
            href="/"
            className="inline-block rounded-lg bg-cyan-500 px-8 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Voltar ao Início
          </Link>

        </div>

      </section>

      {/* Rodapé */}
      <footer className="border-t border-slate-800 py-6 text-center text-sm text-gray-500">
        © 2026 Ronald Vieira — Portfólio Pessoal
      </footer>

    </main>
  );
}