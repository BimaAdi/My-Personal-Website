declare global {
  var JSON_PATH: string | undefined;
}

export const WORKDIR = process.cwd();
export const DEFAULT_JSON_PATH = `${process.cwd()}/src/db/json/`;
global.JSON_PATH = `${WORKDIR}/src/db/json/`;
