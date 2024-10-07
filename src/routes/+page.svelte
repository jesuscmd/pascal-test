<script lang="ts">
  import PascalTriangle from "../components/PascalTriangle.svelte";
  import Header from "./Header.svelte";
  import Sidebar from "./Sidebar.svelte";
  let numRows = 7;
  let isSidebarOpen = false;

  // Función para manejar el cambio de tamaño
  const changeSize = (value: number) => {
    if (value >= 1 && value <= 15) {
      numRows = value;
    }
  };

  // Función para abrir/cerrar el sidebar
  const toggleSidebar = () => {
    isSidebarOpen = !isSidebarOpen;
  };
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
    on:changeSize={(e) => changeSize(e.detail)}
    on:close={toggleSidebar}
  />

  <PascalTriangle {numRows} />
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
