# DebeTu


## Dependencias

- express: poner backend a la escucha en un puerto
- nodemon: reinicio automatico
- mongoose: ORM mongoDb

# Base de datos
Usamos el puerto 27018 para que no entre en conclifto con el mongo que tenemos instalado en local
```````
docker run --name mongo -d -p 27018:27017 mongo`
```````

debetu-backend.up.railway.app