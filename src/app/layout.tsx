export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-w-screen min-w-screen bg-slate-900">{children}</body>
    </html>
  )
}