import StyledComponentsRegistry from "@/lib/styled-components-registry";
import { StyledComponentProvider } from "@/providers/StyledComponentProvider";
import { GlobalStyle } from "@/styles/GlobalStyles";
import { InitializeMode } from "@/providers/InitializeMode";
import { Metadata } from "next";

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Calendar",
  description: "A simple calendar app",
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
