FROM postgres:16.0-alpine3.18

COPY ./g-retro-backup.sql /docker-entrypoint-initdb.d/g-retro-backup.sql

ENTRYPOINT ["docker-entrypoint.sh"]

EXPOSE 5432

CMD ["postgres"]