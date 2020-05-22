# Sami App

## System dependencies

- MongoDB
- Docker
- Modules listed on package.json file

## Setup

### Clone the project

`$ git clone https://github.com/diecgrillo/sami-app.git`

### Move to the directory

`$ cd sami-app`

### Create the environment variables

`$ cp .env-example .env`

### Build project

`$ docker-compose build`

### Installing dependencies

`$ docker-compose run app npm install`

## Requests

GET users
`$ curl --location --request GET 'localhost:8000/users'`

CREATE user
```
curl --location --request POST 'localhost:8000/users' \
--header 'Content-Type: application/json' \
--data-raw '{
  "cpf": "12345678912",
	"name": "Teste 1",
	"rg": "123456789",
	"birthDate": "2015-02-02",
	"healthInsurance": {
		"type": "Premium",
		"dependentsNumber": 3
	}
}'
```

UPDATE user
```
curl --location --request PATCH 'localhost:8000/users/SOME_USER_ID' \
--header 'Content-Type: application/json' \
--data-raw '{
	"name": "Teste 1 atualizado"
}'
```
DELETE user
`$ curl --location --request DELETE 'localhost:8000/users/SOME_USER_ID'`

## Development notes

Acabei aplicando o SOLID por completo apenas entre as camadas de roteamento e serviços, para demonstrar como aplicaria isso no projeto. Se eu quisesse seguir adiante poderia criar uma interface para modelos para tirar a dependencia do objetos "User" e "HealthInsurance" do mongoose e poderia também criar uma interface de repositório de maneira que aplicação fique com acoplamento baixo em relação à camada de banco de dados.
