import { inRange } from "./utils";

const KEY_CODES = {
  ENTER_KEY: 13,
  ESCAPE: 27,
  SPACE: 32,
  BACKSPACE: 8,
  DELETE: 46,
  ARROW_UP: 38,
  ARROW_DOWN: 40,
  ARROW_LEFT: 37,
  ARROW_RIGHT: 39,
  NUM_LETTER_START: 48,
  NUM_LETTER_END: 111,
  SEMI_COLON: 186,
  EQUAL_SIGN: 187,
  COMMA: 188,
  DASH: 189,
  PERIOD: 190,
  FORWARD_SLASH: 191,
  OPEN_BRACKET: 219,
  BACK_SLASH: 220,
  CLOSE_BRAKET: 221,
  SINGLE_QUOTE: 222,
  TAB: 9,
  isOpenKeyCode: (keyCode: number) => {
    const OPEN_KEYS = [
      KEY_CODES.ENTER_KEY,
      KEY_CODES.ARROW_UP,
      KEY_CODES.ARROW_DOWN,
      KEY_CODES.ARROW_LEFT,
      KEY_CODES.ARROW_RIGHT,
      KEY_CODES.SEMI_COLON,
      KEY_CODES.EQUAL_SIGN,
      KEY_CODES.COMMA,
      KEY_CODES.DASH,
      KEY_CODES.PERIOD,
      KEY_CODES.FORWARD_SLASH,
      KEY_CODES.OPEN_BRACKET,
      KEY_CODES.BACK_SLASH,
      KEY_CODES.CLOSE_BRAKET,
      KEY_CODES.SINGLE_QUOTE,
      KEY_CODES.SPACE,
    ];

    // if you type letters, numbers, or openKeys then it is an open key code
    return (
      inRange(keyCode, KEY_CODES.NUM_LETTER_START, KEY_CODES.NUM_LETTER_END) ||
      OPEN_KEYS.includes(keyCode)
    );
  },
};

export default KEY_CODES;
