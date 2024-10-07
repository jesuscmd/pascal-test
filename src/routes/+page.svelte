<script lang="ts">
  import PascalTriangle from "../components/PascalTriangle.svelte";
  import Header from "./Header.svelte";
  import Sidebar from "./Sidebar.svelte";
  let numRows = 7;
  let isSidebarOpen = false;
  let colors: [number, number, number][] = [
    [235, 221, 26], // Amarillo
    [246, 144, 11], // Naranja
    [223, 7, 0], // Rojo
    [156, 11, 246], // Púrpura
    [16, 82, 198], // Azul
  ];

  const changeSize = (value: number) => {
    if (value >= 1 && value <= 15) {
      numRows = value;
    }
  };

  const toggleSidebar = () => {
    isSidebarOpen = !isSidebarOpen;
  };

  function handleColorSetSelected(event) {
    colors = event.detail; // Actualiza los colores cuando se selecciona un nuevo set
  }
</script>

<svelte:head>
  <title>Pascal Triangle</title>
  <meta name="description" content="Technical test" />
</svelte:head>

<section>
  <div class="bg"></div>
  <Header on:toggleSidebar={toggleSidebar} />

  <Sidebar
    {isSidebarOpen}
    {numRows}
    on:colorSetSelected={handleColorSetSelected}
    on:changeSize={(e) => changeSize(e.detail)}
    on:close={toggleSidebar}
  />

  <PascalTriangle {numRows} {colors} />
</section>

<style>
  .bg {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
      132deg,
      rgb(0, 0, 0) 11.2%,
      rgb(16, 37, 60) 51.2%,
      rgb(36, 45, 57) 98.6%
    );
    background-size: 2000% 100%;
    animation: backgoundGradien 60s ease infinite;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;
  }
  @keyframes backgoundGradien {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
</style>
