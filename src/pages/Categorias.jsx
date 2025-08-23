import Tarjeta from "../components/Tarjeta";
import "./Categorias.css";

const Categorias = () => {
  const libros = [
    {
      id: 1,
      titulo: "La isla del tesoro",
      autor: "Robert Louis Stevenson",
      precio: "10,99",
      imagen:
        "https://ia600100.us.archive.org/view_archive.php?archive=/5/items/l_covers_0012/l_covers_0012_33.zip&file=0012339830-L.jpg",
    },
    {
      id: 2,
      titulo: "Veinte mil leguas de viaje submarino",
      autor: "Julio Verne",
      precio: "10,99",
      imagen:
        "https://ia600505.us.archive.org/view_archive.php?archive=/35/items/l_covers_0014/l_covers_0014_28.zip&file=0014285215-L.jpg",
    },
    {
      id: 3,
      titulo: "La vuelta al mundo en ochenta días",
      autor: "Julio Verne",
      precio: "10,99",
      imagen:
        "https://ia801909.us.archive.org/view_archive.php?archive=/31/items/l_covers_0013/l_covers_0013_73.zip&file=0013732715-L.jpg",
    },
    {
      id: 4,
      titulo: "Robinson Crusoe",
      autor: "Daniel Defoe",
      precio: "10,99",
      imagen:
        "https://ia800106.us.archive.org/view_archive.php?archive=/14/items/olcovers526/olcovers526-L.zip&file=5263474-L.jpg",
    },
    {
      id: 5,
      titulo: "Moby Dick",
      autor: "Herman Melville",
      precio: "10,99",
      imagen:
        "https://ia800508.us.archive.org/view_archive.php?archive=/25/items/olcovers335/olcovers335-L.zip&file=3350964-L.jpg",
    },
    {
      id: 6,
      titulo: "Las aventuras de Tom Sawyer",
      autor: "Mark Twain",
      precio: "10,99",
      imagen:
        "https://ia801909.us.archive.org/view_archive.php?archive=/31/items/l_covers_0013/l_covers_0013_92.zip&file=0013924271-L.jpg",
    },
    {
      id: 7,
      titulo: "Corazón de las tinieblas",
      autor: "Joseph Conrad",
      precio: "10,99",
      imagen:
        "https://ia801007.us.archive.org/view_archive.php?archive=/13/items/olcovers105/olcovers105-L.zip&file=1055910-L.jpg",
    },
    {
      id: 8,
      titulo: "El hobbit",
      autor: "J. R. R. Tolkien",
      precio: "10,99",
      imagen: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
    },
    {
      id: 9,
      titulo: "El conde de Montecristo",
      autor: "Alexandre Dumas",
      precio: "10,99",
      imagen:
        "https://ia800100.us.archive.org/view_archive.php?archive=/5/items/l_covers_0012/l_covers_0012_04.zip&file=0012048366-L.jpg",
    },
    {
      id: 10,
      titulo: "Los tres mosqueteros",
      autor: "Alexandre Dumas",
      precio: "10,99",
      imagen:
        "https://ia800505.us.archive.org/view_archive.php?archive=/35/items/l_covers_0014/l_covers_0014_56.zip&file=0014564943-L.jpg",
    },
  ];

  const categorias = [
    "Aventura",
    "Acción",
    "Romance",
    "Suspenso",
    "Terror",
    "Infantil",
    "Ficción",
    "Misterio",
    "Autoayuda",
    "Novela",
  ];

  return (
    <div className="categorias">
      <div className="container">
        <h1 className="title">Categorías</h1>

        {/* Filtros */}
        <div className="categorias-filtros">
          {categorias.map((cat) => (
            <button key={cat} className={cat === "Aventura" ? "active" : ""}>{/*Simular que se ha seleccionado una categoría*/}
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de libros */}
        <div className="categorias-grid">
          {libros.map((libro) => (
            <Tarjeta
              key={libro.id}
              titulo={libro.titulo}
              autor={libro.autor}
              precio={libro.precio}
              imagen={libro.imagen}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categorias;
