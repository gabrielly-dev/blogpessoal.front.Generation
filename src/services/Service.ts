import axios from "axios";

const api = axios.create({
    baseURL: 'https://blog-pessoal-generation-pnkr.onrender.com'
})

// sempre que for até o back end utilizar o async, url: string se está na barra de endereço é uma string
export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}