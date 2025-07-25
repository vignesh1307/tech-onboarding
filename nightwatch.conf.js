// Refer to the online docs for more details:
// https://nightwatchjs.org/gettingstarted/configuration/
//

//  _   _  _         _      _                     _          _
// | \ | |(_)       | |    | |                   | |        | |
// |  \| | _   __ _ | |__  | |_ __      __  __ _ | |_   ___ | |__
// | . ` || | / _` || '_ \ | __|\ \ /\ / / / _` || __| / __|| '_ \
// | |\  || || (_| || | | || |_  \ V  V / | (_| || |_ | (__ | | | |
// \_| \_/|_| \__, ||_| |_| \__|  \_/\_/   \__,_| \__| \___||_| |_|
//             __/ |
//            |___/

module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ['test'],

  // See https://nightwatchjs.org/guide/concepts/page-object-model.html
  page_objects_path: [],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-commands.html
  custom_commands_path: [],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-assertions.html
  custom_assertions_path: [],

  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-plugins.html
  plugins: ['@nightwatch/browserstack'],
  
  '@nightwatch/browserstack': {
    test_observability: {
      enabled: true,
      user: 'vigneshshrinivas_jQAMtw' || process.env.BROWSERSTACK_USERNAME,
      key: 'QDz3zNXgxdpAFoKAFnHX' || process.env.BROWSERSTACK_ACCESS_KEY,
      projectName: "Nightwatch Demo Project",
      buildName: "Nightwatch Demo Build",
      buildTag: ["Demo", "Nightwatch"]
    }
  },
  
  // See https://nightwatchjs.org/guide/concepts/test-globals.html
  globals_path: '',
  
  webdriver: {},

  test_workers: {
    enabled: true,
    workers: 'auto'
  },

  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: 'http://localhost',

      screenshots: {
        enabled: false,
        path: 'screens',
        on_failure: true
      },

      desiredCapabilities: {
        browserName: 'chrome'
      },
      
      webdriver: {
        start_process: true,
        server_path: ''
      },
      
      test_runner: {
        type: 'cucumber',
        options: {
          feature_path: 'test/features',
        }
      }
    },
    
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          args: [
            //'--no-sandbox',
            //'--ignore-certificate-errors',
            //'--allow-insecure-localhost',
            //'--headless=new'
          ]
        }
      },

      webdriver: {
        start_process: true,
        server_path: '',
        cli_args: [
          // --verbose
        ]
      }
    },

    browserstack: {
      selenium: {
        start_process: false,
        host: 'hub-cloud.browserstack.com',
        port: 443,
      },
      desiredCapabilities: {
        'bstack:options': {
          userName: 'vigneshshrinivas_jQAMtw',
          accessKey: 'QDz3zNXgxdpAFoKAFnHX',
          os: 'Windows',
          osVersion: '10',
          buildName: 'Nightwatch Demo Build',
          sessionName: 'Nightwatch Test',
        },
        browserName: 'chrome',
        browserVersion: 'latest',
      }
    },
    osx_chrome: {
      selenium: {
        start_process: false,
        host: 'hub-cloud.browserstack.com',
        port: 443,
      },
      desiredCapabilities: {
        'bstack:options': {
          userName: 'vigneshshrinivas_jQAMtw',
          accessKey: 'QDz3zNXgxdpAFoKAFnHX',
          os: 'OS X',
          osVersion: 'Big Sur',
          buildName: 'Nightwatch Demo Build',
          sessionName: 'Nightwatch Test',
        },
        browserName: 'chrome',
        browserVersion: 'latest',
      }
    },
    edge_windows: {
      selenium: {
        start_process: false,
        host: 'hub-cloud.browserstack.com',
        port: 443,
      },
      desiredCapabilities: {
        'bstack:options': {
          userName: 'vigneshshrinivas_jQAMtw',
          accessKey: 'QDz3zNXgxdpAFoKAFnHX',
          os: 'Windows',
          osVersion: '10',
          buildName: 'Nightwatch Demo Build',
          sessionName: 'Nightwatch Test',
        },
        browserName: 'Edge',
        browserVersion: 'latest',
      }
    }
  },
  
  usage_analytics: {
    enabled: true,
    log_path: './logs/analytics',
    client_id: '4fd75559-c852-4e18-b4b3-c995c67901ca'
  }
  
};
