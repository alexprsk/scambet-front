# ScamBet Front

ScamBet Front is a parody/fun sports betting web application built with modern JavaScript frameworks. The project serves as a playful platform for learning coding, UI/UX, and integrating betting logic. **This is not a real betting platform and should be used for educational and entertainment purposes only!**

## Features

- 🏟️ Browse upcoming and pre-live sports events (soccer, basketball, tennis, etc.)
- 📝 Select markets, place parody bets, and track your open bets
- 💸 Betslip management: stake entry, bet submission, and open bet details
- 🧑‍💻 User authentication and session management
- 🎨 Modern responsive UI with a dark theme
- 🤡 Fake sponsors, payment methods, and playful branding

## Getting Started

### Prerequisites

- Node.js and npm installed
- [Vite](https://vitejs.dev/) (bundler used for development)
- Docker (optional, for containerized deployment)

### Installation (Development)

1. Clone the repository:

   ```bash
   git clone https://github.com/alexprsk/scambet-front.git
   cd scambet-front
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the Vite development server:

   ```bash
   npm run dev
   ```

4. Open your browser at [http://localhost:5173](http://localhost:5173)

### Running with Docker

You can also run the project using Docker for a consistent environment.

First you need to build the static files, since Docker will use the dist folder to serve static content from nginx
```bash
run npm build
```

```bash
docker build -t scambet-front .
docker run -p 5173:5173 scambet-front
```

*(Make sure your `Dockerfile` runs Vite in development or preview mode, and exposes the correct port.)*

## Project Structure

- `/src/components` — UI components, including Betslip, Footer, NavBar, etc.
- `/src/routes` — Main pages such as UpcomingPage and PrelivePage
- `/src/hooks` — Custom React hooks for fetching data and managing state
- `/public` — Static files and assets

## Technologies Used

- React
- Vite
- Redux
- Tailwind CSS
- JavaScript (ES6+)

## Disclaimer

2025 ScamBet Ltd. This is a fun project created to learn coding.
**21+ | Don't Gamble irresponsibly | Gambling Helpline: 2109237777**

## License

MIT

---

*ScamBet is not affiliated with any real betting or payment companies. All company names, sponsors, and payment methods are fictitious and for educational fun only.*
