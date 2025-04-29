import StyledComponentsRegistry from "@/lib/styled-components-registry";
import { StyledComponentProvider } from "@/providers/StyledComponentProvider";
import { GlobalStyle } from "@/styles/GlobalStyles";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { ThemeModeProvider } from "@/providers/ThemeModeProvider";
import { getUserTheme } from "@/features/theme/actions/get-user-theme";

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
              <StyledComponentProvider>
                <GlobalStyle />
                {children}
              </StyledComponentProvider>
            </ThemeModeProvider>
          </NextIntlClientProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
