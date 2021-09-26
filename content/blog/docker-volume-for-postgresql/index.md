---
title: Docker Volume for PostgreSQL
date: "2021-09-26T20:00:00"
description: "My experience creating docker volumes for PostgreSQL"
---

### Hi there!
Welcome back, have you ever had issue like this?
```bash
docker initdb: error: directory "/var/lib/postgresql/data" exists but is not empty
```
when you try to creating docker-compose containing PostgreSQL service.
But if you haven't then you can mark this issue for reference.

This issue arises when I was adding *.gitignore* at docker volume pg-data with the project structure as follows
```
- apps/
- nginx/
-- app.conf
- pg-data/
-- .gitignore (here)
docker-compose.yml
```

Actually, the short solution is replace current volume with the new one. eg:
from ```- pg-data/``` to ```- postgres-data/```.

But I think is not cool, because you have more effort to remove and created in many times as long as that issue is exists.

Long story short, I have brilliant solution (maybe not for you. because i'm a newbie) and very simple.
You only need to remove completely ```- pg-data/``` from project structure and define pg-data volume at **docker-compose.yml** like this. 

```docker
  # Postgres
  database:
    image: postgres
    restart: unless-stopped
    tty: true
    ports:
      - 5432:5432
    environment:
      POSTGRES_PASSWORD: postgres
      POSTGRES_USER: postgres
      POSTGRES_DB: laravel
    volumes:
      - pg-data:/var/lib/postgresql/data
    networks:
      - backend

...

# Volumes
volumes:
  pg-data:
```

After that, you can try to rebuild your docker container.

### Final Project structure
```
- apps/
- nginx/
-- app.conf
docker-compose.yml
```

If you have any questions about this post, feel free to contact me on Twitter or via Email.
Thank you