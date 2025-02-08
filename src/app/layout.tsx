export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-w-screen min-h-screen bg-gray-800">
        <div className="mxwidth:flex bg-slate-900 min-w-screen mxwidth:max-w-[1512px] mxwidth:justify-self-center min-h-screen">{children}</div>
      </body>
    </html>
  )
}