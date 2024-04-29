FROM python:3.8-slim-buster

WORKDIR /app

COPY DnD_website/requirements.txt .

COPY DnD_website/ .

RUN pip install -r requirements.txt



CMD ["python3", "main.py"]
