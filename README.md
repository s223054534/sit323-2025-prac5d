# SIT323 Task 5.2D – Dockerization & Google Cloud Deployment

## Overview

This task involved Dockerizing a simple Node.js microservice and publishing the Docker image to Google Cloud Artifact Registry. The microservice was tested locally, then tagged and pushed to a private container registry in the `australia-southeast1` region.

---

## Tech Stack

- Node.js
- Express.js
- Docker
- Google Cloud Platform (Artifact Registry)

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/s223054534/sit323-2025-prac5d.git
cd sit323-2025-prac5d/WEEK5D
```

### 2. Build the Docker Image Locally

```bash
docker build -t calculator-app .
```

### 3. Run Locally

```bash
docker run -p 3000:3000 calculator-app
```

Then visit: [http://localhost:3000](http://localhost:3000)

---

## ☁️ Pushing to Google Artifact Registry

### 1. Authenticate Docker with GCP

```bash
gcloud auth login
gcloud auth configure-docker australia-southeast1-docker.pkg.dev
```

### 2. Tag the Docker Image

```bash
docker tag calculator-app australia-southeast1-docker.pkg.dev/task5-2d-461413/sit323-repo/calculator-app
```

### 3. Push the Image

```bash
docker push australia-southeast1-docker.pkg.dev/task5-2d-461413/sit323-repo/calculator-app
```

---

## Cloud Deployment Verification

To test the image pulled from Google Cloud:

```bash
docker pull australia-southeast1-docker.pkg.dev/task5-2d-461413/sit323-repo/calculator-app
docker run -p 3000:3000 australia-southeast1-docker.pkg.dev/task5-2d-461413/sit323-repo/calculator-app
```


