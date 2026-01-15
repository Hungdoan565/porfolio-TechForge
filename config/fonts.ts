// SF Pro Display System Font Stack
// Apple không cho phép embed SF Pro trực tiếp, nên dùng system font stack
// Sẽ hiển thị SF Pro trên macOS/iOS, Segoe UI trên Windows, Roboto trên Android

export const fontSans = {
  variable: "--font-sans",
  style: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"SF Pro Display"',
      '"SF Pro Text"',
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
    ].join(", "),
  },
};

export const fontMono = {
  variable: "--font-mono",
  style: {
    fontFamily: [
      '"SF Mono"',
      '"Fira Code"',
      '"Fira Mono"',
      "Menlo",
      "Monaco",
      "Consolas",
      '"Liberation Mono"',
      '"Courier New"',
      "monospace",
    ].join(", "),
  },
};
