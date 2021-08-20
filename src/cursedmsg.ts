/**
 * A message from the Cursed interpreter.
 */
export interface CursedMsg {
    msg: string;
    level: MsgLevel;
    help?: string;
}

export enum MsgLevel {
    ERROR,
    WARNING,
    INFO,
}

function compilerMsg(msg: string, level: MsgLevel, help?: string): CursedMsg {
    return help === undefined
        ? {
              msg: msg,
              level: level,
          }
        : {
              msg: msg,
              level: level,
              help: help,
          };
}

export function error(msg: string, help?: string): CursedMsg {
    return compilerMsg(msg, MsgLevel.ERROR, help);
}

export function warning(msg: string, help?: string): CursedMsg {
    return compilerMsg(msg, MsgLevel.WARNING, help);
}

export function info(msg: string, help?: string): CursedMsg {
    return compilerMsg(msg, MsgLevel.INFO, help);
}
