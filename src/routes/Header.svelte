<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import logo from "$lib/images/logo.svg";
  import gear from "$lib/images/gear.svg?raw";
  import github from "$lib/images/github.svg?raw";
  import netlify from "$lib/images/netlify.svg?raw";

  const dispatch = createEventDispatcher();

  const handleToggleSidebar = () => {
    dispatch("toggleSidebar");
  };
</script>

<header>
  <div class="brand">
    <img src={logo} alt="Pascal Triangle" />
    <h1>Pascal triangle</h1>
  </div>
  <div class="corner">
    <a href="https://github.com/jesuscmd/pascal-test" target="_blank">
      {@html gear}
    </a>
    <a href="https://github.com/jesuscmd/pascal-test" target="_blank">
      {@html netlify}
    </a>
    <a on:click={handleToggleSidebar}>
      {@html github}
    </a>
  </div>
</header>

<style lang="scss">
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    z-index: 3;
    position: fixed;
    width: calc(100vw - 4rem);
    font-family: var(--font-monospace);
  }

  .brand {
    display: flex;
    align-items: center;
    text-transform: uppercase;
  }

  img {
    height: 2rem;
    margin-right: 1em;
  }

  .corner {
    display: flex;
    a {
      margin-left: 1rem;
      width: 2em;
      height: 2em;
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgba(255, 255, 255, 0.7);
      transition: color 0.2s ease;
      &:hover {
        color: var(--color-theme-1);
      }
    }
  }
</style>
