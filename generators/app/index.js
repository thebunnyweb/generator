'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
    prompting() {
        // Have Yeoman greet the user.
        // this.log(yosay(
        //     'Welcome to the super-excellent ' + chalk.red('generator-bunnyweb') + ' generator!'
        // ));

        const prompts = [{
            type: 'confirm',
            name: 'jqStat',
            message: 'Whould you like to add jQuery & bootstrap ?',
            default: true
        }];

        return this.prompt(prompts).then(props => {
            // To access props later use this.props.someAnswer;
            this.props = props;
        });
    }

    writing() {
        const jqStat = this.props.jqStat;
        if (jqStat) {
            this.fs.copy(
                this.templatePath('jbsource/'),
                this.destinationPath('./')
            );
        } else {
            this.fs.copy(
                this.templatePath('source/'),
                this.destinationPath('./')
            );
        }

    }

    install() {
        this.installDependencies();
    }
};
