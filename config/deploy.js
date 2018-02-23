/* jshint node: true */
// ember deploy:activate --revision {rev#} {env}
module.exports = function(deployTarget) {
  var ENV = {
    build: {},
    "revision-data": {
      type: 'git-commit'
    }
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    ENV.pipeline = {
      activateOnDeploy: true,
      disabled: {
        allExcept: ['build', 'redis']
      }
    };

    ENV.redis = {
      revisionKey: '__development__',
      keyPrefix: 'hyspa-development:index',
      allowOverwrite: true,
      activateOnDeploy: true,
      database: 3,
    };

    ENV.slack = {
      webhookURL: process.env.SLACK_URL,
      username: process.env.SLACK_USER,
      channel: ["#code-deployments"]
    };

  }

  if (deployTarget === 'test') {
    ENV.build.environment = 'test';
    ENV.pipeline = {
      activateOnDeploy: true,
      disabled: {
        allExcept: ['build']
      }
    };

    ENV.redis = {
      revisionKey: '__development__',
      keyPrefix: 'hyspa-development:index',
      allowOverwrite: true,
      activateOnDeploy: true
    };

    ENV.slack = {
      webhookURL: process.env.SLACK_URL,
      username: process.env.SLACK_USER,
      channel: ["#code-deployments"]
    };

  }

  if (deployTarget === 'qa') {
    ENV.build.environment = 'production';

    ENV.s3 = {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      bucket: process.env.AWS_BUCKET,
      region: process.env.AWS_REGION
    };

    ENV.redis = {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      password: process.env.REDIS_PASSWORD,
      database: 5,
      keyPrefix: 'hyspa-qa:index',
      allowOverwrite: true
    };

    ENV.slack = {
      webhookURL: process.env.SLACK_URL,
      username: process.env.SLACK_USER,
      channel: ["#code-deployments"],
      didDeploy(context) {
        const self = this;
        return function(slack) {
          return slack.notify(self.getSlackDeployMessage(context));
        };
      },

      getSlackDeployMessage(context) {
        var duration = (new Date() - context.slackStartDeployDate) / 1000;
        return {
          "attachments": [
              {
                  title: "HYSPA:QA - Feature Deploy",
                  title_link: context.revisionData.revisionKey,
                  color: "#51b3be",
                  fields: [
                    { title: 'Project',      value: 'HYSPA', short: true },
                    { title: 'Environment',  value: 'QA', short: true },
                    { title: 'Branch',       value: context.revisionData.scm.branch, short: true },
                    { title: 'Commited by',  value: context.revisionData.scm.name, short: true },
                    { title: 'Revision Key', value: context.revisionData.revisionKey, short: true },
                    { title: 'Deploy Time',  value: duration + ' seconds', short: true}
                  ]
              }
          ]
        };
      }

    };
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';

    ENV.s3 = {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      bucket: process.env.AWS_BUCKET,
      region: process.env.AWS_REGION
    };

    ENV.redis = {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      password: process.env.REDIS_PASSWORD,
      database: 7,
      keyPrefix: 'hyspa-staging:index',
      allowOverwrite: true
    };

    ENV.slack = {
      webhookURL: process.env.SLACK_URL,
      username: process.env.SLACK_USER,
      channel: ["#code-deployments"],
      didDeploy(context) {
        const self = this;
        return function(slack) {
          return slack.notify(self.getSlackDeployMessage(context));
        };
      },

      getSlackDeployMessage(context) {
        var duration = (new Date() - context.slackStartDeployDate) / 1000;
        return {
          "attachments": [
              {
                  title: "HYSPA:UAT - Feature Deploy",
                  title_link: context.revisionData.revisionKey,
                  color: "#51b3be",
                  fields: [
                    { title: 'Project',      value: 'HYSPA', short: true },
                    { title: 'Environment',  value: 'UAT', short: true },
                    { title: 'Branch',       value: context.revisionData.scm.branch, short: true },
                    { title: 'Commited by',  value: context.revisionData.scm.name, short: true },
                    { title: 'Revision Key', value: context.revisionData.revisionKey, short: true },
                    { title: 'Deploy Time',  value: duration + ' seconds', short: true}
                  ]
              }
          ]
        };
      }

    };
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    ENV.s3 = {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      bucket: process.env.AWS_BUCKET,
      region: process.env.AWS_REGION
    };
    ENV.redis = {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      password: process.env.REDIS_PASSWORD,
      database: 9,
      keyPrefix: 'hyspa-production:index',
      allowOverwrite: true
      // url: 'redis://some-user:some-password@some-host.com:1234'
    };
    ENV.slack = {
      webhookURL: process.env.SLACK_URL,
      username: process.env.SLACK_USER,
      channel: ["#code-deployments"],
      didDeploy(context) {
        const self = this;
        return function(slack) {
          return slack.notify(self.getSlackDeployMessage(context));
        };
      },

      getSlackDeployMessage(context) {
        var duration = (new Date() - context.slackStartDeployDate) / 1000;
        return {
          "attachments": [
              {
                  title: "HYSPA: Production Deploy",
                  title_link: context.revisionData.revisionKey,
                  color: "#51b3be",
                  fields: [
                    { title: 'Project',      value: 'Platform', short: true },
                    { title: 'Environment',  value: 'Production', short: true },
                    { title: 'Branch',       value: context.revisionData.scm.branch, short: true },
                    { title: 'Commited by',  value: context.revisionData.scm.name, short: true },
                    { title: 'Revision Key', value: context.revisionData.revisionKey, short: true },
                    { title: 'Deploy Time',  value: duration + ' seconds', short: true}
                  ]
              }
          ]
        };
      }
    };
  }

  return ENV;
};
