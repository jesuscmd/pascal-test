<script lang="ts">
  export let value: number;
  export let color: string;
</script>

<span class="square" style="color: {color};">{value}</span>

<style>
  .square {
    display: inline-flex;
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
    @media (max-width: 768px) {
      & {
        min-height: 1.5rem;
        min-width: 1.5rem;
        font-size: 100%;
        margin: var(--space-sm);
        padding: var(--space-sm);
      }
    }
  }
</style>
