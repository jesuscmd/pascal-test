<script lang="ts">
  import Square from "./Square.svelte";

  export let numRows: number = 7;

  function pascalTriangle(numRows = 0): number[][] {
    let triangle: number[][] = [];

    for (let i = 0; i < numRows; i++) {
      triangle[i] = [];
      triangle[i][0] = 1;
      for (let j = 1; j < i; j++) {
        triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
      }
      triangle[i][i] = 1;
    }

    for (let i = numRows - 2; i >= 0; i--) {
      triangle.push([...triangle[i]]);
    }

    return triangle;
  }

  function interpolateColor(
    color1: [number, number, number],
    color2: [number, number, number],
    factor: number
  ): [number, number, number] {
    let result = color1.slice() as [number, number, number];
    for (let i = 0; i < 3; i++) {
      result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
    }
    return result;
  }

  function rgbToString([r, g, b]: [number, number, number]): string {
    return `rgb(${r}, ${g}, ${b})`;
  }

  function getColorForRow(
    index: number,
    numRows: number,
    colors: [number, number, number][]
  ): [number, number, number] {
    const numSegments = colors.length - 1;
    const segmentLength = numRows / numSegments;

    const segmentIndex = Math.min(
      Math.floor(index / segmentLength),
      numSegments - 1
    );
    const segmentFactor = (index % segmentLength) / segmentLength;

    return interpolateColor(
      colors[segmentIndex],
      colors[segmentIndex + 1],
      segmentFactor
    );
  }

  $: triangle = pascalTriangle(numRows);

  const colors: [number, number, number][] = [
    [235, 221, 26], // Amarillo
    [246, 144, 11], // Naranja
    [223, 7, 0], // Rojo
    [156, 11, 246], // Púrpura
    [16, 82, 198], // Azul
  ];
</script>

<div class="pascalTriangle">
  {#each triangle as row, index}
    <div class="row">
      {#each row as value}
        <Square
          {value}
          color={rgbToString(getColorForRow(index, triangle.length, colors))}
        />
      {/each}
    </div>
  {/each}
</div>

<style>
  .pascalTriangle {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem 0 2rem;
    z-index: 2;
    position: relative;
    min-height: calc(100vh - 7rem);
    justify-content: center;
    font-family: var(--font-monospace);
    overflow: scroll;
  }
  .row {
    display: flex;
    justify-content: center;
  }
</style>
