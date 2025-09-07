# Node DevOps Microservices

This repository contains a Node.js-based backend application that is designed to work with Docker and Docker Compose. The project demonstrates how to build, dockerize, and deploy a Node.js app in a containerized environment using best practices in DevOps.

# Contact Information
For further assistance or inquiries, feel free to reach out via the following channels:

- Name: Eng Nsah Sympathy Lesi
- Phone: +237 650-661-631
- Email: nsahsympathylesi@gmail.com
- GitHub: https://github.com/Sympathylesi
- LinkedIn:https://www.linkedin.com/in/nsah-nsah-sympathy-lesi-3b30b6240

## Table of Contents

- [Overview](#overview)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Building the Docker Image](#building-the-docker-image)
- [Running the Application](#running-the-application)
- [Docker Image Link](#docker-image-link)
- [License](#license)

## Overview

The goal of this project is to demonstrate a simple Node.js application with a backend service, using Docker to package the app and Docker Compose for orchestration. The project also includes a configuration for Nginx as a reverse proxy.

## Technologies

This project utilizes the following technologies:

- **Node.js** (Version 18)
- **Docker** (for containerization)
- **Docker Compose** (for multi-container orchestration)
- **Nginx** (for reverse proxy configuration)
- **npm** (for dependency management)

## Installation

1. **Clone the repository**:
   First, clone the repository to your local machine.

   ```bash
   git clone https://github.com/Sympathylesi/node-devops-microservices.git
   cd node-devops-microservices

2. **Install Docker**:
   Ensure that Docker and Docker Compose are installed on your machine.

   - [Docker Installation](https://docs.docker.com/get-docker/)
   - [Docker Compose Installation](https://docs.docker.com/compose/install/)

   You can check if Docker is installed by running:

   ```bash
   docker --version
   docker-compose --version
   ```

3. **Build the Docker Image**:
   If you're running the Docker setup locally, use the following command to build the Docker image for the backend:

   ```bash
   docker-compose build
   ```

   This will use the Dockerfile located in the `backend` folder to build the image.

## Usage

After the Docker image has been built, you can start the application using Docker Compose.

### Running the Application with Docker Compose

1. **Start the containers**:

   ```bash
   docker-compose up
   ```

   This will build the images (if not already built) and start the containers for the backend application and the Nginx reverse proxy.

2. **Stop the containers**:

   To stop the running containers, use:

   ```bash
   docker-compose down
   ```

3. **Accessing the Application**:

   Once the application is running, you can access the Node.js backend through the Nginx reverse proxy on your browser:

   ```
   http://localhost:80
   ```

## Building the Docker Image

To build the Docker image manually for the backend, follow these steps:

1. **Navigate to the project directory**:

   ```bash
   cd node-devops-microservices
   ```

2. **Build the Docker image**:

   Run the following command to build the Docker image for the backend:

   ```bash
   docker build -t node-devops-microservices ./backend
   ```

   This command will build the image using the Dockerfile located in the `backend` folder.

## Running the Application in Docker

Once the image is built, you can run the application in a container:

1. **Start a container from the built image**:

   ```bash
   docker run -p 3000:3000 node-devops-backend
   ```

   This command will run the backend container and expose port `3000` on your host machine.

2. **Access the application**:

   Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

## Docker Image Link

You can access my image from my dockerhub repository through this link:

- **Docker Image URL**:  
  [https://hub.docker.com/r/sympathylesi/node-devops-microservices](https://hub.docker.com/r/Sympathylesi/node-devops-microservices)


   To pull the image from Docker Hub and run it, use the following commands:

   ```bash
   docker pull Sympathylesi/node-devops-microservices
   docker run -p 3000:3000 Sympathylesi/node-devops-microservices
   ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
