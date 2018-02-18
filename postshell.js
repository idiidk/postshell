const request = require("request");
const inquirer = require("inquirer");
const colors = require("colors");
const path = require("path");
const program = require("commander");
const url = require("url");

program.
    arguments("<path> <pass>")
    .parse(process.argv);

const urlPath = program.args[0];
const pass = program.args[1];

if (!urlPath || !pass) {
    console.log("No url or password provided. Please use --help for usage information!".red);
    process.exit(1);
}

let cwd = "";
let med = url.parse(urlPath).hostname;

inquirer.registerPrompt("command", require("inquirer-command-prompt"));

function exec(command, cb) {
    request.post({ url: urlPath, form: { cmd: command, pass: pass, cwd: cwd } }, function (err, res, body) {
        if (err) {
            console.log(err.toString().red);
            process.exit(1);
        }

        if (body === "elnof") {
            console.log("Password incorrect!".red);
            process.exit(1);
        }

        try {
            if (body) {
                let json = JSON.parse(body);
                cwd = json.cwd;
                cb(json);
            } else {
                cb({})
            }
        } catch (err) {
            console.log(err.toString().red);
            cb({})
        }
    });
}

function setup() {
    exec("pwd", function (res) {
        prompt();
    });
}

function prompt() {
    inquirer.prompt([
        {
            type: "command",
            name: "cmd",
            message: "postshell@".green + med.green + ":".white + cwd.blue + " > ",
            context: 0
        }
    ]).then(answers => {
        return Promise.resolve(answers.cmd)
    }).catch(err => {
        console.error(err.stack)
    }).then(cmd => {
        if (cmd === "exit" || cmd === ":exit") {
            process.exit(0);
        }

        if (cmd === ":help") {

        } else if (cmd[0] === ":") {
            
        } else {
            exec(cmd, function (res) {
                if (res) {
                    if (res.out) {
                        console.log(res.out);
                    }
                }
                prompt();
            });
        }
    });
}

setup();