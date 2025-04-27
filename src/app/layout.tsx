import StyledComponentsRegistry from "@/lib/styled-components-registry";
import { StyledComponentProvider } from "@/providers/StyledComponentProvider";
import { ToggleModeProvider } from "@/providers/ToggleModeProvider";
import { GlobalStyle } from "@/styles/GlobalStyles";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body>
        <ToggleModeProvider>
          <StyledComponentsRegistry>
            <StyledComponentProvider>
              <GlobalStyle />
              {children}
            </StyledComponentProvider>
          </StyledComponentsRegistry>
        </ToggleModeProvider>
      </body>
    </html>
  );
}
