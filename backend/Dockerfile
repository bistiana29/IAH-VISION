FROM python:3.11-slim

WORKDIR /app

# Copy semua file
COPY requirements.txt /app/
COPY backend/app /app
COPY data /app/data
COPY .env /app/.env

RUN python -m pip install -r requirements.txt

# Jalankan script input data saat container mulai
CMD ["python", "db/input_to_database.py"]