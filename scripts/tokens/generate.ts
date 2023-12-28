import { readFile, writeFile } from "fs";

/**
 * @todo Centralize these types with a monorepo?
 * Need shared TS types, also used in /src/tokens
 */
export type TokenGroup = {
  title: string;
  scope: string;
  tokens: Token[];
};

export type Token = {
  key: string;
  value: string;
};

export type TokenOutput = {
  filename: string;
  parsed: string;
};

export type TokenOutputExtension = "css" | "scss";

readFile(process.cwd() + "/tokens/tokens.json", "utf8", onReadFile);

/**
 * On Read file callback
 */
function onReadFile(err: NodeJS.ErrnoException | null, json: string) {
  if (err) throw err;
  const tokensOut = generateTokens(JSON.parse(json), "css");
  const variablesOut = generateTokens(JSON.parse(json), "scss");
  const variables = "variables.scss";
  const tokens = "tokens.scss";

  writeFile(
    getPathname(variables),
    variablesOut,
    onWriteComplete.bind(null, variables)
  );

  writeFile(getPathname(tokens), tokensOut, onWriteComplete.bind(null, tokens));
}

/**
 * Generate the tokens for CSS and SCSS
 */
function generateTokens(json: TokenGroup[], type: "css" | "scss") {
  return json.reduce<string>((styles, data, index) => {
    const mapper = type === "css" ? cssMap : scssMap;
    const output = data.tokens.map(mapper).join("");
    const disclaimer =
      index === 0
        ? `/**
* DO NOT DIRECTLY EDIT THIS FILE
* THIS FILE IS AUTO GENERATED
* SEE /public/tokens.json FOR SOURCE
*/\n\n`
        : "";

    styles += `${disclaimer}/**
 * ${data.title}
 */\n\n${output}\n`;
    return styles;
  }, "");
}

/**
 * Generate token output
 */
function getPathname(filename: string) {
  const outputDir = `/client/styles`;
  const srcPath = `${outputDir}/${filename}`;
  return process.cwd() + srcPath;
}

/**
 * Write file callback
 */
function onWriteComplete(filename: string, err: NodeJS.ErrnoException | null) {
  if (err) {
    console.log(`🛑 Error writing file ${filename}`, err);
  } else {
    console.log(`✅ 🙌 Successfully wrote file ${filename}`);
  }
}

/**
 * Css Variables
 */
function cssMap(rule: Token, index: number, arr: Token[]) {
  const head = index === 0 ? `:root {\n` : "";
  const tail = index === arr.length - 1 ? `}\n` : "";
  return `${head}\t--${rule.key}: #{$${rule.key}};\n${tail}`;
}

/**
 * SCSS Variables
 */
function scssMap(rule: Token) {
  return `$${rule.key}: ${rule.value};\n`;
}
