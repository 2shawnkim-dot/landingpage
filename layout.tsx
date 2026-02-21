export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Intentional — Dating, redesigned for commitment</title>
        <meta name="description" content="Stop swiping. Start matching based on psychological compatibility, attachment alignment, and long-term life vision." />
        <script src="https://cdn.tailwindcss.com"></script>
        <style>{`
          html { scroll-behavior: smooth; }
          body { -webkit-font-smoothing: antialiased; }
        `}</style>
      </head>
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
```

Commit.

**Step 2: Verify `app/page.tsx`**

Go to `app/page.tsx` and check that the **very first line** says:
```
"use client";
