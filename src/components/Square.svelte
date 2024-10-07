<script lang="ts">
  export let value: number;
  export let color: string;
</script>

<span class="square" style="color: {color};">{value}</span>

<style>
  .square {
    display: inline-flex;
    padding: var(--space);
    margin: var(--space);
    padding: var(--space);
    border: 2px solid #fff;
    font-size: var(--font-size);
    min-height: 2.5rem;
    min-width: 2.5rem;
    justify-content: center;
    align-items: center;
    border-radius: var(--space);
    border-color: inherit;
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
</style>
