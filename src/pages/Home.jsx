import styles from './home.module.css'


const Home = () => {
    return (
        <>
            <h1>!Bienvenidos a Librería del sur! <br />
                Un siglo de Historia y sabiduría literaria.</h1>
            <div className={styles['hero']}></div>
            <div className={styles['container']}>
                <div className={styles['content']}>
                    <h3>Sobre Nosotros</h3>
                    <p>Desde hace más de un siglo, en Librería del Sur hemos estado comprometidos con el amor por la literatura clásica.  Nuestra pasión por los libros se ha transmitido de generación en generación, y hoy en día, seguimos siendo un faro de conocimiento y cultura para lectores de todas las edades.</p>
                </div>
                <img src="./asset/libros.webp" alt="" />
            </div>
            <div className={styles['containerReverse']}>
                <div className={styles['content']}>
                    <h3>La Excelencia Literaria en Cada Página</h3>
                    <span>En Librería del Sur, creemos en la calidad por encima de todo. Cada libro en nuestro catálogo ha sido cuidadosamente seleccionado para garantizar una experiencia de lectura excepcional. Nos especializamos en:
                        <ul>
                            <li><strong>Historia:</strong> Viaja a través del tiempo y descubre eventos y figuras que han dado forma a nuestro mundo.</li>
                            <li><strong>Filosofía:</strong> Explora las ideas de los grandes filósofos y profundiza en la sabiduría atemporal.</li>
                            <li><strong>Novelas Clásicas:</strong> Sumérgete en las historias cautivadoras que han resistido la prueba del tiempo.</li>
                        </ul>
                    </span>
                </div>
                <img src="./asset/libros2.webp" alt="" />
            </div>
            <div className={styles['container']}>
                <div className={styles['content']}>
                    <h3>Nuestro Compromiso con la Tradición y la Innovación</h3>
                    <p>A pesar de nuestra larga historia, en Librería del Sur también abrazamos la innovación. Nuestra plataforma en línea te brinda un acceso fácil y conveniente a nuestra colección de tesoros literarios. Combinamos la tradición con la tecnología para llevar la literatura clásica directamente a tus manos.</p>
                </div>
                <img src="./asset/libros3.webp" alt="" />
            </div>
            <div className={styles['containerReverse']}>
                <div className={styles['content']}>
                    <h3>Descubre el Pasado, Encuentra Inspiración para el Futuro</h3>
                    <p>En Librería del Sur, te invitamos a explorar la riqueza de la historia y la filosofía, y a sumergirte en las narrativas atemporales de las novelas clásicas. Con cada libro que adquieres, te sumerges en una tradición centenaria de sabiduría y conocimiento.
                        Gracias por unirte a nosotros en este viaje literario. Te damos la bienvenida a la Librería del Sur, donde la historia y la calidad se entrelazan en cada página.</p>
                </div>
                <img src="./asset/libros4.webp" alt="" />
            </div>
        </>
    )
}

export default Home