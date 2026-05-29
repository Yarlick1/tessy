import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Clock, Calendar, Shirt, Ticket, Heart } from 'lucide-react'; {/* Icono regalo: Gift*/ }

gsap.registerPlugin(ScrollTrigger);

const carouselImages = Object.entries(
  import.meta.glob('./assets/ele/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP}', {
    eager: true,
    import: 'default'
  })
)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
  .map(([, src]) => src);

const carouselImagesIglesia = Object.entries(
  import.meta.glob('./assets/misa/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP}', {
    eager: true,
    import: 'default'
  })
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

const carouselImagesSalon = Object.entries(
  import.meta.glob('./assets/salon/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP}', {
    eager: true,
    import: 'default'
  })
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

const ScrollReveal = ({ children, delay = 0 }) => {
  const revealRef = useRef(null);

  useLayoutEffect(() => {
    const element = revealRef.current;
    if (!element) return undefined;

    const ctx = gsap.context(() => {
      gsap.set(element, { autoAlpha: 0, y: 34, scale: 0.985 });

      gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: 'top 86%',
          toggleActions: 'play none none reverse'
        }
      })
        .to(element, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: 'power3.out'
        }, delay);
    }, element);

    return () => ctx.revert();
  }, [delay]);

  return <div ref={revealRef}>{children}</div>;
};

const FloralSprig = ({ className = '', flip = false }) => (
  <svg
    className={className}
    viewBox="0 0 220 170"
    fill="none"
    aria-hidden="true"
    style={{ transform: flip ? 'scaleX(-1)' : undefined }}
  >
    <path d="M24 138C64 82 119 45 193 23" stroke="#B79B50" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M74 91c-17-20-13-43 10-55 14 22 10 41-10 55Z" fill="#F1BECB" stroke="#D39AAA" strokeWidth="1" />
    <path d="M110 64c-8-24 5-43 31-47 6 24-8 40-31 47Z" fill="#F8DDE3" stroke="#D39AAA" strokeWidth="1" />
    <path d="M132 56c12-21 33-27 53-13-12 20-31 25-53 13Z" fill="#F5D4DC" stroke="#D39AAA" strokeWidth="1" />
    <path d="M49 116c-18-8-27-25-19-43 18 8 25 23 19 43Z" fill="#E9AFBF" stroke="#D39AAA" strokeWidth="1" />
    <path d="M91 80c-14 3-28 0-40-9M122 60c-13-2-24-9-32-20M151 48c-9-7-15-17-18-30M57 109c-13 8-27 11-42 9" stroke="#8E7A45" strokeWidth="1" strokeLinecap="round" />
    <circle cx="186" cy="25" r="3.5" fill="#C5A059" />
    <circle cx="35" cy="122" r="3" fill="#C5A059" />
    <circle cx="68" cy="96" r="2.5" fill="#D9A6B5" />
  </svg>
);

const SectionTitle = ({ eyebrow, title }) => (
  <div className="mb-3 text-center">
    <p className="mb-3 font-serif text-[0.80rem] uppercase tracking-[0.32em] text-gold">{eyebrow}</p>
    <h3 className="font-script text-5xl leading-none text-ink">{title}</h3>
  </div>
);

const DetailIcon = ({ icon: Icon }) => (
  <span className="mb-[5px] mt-[1rem] inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/25 bg-cream/70 text-gold shadow-sm">
    <Icon className="h-5 w-5" strokeWidth={1.45} />
  </span>
);

const ImageCarousel = () => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (carouselImages.length <= 1) return undefined;

    const interval = setInterval(() => {
      setActiveImage((current) => (current + 1) % carouselImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!carouselImages.length) return null;

  return (
    <div className="mx-auto mt-10 w-full max-w-[19rem]">
      <div className="glance-frame relative aspect-[4/5] overflow-hidden rounded-t-full border border-gold/25 bg-blush/45 shadow-[0_24px_55px_rgba(141,83,98,0.18)]">
        {carouselImages.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`Tessy ${index + 1}`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${index === activeImage ? 'opacity-100' : 'opacity-0'
              }`}
          />
        ))}
        <span className="glance-light" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_10px_rgba(255,249,244,0.18),inset_0_-80px_90px_rgba(88,64,70,0.16)]" />
      </div>
    </div>
  );
};

const ImageCarouselIglesia = () => {
  const [activeImage2, setActiveImage2] = useState(0);


  useEffect(() => {
    if (carouselImagesIglesia.length <= 1) return undefined;

    const interval2 = setInterval(() => {
      setActiveImage2((current) => (current + 1) % carouselImagesIglesia.length);
    }, 3000);

    return () => clearInterval(interval2);
  }, []);

  if (!carouselImagesIglesia.length) return null;
  return (
    <div className="mx-[-1.5rem] mt-10 ">
      <div className="glance-frame relative aspect-[2/1] overflow-hidden border border-gold/25 bg-blush/45 shadow-[0_24px_55px_rgba(141,83,98,0.18)]">
        {carouselImagesIglesia.map((imageMisa, index) => (
          <img
            key={imageMisa}
            src={imageMisa}
            alt={`Tessy ${index + 1}`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${index === activeImage2 ? 'opacity-100' : 'opacity-0'
              }`}
          />
        ))}
        <span className="glance-light" aria-hidden="true" />
        <div className="pointer-events-none absolute shadow-[inset_0_0_0_10px_rgba(255,249,244,0.18),inset_0_-80px_90px_rgba(88,64,70,0.16)]" />
      </div>
    </div>
  );
};


const ImageCarouselSalon = () => {
  const [activeImage3, setActiveImage3] = useState(0);


  useEffect(() => {
    if (carouselImagesSalon.length <= 1) return undefined;

    const interval3 = setInterval(() => {
      setActiveImage3((current) => (current + 1) % carouselImagesSalon.length);
    }, 3000);

    return () => clearInterval(interval3);
  }, []);

  if (!carouselImagesSalon.length) return null;
  return (
    <div className="mx-[-1.6rem] mt-10">
      <div className="glance-frame relative aspect-[2/1] overflow-hidden border border-gold/25 bg-blush/45 shadow-[0_24px_55px_rgba(141,83,98,0.18)]">
        {carouselImagesSalon.map((imageSalon, index) => (
          <img
            key={imageSalon}
            src={imageSalon}
            alt={`Tessy ${index + 1}`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${index === activeImage3 ? 'opacity-100' : 'opacity-0'
              }`}
          />
        ))}
        <span className="glance-light" aria-hidden="true" />
        <div className="pointer-events-none absolute shadow-[inset_0_0_0_10px_rgba(255,249,244,0.18),inset_0_-80px_90px_rgba(88,64,70,0.16)]" />
      </div>
    </div>
  );
};

export default function Invitation({ invitado }) {
  const invitationRef = useRef(null);
  const totalBoletos = invitado?.pases || 0;
  const nombreInvitado = invitado?.nombre || 'Invitado especial';
  // condicional para invitado especial
  let mensajeRSVP = nombreInvitado === 'Invitado especial' || totalBoletos < 1 ? `¡Hola! confirmo mi asistencia a los XV años de Tessy.` : `¡Hola! La ${nombreInvitado} confirma la asistencia de ${totalBoletos} personas a los XV años de Tessy.`;
  const whatsappNumber = "7225983205"; //Num Yar

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2026-07-18T18:00:00").getTime(); //Fecha y Hora

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from('.hero-kicker', { autoAlpha: 0, y: 22, duration: 0.75 })
        .from('.hero-seal', { autoAlpha: 0, y: 18, scale: 0.82, duration: 0.8 }, '-=0.35')
        .from('.hero-title', { autoAlpha: 0, y: 26, scale: 0.94, duration: 1 }, '-=0.35')
        .from('.hero-copy', { autoAlpha: 0, y: 20, duration: 0.75 }, '-=0.45')
        .from('.hero-divider', { scaleY: 0, transformOrigin: 'center top', duration: 0.8 }, '-=0.25')
        .from('.hero-photo', { autoAlpha: 0, y: 32, scale: 0.96, duration: 1 }, '-=0.2');

      gsap.to('.floral-float', {
        y: -10,
        rotation: 1.8,
        duration: 4.2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 0.7
      });

      gsap.utils.toArray('.glance-light').forEach((light) => {
        gsap.timeline({
          scrollTrigger: {
            trigger: light.parentElement,
            start: 'top 78%',
            toggleActions: 'play none none reset'
          }
        })
          .fromTo(light,
            { xPercent: -170, autoAlpha: 0 },
            { xPercent: 170, autoAlpha: 0.7, duration: 1.25, ease: 'power2.inOut' }
          )
          .to(light, { autoAlpha: 0, duration: 0.25 }, '-=0.25');
      });
    }, invitationRef);

    return () => ctx.revert();
  }, []);

  const timeLabels = {
    days: 'Días',
    hours: 'Hrs',
    minutes: 'Min',
    seconds: 'Seg'
  };

  return (
    <main ref={invitationRef} className="paper-grain relative mx-auto min-h-screen max-w-lg overflow-hidden bg-cream pb-16 text-ink shadow-[0_30px_90px_rgba(88,64,70,0.24)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[680px] bg-[radial-gradient(circle_at_50%_0%,rgba(244,204,214,0.72),transparent_58%)]" />
      <div className="pointer-events-none absolute inset-y-0 left-3 w-px bg-gold/15" />
      <div className="pointer-events-none absolute inset-y-0 right-3 w-px bg-gold/15" />

      <section className="relative min-h-[92svh] px-6 pb-10 pt-16 text-center">
        <FloralSprig className="floral-float absolute -left-16 top-[-1rem] h-44 w-56 opacity-80" />
        <FloralSprig className="floral-float absolute -right-16 bottom-14 h-44 w-56 opacity-80" flip />

        <ScrollReveal>
          <p className="hero-kicker mx-auto mb-7 max-w-[18rem] font-serif text-[0.9rem] uppercase leading-6 tracking-[0.28em] text-mauve">
            Hay momentos en la vida que son especiales
          </p>
          <div className="hero-seal mx-auto my-[2rem] flex h-24 w-24 items-center justify-center rounded-full border border-gold/25 bg-cream/60 shadow-[0_18px_45px_rgba(141,83,98,0.12)]">
            <span className="font-serif text-4xl italic text-gold">XV</span>
          </div>
          <h1 className="hero-title mb-4 font-script text-[5.7rem] leading-[0.88] text-ink">Tessy</h1><br />
          <p className="hero-copy mx-auto max-w-[18rem] font-serif text-[0.9rem] uppercase leading-6 tracking-[0.26em] text-mauve">
            Y compartirlos con las personas que amas los hace inolvidables
          </p>
          <div className="hero-divider mx-auto mt-11 h-24 w-px bg-gradient-to-b from-gold/0 via-gold/55 to-gold/0" />
          {/* contenedor imagen */}
          <div className="hero-photo mx-auto mt-2 w-full max-w-[19rem]">

            <div className="glance-frame relative aspect-[3/5] overflow-hidden border border-gold/25 bg-blush/45 shadow-[0_24px_55px_rgba(141,83,98,0.18)]">
              <img src="principal.jpeg" alt="" className='absolute inset-0 h-full w-full object-cover transition-opacity' />
              <span className="glance-light" aria-hidden="true" />
              <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_10px_rgba(255,249,244,0.18),inset_0_-80px_90px_rgba(88,64,70,0.16)]" />
            </div>

          </div>

        </ScrollReveal>
      </section>

      <section className="relative px-6 py-12 text-center">
        <ScrollReveal>
          <div className="ornate-panel px-6 py-10">
            <Heart className="mx-auto mb-5 h-6 w-6 text-gold" strokeWidth={1.3} />
            <h2 className="mb-6 font-serif text-lg uppercase tracking-[0.24em] text-gold">Con la bendición de Dios</h2>
            <p className="mx-auto font-serif text-lg italic leading-8 text-mauve">
              Tengo el honor de invitarte a celebrar una noche llena de amor, gratitud y sueños.
            </p>
          </div>
        </ScrollReveal>
      </section>

      <section className="px-6 py-12 text-center">
        <ScrollReveal>
          <SectionTitle eyebrow="En compañía de mis padres" title="Mi familia" />
          <div className="space-y-3 font-sans text-[1.1rem] font-light leading-7 text-mauve">
            <p>María Beatriz Dominguez Flores</p>
            <p>Miguel Colin Carandia</p>
          </div>

          <div className="mx-auto my-10 flex w-32 items-center justify-center gap-3">
            <span className="h-px flex-1 bg-gold/40" />
            <span className="h-1.5 w-1.5 rotate-45 bg-gold/60" />
            <span className="h-px flex-1 bg-gold/40" />
          </div>

          <p className="mb-5 font-serif text-[0.75rem] uppercase tracking-[0.3em] text-gold">Y mis padrinos</p>
          <div className="space-y-3 font-sans text-[1.1rem] font-light leading-7 text-mauve">
            <p>Griselda Colin Carandia</p>
            <p>Bernardo Vázquez Vilchis</p>
          </div>
        </ScrollReveal>
      </section>

      <section className="relative my-6 px-6 py-14">
        <FloralSprig className="floral-float absolute -left-20 top-0 h-36 w-48 opacity-55" />
        <ScrollReveal>
          <div className="bg-blush/75 px-5 py-9 shadow-[inset_0_0_0_1px_rgba(197,160,89,0.16)]">
            <h3 className="mb-8 text-center font-serif text-[0.72rem] uppercase tracking-[0.5em] text-gold">Faltan</h3>
            <div className="grid grid-cols-4 gap-2 text-center">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="min-w-0">
                  <span className="flex aspect-square items-center justify-center border border-gold/20 bg-cream/85 font-serif text-2xl text-ink shadow-sm">
                    {String(value).padStart(2, '0')}
                  </span>
                  <span className="mt-3 block text-[0.58rem] uppercase tracking-[0.18em] text-mauve">
                    {timeLabels[unit]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="px-6 py-12">
        <ScrollReveal>
          <SectionTitle eyebrow="Itirenario" title="Ceremonia" />
          <div className="space-y-5 text-center font-light leading-8 text-mauve">
            <DetailIcon icon={Calendar} />
            <p className='mt-[-2px] text-[1.1rem]'>Sábado, 18 de Julio 2026</p>
            <DetailIcon icon={Clock} />
            <p className='text-[1.1rem]'><b>14:00 hrs</b> </p>
            <DetailIcon icon={MapPin} />
            <p className='text-[1.1rem]'>Rectoría de Nuestra Señora del Perpetuo Socorro<br />Calle Manuel Doblado Manzana 005, Pilares, 52179 San Jerónimo Chicahualco, Méx.</p>
            <ImageCarouselIglesia />
            <a
              href="https://maps.app.goo.gl/eoea3sEjCbpxTGv86"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex min-h-11 items-center justify-center border border-gold/70 bg-cream/70 px-6 font-serif text-[0.9rem] uppercase tracking-[0.24em] text-gold transition-colors hover:bg-gold hover:text-white"
            >
              Ver en Mapa
            </a>
          </div>
        </ScrollReveal>

        <div className="mx-auto my-14 h-px w-32 bg-gold/35" />

        <ScrollReveal>
          <SectionTitle eyebrow="Después de la ceremonia" title="Recepción" />
          <div className="space-y-5 text-center font-light leading-7 text-mauve">
            <DetailIcon icon={Clock} />
            <p className='text-[1.1rem]'><b>17:30 hrs</b></p>
            <DetailIcon icon={MapPin} />
            <p className='text-[1.1rem]'>Salón de Eventos "Ana Lucía Toluca"<br />C. Industria Minera 601, Delegación San Lorenzo Tepaltitlán, 50010 San Lorenzo Tepaltitlán, Méx.</p>
            <ImageCarouselSalon />
            <a
              href="https://maps.app.goo.gl/u1nFHkkxksvp5GoDA"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex min-h-11 items-center justify-center border border-gold/70 bg-cream/70 px-6 font-serif text-[0.9rem] uppercase tracking-[0.24em] text-gold transition-colors hover:bg-gold hover:text-white"
            >
              Ver en Mapa
            </a>
          </div>
        </ScrollReveal>
      </section>

      <section className="px-6 py-12">
        <ScrollReveal>
          <div className="grid gap-5">
            <div className="ornate-panel px-6 py-8 text-center leading-6">
              <DetailIcon icon={Shirt} />
              <h4 className="mb-3 mt-5 font-serif text-sm uppercase tracking-[0.22em] text-ink">Código de Vestimenta</h4>
              <p className="font-light text-mauve">Formal / Etiqueta Rigurosa</p>
              <p className="mt-3 font-serif text-[0.9rem] uppercase tracking-[0.22em] text-rose">Reservado color rosa</p>
            </div>

            {/* <div className="ornate-panel px-6 py-8 text-center leading-6">
              <DetailIcon icon={Gift} />
              <h4 className="mb-3 mt-5 font-serif text-sm uppercase tracking-[0.22em] text-ink">Regalos</h4>
              <p className="font-light leading-7 text-mauve">
                Tu presencia es mi mejor regalo. Si deseas tener un detalle conmigo, habrá un buzón en el salón.
              </p>
            </div> */}
          </div>
        </ScrollReveal>
      </section>

      <section className="px-6 py-12 text-center">
        <ScrollReveal>
          <div className="relative border border-gold/30 bg-cream/65 px-6 py-10 shadow-[0_20px_60px_rgba(141,83,98,0.12)]">
            <FloralSprig className="absolute -right-12 -top-12 h-32 w-44 opacity-55" flip />
            <div className=" absolute -top-6 left-1/2 -translate-x-1/2 bg-cream px-4 rounded-t-lg">
              <Ticket className="h-9 w-9 text-gold" strokeWidth={1.35} />
            </div>
            <h3 className="mb-6 mt-5 font-serif text-lg uppercase tracking-[0.24em] text-ink">Pases de Acceso</h3>
            <p className="mb-3 font-serif text-[0.9rem] uppercase tracking-[0.24em] text-gold">
              {nombreInvitado}
            </p>
            <p className="mb-5 font-light leading-7 text-mauve">
              Hemos reservado <strong className="font-medium text-gold">{totalBoletos < 1 ? '1' : totalBoletos} {totalBoletos < 2 ? 'lugar' : 'lugares'}</strong> para ti.
            </p>
            <p className="mb-8 font-light text-sm leading-6 text-mauve">Por favor, confirma tu asistencia antes del <b>**pendiete**</b> .</p>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensajeRSVP)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex mt-5 min-h-12 items-center justify-center bg-gold px-7 font-serif text-[0.7rem] uppercase tracking-[0.22em] text-white shadow-[0_16px_35px_rgba(197,160,89,0.3)] transition-colors hover:bg-gold-light"
            >
              Confirmar Asistencia
            </a>
          </div>
        </ScrollReveal>
      </section>

      <section className="relative px-6 pb-20 pt-10 text-center">
        <FloralSprig className="absolute -bottom-8 left-1/2 h-40 w-56 -translate-x-1/2 opacity-55" />
        <ScrollReveal>
          <h2 className="mb-4 font-script text-6xl text-ink">Gracias</h2>
          <p className="font-serif text-[0.9rem] uppercase tracking-[0.28em] text-mauve">Por ser parte de mi historia</p>
          <ImageCarousel />
        </ScrollReveal>
      </section>
    </main>
  );
}
