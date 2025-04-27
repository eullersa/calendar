import StyledComponentsRegistry from "@/lib/styled-components-registry";
import { StyledComponentProvider } from "@/providers/StyledComponentProvider";
import { GlobalStyle } from "@/styles/GlobalStyles";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <StyledComponentProvider>
            <GlobalStyle />
            {children}
          </StyledComponentProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
