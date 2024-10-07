<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let isSidebarOpen: boolean; // Estado para abrir/cerrar sidebar
  export let numRows: number = 9; // Recibir el número inicial de filas

  const dispatch = createEventDispatcher();

  const reduceRows = () => {
    if (numRows > 1) {
      dispatch("changeSize", numRows - 1);
    }
  };

  const increaseRows = () => {
    if (numRows < 15) {
      dispatch("changeSize", numRows + 1);
    }
  };
</script>

<div class="sidebar" class:is-open={isSidebarOpen}>
  <div class="sidebar-wrapper">
    <button class="close-btn" on:click={() => dispatch("close")}>×</button>
    <div class="update-size">
      <h3 class="config-title">Change Pascal triangle size</h3>
      <div class="controls">
        <button on:click={reduceRows}>-</button>
        <span>{numRows}</span>
        <button on:click={increaseRows}>+</button>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .sidebar-wrapper {
    margin: 4rem 2rem 2rem;
  }
  .sidebar {
    position: fixed;
    top: 0;
    right: -30rem;
    width: 30rem;
    max-width: 100vw;
    height: 100vh;
    background-color: #151b23;
    color: white;
    transition: right 0.3s ease-in-out;
    z-index: 1000;
  }

  .is-open {
    right: 0;
  }

  .close-btn {
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.7);
    font-size: 2rem;
    cursor: pointer;
    position: absolute;
    top: 1rem;
    right: 1rem;
    transition: all 0.2s ease;
    &:hover {
      color: white;
    }
  }
  .config-title {
    border-bottom: 1px solid #ffffff50;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    font-weight: 400;
  }
  .controls {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    margin: 2rem 0;
  }
  span {
    margin: 0 1rem;
    font-weight: 300;
  }
  button {
    background: none;
    border: 1px solid #ffffff50;
    color: rgba(255, 255, 255, 0.7);
    font-size: 2rem;
    border-radius: 0.5rem;
    min-width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      color: white;
      border-color: white;
      transition: all 0.2s ease;
    }
  }
</style>
