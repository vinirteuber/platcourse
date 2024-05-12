function Dropdown() {
    return(
      <div className="container">
        <h1>Etapas:</h1>
        <ul>
            <div className="bar">
            <li className="progress-bar"></li>
            <span className="percent-number">0%</span>

            </div>
        </ul>
        <ul className="list-course">
            <li className="list-class">Aula 1</li>
            <li className="list-class">Aula 2</li>
            <li className="list-class">Aula 3</li>
            <li className="list-class">Aula 4</li>
            <li className="list-class">Aula 5</li>
        </ul>
      </div>
    )
}

export default Dropdown