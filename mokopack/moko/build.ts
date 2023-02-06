import {buildFile} from './file-build.ts';
export default async function build({
  path, layers
}): Promise<string>{
  buildFile(path)
}