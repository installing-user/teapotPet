import os

from dotenv.main import load_dotenv

load_dotenv('../.env')


class Settings:
    POSTGRESQL_USER = os.getenv('POSTGRESQL_USER')
    POSTGRESQL_PASSWORD = os.getenv('POSTGRESQL_PASSWORD')
    POSTGRESQL_DATABASE = os.getenv('POSTGRESQL_DATABASE')

    DOCKER_POSTGRESQL_HOST = os.getenv('DOCKER_POSTGRESQL_HOST')
    DEFAULT_POSTGRESQL_HOST = os.getenv('DEFAULT_POSTGRESQL_HOST')

    SQLALCHEMY_POSTGRESQL_URL = f'postgresql+asyncpg://{POSTGRESQL_USER}:{POSTGRESQL_PASSWORD}' \
                                f'@{DOCKER_POSTGRESQL_HOST}/{POSTGRESQL_DATABASE}'
    ALEMBIC_POSTGRESQL_URL = f'postgresql://{POSTGRESQL_USER}:{POSTGRESQL_PASSWORD}' \
                             f'@{DEFAULT_POSTGRESQL_HOST}/{POSTGRESQL_DATABASE}'
