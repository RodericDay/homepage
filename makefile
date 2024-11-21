main: frontend/node_modules
	docker compose run --rm builder
	rsync -atuc frontend/dist/ home:html/

frontend/node_modules:
	docker compose run --rm builder npm install
