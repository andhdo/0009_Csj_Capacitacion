cd ~/.apps/c_nuvu.Apps/01_Proyectos/0009_Csj_Capacitacion/01-Docker/p02-backfront/back
docker build -t andhdo/p02-back:latest .
docker run -it --rm -d -p 8092:80 --name p02-back-1 andhdo/p02-back:latest
docker ps
goto localhost:8092
goto http://localhost:8092/items/10




# OTher steps, local

pip install fastapi uvicorn
uvicorn main:app --reload
goto http://127.0.0.1:8000
goto http://127.0.0.1:8000/docs

