import { Download, Smartphone, Server, HardDrive, Zap } from "lucide-react";
import Image from "next/image";

export default function Home() {
	return (
		<div className="min-h-screen bg-background text-foreground">
			{/* Navigation */}
			<nav className="border-b border-border backdrop-blur-sm sticky top-0 z-50 bg-background/80">
				<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
					<div className="flex items-center gap-2">
						<Image
							src="/file.png"
							alt="logo"
							width={32}
							height={32}
						/>
						<span className="text-2xl font-bold">Pingu</span>
					</div>
					<a
						href="#downloads"
						className="text-muted-foreground hover:text-foreground transition"
					>
						Downloads
					</a>
				</div>
			</nav>

			{/* Hero Section */}
			<section className="max-w-6xl mx-auto px-6 py-20 text-center">
				<h1 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-primary to-primary/80 bg-clip-text text-transparent">
					Pingu
				</h1>
				<p className="text-2xl md:text-3xl text-muted-foreground mb-4">
					Offline-First Markdown Notes
				</p>
				<p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
					A single-user, offline-first, multi-device markdown
					note-making app. Write anywhere, sync everywhere, stay in
					control.
				</p>

				{/* Features */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
					<div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition">
						<Zap className="w-8 h-8 text-accent mx-auto mb-4" />
						<h3 className="font-semibold mb-2">Offline First</h3>
						<p className="text-muted-foreground text-sm">
							Work without internet. All changes sync when
							you&quote;re back online.
						</p>
					</div>
					<div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition">
						<Smartphone className="w-8 h-8 text-primary mx-auto mb-4" />
						<h3 className="font-semibold mb-2">Multi-Device</h3>
						<p className="text-muted-foreground text-sm">
							Seamlessly sync your notes across Linux, Android,
							and Web.
						</p>
					</div>
					<div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition">
						<HardDrive className="w-8 h-8 text-secondary mx-auto mb-4" />
						<h3 className="font-semibold mb-2">
							You Own Your Data
						</h3>
						<p className="text-muted-foreground text-sm">
							Self-host with Docker or run standalone. Your data
							stays yours.
						</p>
					</div>
				</div>
			</section>

			{/* Downloads Section */}
			<section id="downloads" className="max-w-6xl mx-auto px-6 py-20">
				<h2 className="text-4xl font-bold mb-16 text-center">
					Get Started
				</h2>

				{/* Desktop Apps */}
				<div className="mb-16">
					<h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
						<Smartphone className="w-6 h-6 text-primary" />
						Desktop & Mobile
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* Linux */}
						<div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition">
							<h4 className="text-xl font-semibold mb-4 text-primary">
								Linux
							</h4>
							<p className="text-muted-foreground mb-6">
								Available in multiple formats for easy
								installation on any Linux distribution.
							</p>
							<div className="space-y-3">
								<a
									href="https://github.com/Ravish-Ranjan/pingu-app/releases/tag/0.1.0-alpha-appimage"
									className="flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition w-full justify-center"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Download className="w-5 h-5" />
									AppImage (.AppImage)
								</a>
								<a
									href="https://github.com/Ravish-Ranjan/pingu-app/releases/tag/0.1.0-alpha-deb"
									className="flex items-center gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-3 rounded-lg font-medium transition w-full justify-center"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Download className="w-5 h-5" />
									Debian Package (.deb)
								</a>
							</div>
							<p className="text-sm text-muted-foreground mt-4 text-center">
								Latest version · x86_64 & ARM64
							</p>
						</div>

						<div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition">
							<h4 className="text-xl font-semibold mb-4 text-primary">
								Android
							</h4>
							<p className="text-muted-foreground mb-6">
								Install directly on your Android phone for
								note-taking on the go.
							</p>
							<div className="space-y-3">
								<a
									href="https://github.com/Ravish-Ranjan/pingu-app/releases/tag/0.1.0-alpha-apk"
									className="flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition w-full justify-center"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Download className="w-5 h-5" />
									APK Download
								</a>
								<p className="text-sm text-muted-foreground text-center">
									Android 8.0+ · Direct install via APK
								</p>
							</div>
							<p className="text-sm text-muted-foreground mt-4 text-center">
								Google Play Store coming soon
							</p>
						</div>
					</div>
				</div>

				{/* Self-Hosting */}
				<div>
					<h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
						<Server className="w-6 h-6 text-secondary" />
						Self-Hosting
					</h3>
					<p className="text-muted-foreground mb-8">
						Deploy Pingu on your own server using Docker. Clone the repository and use Docker Compose to get started.
					</p>
					<div className="bg-card border border-border rounded-lg p-6">
						<h4 className="text-lg font-semibold text-primary mb-4">
							Quick Start with Docker
						</h4>
						<p className="text-muted-foreground mb-4">
							Clone the repository, create a <code className="bg-muted px-2 py-1 rounded text-sm">docker-compose.yml</code>, and deploy:
						</p>
						<pre className="bg-muted px-4 py-3 rounded overflow-x-auto text-sm text-primary font-mono mb-4">
							{`git clone https://github.com/Ravish-Ranjan/pingu-app.git
cd pingu-app
docker-compose up -d`}
						</pre>
						<p className="text-muted-foreground text-sm">
							See the <a href="https://github.com/Ravish-Ranjan/pingu-app#docker" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Docker section in README</a> for detailed configuration.
						</p>
					</div>
				</div>
			</section>

			{/* Documentation & Links */}
			<section className="max-w-6xl mx-auto px-6 py-20 border-t border-border">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
					<div>
						<h4 className="font-semibold mb-3">Documentation</h4>
						<ul className="space-y-2 text-muted-foreground">
							<li>
								<a
									href="#"
									className="hover:text-primary transition"
								>
									Getting Started
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-primary transition"
								>
									Installation Guide
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-primary transition"
								>
									Self-Hosting
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="font-semibold mb-3">Community</h4>
						<ul className="space-y-2 text-muted-foreground">
							<li>
								<a
									href="#"
									className="hover:text-primary transition"
								>
									GitHub
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-primary transition"
								>
									Issues & Discussions
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-primary transition"
								>
									Contributing
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="font-semibold mb-3">About</h4>
						<ul className="space-y-2 text-muted-foreground">
							<li>
								<a
									href="#"
									className="hover:text-primary transition"
								>
									License
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-primary transition"
								>
									Privacy Policy
								</a>
							</li>
							<li>
								<a
									href="#"
									className="hover:text-primary transition"
								>
									Changelog
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Footer */}
				<div className="border-t border-border pt-8 text-center text-muted-foreground">
					<p>© 2024 Pingu. Offline-first. Multi-device. Yours.</p>
				</div>
			</section>
		</div>
	);
}
