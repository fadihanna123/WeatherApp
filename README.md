# WeatherApp 🌤️

A modern, cross-platform weather application built with React Native and Expo. This app provides real-time weather information with a beautiful and intuitive user interface.

## Features

- Real-time weather updates
- Location-based weather information
- Cross-platform support (iOS, Android)
- Modern and responsive UI
- TypeScript for type safety

## Prerequisites

- Node.js (>=16.0.0 <=22.x.x)
- Yarn (recommended package manager)
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/fadihanna123/WeatherApp.git
cd WeatherApp
```

2. Install dependencies:

```bash
yarn setup
```

## Development

To start the development server:

```bash
# Start the development server with tunnel
yarn dev

# Start for specific platforms
yarn android  # Android
yarn ios      # iOS
yarn web      # Web
```

## Available Scripts

- `yarn setup` - Install dependencies
- `yarn dev` - Start development server with tunnel
- `yarn android` - Start Android app
- `yarn ios` - Start iOS app
- `yarn web` - Start web version
- `yarn eject` - Eject from Expo
- `yarn clear` - Clean node_modules and dist

## Tech Stack

- React Native
- Expo
- TypeScript
- React Navigation
- Axios

## Project Structure

```
WeatherApp/
├── src/           # Source code
├── .expo-shared/  # Expo shared configurations
├── .github/       # GitHub configurations
├── .vscode/       # VS Code settings
└── ...            # Configuration files
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions, please [open an issue](https://github.com/fadihanna123/WeatherApp/issues) on GitHub.
