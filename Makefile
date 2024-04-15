all: up

up:
		@docker compose -f docker-compose.yml up -d --build

down:
		@docker compose -f docker-compose.yml down

.PHONY: all up down