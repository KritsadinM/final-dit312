pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
                sh 'ls -la'
            }
        }

        stage('Build Docker Images') {
            steps {
                echo "🛠 Building docker images..."
                sh 'docker compose build --no-cache'
            }
        }

        stage('Deploy Containers') {
            steps {
                echo "🚀 Deploying services..."

                sh 'docker rm -f $(docker ps -aq --filter publish=4000) || true'

                sh 'docker rm -f dit312final_db || true'
                sh 'docker rm -f dit312final_api || true'
                sh 'docker rm -f dit312final_backend || true'
                sh 'docker rm -f dit312final_frontend || true'

                sh 'docker network prune -f || true'
                sh 'docker volume rm dit312-final_dit312final_mysql_data || true'

                sh 'docker compose down -v || true'
                sh 'docker compose up -d --build'
            }
        }

        stage('Health Check') {
            steps {
                echo "Checking API..."
                script {
                    sleep 25
                    def status = sh(
                        script: "curl -s -o /dev/null -w '%{http_code}' http://10.0.2.15:4000/movies",
                        returnStdout: true
                    ).trim()

                    if (status != '200') {
                        error("API health check failed: ${status}")
                    }
                }
            }
        }
    }

    post {
        success { echo "🎉 SUCCESS Deploy!" }
        failure { echo "❌ Deploy Failed" }
    }
}
