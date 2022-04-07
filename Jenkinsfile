pipeline {

  agent none

  environment {
    DOCKER_IMAGE = "nambui98/react-docker"
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
    
    // if(GIT_BRANCH==~ /.*main.*/){
      // stage("build") {
      //     // when { branch 'main' }       
      //     agent { node { label 'master' } }
      //     environment {
      //       DOCKER_TAG="${GIT_BRANCH.tokenize('/').pop()}-${GIT_COMMIT.substring(0,7)}"
      //     }
      //     steps {
      //         sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} . "
      //         sh "docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_IMAGE}:latest"
      //         sh "docker image ls | grep ${DOCKER_IMAGE}"
      //         withCredentials([usernamePassword(credentialsId: 'docker-hub', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
      //             sh 'echo $DOCKER_PASSWORD | docker login --username $DOCKER_USERNAME --password-stdin'
      //             sh "docker push ${DOCKER_IMAGE}:${DOCKER_TAG}"
      //             sh "docker push ${DOCKER_IMAGE}:latest"
      //         }

      //         //clean to save disk
      //         sh "docker image rm ${DOCKER_IMAGE}:${DOCKER_TAG}"
      //         sh "docker image rm ${DOCKER_IMAGE}:latest"
      //     }
      // }
      stage("deploy"){
        // when { branch 'main' }  
        agent { node { label 'master' } }
        steps {
          // withCredentials([usernamePassword(credentialsId: 'sshpass', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
            sh "chmod +x sshscript.sh"
            sh './sshscript.sh'
            sh "ls"
            // sh "git config --global user.name 'nambui98'"
            sh "cd src"
            sh "yarn install"
            // sh "cd profile_v2"
            sh "yarn run build"
            sh "cp -r build/* /var/www/html"
          // }
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