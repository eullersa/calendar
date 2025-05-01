import { StyledComponentsRegistry } from "@/lib/styled-components";
import { StyledThemeProvider } from "@/providers/StyledThemeProvider";
import { ThemeModeProvider } from "@/providers/ThemeModeProvider";
import { GlobalStyle } from "@/styles/GlobalStyles";
import { NextIntlClientProvider } from "next-intl";
import { getUserTheme } from "@/features/theme";
import { getLocale } from "next-intl/server";
import { Metadata } from "next";
import { Baloo_Bhai_2 } from "next/font/google";

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Calendar",
  description: "A simple calendar app",
};

const balooBhai2 = Baloo_Bhai_2();

export default async function RootLayout({ children }: RootLayoutProps) {
  const locale = await getLocale();
  const defaultMode = await getUserTheme();

  return (
    <html lang={locale} className={balooBhai2.className}>
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
