import { execSync } from 'child_process';

export function getGitDir() {
  const gitDir = execSync('git rev-parse --show-toplevel', {
    encoding: 'utf-8'
  });
  return gitDir;
};

