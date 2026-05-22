# Pingu

**Offline-First Markdown Notes** · Single-user · Multi-device · Self-hosted

A simple, privacy-respecting markdown note-making app that works offline and syncs across your devices. Write anywhere—on Linux, Android, or Web—and keep all your data under your control.

for more info you can visit [github.com/Ravish-Ranjan/pingu](https://github.com/Ravish-Ranjan/pingu)

## Features

- ** Offline First** - Work without internet. All changes sync automatically when you're back online.
- **📱 Multi-Device** - Seamlessly sync your notes across Linux, Android, and Web platforms.
- ** You Own Your Data** - Self-host with Docker or run standalone. Your notes stay yours.
- ** Markdown Support** - Full markdown editor with live preview.
- ** Lightning Fast** - Optimized performance with local-first storage.

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Docker (optional, for self-hosting)

### Development

Clone the repository and install dependencies:

```bash
git clone https://github.com/Ravish-Ranjan/pingu.git
cd pingu
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

The app will auto-reload as you edit files.

### Build for Production

```bash
npm run build
npm start
```

### Environment Variables

Create a `.env.local` file in the project root with the following variables:

```bash
# JWT Configuration
JWT_SECRET=your-secret-key-here-minimum-32-characters

# Password Hashing (bcryptjs)
# Salt rounds for bcryptjs hashing (recommended: 10-12)
BCRYPT_SALT_ROUNDS=10
```

**Configuration Details:**

- **JWT_SECRET** - A secure random string used to sign JWT tokens. Minimum 32 characters recommended. Generate with:

    ```bash
    node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
    ```

- **BCRYPT_SALT_ROUNDS** - The cost factor for bcryptjs password hashing (default: 10). Higher values are more secure but slower. Required: 13

**For Production:**

- Use strong, randomly generated secrets
- Never commit `.env.local` to version control (it's in `.gitignore`)
- Use a secrets management service for production deployments
- Rotate secrets periodically

## Installation

### Desktop & Mobile

#### Linux

- **AppImage** (.AppImage) - Works on most Linux distributions
- **Debian Package** (.deb) - For Debian-based systems (Ubuntu, etc.)

Download from the [Releases](https://github.com/Ravish-Ranjan/pingu-app/releases) page.

#### Android

- Download the APK directly and install on your Android device (Android 8.0+)
- Google Play Store coming soon

### Docker

Self-host Pingu using Docker. Build the image locally and deploy with Docker Compose.

#### Quick Start with Docker Compose

Create a `docker-compose.yml` in your deployment directory:

```yaml
version: "3.8"
services:
    pingu:
        build:
            context: https://github.com/Ravish-Ranjan/pingu.git
            dockerfile: Dockerfile
        ports:
            - "8007:3000"
        environment:
            - NODE_ENV=production
            - JWT_SECRET=your-secret-key-here
            - BCRYPT_SALT_ROUNDS=10
        volumes:
            - pingu-data:/app/data
        restart: unless-stopped

volumes:
    pingu-data:
```

Then run:

```bash
docker-compose up -d
```

Access the app at [http://localhost:8007](http://localhost:8007)

#### Building Locally

Clone the repository and build the Docker image:

```bash
git clone https://github.com/Ravish-Ranjan/pingu.git
cd pingu
docker compose build
```

For server only

```bash
git clone https://github.com/Ravish-Ranjan/pingu.git
cd pingu/apps/server
docker compose build
```

For web only

```bash
git clone https://github.com/Ravish-Ranjan/pingu.git
cd pingu/apps/web
docker compose build
```

**Note:** You can use `docker-compose.yml` file in the project root and subfolders to build the image. See the [Docker documentation](https://docs.docker.com/get-started/) for details.

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **UI**: Tailwind CSS, shadcn/ui, Radix UI, Lucide Icons
- **Backend**: Node.js
- **Styling**: PostCSS, Tailwind CSS 4
- **Development**: ESLint, Babel React Compiler

## Project Structure

```
pingu-app/
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   ├── lib/             # Utilities and helpers
├── public/              # Static assets
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

## Development

### Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Run production build
- `npm run lint` - Run ESLint

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request on main repo [github.com/Ravish-Ranjan/pingu](https://github.com/Ravish-Ranjan/pingu)

## License

This project is licensed under the GNU GPL v2.0 License - see the LICENSE file for details.

## Privacy & Security

Pingu is designed with privacy as a core principle:

- **No tracking** - Your data and usage are never tracked
- **Self-hosted** - Deploy on your own infrastructure
- **Open source** - Audit the code yourself
- **Encrypted sync** - All data is encrypted in transit (when self-hosted)

## Support

- [Documentation](#) (Coming soon)
- [Report an Issue](https://github.com/Ravish-Ranjan/pingu/issues)
- [Discussions](https://github.com/Ravish-Ranjan/pingu/discussions)

## Acknowledgments

Built with love using Next.js, React, and Tailwind CSS.

---

**© 2024 Pingu** · Offline-first. Multi-device. Yours.
