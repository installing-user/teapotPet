from fastapi import FastAPI

app = FastAPI(
    title="Teapot Pet"
)


@app.get("/")
def hello_world():
    return "Hello, world!"
