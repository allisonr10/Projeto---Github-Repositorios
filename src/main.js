class App {
  //construtor
  constructor() {
    //lista de repositorios
    this.repositorios = [];
    //formularios
    this.formulario = document.querySelector('form');
    //recuperar lista
    this.lista = document.querySelector('.list-group');

    //método para registrar os eventos do formularios
    this.registrarEventos();
  }

  registrarEventos() {
    this.formulario.onsubmit = (evento) => this.adicionarRepositorio(evento);
  }
  adicionarRepositorio(evento) {
    //Evita que o formulário recarregue a página
    evento.preventDefault();

    //adicionar o repositorios na lista
    this.repositorios.push({
      nome: 'Allison',
      descricao: 'Estudante',
      avatar_url: 'https://google.com.br',
    });

    //renderizar tela
    this.renderizarTela();
  }

  //renderizar tela
  renderizarTela() {
    //limpar conteudo lista
    this.lista.innerHTML = '';

    //percorrer toda a lista de repositorios e criar os elementos
    this.repositorios.forEach((repositorio) => {
      // criar a li, e setar suas classes
      let li = document.createElement('li');
      li.setAttribute('class', 'list-group-item list-group-item-action');

      //criar a img e colocar suas configurações
      let img = document.createElement('img');
      img.setAttribute('src', repositorio.avatar_url);
      //adicionando a img como filho da lista
      li.appendChild(img);

      //strong - nome do repositorio
      let strong = document.createElement('strong');
      //criar o texto que ficará no nome de cada repositorio
      let txtStrong = document.createTextNode(repositorio.nome);
      //adicionar o texto como filho de strong
      strong.appendChild(txtStrong);
      //adicionar strong como filho da lista
      li.appendChild(strong);

      //criar paragrafo - descrição do repositorio
      let p = document.createElement('p');
      //criar o texto da descrição que ficará no parágrafo
      let txtDescricao = document.createTextNode(repositorio.descricao);
      //adicionando o texto como filho do paragrafo
      p.appendChild(txtDescricao);
      //adicionando paragrafo como filho do li
      li.appendChild(p);

      //criar o link
      let a = document.createElement('a');
      a.setAttribute('target', 'black');
      a.setAttribute('href', repositorio.link);
      let txtA = document.createTextNode('Acessar');

      //texto como filho do link
      a.appendChild(txtA);
      //link como filho de li
      li.appendChild(a);

      //adicionar li como filho da ul
      this.lista.appendChild(li);

      //limpar conteudo input
      this.formulario.querySelector('input[id=repositorio]').value = '';

      //adiciona foco no input
      this.formulario.querySelector('input[id=repositorio]').focus();
    });
  }
}

new App();
