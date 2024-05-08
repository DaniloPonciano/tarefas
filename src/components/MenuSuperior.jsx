import { Link } from "react-router-dom";

const MenuSuperior = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark sticky-top">
      <div className="container">
        <Link to="/" className="navbar-brand">Controle de Tarefas</Link>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">Incluir Tarefa</Link>
          </li>
          
          <li className="nav-item">
            <Link to="/manutencao" className="nav-link">Manutenção de Tarefas</Link>
          </li>
          <li className="nav-item">
            <Link to="/user" className="nav-link">Cadastrar Usuário</Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default MenuSuperior;