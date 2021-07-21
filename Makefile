build:
	docker-compose up -d

delete:
	docker rm  -f $$(docker ps -a | grep bugchat | rev | cut -d" " -f1 |rev)
	docker rmi $$(docker images  | grep bugchat  | cut -d" " -f1)
