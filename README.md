<h1>Proceso de selección Ingeniero en Desarrollo Cloud</h1>
<h2>Challenge de desarrollo de aplicación en React con backend en NodeJS, Base de datos SQL </h2>
<h3> Fabián Malfer Mix </h3>

El presente proyecto es creado por mí, Fabián Malfer, para postular al cargo de Ingeniero en Desarrollo Cloud en TCIT.


## Versiones de React, NodeJS y NPM utilizadas en este proyecto
1. React: v.18.3.1
2. NodeJS: v16.0.
3. npm: 7.10.0

---

## Levantamiento de ambiente de Desarrollo

1. Clona el repositorio en tu máquina local:
   ```bash
   git clone <URL_DEL_REPOSITORIO>

2. Clona el repositorio
    ```bash
    cd <RUTA_LOCAL>
    # Se debe quedar 1 nivel sobre las carpetas backend y 
    
3. Crear archivo .env dentro de la carpeta backend con el siguiente contenido:
    ```bash
    PGUSER=<USUARIO_DE_POSTGRES> #Suele ser "postgres" por default
    PGPASSWORD=<CONTRASEÑA_DE_USUARIO>
    PGHOST=localhost #Mandatorio, se correrá de forma local
    PGPORT=5432 #Mandatorio
    PGDATABASE=postsdb #Mandatorio
    PORT=3001 #Mandatorio
    DATABASE_URL=postgres://<USUARIO_DE_POSTGRES>:<CONTRASEÑA_DE_USUARIO>@localhost:5432/postsdb

4. Crear archivo .env dentro de la carpeta  con el siguiente contenido:
    ```bash
    REACT_APP_API_URL=http://localhost:3001/api/posts #Mandatorio

5. Estando en la carpeta raíz, instalar las dependencias corriendo el siguiente comando en la terminal:
    ```bash
    npm run install:all

6. Estando en la carpeta raíz, levantar el ambiente corriendo el siguiente comando en la terminal:
    ```bash
    npm start


El frontend estará disponible en el port 3000 y el backend en el port 3001

<h3>IMPORTANTE</h3>

1. Por alcance de nombres, sería bueno que no exista previamente en su PostreSQL una BD de nombre "postsdb", de lo contrario el proceso podría conflictuar con su estructura.

2. El levantamiento del frontend se puede demorar un poco, pero hay que tener paciencia c:



Para probar los endpoints de fetch, create y delete en Postman, se pueden utilizar los siguiente curl
1. Petición GET (leer los posts):
    ```bash
        curl --location 'http://localhost:3001/api/posts'

2. Peticion DELETE (eliminar post):
    ```bash
        curl --location --request DELETE 'http://localhost:3001/api/posts/<POST_ID>'
        #El POST_ID es un int

3. Peticion POST (crear post):
    ```bash
        curl --location 'http://localhost:3001/api/posts' \
        --header 'Content-Type: application/json' \
        --data '{
        "id": <POST_ID>,
        "name": <POST_NAME>, #str
        "description": <POST_DESCRIPTION> #str
}



Saludos y buen día!

