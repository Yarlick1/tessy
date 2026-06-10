import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Invitation from './Invitation';
import { Volume2, VolumeX } from 'lucide-react';
import { obtenerInvitadoActual } from './data/invitados';

const FloralCorner = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 180 180" aria-hidden="true">
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M34 144c34-49 70-84 119-111" stroke="#C5A059" strokeWidth="1.4" />
      <path d="M76 104c-10-20-4-38 16-44 8 20 2 36-16 44Z" fill="#F4CCD6" stroke="#D9A6B5" strokeWidth="1" />
      <path d="M100 82c-4-19 6-33 25-34 2 18-8 30-25 34Z" fill="#F8DDE3" stroke="#D9A6B5" strokeWidth="1" />
      <path d="M53 127c-16-8-23-22-14-37 15 8 20 21 14 37Z" fill="#E9B8C5" stroke="#D9A6B5" strokeWidth="1" />
      <path d="M118 62c5-14 18-21 32-14-5 14-17 20-32 14Z" fill="#F7E7C8" stroke="#D5B875" strokeWidth="1" />
      <path d="M39 139c-9 2-18 1-27-4M64 115c-10 1-18-2-26-8M90 91c-8-3-14-8-19-16M123 59c-6-5-10-12-12-20" stroke="#9E8B5D" strokeWidth="1" />
      <circle cx="142" cy="40" r="3" fill="#C5A059" />
      <circle cx="31" cy="129" r="2.5" fill="#C5A059" />
    </g>
  </svg>
);

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef(null);
  const invitadoActual = obtenerInvitadoActual();
  const volumenMusica = 1;
  //   0.15 // muy bajo
  // 0.35 // discreto
  // 0.60 // medio
  // 1    // máximo

  const abrirInvitacion = () => {
    setIsOpen(true);

    if (!audioRef.current) {
      return;
    }

    audioRef.current.volume = volumenMusica;
    audioRef.current.play()
      .then(() => setIsMusicPlaying(true))
      .catch(() => setIsMusicPlaying(false));
  };

  const alternarMusica = () => {
    if (!audioRef.current) {
      return;
    }

    audioRef.current.volume = volumenMusica;

    if (audioRef.current.paused) {
      audioRef.current.play()
        .then(() => setIsMusicPlaying(true))
        .catch(() => setIsMusicPlaying(false));
      return;
    }

    audioRef.current.pause();
    setIsMusicPlaying(false);
  };


  return (
    <div className="min-h-screen bg-cream font-sans text-ink">
      <audio ref={audioRef} src="No-Crezcas-Mas-Karaoke-Pista-Original-Tercer-Cielo.mp3.mpeg" loop preload="auto" />
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="envelope"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="paper-grain fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-cream px-5 py-7"
          >

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_6%,rgba(232,150,166,0.92),transparent_24rem),linear-gradient(180deg,rgba(251,245,234,0.08),rgba(232,150,166,0.4))]" />
            <FloralCorner className="absolute -left-10 -top-8 h-48 w-48 opacity-85" />
            <FloralCorner className="absolute -bottom-10 -right-10 h-48 w-48 rotate-180 opacity-85" />
            <div className="absolute inset-4 border border-gold/25" />
            <div className="absolute inset-7 border border-white/75" />

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="relative z-10 p-[1em] flex h-full max-h-[46rem] w-full max-w-[22rem] flex-col items-center justify-center text-center"
            >
              <div className="mb-7">
                <p className="mb-3 font-serif text-[0.8rem] uppercase leading-5 tracking-[0.34em] text-gold">
                  Tenemos el honor de invitarte a
                </p>
                <h2 className="mb-1 font-serif text-[1.78rem] italic leading-none text-ink">Mis XV Años</h2>
                <h1 className="font-script text-[6rem]  text-ink">Tessy</h1>
                <p className="mx-auto mt-4 font-serif text-[0.8rem] uppercase leading-6 tracking-[0.2em] text-mauve">
                  Una noche para celebrar sueños, amor y familia
                </p>
              </div>

              <div className="relative mb-7 h-[14.5rem] w-full max-w-[20rem]">
                <div className="absolute inset-x-3 bottom-4 h-[12.2rem] overflow-hidden border border-gold/30 bg-blush/80 shadow-[0_28px_70px_rgba(113,73,83,0.2)]">
                  <div className="absolute inset-0 bg-[linear-gradient(150deg,transparent_49.4%,rgba(197,160,89,0.28)_50%,transparent_50.6%),linear-gradient(30deg,transparent_49.4%,rgba(197,160,89,0.22)_50%,transparent_50.6%)]" />
                  <div className="absolute inset-x-0 top-0 h-[7.3rem] origin-top border-b border-gold/25 bg-cream/72 [clip-path:polygon(0_0,100%_0,50%_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 h-[7.4rem] bg-cream/66 [clip-path:polygon(0_100%,50%_24%,100%_100%)]" />
                  <div className="absolute left-0 top-0 h-full w-1/2 bg-[#E896A6]/60 [clip-path:polygon(0_0,100%_50%,0_100%)]" />
                  <div className="absolute right-0 top-0 h-full w-1/2 bg-[#E896A6]/60 [clip-path:polygon(100%_0,0_50%,100%_100%)]" />
                </div>

                <div className="absolute left-1/2 top-[7.45rem] -translate-x-1/2 -translate-y-1/2">
                  <motion.button
                    type="button"
                    onClick={abrirInvitacion}
                    onClick={abrirInvitacion}
                    animate={{
                      scale: [1, 1.06, 1],
                      boxShadow: [
                        '0 14px 30px rgba(197,160,89,0.24)',
                        '0 18px 44px rgba(197,160,89,0.42)',
                        '0 14px 30px rgba(197,160,89,0.24)'
                      ]
                    }}
                    transition={{ duration: 1.35, repeat: Infinity, ease: "easeInOut" }}
                    className="relative flex h-20 w-20 items-center justify-center rounded-full border border-gold/80 bg-cream text-gold shadow-[0_14px_30px_rgba(197,160,89,0.24)] active:scale-95"
                    aria-label="Abrir invitación"
                  >
                    <span className="absolute inset-[-0.45rem] rounded-full border border-gold/35" />
                    <span className="absolute inset-[-0.85rem] rounded-full border border-gold/20" />
                    <span className="font-serif text-[1.55rem] italic leading-none">XV</span>
                  </motion.button>
                </div>

              </div>

              <div className="w-full max-w-[20rem] border border-gold/30 bg-cream/70 px-5 py-4 shadow-[0_18px_45px_rgba(113,73,83,0.12)] backdrop-blur-sm">
                <p className={`mb-3 font-serif text-[0.8rem] uppercase tracking-[0.24em] ${invitadoActual.pases === 0 ? 'text-gold' : 'text-mauve'} `}>
                  {invitadoActual.nombre}
                </p>
                <p className="mb-1 font-serif text-[0.8rem] uppercase tracking-[0.28em] text-gold">{invitadoActual.pases === 0 ? '' : 'Pases reservados'}</p>
                <p className="font-serif text-2xl text-ink">
                  {invitadoActual.pases === 0 ? '' : invitadoActual.pases} {/* <span className="text-base italic text-mauve"></span> */}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Invitation invitado={invitadoActual} />
          </motion.div>
        )}
      </AnimatePresence>

      {isOpen && (
        <button
          type="button"
          onClick={alternarMusica}
          className="fixed bottom-5 right-5 z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-gold/35 bg-cream/45 text-gold opacity-45 shadow-[0_10px_25px_rgba(113,73,83,0.14)] backdrop-blur-md transition hover:bg-cream/85 hover:opacity-100 focus:bg-cream/90 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-gold/40"
          aria-label={isMusicPlaying ? 'Pausar musica' : 'Reproducir musica'}
        >
          {isMusicPlaying ? (
            <Volume2 className="h-5 w-5" strokeWidth={1.5} />
          ) : (
            <VolumeX className="h-5 w-5" strokeWidth={1.5} />
          )}
        </button>
      )}
    </div>
  );
}
