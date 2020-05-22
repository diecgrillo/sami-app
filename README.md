# Sami App

## System dependencies

- MongoDB
- Docker
- Modules listed on package.json file

## Setup

### Clone the project

`$ git clone git@github.com:`

### Move to the directory

`$ cd sami-app`

### Create the environment variables

`$ cp .env-example .env`

### Build project

`$ docker-compose build`

### Installing dependencies

`$ docker-compose run app npm install`

## Requests

## Development notes

Acabei aplicando o SOLID por completo apenas entre as camadas de roteamento e serviços, para demonstrar como aplicaria isso no projeto. Se eu quisesse seguir adiante poderia criar uma interface para modelos para tirar a dependencia do objetos "User" e "HealthInsurance" do mongoose e poderia também criar uma interface de repositório de maneira que aplicação fique com acoplamento baixo em relação à camada de banco de dados.
