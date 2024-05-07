const MenuSuperior = () => {
    return(
        <nav className="navbar navbar-expand-sm bg-primary navbar-dark sticky-top">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    Controle de Tarefas
                </Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-item">
                            Incluir Tarefa
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/manutencao" className="nav-item">
                            Manutenção de Tarefas
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/usuario" className="nav-item">
                            Cadastrar Usuáiro
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}