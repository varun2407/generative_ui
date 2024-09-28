"use client";
import { CopilotKit } from "@copilotkit/react-core";
// import "@copilotkit/react-textarea/styles.css";
// import "@copilotkit/react-ui/styles.css";
import { Inter } from "next/font/google";
import "./globals.css";
import { CopilotSidebar,  } from "@copilotkit/react-ui";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CopilotKit url="/api/copilotkit/openai/">
          <CopilotSidebar defaultOpen>{children}</CopilotSidebar>
        </CopilotKit>
      </body>
    </html>
  );
}