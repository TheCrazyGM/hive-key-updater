# Hive Account Key Updater

A web-based tool for updating Hive blockchain account keys securely. This application is the web equivalent of the Python script `update_password.py`, providing a user-friendly interface for generating and updating Hive account keys with enhanced security measures.

## Features

- Generate secure BIP39 mnemonic passphrases
- Preview new keys before updating
- Direct owner key authentication for account updates
- Enforced key download requirement before updating
- Clear confirmation process with explicit approve/cancel options
- Multiple validation layers to ensure key security
- Download keys as JSON file for backup
- Responsive, modern UI built with Bootstrap 5

## How to Use

1. Open `index.html` in a web browser
2. Enter your Hive account name and owner private key
3. Generate a new secure passphrase
4. Preview the new keys that will be created
5. **Download your keys** for safekeeping (required before proceeding)
6. Confirm and update your account keys

## Dependencies

All dependencies are loaded from CDNs:

- **Bootstrap 5**: UI framework
- **DHive**: JavaScript library for Hive blockchain communication
- **Custom BIP39 Implementation**: For generating secure mnemonic passphrases

## Security Features

- **Enforced key download requirement**: System strictly requires users to download their keys before allowing updates
- **Explicit confirmation**: Simple dialog with Cancel and Confirm buttons for clear user intent
- **Multiple validation layers**: Thorough validation ensures the owner key is valid and matches the account
- **Improved error handling**: All errors are clearly displayed with specific messages
- **Visual feedback**: Clear indicators showing processing state and confirmation status
- **Client-side processing**: All processing happens in your browser - no data is sent to external servers
- **Owner key requirement**: Owner key (highest permission level) is required for updating account keys

## Browser Compatibility

Works in all modern browsers:

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Local Usage

This is a client-side only application. You can run it locally by simply opening the `index.html` file in your web browser, or by using a simple web server.

Example using Python's built-in HTTP server:

```bash
python -m http.server
```

Then navigate to `http://localhost:8000` in your browser.
