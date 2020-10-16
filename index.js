import { Cliente } from "./Cliente.js";
import {Diretor} from "./Funcionarios/Diretor.js";
import {Gerente} from "./Funcionarios/Gerente.js";
import { SistemaAutentificacao } from "./SistemaAutentificacao.js";

const diretor = new Diretor("Rodrigo", 10000, "12345678900");
const gerente = new Gerente("Ricardo", 5000, "12345678901");
const cliente = new Cliente("Lais", 78945612379, "456");
diretor.cadastrarSenha("123456");
gerente.cadastrarSenha("123");

const diretorEstaLogado = SistemaAutentificacao.login(diretor, "123456");
const gerenteEstaLogado = SistemaAutentificacao.login(gerente, "123");
const clienteEstaLogado = SistemaAutentificacao.login(cliente, "456");


console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);