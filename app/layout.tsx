import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YouTube Channel Authenticity Checker",
  description: "Verify if YouTube channels are actually topic-focused. Score how well channels stick to their stated niche vs random content."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e926d08f-d12d-4e62-8ca8-ed4467b062aa"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
