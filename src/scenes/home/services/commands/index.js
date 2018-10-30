
const commands = {
  help,
  login,
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
    '  social     - links to social accounts',
    '  projects   - Side projects',
    '  experience - Professional Experience'
  ]
}

function login() {
  return ['Welcome! Type commands below or click them!'].concat(help());
}
