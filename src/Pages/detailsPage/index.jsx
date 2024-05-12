import Dropdown from "../../components/Dropdown";
import Header from "../../components/Header";

function DetailsPage() {
  return (
    <>
      <Header/>
      <div className="course-grid">
        <iframe width="1280" height="720" src="https://www.youtube.com/embed/l-oWTFAv-i4?list=PLj7gJIFoP7jckyH78IjAcJEoX9A_K2JxV" title="Curso de HTML 5 - Meu primeiro Hello World em HTML (Aula 01)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <div className="line"></div>
        <Dropdown/>
      </div>
    </>
  );
}

export default DetailsPage;
