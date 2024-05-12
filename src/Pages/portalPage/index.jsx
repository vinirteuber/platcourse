import Header from "../../components/Header";
import Carousel from "../../assets/carrossel.png";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    name: "Curso 1",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://html.com/wp-content/uploads/html-hpg-featured-new.png",
  },
  {
    id: 2,
    name: "Curso 2",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",

    image: "https://html.com/wp-content/uploads/html-hpg-featured-new.png",
  },
  {
    id: 3,
    name: "Curso 3",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",

    image: "https://html.com/wp-content/uploads/html-hpg-featured-new.png",
  },
  {
    id: 4,
    name: "Curso 4",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",

    image: "https://html.com/wp-content/uploads/html-hpg-featured-new.png",
  },
];
function PortalPage() {
  return (
    <div>
      <Header />
      <div className="carousel-image">
        <img src={Carousel} alt="imagem" />
      </div>
      <div className="card-group">
        {data.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt="" />
            <div className="info">
              <h1>{item.name}</h1>
              <p>{item.description}</p>
              <div className="btn-course">
                <Link to={`details/${item.id}`}>
                  <button>Saiba mais</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortalPage;
