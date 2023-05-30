declare global {
  var JSON_PATH: string | undefined;
}

export const WORKDIR = process.cwd();
export const DEFAULT_JSON_PATH = `${process.cwd()}/src/server/db/json/`;
global.JSON_PATH = `${WORKDIR}/src/server/db/json/`;
