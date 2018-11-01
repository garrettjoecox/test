
const commands = {
  help,
  login,
  skillset
}

export default function commandHandler(command) {
  if (command in commands) {
    return commands[command]()
  } else {
    const list = [`Command not found: ${command}`].concat(help());
    return list;
  }
}

function help() {
  return [
    '  help       - Show this',
    '  whoami     - Some personal information',
    '  skillset   - List of skills/languages/frameworks',
    '  projects   - Side projects',
    '  experience - Professional Experience'
  ]
}

function login() {
  return ['Welcome! Type commands below or click them!'].concat(help());
}

function skillset() {
  return [
    '├─┬ Javascript',
    '│ ├── <a href="http://www.2ality.com/2016/02/ecmascript-2017.html">ES2017</a>',
    '│ ├── <a href="http://gulpjs.com/">Gulp</a>',
    '│ ├── <a href="https://www.typescriptlang.org/">Typescript</a>',
    '│ ├── <a href="https://babeljs.io/">Babel</a>',
    '│ ├── <a href="http://socket.io/">Socket.io</a>',
    '│ ├── <a href="https://mochajs.org/">Mocha</a>/<a href="http://chaijs.com/">Chai</a>/<a href="http://sinonjs.org/">Sinon</a>',
    '│ ├── <a href="https://lodash.com/">Lodash</a>',
    '│ ├── <a href="http://electron.atom.io/">Electron (Minor)</a>',
    '│ ├─┬ Server Side',
    '│ │ ├── <a href="https://nodejs.org/">NodeJS</a>',
    '│ │ ├── <a href="http://expressjs.com/">Express</a>',
    '│ │ ├── <a href="http://koajs.com/">Koa</a>',
    '│ │ ├── <a href="http://sailsjs.com/">Sails</a>',
    '│ │ └── <a href="http://docs.sequelizejs.com/en/v3/">Sequelize</a>',
    '│ └─┬ Client Side',
    '│   ├── <a href="https://angularjs.org/">Angular 1.x</a>',
    '│   ├── <a href="http://aurelia.io/">Aurelia</a>',
    '│   ├── <a href="http://backbonejs.org/">Backbone</a>',
    '│   ├── <a href="https://d3js.org/">D3</a>',
    '│   ├── <a href="https://jquery.com/">jQuery</a>',
    '│   ├── <a href="https://facebook.github.io/react/">React (Minor)</a>',
    '│   └── <a href="https://vuejs.org/">VueJS (Minor)</a>',
    '├─┬ CSS',
    '│ ├── <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout">Flexbox</a>',
    '│ ├── <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout">Grid</a>',
    '│ ├── <a href="http://sass-lang.com/">Sass</a>',
    '│ └── <a href="http://lesscss.org/">Less</a>',
    '├─┬ Databases (Minor)',
    '│ ├── MySQL',
    '│ ├── PostgreSQL',
    '│ ├── MongoDB',
    '│ ├── Redis',
    '│ └── SQLite',
    '├── HTML5',
    '├── <a href="https://en.wikipedia.org/wiki/Scrum_(software_development)">Scrum</a>',
    '├── Git',
    '├── DevOps (Minor)',
    '├── <a href="https://aws.amazon.com/">AWS (Minor)</a>',
    '└── <a href="https://www.elastic.co/">ElasticSearch (Minor)</a>',
  ]
}
