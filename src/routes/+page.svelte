<script>
  import VoiceButtonComponent from '../lib/VoiceButtonComponent.svelte';
  import { StorageAdapter } from '../lib/adapters/StorageAdapter.js';
  let entries = StorageAdapter.getEntries();
</script>

<style>
  .voice-button {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #f9a825;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
</style>

<div class="p-4">
  <h1 class="text-2xl font-bold mb-4">My Journal</h1>
  <ul>
    {#each entries as entry}
      <li class="p-2 border-b">{entry.title} - {entry.date}</li>
    {/each}
  </ul>
</div>

<!-- Floating voice button using component -->
<VoiceButtonComponent onStart={() => console.log('Listening started')} onStop={() => console.log('Listening stopped')} />