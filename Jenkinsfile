pipeline {
  agent {
    kubernetes {
      label "front-psjr"
      defaultContainer "node"
      yaml """
apiVersion: v1
kind: Pod
spec:
  containers:
  - name: node
    image: node:14.15.0-alpine
    tty: true
    imagePullPolicy: IfNotPresent
    resources:
      limits:
        cpu: "1"
        memory: "8Gi"
      requests:
        cpu: "1"
        memory: "4Gi"
"""
    }
  }
  stages {
    stage("Checkout repo") {
      steps {
        checkout(scm)
      }
    }
    stage("Install dependencies") {
      steps {
        sh "yarn install --immutable --immutable-cache"
      }
    }
    stage("Analyze code") {
      parallel {
        stage('lint:types') {
          steps {
            sh "yarn lint:types"
          }
        }
        stage('lint:code') {
          steps {
            sh "yarn lint:code"
          }
        }
        stage('lint:styles') {
          steps {
            sh "yarn lint:styles"
          }
        }
      }
    }
    stage("Build artifact") {
      steps {
        container('docker') {
          script {
            withDockerRegistry([credentialsId: 'docker-hub']) {
              def dockerImage = docker.build("aviasales/psjr-front", "--build-arg BRANCH=${env.BRANCH_NAME} -f Dockerfile .")
              dockerImage.push("${env.BRANCH_NAME}-${env.BUILD_NUMBER}")
            }
          }
        }
      }
    }
  }
}