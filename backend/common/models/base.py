from sqlalchemy import MetaData
from typing import AsyncIterator
from sqlalchemy.orm import declarative_base, sessionmaker
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from settings import Settings

naming_convention = {
    "ix": "ix__%(table_name)s__%(all_column_names)s",
    "uq": "uq__%(table_name)s__%(all_column_names)s",
    "ck": "ck__%(table_name)s__%(constraint_name)s",
    "fk": "fk__%(table_name)s__%(all_column_names)s__%(referred_table_name)s",
    "pk": "pk__%(table_name)s",
}

engine = create_async_engine(
    Settings.SQLALCHEMY_POSTGRESQL_URL,
    future=True,
    echo=True
)

metadata = MetaData(naming_convention=naming_convention)

Base = declarative_base(metadata=metadata)


def session_factory(expire_on_commit: bool = True) -> AsyncSession:
    return sessionmaker(
        bind=engine,
        class_=AsyncSession,
        expire_on_commit=expire_on_commit
)()


async def get_session() -> AsyncIterator[AsyncSession]:
    session = session_factory()
    try:
        yield session
        await session.commit()
    except BaseException:
        await session.rollback()
        raise
    finally:
        await session.close()
