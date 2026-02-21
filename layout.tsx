export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Intentional - Dating, redesigned for commitment</title>
        <script src="https://cdn.tailwindcss.com" defer></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: `
          html { scroll-behavior: smooth; }
          body { font-family: 'Inter', -apple-system, sans-serif; -webkit-font-smoothing: antialiased; }
          .bg-gradient-hero { background: linear-gradient(180deg, #f8fafc 0%, #ffffff 40%, #f5f3ff 100%); }
          .bg-gradient-dark { background: linear-gradient(135deg, #030712 0%, #0f172a 50%, #1e1b4b 100%); }
          .text-gradient { background: linear-gradient(to right, #7c3aed, #4f46e5, #9333ea); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
          .btn-glow { background: linear-gradient(to right, #7c3aed, #4f46e5); box-shadow: 0 8px 30px rgba(124, 58, 237, 0.25); }
          .btn-glow:hover { box-shadow: 0 8px 40px rgba(124, 58, 237, 0.4); transform: translateY(-2px); }
          .card-hover { transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
          .card-hover:hover { transform: translateY(-4px); box-shadow: 0 20px 60px rgba(0,0,0,0.08); }
          .icon-box { background: #f3f0ff; color: #7c3aed; transition: all 0.3s; }
          .card-hover:hover .icon-box { background: #7c3aed; color: white; }
          .fade-in { opacity: 0; transform: translateY(24px); transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1); }
          .fade-in.visible { opacity: 1; transform: translateY(0); }
          .dot-bg { background-image: radial-gradient(circle, #6366f1 1px, transparent 1px); background-size: 32px 32px; }
          .gradient-orb { position: absolute; border-radius: 9999px; filter: blur(80px); opacity: 0.15; background: radial-gradient(circle, #a78bfa, #6366f1, transparent); pointer-events: none; }
          .nav-blur { backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); background: rgba(255,255,255,0.75); }
          .step-num { background: linear-gradient(135deg, #7c3aed, #4f46e5); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; opacity: 0.2; }
          .accent-bar-1 { background: linear-gradient(to right, #7c3aed, #4f46e5); }
          .accent-bar-2 { background: linear-gradient(to right, #4f46e5, #3b82f6); }
          .accent-bar-3 { background: linear-gradient(to right, #3b82f6, #06b6d4); }
          .feat-rose { background: linear-gradient(135deg, #f43f5e, #ec4899); }
          .feat-amber { background: linear-gradient(135deg, #f59e0b, #f97316); }
          .feat-emerald { background: linear-gradient(135deg, #10b981, #14b8a6); }
          .feat-violet { background: linear-gradient(135deg, #8b5cf6, #a855f7); }
          .star { color: #fbbf24; }
          .avatar-grad { background: linear-gradient(135deg, #a78bfa, #6366f1); }
          .pill-badge { background: #f3f0ff; border: 1px solid #e9e3ff; }
          .pill-dot { width: 6px; height: 6px; border-radius: 50%; background: #7c3aed; animation: pulse 2s infinite; }
          @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
          @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
          .logo-box { background: linear-gradient(135deg, #7c3aed, #4f46e5); }
        `}} />
      </head>
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
