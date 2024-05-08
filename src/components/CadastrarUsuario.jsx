import {useForm} from "react-hook-form"
import {api} from "../config_axios"
import {useState} from "react"

const Cadastra_Usuario = () => {
    const {register, handleSubmit, reset} = useForm()
    const [mensagem, setMensagem] = useState("")
    const salvar = async(campos) => {
        try{ //Try captura erros e trata eles através do Catch
            //api.post = localhost:8080/usuarios
            const resposta = await api.post("/usuarios", campos)
            setMensagem("Usuário cadastrado com sucesso!")
            reset()
        }catch(error){
            console.log("Houve um erro ao cadastrar usuário.", error);
        }
    }
}


return (
    <div className= "container-fluid bg-dark text-light min-vh-100 d-flex align-items-center">
        <div className="container p-5 bg-light text-dark rounded">
            <h4 className="fst-italic mb-3">Cadastrar Usuário</h4>
            <form onSubmit={handleSubmit(salvar)}>
                <div className = "form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" required autoFocus 
                    {...register("username")} />
                </div>
                {/* Início do segundo campo */}
                <div className = "form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" required autoFocus 
                    {...register("email")} />
                </div>
                {/* Campo senha */}
                <div className = "form-group">
                    <label htmlFor="senha">Senha</label>
                    <input type="password" className="form-control" id="senha" required autoFocus 
                    {...register("senha")} />
                </div>
            </form>
        </div>
    </div>
)