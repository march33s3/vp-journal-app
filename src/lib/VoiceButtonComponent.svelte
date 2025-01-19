<script>
  export let onStart;
  export let onStop;
  let listening = false;

  function toggleListening() {
    listening = !listening;
    if (listening) {
      onStart();
    } else {
      onStop();
    }
  }
</script>

<button on:click={toggleListening} class="voice-button">
  {listening ? '🛑' : '🎤'}
</button>