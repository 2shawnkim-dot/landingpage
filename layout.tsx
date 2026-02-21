export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Intentional - Dating, redesigned for commitment</title>
        <meta name="description" content="Stop swiping. Start matching based on psychological compatibility." />
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
