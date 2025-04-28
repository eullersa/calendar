import StyledComponentsRegistry from "@/lib/styled-components-registry";
import { StyledComponentProvider } from "@/providers/StyledComponentProvider";
import { GlobalStyle } from "@/styles/GlobalStyles";
import { InitializeMode } from "@/providers/InitializeMode";

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
            <InitializeMode>{children}</InitializeMode>
          </StyledComponentProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
