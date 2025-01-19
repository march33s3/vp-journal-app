export const SpeechAdapter = {
    /**
     * @param {(arg0: string) => void} callback
     */
    startRecognition(callback) {
      console.log('Starting speech recognition...');
      // Example: Integrate with Web Speech API or custom engine here
      callback('Sample transcribed text');
    },
    stopRecognition() {
      console.log('Stopping speech recognition...');
    },
  };