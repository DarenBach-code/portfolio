export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-w-screen min-h-screen bg-gray-800">
        <div className="flex justify-self-center max-w-[1512px] min-h-screen bg-slate-900">{children}</div>
      </body>
    </html>
  )
}