import { StyledComponentsRegistry } from "@/lib/styled-components";
import { StyledThemeProvider } from "@/providers/StyledThemeProvider";
import { ThemeModeProvider } from "@/providers/ThemeModeProvider";
import { GlobalStyle } from "@/styles/GlobalStyles";
import { NextIntlClientProvider } from "next-intl";
import { getUserTheme } from "@/features/theme";
import { getLocale } from "next-intl/server";
import { Metadata } from "next";

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Calendar",
  description: "A simple calendar app",
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const locale = await getLocale();
  const defaultMode = await getUserTheme();

  return (
    <html lang={locale}>
      <body>
        <StyledComponentsRegistry>
          <NextIntlClientProvider>
            <ThemeModeProvider defaultMode={defaultMode}>
              <StyledThemeProvider>
                <GlobalStyle />
                {children}
              </StyledThemeProvider>
            </ThemeModeProvider>
          </NextIntlClientProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
