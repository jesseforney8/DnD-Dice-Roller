FROM python:3.8-slim-buster

WORKDIR /app

COPY DND_website/requirements.txt .

COPY DND_website/ .

RUN pip install -r requirements.txt



CMD ["python3", "main.py"]