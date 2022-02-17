module.exports = () => {
  const home = {
    nomeDoProjeto: 'to-do-list-API',
    descrição: 'Projeto criado para o Blitz de Carreira da Trybe, colocando em prática os conhecimentos adquiridos em Back-end, onde crio uma API REST para cadastro/leitura um ToDo List',
    autor: 'Wander Diniz Veloso',
    repositórioDoGitHub: 'https://github.com/WanderDinizVeloso/to-do-list-API',
    rotas: {
      users: {
        create: {
          descrição: 'Responsável pela criação de contas dos usuários.',
          método: 'POST',
          rota: '/users',
        },
        remove: {
          descrição: 'Responsável pela remoção da conta do usuário.',
          método: 'DEL',
          rota: '/users',
        },
        update: {
          descrição: 'Responsável pela atualização dos dados do usuário.',
          método: 'PUT',
          rota: '/users',
        }, 
      },
      login: {
        login: {
          descrição: 'Responsável por dar acesso ao usuário',
          método: 'POST',
          rota: '/login',
        },
      },
      toDos: {
        create: {
          descrição: 'Responsável pela criação de uma tarefa',
          método: 'POST',
          rota: '/todos',
        },
        remove: {
          descrição: 'Responsável pela remoção de uma tarefa',
          método: 'DEL',
          rota: '/todos',
        },
        searchAll: {
          descrição: 'Responsável pela visualização da lista de tarefas do usuário',
          método: 'GET',
          rota: '/todos',
        },
        update: {
          descrição: 'Responsável pela atualização dos dados da tarefa.',
          método: 'PUT',
          rota: '/todos',
        }, 
      },
      home: {
        searchAll: {
          descrição: 'Responsável pela visualização das dados da API',
          método: 'GET',
          rota: '/',
        },
      },
    },
  };

  return home;
};
