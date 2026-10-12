pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Run JavaScript') {
            steps {
                sh 'node --version'
                sh 'node app.js'
            }
        }
    }
}
