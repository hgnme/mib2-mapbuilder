import { promisify } from 'util';
import { execSync } from 'child_process';

enum displaySize {
  mib2,
  kombi
}
enum colourStyle {
  day,
  night
}
function getGitDir() {
  const gitDir = execSync('git rev-parse --show-toplevel', {
    encoding: 'utf-8'
  });
  return gitDir;
};
export {
  displaySize, colourStyle, getGitDir
}

