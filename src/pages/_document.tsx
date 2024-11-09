import { Html, Head, Main, NextScript } from "next/document";
import { Theme } from "@radix-ui/themes";

export default function Document() {
  return (
    <Html lang="en">
      <Theme>
        <Head />
        <body className="antialiased">
          <Main />
          <NextScript />
        </body>
      </Theme>
    </Html>
  );
}
