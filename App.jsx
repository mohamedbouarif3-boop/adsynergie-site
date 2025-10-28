import { useState } from 'react'
import { motion } from 'framer-motion'
import { PhoneCall, Mail, MapPin, ArrowRight, CheckCircle2, Instagram, Facebook, Linkedin, Star, Construction, Rocket } from 'lucide-react'

const BRAND = {
  name: 'AdSynergie',
  tagline: 'Solutions digitales et croissance locale à Leeds',
  phone: '+44 113 555 0123',
  email: 'contact@adsynergie.co.uk',
  address: 'City Square, Leeds LS1, UK',
}

export default function App(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAFAFA] via-white to-[#FAFAFA] text-brand-ink">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Trustbar />
        <Services />
        <Showcase />
        <About />
        <CTA />
        <Testimonials />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function Header(){
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-brand-teal/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/adsynergie-logo.png" alt="AdSynergie logo" className="h-8 w-auto" onError={(e)=>{e.currentTarget.style.display='none'}}/>
          <span className="font-semibold tracking-tight flex items-center gap-2">
            <Rocket className="w-5 h-5 text-brand-teal hidden sm:block" />
            {BRAND.name}
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="hover:text-brand-teal text-brand-ink/80">Services</a>
          <a href="#works" className="hover:text-brand-teal text-brand-ink/80">Réalisations</a>
          <a href="#about" className="hover:text-brand-teal text-brand-ink/80">À propos</a>
          <a href="#contact" className="hover:text-brand-teal text-brand-ink/80">Contact</a>
        </nav>
        <a href="#contact" className="hidden sm:inline-flex items-center bg-brand-teal hover:bg-brand-tealDark text-white px-4 py-2 rounded-xl">Demander un devis <ArrowRight className="ml-2 w-4 h-4"/></a>
      </div>
    </header>
  )
}

function BackgroundArt(){
  return (
    <div aria-hidden className="absolute inset-0 -z-10">
      <div className="absolute -top-40 -right-40 w-[36rem] h-[36rem] rounded-full bg-brand-teal/30 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-[28rem] h-[28rem] rounded-full bg-brand-ink/10 blur-3xl"></div>
    </div>
  )
}

function Hero(){
  return (
    <section className="relative overflow-hidden pt-16 sm:pt-24 pb-16">
      <BackgroundArt />
      <div className="relative grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.5}}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.1]">
            Faites décoller votre activité à Leeds
          </motion.h1>
          <p className="mt-4 text-lg text-brand-ink/80 max-w-2xl">
            {BRAND.tagline}. Sites web, branding, campagnes locales et accompagnement sur mesure.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center bg-brand-teal hover:bg-brand-tealDark text-white px-4 py-2 rounded-xl">Parler à un expert <ArrowRight className="ml-2 w-4 h-4"/></a>
            <a href="#works" className="inline-flex items-center border px-4 py-2 rounded-xl">Voir nos réalisations</a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-brand-ink/70">
            <div className="flex items-center gap-1"><Star className="w-4 h-4 text-amber-500"/> 4.9/5 avis locaux</div>
            <span className="h-4 w-px bg-slate-300" />
            <div>Intervention sur Leeds & alentours</div>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="border rounded-2xl p-6 shadow-xl border-brand-teal/20">
            <h3 className="text-xl font-semibold flex items-center gap-2"><Construction className="w-5 h-5 text-brand-teal"/> Projet express</h3>
            <ul className="mt-4 space-y-3 text-sm text-brand-ink/80">
              {['Design personnalisé en 7 jours','Optimisé SEO local (Leeds)','Responsive & ultra-rapide','Formulaire & prise de RDV'].map((item, i)=>(
                <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-brand-teal"/> {item}</li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3">
              <a href="#contact" className="bg-brand-teal hover:bg-brand-tealDark text-white px-4 py-2 rounded-xl">Obtenir un devis</a>
              <a href="#services" className="border px-4 py-2 rounded-xl">Nos services</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Trustbar(){
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center py-6 opacity-80">
      {['Leeds City Council','Leeds Tech','Yorkshire Biz','LTE Network'].map((brand,i)=>(
        <div key={i} className="text-xs sm:text-sm text-brand-ink/60">{brand}</div>
      ))}
    </div>
  )
}

function Services(){
  const items = [
    {title:'Site vitrine & e‑commerce', desc:'Design moderne, vitesse, référencement local.'},
    {title:'Branding & identité', desc:'Logo, palette, guidelines et templates.'},
    {title:'Growth local', desc:'Campagnes ciblées Leeds + analytics.'},
  ]
  return (
    <section id="services" className="py-16">
      <h2 className="text-3xl font-bold tracking-tight">Services</h2>
      <p className="mt-2 text-brand-ink/80">Tout ce qu’il faut pour lancer et faire croître votre activité.</p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((s,i)=>(
          <div key={i} className="hover:shadow-lg transition-shadow border rounded-2xl p-6 border-brand-teal/20">
            <div className="text-lg font-semibold">{s.title}</div>
            <p className="text-sm text-brand-ink/80 mt-2">{s.desc}</p>
            <div className="mt-4 inline-flex items-center text-xs bg-brand-teal/10 px-2 py-1 rounded">Délai moyen: 1–2 semaines</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Showcase(){
  const works = [
    {title:'Café Leeds Central', tag:'Site vitrine', imageUrl:'https://picsum.photos/seed/leeds1/800/600'},
    {title:'Yorkshire Fitness', tag:'E‑commerce', imageUrl:'https://picsum.photos/seed/leeds2/800/600'},
    {title:'Leeds Movers', tag:'Branding', imageUrl:'https://picsum.photos/seed/leeds3/800/600'},
  ]
  return (
    <section id="works" className="py-16">
      <h2 className="text-3xl font-bold tracking-tight">Réalisations</h2>
      <p className="mt-2 text-brand-ink/80">Quelques exemples représentatifs. Remplace par tes projets.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {works.map((w,i)=>(
          <div key={i} className="overflow-hidden group border rounded-2xl border-brand-teal/20">
            <img src={w.imageUrl} alt={w.title} className="aspect-[4/3] w-full object-cover transition-transform group-hover:scale-[1.03]" />
            <div className="p-4 flex items-center justify-between">
              <span className="font-medium">{w.title}</span>
              <span className="text-xs px-2 py-1 rounded bg-brand-teal text-white">{w.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function About(){
  return (
    <section id="about" className="py-16 grid lg:grid-cols-2 gap-10 items-start">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">À propos</h2>
        <p className="mt-3 text-brand-ink/80">Nous aidons les entrepreneurs de Leeds à lancer des marques solides et des expériences digitales performantes. Petite équipe, gros impact : design, code, et stratégie, le tout en proximité.</p>
        <ul className="mt-6 space-y-3 text-sm text-brand-ink">
          {['+30 projets livrés dans le Yorkshire','Approche rapide: prototype en 72h','Support et évolutions inclus le 1er mois'].map((x,i)=>(
            <li key={i} className="flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-brand-teal"/> {x}</li>
          ))}
        </ul>
      </div>
      <Stats />
    </section>
  )
}

function Stats(){
  const stats = [
    {kpi:'Satisfaction', val:'98%'},
    {kpi:'Délai moyen', val:'10 j'},
    {kpi:'Sites en ligne', val:'30+'},
  ]
  return (
    <div className="grid sm:grid-cols-3 gap-4">
      {stats.map((s,i)=>(
        <div key={i} className="border rounded-2xl p-6 border-brand-teal/20">
          <div className="text-3xl font-extrabold tracking-tight">{s.val}</div>
          <div className="text-sm text-brand-ink/80 mt-1">{s.kpi}</div>
        </div>
      ))}
    </div>
  )
}

function CTA(){
  return (
    <section className="py-14">
      <div className="bg-gradient-to-r from-[#E5F7F8] via-[#F2FBFB] to-[#E5F7F8] border border-brand-teal/20 rounded-2xl p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold">Prêt à lancer votre projet ?</h3>
          <p className="text-brand-ink/80 mt-1">Parlez-nous de votre idée et recevez un plan d’action sous 24h.</p>
        </div>
        <div className="flex gap-3">
          <a href="#contact" className="bg-brand-teal hover:bg-brand-tealDark text-white px-4 py-2 rounded-xl">Demander un devis</a>
          <a href="tel:+441135550123" className="border px-4 py-2 rounded-xl">Appeler</a>
        </div>
      </div>
    </section>
  )
}

function Testimonials(){
  const quotes = [
    {name:'Sara M.', role:'Coffee Shop', text:'Super rapide, le site est propre et on a gagné des clients dès la 1ère semaine.'},
    {name:'Omar T.', role:'Coach Sportif', text:'Branding nickel et tunnel de vente qui convertit. Reco à 100%.'},
    {name:'Emma W.', role:'Déménagement', text:'Projet fluide, équipe dispo, résultat top.'},
  ]
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold tracking-tight">Avis clients</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {quotes.map((q,i)=>(
          <div key={i} className="border rounded-2xl p-6 border-brand-teal/20">
            <div className="flex gap-1 text-amber-500" aria-hidden>
              {Array.from({length:5}).map((_,j)=>(<Star key={j} className="w-4 h-4 fill-current" />))}
            </div>
            <p className="mt-3 text-brand-ink">“{q.text}”</p>
            <div className="mt-4 text-sm text-brand-ink/70">{q.name} · {q.role}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Location(){
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold tracking-tight">Nous trouver</h2>
      <p className="mt-2 text-brand-ink/80">Basés au cœur de Leeds — on se déplace sur rendez‑vous.</p>
      <div className="mt-6 rounded-2xl overflow-hidden border border-brand-teal/20">
        <iframe
          title="Leeds Map"
          className="w-full h-[360px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Leeds%20City%20Square&z=14&output=embed"
        />
      </div>
    </section>
  )
}

function Contact(){
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e){
    e.preventDefault()
    setStatus('sending')
    const formData = new FormData(e.target)
    try{
      await fetch('https://formspree.io/f/xxxxxx', {
        method:'POST', body: formData, headers: { Accept: 'application/json' }
      })
      setStatus('sent')
    }catch(err){
      setStatus('idle')
      alert("Échec de l'envoi. Réessaie plus tard.")
    }
  }

  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
      <div className="mt-8 grid lg:grid-cols-2 gap-8">
        <div className="border rounded-2xl border-brand-teal/20 p-6">
          <h3 className="font-semibold text-lg">Parlez-nous de votre projet</h3>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" placeholder="Votre nom" required className="border rounded-xl px-3 py-2"/>
              <input name="email" type="email" placeholder="Votre e‑mail" required className="border rounded-xl px-3 py-2"/>
            </div>
            <input name="company" placeholder="Nom de votre entreprise" className="border rounded-xl px-3 py-2"/>
            <textarea name="message" placeholder="Décrivez brièvement votre besoin" rows={5} required className="border rounded-xl px-3 py-2"></textarea>
            <div className="flex items-center gap-3">
              <button type="submit" disabled={status!=='idle' && status!=='sent'} className="bg-brand-teal hover:bg-brand-tealDark text-white px-4 py-2 rounded-xl">
                {status === 'sending' ? 'Envoi…' : status === 'sent' ? 'Envoyé ✓' : 'Envoyer'}
              </button>
              <div className="text-sm text-brand-ink/70">ou appelez‑nous</div>
              <a href={`tel:${BRAND.phone}`} className="text-sm font-medium underline underline-offset-4">{BRAND.phone}</a>
            </div>
          </form>
        </div>
        <div className="border rounded-2xl border-brand-teal/20 p-6 text-sm text-brand-ink/80 space-y-3">
          <div className="flex items-center gap-2"><PhoneCall className="w-4 h-4 text-brand-teal"/> {BRAND.phone}</div>
          <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-brand-teal"/> {BRAND.email}</div>
          <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-brand-teal"/> {BRAND.address}</div>
          <div className="h-px bg-slate-200 my-2"></div>
          <div className="flex items-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-brand-teal/30 hover:bg-brand-teal/5"><Instagram className="w-4 h-4"/><span className="text-xs">Instagram</span></a>
            <a href="#" className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-brand-teal/30 hover:bg-brand-teal/5"><Facebook className="w-4 h-4"/><span className="text-xs">Facebook</span></a>
            <a href="#" className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-brand-teal/30 hover:bg-brand-teal/5"><Linkedin className="w-4 h-4"/><span className="text-xs">LinkedIn</span></a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer(){
  return (
    <footer className="mt-16 border-t border-brand-teal/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-brand-ink/70 flex flex-col sm:flex-row items-center sm:justify-between gap-4">
        <div>© {new Date().getFullYear()} {BRAND.name}. Tous droits réservés.</div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-brand-teal">Mentions légales</a>
          <a href="#" className="hover:text-brand-teal">Politique de confidentialité</a>
        </div>
      </div>
    </footer>
  )
}
