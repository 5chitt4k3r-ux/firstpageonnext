import { notFound } from 'next/navigation';
import styles from '../page-content.module.css';

type Props = {
    params: Promise<{ slug: string }>;
};

const Centro = () => (
    <div>
        <h1 className={styles.title}>El Centro</h1>
        <div className={styles.content}>
            <p>Bienvenido a la sección del IES Cura Valera.</p>
            <p>Aquí encontrarás información sobre nuestra historia, organización y valores.</p>
        </div>
    </div>
);

const OfertaEducativa = () => (
    <div>
        <h1 className={styles.title}>Oferta Educativa</h1>
        <div className={styles.content}>
            <p>Contamos con una amplia oferta educativa:</p>
            <ul>
                <li>Educación Secundaria Obligatoria (ESO)</li>
                <li>Bachillerato (Ciencias y Humanidades)</li>
                <li>Ciclos Formativos</li>
            </ul>
        </div>
    </div>
);

const Contacto = () => (
    <div>
        <h1 className={styles.title}>Contacto</h1>
        <div className={styles.content}>
            <p>Ponte en contacto con nosotros.</p>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
                <input type="text" placeholder="Nombre" style={{ padding: '0.5rem' }} />
                <input type="email" placeholder="Email" style={{ padding: '0.5rem' }} />
                <textarea placeholder="Mensaje" rows={4} style={{ padding: '0.5rem' }}></textarea>
                <button type="button" style={{ padding: '0.5rem', background: '#004d99', color: 'white', border: 'none', cursor: 'pointer' }}>Enviar</button>
            </form>
        </div>
    </div>
);

const contentMap: Record<string, React.ComponentType> = {
    'centro': Centro,
    'historia': Centro, 
    'oferta-educativa': OfertaEducativa,
    'eso': OfertaEducativa, 
    'contacto': Contacto,
};

export default async function Page({ params }: Props) {
    const { slug } = await params;

    const Component = contentMap[slug];

    if (!Component) {
        notFound();
    }

    return (
        <div className={styles.pageContainer}>
            <Component />
        </div>
    );
}
