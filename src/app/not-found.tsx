import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-950 text-white">

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

          <Link href="/projetos" className="hover:text-cyan-400">
            Projetos
          </Link>
        </div>

      </nav>

      {/* Mensagem de erro */}
      <section className="flex flex-1 flex-col items-center justify-center px-6 text-center">

        <h2 className="mb-4 text-8xl font-extrabold text-cyan-400 md:text-9xl">
          404
        </h2>

        <h3 className="mb-4 text-3xl font-bold md:text-4xl">
          Página não encontrada!
        </h3>

        <p className="mb-8 max-w-lg text-lg leading-8 text-gray-400">
          Ops! Parece que a página que você está procurando
          não existe ou foi removida.
          Mas não se preocupe, você pode voltar
          para a página inicial do meu portfólio.
        </p>

        <Link
          href="/"
          className="rounded-lg bg-cyan-500 px-8 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          Voltar ao Início
        </Link>

      </section>

      {/* Rodapé */}
      <footer className="border-t border-slate-800 py-6 text-center text-sm text-gray-500">
        © 2026 Ronald Vieira — Portfólio Pessoal
      </footer>

    </main>
  );
}