import Link from "next/link";

export const metadata = {
  title: "Sobre Mim | Ronald Vieira",
  description:
    "Conheça Ronald Vieira, estudante de Análise e Desenvolvimento de Sistemas do IFCE.",
};

export default function Sobre() {
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

          <Link href="/sobre" className="text-cyan-400">
            Sobre
          </Link>

          <Link href="/projetos" className="hover:text-cyan-400">
            Projetos
          </Link>
        </div>

      </nav>

      {/* Conteúdo principal */}
      <section className="mx-auto max-w-5xl px-6 py-16">

        <h2 className="mb-4 text-center text-4xl font-bold">
          Sobre <span className="text-cyan-400">Mim</span>
        </h2>

        <p className="mb-12 text-center text-gray-400">
          Conheça um pouco sobre minha trajetória acadêmica
          e meus interesses na área de tecnologia.
        </p>

        {/* Apresentação pessoal */}
        <div className="mb-8 rounded-xl border border-slate-800 bg-slate-900 p-8">

          <h3 className="mb-4 text-2xl font-semibold text-cyan-400">
            Quem sou eu?
          </h3>

          <p className="leading-8 text-gray-300">
            Olá! Meu nome é Ronald Vieira e sou estudante do curso
            superior de Tecnologia em Análise e Desenvolvimento de
            Sistemas no Instituto Federal do Ceará (IFCE),
            Campus Boa Viagem.

            Durante minha formação acadêmica, venho adquirindo
            conhecimentos sobre desenvolvimento web, programação,
            banco de dados e qualidade de software.

            Busco aprimorar minhas habilidades e desenvolver
            projetos que contribuam para meu crescimento
            pessoal e profissional.
          </p>

        </div>

        {/* Formação acadêmica */}
        <div className="mb-8 rounded-xl border border-slate-800 bg-slate-900 p-8">

          <h3 className="mb-4 text-2xl font-semibold text-cyan-400">
            Formação Acadêmica
          </h3>

          <p className="text-lg font-medium text-white">
            Tecnologia em Análise e Desenvolvimento de Sistemas
          </p>

          <p className="mt-2 text-gray-400">
            Instituto Federal de Educação, Ciência e Tecnologia
            do Ceará — Campus Boa Viagem.
          </p>

          <p className="mt-3 text-gray-300">
            Graduação em andamento.
          </p>

        </div>

        {/* Conhecimentos */}
        <div className="mb-8 rounded-xl border border-slate-800 bg-slate-900 p-8">

          <h3 className="mb-5 text-2xl font-semibold text-cyan-400">
            Conhecimentos em Tecnologia
          </h3>

          <div className="flex flex-wrap gap-3">

            {[
              "HTML",
              "CSS",
              "JavaScript",
              "PHP",
              "Laravel",
              "Git e GitHub",
              "Banco de Dados",
              "Qualidade de Software",
              "Testes de Software",
              "Next.js",
              "Tailwind CSS",
            ].map((tecnologia) => (
              <span
                key={tecnologia}
                className="rounded-lg border border-cyan-800 bg-slate-800 px-4 py-2 text-sm text-cyan-300"
              >
                {tecnologia}
              </span>
            ))}

          </div>

        </div>

        {/* Objetivos profissionais */}
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-8">

          <h3 className="mb-4 text-2xl font-semibold text-cyan-400">
            Objetivos Profissionais
          </h3>

          <p className="leading-8 text-gray-300">
            Tenho interesse em ampliar meus conhecimentos na área
            de tecnologia, especialmente em Qualidade de Software
            (QA), testes de sistemas e desenvolvimento web.

            Meu objetivo é adquirir experiência profissional,
            continuar aprendendo novas tecnologias e contribuir
            para o desenvolvimento de soluções digitais
            eficientes e de qualidade.
          </p>

        </div>

        {/* Botão de retorno */}
        <div className="mt-12 text-center">

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