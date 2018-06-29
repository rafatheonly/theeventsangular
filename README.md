![Logo](https://image.ibb.co/i3JS8n/The_Events_MR_1.png)

# The Events – MR

O The Events – MR é um *software* gratuito, completamente codificado em **Angular** (*front-end*) que conta com alguns modulos instalados nele: [Angular CLI](https://cli.angular.io/), [Bootstrap 4](https://getbootstrap.com/), [Lightbox](http://lokeshdhakar.com/projects/lightbox2/) e outros... Embora ainda seja um projeto bastante jovem, ele oferece uma visão gigante de uma aplicação simples usando essas tecnologias e em breve o mesmo será integrado a outro projeto [API RESTful com Spring Boot](https://github.com/rafatheonly/theeventsspringboot) (*back-end*) que faz parte do funcionamento do sistema.

The Events – MR faz parte da aula 01 (atividade 01), que começou a ser desenvolvido como parte da avaliação da disciplina de Algortimos e Programação III do 3° semestre da Faculdade de Tecnologia Senac Pelotas – RS e pertence a dupla: [Michel Luz](https://github.com/mortalisnoia) e [Rafael Calearo](https://github.com/rafatheonly). O projeto conta também com a orientação do prof. [Angelo Luz](https://github.com/angelogluz) e o andamento pode ser acompanhado (visto) no repositório do **Heroku**: <https://theeventsangular.herokuapp.com/>. 

**Situação atual do projeto:** em construção 🚧.

Sinta-se livre para [clonar](#clonar) ou [baixar](#clonar) o código-fonte:

## Pré-requisitos

Tanto o [Angular CLI](https://cli.angular.io/) quanto o projeto gerado possuem dependências que requerem o [Node 8.11.1](https://nodejs.org/en/) ou superior, junto com o [NPM 5.6.0](https://www.npmjs.com/) ou superior. Aqui vale lembrar que ao instalar o Node em seu sistema operacional o mesmo já traz o NPM instalado junto. Nesse repositório não será mostrado como instalar o Node e nem o Angular CLI, fique a vontade em clicar nos *links* fornecidos anteriormente para obter a documentação dos mesmos junto aos seus *sites*. **A ideia principal é mostrar como rodar o sistema aqui hospedado!**

## Índice

* [Clonar](#clonar)
* [Instalação](#instalação)
* [Uso](#uso)
* [Documentação](#documentação)
* [Licença](#licença)

## Clonar

Para efetuar o clone do projeto usando os *links* disponíveis no repositório GitHub é preciso possuir o *software* Git instalado na sua máquina. Para saber como instalar e usar a ferramenta Git acesse o *site* do Git: <https://git-scm.com/doc>. Caso já saiba como fazer use os comandos abaixo:

**Com SSH:**

```bash
$ git clone git@github.com:rafatheonly/theeventsangular.git
```

ou 

**Com HTTPS:**

```bash
$ git clone https://github.com/rafatheonly/theeventsangular.git
```

ou você pode baixar o projeto (*download*):

**Baixar ZIP**

[Aqui](https://github.com/rafatheonly/theeventsangular/archive/master.zip)!

## Instalação

**ANTES DE INSTALAR:** leia os [pré-requisitos](#pré-requisitos).

Após o projeto ter sido [clonado/baixado](#clonar) deve-se navegar até a pasta onde o mesmo foi baixado usando o terminal do sistema operacional ou da IDE e executar o seguinte comando:

```bash
npm install
```

Com o comando acima, o sistema irá baixar as dependências necessárias para o funcionamento do projeto *web*.

## Uso

Para usar deve-se estar dentro da pasta do projeto e executar o seguinte comando usando o terminal (da IDE ou terminal nativo do sistema operacional):

```bash
ng serve
```

Se tudo ocorrer bem, aparecerá uma mensagem de sucesso contendo o seguinte endereço: `http://localhost:4200/`. No navegador de sua preferência digite esse endereço e verifique se a *homepage* se parece com essa aqui: <https://theeventsangular.herokuapp.com/>. Caso não se pareça verifique os passos anteriores do contrario quer dizer que ocorreu tudo bem.

## Documentação

A documentação com maior clareza se encontra na **[wiki](https://github.com/rafatheonly/theeventsangular/wiki)** desse repositório.

## Licença

A aplicação conta com a seguinte licença de uso: [MIT](https://opensource.org/licenses/MIT).
