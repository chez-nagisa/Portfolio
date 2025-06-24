import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'Nagisa - Web Developer Portfolio',
	description: 'Global web creator passionate about building clean, accessible websites. Studying at Sophia University and 42 Tokyo.',
	keywords: 'web developer, portfolio, React, Next.js, frontend developer, 42 Tokyo, Sophia University',
	authors: [{ name: 'Nagisa' }],
	viewport: 'width=device-width, initial-scale=1',
	robots: 'index, follow',
	openGraph: {
		title: 'Nagisa - Web Developer Portfolio',
		description: 'Global web creator passionate about building clean, accessible websites.',
		type: 'website',
		locale: 'en_US',
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}