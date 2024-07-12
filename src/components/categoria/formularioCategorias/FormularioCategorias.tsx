import { ChangeEvent, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Categoria from '../../../models/Categoria';
import { atualizar, buscar, cadastrar } from '../../../service/Service';
import { toastAlerts } from '../../../util/toastAlerts';

function FormularioCategorias() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  async function buscarCategorias(id: string) {
    await buscar(`/categorias/${id}`, setCategoria);
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarCategorias(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
    console.log(JSON.stringify(categoria));
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      if (id !== undefined) {
        await atualizar(`/categorias`, categoria, setCategoria);
        toastAlerts('Categoria atualizada com sucesso', 'sucesso');
      } else {
        await cadastrar(`/categorias`, categoria, setCategoria);
        toastAlerts('Categoria cadastrada com sucesso', 'sucesso');
      }
      retornar();
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerts('O token expirou, favor logar novamente', 'info');
      } else {
        toastAlerts('Erro ao processar a categoria', 'erro');
      }
    }
  }

  function retornar() {
    navigate('/categorias');
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? 'Cadastre uma nova categoria' : 'Editar categoria'}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome da Categoria</label>
          <input
            type="text"
            placeholder="Categoria"
            name="nome"
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.nome || ''}
            onChange={atualizarEstado}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição da Categoria</label>
          <input
            type="text"
            placeholder="Descrição"
            name="descricao"
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.descricao || ''}
            onChange={atualizarEstado}
          />
        </div>
        <button
          className="rounded text-slate-100 bg-sky-700 hover:bg-sky-950 w-1/2 py-2 mx-auto block"
          type="submit"
        >
          {id === undefined ? 'Cadastrar' : 'Editar'}
        </button>
      </form>
    </div>
  );
}

export default FormularioCategorias;
