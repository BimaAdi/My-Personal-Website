declare global {
  var JSON_PATH: string | undefined;
  var MD_PATH: string | undefined
}

export const WORKDIR = process.cwd();
export const DEFAULT_JSON_PATH = `${process.cwd()}/src/server/db/json/`;
export const DEFAULT_MD_PATH = `${process.cwd()}/src/server/db/md`;
global.JSON_PATH = `${WORKDIR}/src/server/db/json/`;
global.MD_PATH = `${WORKDIR}/src/server/db/md`;
