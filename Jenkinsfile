pipeline {
    agent  {
        docker {
            image 'node:16.15.0'
        } 
    }
    stages {
        stage('test'){
            steps {
                sh 'echo "test"'
            }
        }
        stage('build'){
            steps {
                sh 'echo "build"'
            }
        }
        stage('push'){
            steps {
                sh 'echo "push"'
            }
        }
        stage('deploy'){
            steps {
                sh 'echo "deploy"'
            }
        }
    }
}
