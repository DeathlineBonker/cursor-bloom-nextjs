import type { Metadata } from 'next'
import '../index.css'

export const metadata: Metadata = {
  title: 'Ilham Safari â Agentic AI Engineer',
  description: 'Design Â· Code Â· Craft. Portfolio of Ilham Safari, an Agentic AI Engineer who thinks through systems, designs with intention, and builds with AI.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}
