pipeline {

    agent any

    stages {

        stage('Clone') {
            steps {
                echo 'Source code already checked out from SCM'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t aniketfirke/myapp:v1 .'
            }
        }

        stage('Docker Login') {
            steps {
                sh 'docker login -u YOUR_DOCKERHUB_USERNAME -p YOUR_DOCKERHUB_PASSWORD'
            }
        }

        stage('Push Docker Image') {
            steps {
                sh 'docker push aniketfirke/myapp:v1'
            }
        }

    }
}