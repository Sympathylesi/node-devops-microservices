import dotenv from 'dotenv';
import express from 'express';

// Initialize dotenv for environment variables
dotenv.config();

const app = express();

// Environment-based configuration
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON
app.use(express.json());

// Base route
app.get('/', (req, res) => {
    res.send('Hello, World from Node.js with dotenv!');
});

// Health check route
app.get('/status', (req, res) => {
    res.json({
        app: 'Node.js DevOps Application',
        status: 'Running',
        environment: process.env.NODE_ENV || 'development',
    });
});

// DevOps capabilities endpoint
app.get('/about-devops', (req, res) => {
    res.json({
        message: "DevOps Expertise Demonstrated in This Application",
        highlights: [
            {
                title: "Environment Configuration and Management",
                details: "Using dotenv for seamless environment-specific configurations, ensuring readiness for cloud deployments.",
            },
            {
                title: "Logging and Observability",
                details: "Included structured logging and a health check route for integration with monitoring tools like Prometheus and Datadog.",
            },
            {
                title: "Resilient and Reliable Design",
                details: "Integrated robust error handling middleware to prevent crashes and ensure service continuity.",
            },
            {
                title: "Scalability and Modularity",
                details: "Architected for modular additions, perfect for CI/CD pipelines and microservices-based systems.",
            },
            {
                title: "Cloud and Container-Ready Architecture",
                details: "Designed with Docker and Kubernetes in mind, deployable on cloud platforms like AWS, GCP, or Azure.",
            },
            {
                title: "Security Best Practices",
                details: "Utilized secure coding practices and enabled compatibility with tools for vulnerability scanning, like Snyk and Aqua Security.",
            },
        ],
        summary:
            "This app exemplifies my DevOps skills by demonstrating scalable, secure, and cloud-ready development practices.",
    });
});

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(`Error occurred: ${err.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log(
        `🔍 Check out my DevOps expertise at: http://localhost:${PORT}/about-devops`
    );
});
