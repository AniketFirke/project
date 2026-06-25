pipeline {

```
agent any

stages {

    stage('Clone') {
        steps {
            echo 'Source code already checked out from SCM'
        }
    }

    stage('Build Docker Image') {
        steps {
            bat 'docker build -t aniketfirke/myapp:v1 .'
        }
    }

    stage('Docker Login') {
        steps {
            bat 'docker login -u YOUR_DOCKERHUB_USERNAME -p YOUR_DOCKERHUB_PASSWORD'
        }
    }

    stage('Push Docker Image') {
        steps {
            bat 'docker push aniketfirke/myapp:v1'
        }
    }

}
```

}
