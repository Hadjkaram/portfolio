"use client";

import Link from "next/link";
import { ArrowLeft, Shield, FileText } from "lucide-react";

export default function ConditionsGeneralesPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f5] text-zinc-900 py-12 px-6 md:px-12 selection:bg-zinc-900 selection:text-white">
      <div className="max-w-4xl mx-auto">
        {/* RETOUR PORTFOLIO */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-zinc-300 text-xs font-mono uppercase tracking-wider text-zinc-800 hover:border-zinc-950 transition-colors shadow-sm"
          >
            <ArrowLeft size={14} />
            <span>Retour au Portfolio</span>
          </Link>
        </div>

        {/* CONTAINER DOCUMENT ÉDITORIAL */}
        <article className="bg-white border border-zinc-300 p-8 md:p-14 shadow-sm space-y-8">
          {/* HEADER */}
          <header className="border-b-2 border-zinc-900 pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 border border-zinc-300 text-[10px] font-mono uppercase tracking-widest text-zinc-700 mb-3">
              <FileText size={12} />
              <span>Cadre Juridique & Déontologique</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-zinc-950 uppercase tracking-tight">
              Conditions Générales de Service (CGS & CGU)
            </h1>
            <p className="text-xs font-mono text-zinc-500 mt-2">
              Dernière mise à jour : 2026 • Portée légale : Côte d&apos;Ivoire & International
            </p>
          </header>

          {/* PRÉAMBULE */}
          <section className="space-y-3">
            <h2 className="text-base font-bold uppercase tracking-wider font-mono text-zinc-950 border-b border-zinc-200 pb-1">
              Article 1 &mdash; Éditeur & Objet du Site
            </h2>
            <p className="text-sm text-zinc-700 leading-relaxed">
              Le présent site internet accessible à l&apos;adresse <strong>www.ibrahimkaramoko.site</strong> est édité par <strong>El Hadj Ibrahim V. Karamoko</strong>, Tech Lead IA & Cybersécurité, CTO Opérationnel domicilié à Abidjan, Côte d&apos;Ivoire.
            </p>
            <p className="text-sm text-zinc-700 leading-relaxed">
              Le site a pour vocation de présenter les réalisations technologiques, les compétences en ingénierie logicielle et intelligence artificielle, ainsi que les modalités d&apos;intervention professionnelle et de mandats de conseil stratégique d&apos;Ibrahim Karamoko auprès d&apos;entreprises privées, d&apos;organisations non gouvernementales et d&apos;institutions étatiques ou multilatérales.
            </p>
          </section>

          {/* NATURE DES SERVICES */}
          <section className="space-y-3">
            <h2 className="text-base font-bold uppercase tracking-wider font-mono text-zinc-950 border-b border-zinc-200 pb-1">
              Article 2 &mdash; Nature des Prestations & Mandats
            </h2>
            <p className="text-sm text-zinc-700 leading-relaxed">
              Ibrahim Karamoko propose des prestations d&apos;expertise technique de haut niveau, notamment :
            </p>
            <ul className="list-disc list-outside pl-5 text-sm text-zinc-700 space-y-1.5 leading-relaxed font-sans">
              <li><strong>Direction Technique & CTO Opérationnel :</strong> Structuration d&apos;équipes d&apos;ingénieurs, définition des roadmaps technologiques, rituels Agile/Scrum et revues de code systématiques (réduction des régressions).</li>
              <li><strong>Architecture IA & Systèmes Distribués :</strong> Conception et mise en production de pipelines MLOps, modèles de Computer Vision (YOLOv8/v11), architectures LLM & RAG, et extraction de données massives (Web Scraping).</li>
              <li><strong>Audits de Cybersécurité & Gouvernance :</strong> Audits d&apos;infrastructures critiques conformes aux standards CISSP® et CompTIA Security+, mise en place de politiques Zero-Trust et Row-Level Security (RLS).</li>
              <li><strong>Conseil e-Santé & Formation Numérique :</strong> Accompagnement de projets nationaux et panafricains, formation de cadres et soignants en santé numérique (XH Skills Academy).</li>
            </ul>
          </section>

          {/* PROPRIÉTÉ INTELLECTUELLE */}
          <section className="space-y-3">
            <h2 className="text-base font-bold uppercase tracking-wider font-mono text-zinc-950 border-b border-zinc-200 pb-1">
              Article 3 &mdash; Propriété Intellectuelle & Marques Citées
            </h2>
            <p className="text-sm text-zinc-700 leading-relaxed">
              L&apos;ensemble des contenus originaux (textes, design, photographies, charte graphique, code source du portfolio) est protégé par les lois internationales sur la propriété intellectuelle et le droit d&apos;auteur. Toute reproduction ou utilisation sans autorisation préalable écrite est formellement interdite.
            </p>
            <p className="text-sm text-zinc-700 leading-relaxed">
              Les marques, logos institutionnels et noms de partenaires cités sur ce portfolio (notamment <em>UNICEF, PNUD, OMS, AFD, Expertise France, MSHP-CMU, Laboratoire Roche, SiPath, Pass Santé Mousso, HEC Maroc, Stanford University</em>) demeurent la propriété exclusive de leurs détenteurs respectifs. Leur mention atteste de collaborations effectives, validations scientifiques ou missions d&apos;ingénierie réalisées.
            </p>
          </section>

          {/* SPÉCIFICITÉ DE L'IA MÉDICALE */}
          <section className="space-y-3 p-4 bg-zinc-50 border border-zinc-200">
            <h2 className="text-base font-bold uppercase tracking-wider font-mono text-zinc-950 flex items-center gap-2">
              <Shield size={16} className="text-sky-700" />
              Article 4 &mdash; Clause Déontologique relative à l&apos;IA Médicale
            </h2>
            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
              Les projets présentés dans ce portfolio (notamment <strong>Kanyeh Assist</strong>, <strong>Nuria</strong>, <strong>Tila</strong> et <strong>E-PNEUMO</strong>) constituent des architectures logicielles et des algorithmes d&apos;intelligence artificielle d&apos;aide à la décision clinique. En aucun cas ces algorithmes ne se substituent au jugement souverain, au diagnostic médical ou à la prescription d&apos;un médecin ou spécialiste assermenté.
            </p>
          </section>

          {/* LIMITATION DE RESPONSABILITÉ */}
          <section className="space-y-3">
            <h2 className="text-base font-bold uppercase tracking-wider font-mono text-zinc-950 border-b border-zinc-200 pb-1">
              Article 5 &mdash; Disponibilité du Site & Limitation de Responsabilité
            </h2>
            <p className="text-sm text-zinc-700 leading-relaxed">
              L&apos;éditeur s&apos;efforce d&apos;assurer l&apos;exactitude des informations diffusées et la disponibilité continue du site. Toutefois, sa responsabilité ne saurait être engagée en cas d&apos;interruption technique temporaire, de force majeure ou d&apos;inexactitude involontaire.
            </p>
          </section>

          {/* DROIT APPLICABLE */}
          <section className="space-y-3">
            <h2 className="text-base font-bold uppercase tracking-wider font-mono text-zinc-950 border-b border-zinc-200 pb-1">
              Article 6 &mdash; Droit Applicable & Juridiction
            </h2>
            <p className="text-sm text-zinc-700 leading-relaxed">
              Les présentes conditions sont régies par le droit en vigueur en République de Côte d&apos;Ivoire et les conventions internationales afférentes au commerce électronique et à la propriété intellectuelle. En cas de litige, une solution amiable sera prioritairement recherchée avant toute action judiciaire devant les tribunaux compétents d&apos;Abidjan.
            </p>
          </section>

          {/* CONTACT */}
          <footer className="pt-6 border-t border-zinc-200 text-xs font-mono text-zinc-600 flex flex-col sm:flex-row justify-between gap-3">
            <div>
              <strong>Contact Juridique & Professionnel :</strong><br />
              ibrahim92karamoko@gmail.com • +225 07 16 31 37 08
            </div>
            <div className="text-left sm:text-right">
              Abidjan, Côte d&apos;Ivoire
            </div>
          </footer>
        </article>
      </div>
    </main>
  );
}
