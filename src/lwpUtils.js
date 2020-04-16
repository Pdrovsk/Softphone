"use strict";

import { assign as _assign, merge as _merge } from "lodash";

export function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function assign(...args) {
  return _assign(...args);
}

export function merge(...args) {
  return _merge(...args);
}

export function randomElementId() {
  return "lwp" + Math.random().toString(36).substr(2, 9);
}

export function audioEvents() {
  return [
    "abort",
    "canplay",
    "canplaythrough",
    "durationchange",
    "emptied",
    "ended",
    "error",
    "loadeddata",
    "loadedmetadata",
    "loadstart",
    "pause",
    "play",
    "playing",
    //"progress",
    "ratechange",
    "seeked",
    "seeking",
    "stalled",
    "suspend",
    //"timeupdate",
    "volumechange",
    "waiting",
  ];
}
