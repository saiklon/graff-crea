import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowUpRight, Asterisk, Menu, X, Plus } from 'lucide-react';
import './style.css';

const services = [
  ['01', 'Estrategia de marca', 'Posicionamiento, arquitectura y dirección para marcas con propósito.'],
  ['02', 'Identidad visual', 'Sistemas visuales reconocibles, flexibles y consistentes.'],
  ['03', 'Diseño gráfico', 'Piezas impresas y digitales con una idea detrás.'],
  ['04', 'Digital & web', 'Webs y experiencias digitales pensadas para personas.'],
  ['05', 'Contenido & motion', 'Contenido visual, animación y campañas con carácter.'],
  ['06', 'Packaging & editorial', 'Objetos, envases y publicaciones que se sienten.']
];

const projects = [
  { id:'01', name:'Nº3 COSMÉTICA', type:'Identidad', desc:'Un lenguaje visual esencial para una nueva generación de cuidado personal.', year:'2026', tone:'orange', shape:'bottle', note:'Proyecto conceptual · Dirección de arte e identidad visual.' },
  { id:'02', name:'FORMA / ARQUITECTURA', type:'Digital', desc:'Una experiencia digital que convierte el espacio en protagonista.', year:'2026', tone:'blue', shape:'architecture', note:'Proyecto conceptual · Dirección digital y diseño web.' },
  { id:'03', name:'CAMPO ABIERTO', type:'Campaña', desc:'Sistema gráfico y campaña para conectar territorio y comunidad.', year:'2026', tone:'green', shape:'poster', note:'Proyecto conceptual · Campaña e identidad gráfica.' },
  { id:'04', name:'OBJETO 01', type:'Identidad', desc:'Identidad flexible para una marca de objetos cotidianos.', year:'2026', tone:'lavender', shape:'object', note:'Proyecto conceptual · Identidad y packaging.' }
];

function Artwork({ project }) {
  return <div className={`artwork ${project.tone} ${project.shape}`} aria-label={`Composición gráfica conceptual: ${project.name}`}>
    {project.shape === 'bottle' && <><div className="bottle"><span>Nº3</span><i>BOTANICAL<br/>FORMULA</i></div><b className="art-stamp">FORM / 03</b></>}
    {project.shape === 'architecture' && <><div className="arch-block one"/><div className="arch-block two"/><div className="arch-type">SPACE<br/>IS A<br/>FEELING.</div><span className="art-stamp">F / 26</span></>}
    {project.shape === 'poster' && <><div className="poster-circle"/><div className="poster-type">CAMPO<br/>ABIERTO<span>®</span></div><span className="art-stamp">CULTURA · 2026</span></>}
    {project.shape === 'object' && <><div className="object-shape"/><div className="object-type">O—01</div><span className="art-stamp">USE / REUSE / REPEAT</span></>}
    <span className="art-index">{project.id} / 04</span>
  </div>;
}

function App() {
  const [filter, setFilter] = useState('Todos');
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState(null);
  const [sent, setSent] = useState(false);
  const shown = useMemo(() => projects.filter(p => filter === 'Todos' || p.type === filter), [filter]);
  const go = id => { setMenu(false); document.getElementById(id)?.scrollIntoView({ behavior:'smooth' }); };
  const nav = [['Proyectos','work'],['Servicios','services'],['Estudio','studio'],['Journal','journal'],['Contacto','contact']];

  return <div className="site-shell">
    <div className="topline"><span>GC® — ESTUDIO CREATIVO</span><span>JAÉN / ESPAÑA</span><span>EST. 2026</span></div>
    <header className="header">
      <a className="wordmark" href="#top" onClick={e => { e.preventDefault(); go('top'); }}>GRAFF CREA<span>.</span><small>ESTUDIO CREATIVO</small></a>
      <nav className={menu ? 'nav open' : 'nav'}>{nav.map(([label,id],i) => <button key={id} onClick={() => go(id)}>{label}<sup>0{i+1}</sup></button>)}</nav>
      <button className="menu-btn" aria-label="Abrir menú" onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button>
    </header>

    <main id="top">
      <section className="hero">
        <div className="hero-meta"><span>Estudio creativo independiente · Jaén / España</span><span>BRANDING · DISEÑO · DIGITAL</span></div>
        <div className="hero-title-wrap">
          <h1>Ideas con<br/><em>identidad</em><span className="period">.</span></h1>
          <div className="hero-aside"><Asterisk size={46} strokeWidth={1}/><p>Diseñamos marcas, experiencias digitales y comunicación visual para empresas que quieren dejar huella.</p><button className="text-link" onClick={() => go('work')}>Explorar proyectos <ArrowDownRight size={18}/></button></div>
        </div>
        <div className="hero-bottom"><span>ESTRATEGIA / IDENTIDAD / EXPERIENCIA</span><span className="scroll-cue">DESLIZA PARA EXPLORAR <i/></span><span>37°46' N — 3°47' W</span></div>
        <div className="hero-art"><div className="hero-art-orange"/><div className="hero-art-blue"/><div className="hero-art-caption">UN ESTUDIO CREATIVO<br/>CONSTRUIDO SOBRE IDEAS.</div><div className="hero-art-mark">GC<span>.</span></div><div className="hero-art-line"/></div>
      </section>

      <section className="work section" id="work">
        <div className="section-head"><div><span className="kicker">01 / TRABAJO SELECCIONADO</span><h2>Una selección<br/><i>de nuestro trabajo.</i></h2></div><p>Cada proyecto empieza con una pregunta. La respuesta toma forma en sistemas visuales con intención.</p></div>
        <div className="filters">{['Todos','Identidad','Digital','Campaña'].map((f,i) => <button className={filter === f ? 'active' : ''} onClick={() => setFilter(f)} key={f}>{f}<sup>{['04','02','01','01'][i]}</sup></button>)}</div>
        <div className="project-grid">{shown.map((p,i) => <button className={`project-card card-${i}`} key={p.id} onClick={() => setActive(p)}><Artwork project={p}/><div className="project-meta"><div><span>{p.id} / {p.type} · {p.year}</span><h3>{p.name}</h3></div><span className="project-arrow"><ArrowUpRight/></span></div><p className="project-desc">{p.desc}</p></button>)}</div>
        <div className="work-foot"><span>PROYECTOS CONCEPTUALES — 2026</span><span>DISEÑO CON INTENCIÓN <ArrowDownRight size={16}/></span></div>
      </section>

      <section className="services section" id="services">
        <div className="section-head"><div><span className="kicker">02 / LO QUE HACEMOS</span><h2>Estrategia clara.<br/><i>Diseño con intención.</i></h2></div><p>Acompañamos a las marcas desde la primera idea hasta su expresión en el mundo real.</p></div>
        <div className="service-list">{services.map(([n,title,desc]) => <div className="service-row" key={n}><span>{n}</span><h3>{title}</h3><p>{desc}</p><Plus className="service-plus"/></div>)}</div>
      </section>

      <section className="manifesto section" id="studio">
        <span className="kicker">03 / EL ESTUDIO</span><h2>No hacemos ruido.<br/><i>Creamos significado.</i></h2>
        <div className="manifesto-bottom"><p>GRAFF CREA es un estudio independiente que combina pensamiento estratégico, diseño y tecnología. Trabajamos cerca de las personas y de los negocios para construir marcas relevantes, coherentes y memorables.</p><div className="manifesto-mark">GC<span>.</span></div></div>
        <div className="manifesto-strip"><span>OBSERVAR</span><span>·</span><span>PENSAR</span><span>·</span><span>DISEÑAR</span><span>·</span><span>CONSTRUIR</span></div>
      </section>

      <section className="journal section" id="journal">
        <div className="section-head"><div><span className="kicker">04 / JOURNAL</span><h2>Notas, procesos<br/><i>e ideas.</i></h2></div><p>Un espacio para compartir referencias, decisiones de diseño y conversaciones sobre marcas.</p></div>
        <div className="journal-grid"><article><div className="journal-art journal-a"><span>FORM<br/>FOLLOWS<br/>FEELING.</span></div><small>01 — IDENTIDAD</small><h3>Una marca es mucho más que un logotipo.</h3><p>La identidad aparece cuando cada punto de contacto habla el mismo idioma.</p></article><article><div className="journal-art journal-b"><span>LESS<br/>BUT<br/>BETTER.</span></div><small>02 — PROCESO</small><h3>El valor de editar y simplificar.</h3><p>Diseñar también consiste en saber qué dejar fuera.</p></article><article><div className="journal-art journal-c"><span>MAKE<br/>IT<br/>MATTER.</span></div><small>03 — DIGITAL</small><h3>Experiencias digitales con intención.</h3><p>La tecnología funciona mejor cuando desaparece detrás de una buena experiencia.</p></article></div>
      </section>

      <section className="contact section" id="contact">
        <span className="kicker">05 / HABLEMOS</span><div className="contact-layout"><div><h2>¿Tienes algo<br/><i>en mente?</i></h2><p>Cuéntanos qué quieres construir. Nos gustan los retos con intención.</p></div><div className="contact-card"><span>INICIAR UN PROYECTO</span><h3>Hagamos que<br/>se vea.</h3><a className="contact-email" href="mailto:hola@graffcrea.com">hola@graffcrea.com <ArrowUpRight size={18}/></a><small>Correo provisional: confirmar cuando esté activo el dominio.</small></div></div>
        <div className="contact-bottom"><span>Jaén, España · Trabajamos en todo el país</span><span>RESPUESTA PERSONAL · PROYECTOS A MEDIDA</span></div>
      </section>
    </main>

    <footer className="footer"><div><a className="footer-logo" href="#top">GRAFF CREA<span>.</span></a><p>Diseño independiente para ideas que importan.</p></div><div className="footer-links"><a href="#work">Proyectos</a><a href="#services">Servicios</a><a href="#studio">Estudio</a><a href="#contact">Contacto</a></div><div className="footer-bottom"><span>© 2026 GRAFF CREA. Todos los derechos reservados.</span><span>JAÉN / ESPAÑA</span><a href="#top">VOLVER ARRIBA ↑</a></div></footer>

    {active && <div className="modal" role="dialog" aria-modal="true" aria-label={active.name} onClick={() => setActive(null)}><button className="modal-close" onClick={() => setActive(null)} aria-label="Cerrar"><X/></button><div className="modal-inner" onClick={e => e.stopPropagation()}><Artwork project={active}/><span className="kicker">{active.id} / {active.type} / {active.year}</span><h2>{active.name}</h2><p>{active.desc}</p><small>{active.note}</small></div></div>}
    {sent && <div className="toast" role="status">Gracias. Abre tu aplicación de correo para enviar la consulta.</div>}
  </div>;
}

createRoot(document.getElementById('root')).render(<App/>);