FROM python:3.10

WORKDIR /app

COPY . .

RUN pip install --upgrade pip && \
    pip install --no-cache-dir --default-timeout=100 -r requirements.txt -i https://pypi.org/simple


CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]