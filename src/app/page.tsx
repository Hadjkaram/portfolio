import AboutBento from "@/components/AboutBento";
import ProjectsAvantGarde from "@/components/ProjectsAvantGarde";
import Contact from "@/components/Contact";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f4f5] text-gray-900 selection:bg-[var(--primary)] selection:text-white overflow-hidden">
      
      {/* NAVIGATION MINIMALISTE & LOGO DESIGNÉ */}
      <nav className="absolute top-0 w-full p-8 flex justify-between items-center z-50 max-w-7xl mx-auto left-0 right-0">
        
        {/* TON LOGO DANS SON CADRE ORGANIQUE */}
        <div className="flex items-center cursor-pointer group">
           <div className="w-20 h-20 md:w-24 md:h-24 bg-white border-2 border-gray-900 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] flex items-center justify-center overflow-hidden shadow-sm group-hover:rounded-[40%_60%_70%_30%/50%_60%_30%_50%] transition-all duration-500">
             <img 
               src="/Logo_IK.png" 
               alt="Logo" 
               // Logo agrandi à l'intérieur de son cadre
               className="w-[75%] h-auto object-contain transition-transform duration-300 group-hover:scale-110" 
             />
           </div>
        </div>

        <a href="#contact" className="px-6 py-3 bg-gray-900 text-white text-sm font-bold rounded-full hover:scale-105 hover:shadow-lg transition-all">
          Discutons.
        </a>
      </nav>

      {/* HERO SECTION 2 COLONNES (TEXTE + PHOTO) */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto pt-24 pb-12 relative">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full">
          
          {/* GAUCHE : TEXTE */}
          <div className="w-full md:w-3/5 z-10 flex flex-col items-center md:items-start text-center md:text-left mt-8 md:mt-0">
            <h1 className="text-[14vw] md:text-[8vw] font-black leading-[0.85] tracking-tighter text-gray-900 mb-8">
              FULLSTACK <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-blue-600">
                & AI ENGINEER.
              </span>
            </h1>
            
            <div className="flex flex-col gap-8 items-center md:items-start">
              <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-xl md:border-l-4 md:border-[var(--primary)] md:pl-6 leading-relaxed">
                Je suis El Hadj Ibrahim Karamoko. V, j'architecte des solutions intelligentes et des infrastructures critiques pour les institutions et les startups visionnaires.
              </p>
              
              <div className="flex -space-x-4 mt-2">
                <div className="w-14 h-14 rounded-full border-4 border-[#f4f4f5] bg-gray-900 flex items-center justify-center text-white font-bold text-[10px] z-30 shadow-sm">AWS</div>
                <div className="w-14 h-14 rounded-full border-4 border-[#f4f4f5] bg-[var(--primary)] flex items-center justify-center text-white font-bold text-[10px] z-20 shadow-sm">IA</div>
                <div className="w-14 h-14 rounded-full border-4 border-[#f4f4f5] bg-blue-600 flex items-center justify-center text-white font-bold text-[10px] z-10 shadow-sm">DEV</div>
              </div>
            </div>
          </div>

          {/* DROITE : TA PHOTO DANS SON CADRE AGRANDI */}
          <div className="w-full md:w-2/5 relative flex justify-center items-center h-[400px] md:h-[650px]">
            
            {/* Lueur de fond */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-tr from-[var(--primary)]/20 to-blue-500/20 rounded-full blur-3xl -z-10 animate-pulse"></div>

            {/* LE CADRE (BLOB) AGRANDI */}
            <div className="relative w-[340px] h-[340px] md:w-[500px] md:h-[500px] bg-gradient-to-br from-[var(--primary)] via-blue-500 to-indigo-600 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden shadow-2xl border-4 border-white flex justify-center items-end group transition-all duration-700 hover:rounded-[40%_60%_70%_30%/50%_60%_30%_50%]">
              
              {/* TA PHOTO AGRANDIE DANS LE CADRE */}
              <img 
                src="/ibrahim-photo.png" 
                alt="Ibrahim Karamoko"
                // Taille augmentée à h-[115%] pour qu'elle remplisse davantage le cadre
                className="w-auto h-[115%] md:h-[120%] object-contain object-bottom drop-shadow-2xl group-hover:scale-105 transition-transform duration-700 ease-out z-10 origin-bottom"
              />
            </div>

          </div>

        </div>
      </section>

      {/* SECTIONS */}
      <AboutBento />
      <ProjectsAvantGarde />
      <Contact />
      <Chatbot />

    </main>
  );
}