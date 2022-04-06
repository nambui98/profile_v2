pipeline {

  agent none

  environment {
    DOCKER_IMAGE = "nambui98/react-docker"
    GIT_BRANCH="main"
    RELEASE_NOTES = sh(script: """git log --format="medium" -1 ${GIT_COMMIT}""", returnStdout:true)
  }

  stages {
    // stage("Test") {
    //   agent {
    //       docker {
    //         image 'node:lts-bullseye-slim' 
    //         args '-u root -v /tmp:/root/.cache' 
    //       }
    //   }
    //   steps {
    //     sh "npm install"
    //   }
    // }

    stage("build") {
      environment {
        DOCKER_TAG="${GIT_BRANCH.tokenize('/').pop()}-${RELEASE_NOTES.substring(0,7)}"
      }
      steps {
        sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} . "
        sh "docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_IMAGE}:latest"
        sh "docker image ls | grep ${DOCKER_IMAGE}"
        withCredentials([usernamePassword(credentialsId: 'docker-hub', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
            sh 'echo $DOCKER_PASSWORD | docker login --username $DOCKER_USERNAME --password-stdin'
            sh "docker push ${DOCKER_IMAGE}:${DOCKER_TAG}"
            sh "docker push ${DOCKER_IMAGE}:latest"
        }

        //clean to save disk
        sh "docker image rm ${DOCKER_IMAGE}:${DOCKER_TAG}"
        sh "docker image rm ${DOCKER_IMAGE}:latest"
      }
    }
  }

  post {
    success {
      echo "SUCCESSFUL"
    }
    failure {
      echo "FAILED"
    }
  }
}