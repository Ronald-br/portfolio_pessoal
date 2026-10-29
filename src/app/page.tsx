import Link from "next/link";

export const metadata = {
  title: "Início | Meu Portfólio",
  description: "Portfólio pessoal de estudante de Análise e Desenvolvimento de Sistemas.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <nav className="flex items-center justify-between border-b border-slate-800 px-8 py-6">
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

      <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">

        <p className="mb-4 text-lg text-cyan-400">
          Bem-vindo ao meu portfólio!
        </p>

        <h2 className="mb-6 text-5xl font-bold">
          Olá, eu sou Ronald Vieira!
        </h2>

        <p className="mb-8 max-w-2xl text-lg text-gray-400">
          Sou estudante de Análise e Desenvolvimento de Sistemas
          no Instituto Federal do Ceará (IFCE).
          Tenho interesse em tecnologia, desenvolvimento de sistemas
          e qualidade de software.
        </p>

        <div className="flex gap-4">

          <Link
            href="/sobre"
            className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400"
          >
            Sobre mim
          </Link>

          <Link
            href="/projetos"
            className="rounded-lg border border-cyan-500 px-6 py-3 font-semibold text-cyan-400 hover:bg-cyan-500 hover:text-slate-950"
          >
            Meus projetos
          </Link>

        </div>

      </section>

      <footer className="border-t border-slate-800 py-6 text-center text-sm text-gray-500">
        © 2026 Ronald Vieira — Portfólio Pessoal
      </footer>

    </main>
  );
}