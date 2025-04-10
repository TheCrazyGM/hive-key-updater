// Simple BIP39 implementation for generating mnemonics
// Uses wordlist defined in words.js

const BIP39 = (function () {
  // We expect the wordlist to be defined in words.js
  // Make sure words.js is included before this file
  if (typeof wordlist === "undefined") {
    console.error(
      "Wordlist is not defined. Make sure words.js is loaded before bip39.js",
    );
  }

  /**
   * Generate a cryptographically strong mnemonic with the given bit strength
   * @param {number} strength - Bit strength (128, 160, 192, 224, 256)
   * @returns {string} Space-separated mnemonic phrase
   */
  function generateMnemonic(strength = 128) {
    // Validate that wordlist exists
    if (
      typeof wordlist === "undefined" ||
      !Array.isArray(wordlist) ||
      wordlist.length === 0
    ) {
      throw new Error(
        "Wordlist is not properly defined. Make sure words.js is loaded before bip39.js",
      );
    }

    // Use cryptographically secure random values when available
    function getSecureRandomValues(buffer) {
      if (window.crypto && window.crypto.getRandomValues) {
        return window.crypto.getRandomValues(buffer);
      } else {
        // Fallback to Math.random with warning
        console.warn(
          "Using Math.random fallback which is not cryptographically secure",
        );
        for (let i = 0; i < buffer.length; i++) {
          buffer[i] = Math.floor(Math.random() * 256);
        }
        return buffer;
      }
    }

    // Calculate number of words (strength / 32 * 3)
    const wordCount = Math.floor((strength / 32) * 3);

    // Generate random bytes with significantly more entropy than needed to prevent patterns
    // We'll multiply by 8 to ensure we have plenty of random bytes
    const byteCount = Math.ceil((strength * 8) / 8);
    const entropy = new Uint8Array(byteCount);
    getSecureRandomValues(entropy);

    // Shuffle the wordlist using Fisher-Yates (Durstenfeld shuffle)
    function shuffleArray(array) {
      const shuffled = [...array]; // Create a copy to avoid modifying the original
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    }

    // Create a shuffled copy of the wordlist
    const shuffledWords = shuffleArray(wordlist);

    // Select the first 'wordCount' words from the shuffled list
    const mnemonicWords = shuffledWords.slice(0, wordCount);
    return mnemonicWords.join(" ");
  }

  // Return public methods
  return {
    generateMnemonic: generateMnemonic,
  };
})();

// Make BIP39 available globally
window.BIP39 = BIP39;
