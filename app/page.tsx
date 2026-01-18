import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero / Banner */}
      <section className={styles.hero}>

      </section>

      {/* Main Content Grid */}
      <div className={styles.grid}>
        {/* News Section */}
        <section className={styles.newsSection}>
          <h2>Últimas Noticias</h2>

          <article className={styles.newsCard}>
            <h3>Nueva aula ATECA en el IES Cura Valera</h3>
            <p>Un Aula ATECA (Aula de Tecnología Aplicada) es un espacio innovador en la Formación Profesional (FP) española....</p>
          </article>

          <article className={styles.newsCard}>
            <h3>Taller de prevencion contra el acoso y ciberacoso</h3>
            <p>Ayer, miércoles 15 de enero, se llevó a cabo en el IES Cura Valera un taller formativo....</p>
          </article>
          <article className={styles.newsCard}>
            <h3>Feliz Navidad</h3>
            <p>CEl IES Cura Valera les desa una Feliz Navidad y próspero año nuevo 2026.</p>
          </article>
        </section>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <h2>Biblioteca Web</h2>
          <div className={styles.sidebarBox}>
            <img src="/BiblioWeb-768x186.png" alt="BiblioWeb" className={styles.sidebarImage} />
          </div>
          <div className={styles.sidebarBox}>
            <img src="/blogBiblioteca-1-768x345.jpeg" alt="Blog Biblioteca" className={styles.sidebarImage} />
          </div>
          <div className={styles.sidebarBox}>
            <img src="/ipasen.jpg" alt="iPasen" className={styles.sidebarImage} />
          </div>
          <div className={styles.sidebarBox}>
            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className={styles.sidebarVideo}
            ></iframe>
          </div>
        </aside>
      </div>
    </div>
  );
}
