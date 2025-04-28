import StyledComponentsRegistry from "@/lib/styled-components-registry";
import { StyledComponentProvider } from "@/providers/StyledComponentProvider";
import { GlobalStyle } from "@/styles/GlobalStyles";
import { InitializeMode } from "@/providers/InitializeMode";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Calendar",
  description: "A simple calendar app",
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body>
        <StyledComponentsRegistry>
          <StyledComponentProvider>
            <GlobalStyle />
            <NextIntlClientProvider>
              <InitializeMode>{children}</InitializeMode>
            </NextIntlClientProvider>
          </StyledComponentProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
