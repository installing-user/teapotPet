FROM python:3.9

WORKDIR /usr/src/app

COPY requirements.txt .

RUN pip install --no-cache-dir --upgrade -r requirements.txt

COPY .. .

ENTRYPOINT ["gunicorn", "main:app"]
CMD ["-c", "gunicorn_config.py"]