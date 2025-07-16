pipeline {
  agent any
  environment {
    BROWSERSTACK_USERNAME = credentials('BROWSERSTACK_USERNAME')
    BROWSERSTACK_ACCESS_KEY = credentials('BROWSERSTACK_ACCESS_KEY')
    PATH = "/usr/local/bin:/opt/homebrew/bin:$PATH"
  }
  stages {
    stage('Install dependencies') {
      steps {
        sh '''
          cd $WORKSPACE
          npm ci
        '''
      }
    }
    stage('Run Nightwatch tests on BrowserStack') {
      steps {
        sh '''
          cd $WORKSPACE
          npx nightwatch --env browserstack,osx_chrome,edge_windows
        '''
      }
    }
  }
  post {
    always {
      archiveArtifacts artifacts: 'tests_output/**/*.*', allowEmptyArchive: true
    }
  }
} 