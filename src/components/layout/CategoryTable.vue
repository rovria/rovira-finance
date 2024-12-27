<template>
  <div class="CategoryTable">
    <a href="" class="row">
      <div class="column-1">
        <h1 class="Title" style="margin-left: 1rem;">01</h1>
      </div>
      <div class="column-2">
        <h1 class="Title">Students</h1>
      </div>
      <div class="column-3">
            <svg viewBox="0 0 14 16" class="Arrow" style="margin-right: 1rem;" xmlns="http://www.w3.org/2000/svg">
<path d="M13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289L7.34315 0.928933C6.95262 0.538408 6.31946 0.538408 5.92893 0.928933C5.53841 1.31946 5.53841 1.95262 5.92893 2.34315L11.5858 8L5.92893 13.6569C5.53841 14.0474 5.53841 14.6805 5.92893 15.0711C6.31946 15.4616 6.95262 15.4616 7.34315 15.0711L13.7071 8.70711ZM-6.72483e-08 9L13 9L13 7L6.72483e-08 7L-6.72483e-08 9Z" fill="white"/>
</svg>
      </div>

      <div class="row-bg"></div>
    </a>

    <a href="" class="row">
      <div class="column-1">
        <h1 class="Title" style="margin-left: 1rem;">02</h1>
      </div>
      <div class="column-2">
        <h1 class="Title">Newcomers</h1>
      </div>
      <div class="column-3">
            <svg viewBox="0 0 14 16" class="Arrow" style="margin-right: 1rem;" xmlns="http://www.w3.org/2000/svg">
<path d="M13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289L7.34315 0.928933C6.95262 0.538408 6.31946 0.538408 5.92893 0.928933C5.53841 1.31946 5.53841 1.95262 5.92893 2.34315L11.5858 8L5.92893 13.6569C5.53841 14.0474 5.53841 14.6805 5.92893 15.0711C6.31946 15.4616 6.95262 15.4616 7.34315 15.0711L13.7071 8.70711ZM-6.72483e-08 9L13 9L13 7L6.72483e-08 7L-6.72483e-08 9Z" fill="white"/>
</svg>
      </div>

      <div class="row-bg"></div>
    </a>

    <a href="" class="row">
      <div class="column-1">
        <h1 class="Title" style="margin-left: 1rem;">03</h1>
      </div>
      <div class="column-2">
        <h1 class="Title">Graduates</h1>
      </div>
      <div class="column-3">
            <svg viewBox="0 0 14 16" class="Arrow" style="margin-right: 1rem;" xmlns="http://www.w3.org/2000/svg">
<path d="M13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289L7.34315 0.928933C6.95262 0.538408 6.31946 0.538408 5.92893 0.928933C5.53841 1.31946 5.53841 1.95262 5.92893 2.34315L11.5858 8L5.92893 13.6569C5.53841 14.0474 5.53841 14.6805 5.92893 15.0711C6.31946 15.4616 6.95262 15.4616 7.34315 15.0711L13.7071 8.70711ZM-6.72483e-08 9L13 9L13 7L6.72483e-08 7L-6.72483e-08 9Z" fill="white"/>
</svg>
      </div>

      <div class="row-bg"></div>
    </a>

    <a href="" class="row">
      <div class="column-1">
        <h1 class="Title" style="margin-left: 1rem;">04</h1>
      </div>
      <div class="column-2">
        <h1 class="Title">Partners</h1>
      </div>
      <div class="column-3">
            <svg viewBox="0 0 14 16" class="Arrow" style="margin-right: 1rem;" xmlns="http://www.w3.org/2000/svg">
<path d="M13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289L7.34315 0.928933C6.95262 0.538408 6.31946 0.538408 5.92893 0.928933C5.53841 1.31946 5.53841 1.95262 5.92893 2.34315L11.5858 8L5.92893 13.6569C5.53841 14.0474 5.53841 14.6805 5.92893 15.0711C6.31946 15.4616 6.95262 15.4616 7.34315 15.0711L13.7071 8.70711ZM-6.72483e-08 9L13 9L13 7L6.72483e-08 7L-6.72483e-08 9Z" fill="white"/>
</svg>
      </div>

      <div class="row-bg"></div>
    </a>

  </div>
</template>
<script>

export default {
  name: 'CategoryTable',
  components: {
  },
};
</script>
<style lang="scss" scoped>
.CategoryTable {
  width: 100%;
  border-top: 1px solid #c0c0c0;
  position: relative;
}
.row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: start;
    align-items: center;
    border-bottom: 1px solid #c0c0c0;
    padding-top: 3rem;
    padding-bottom: 3rem; 
    overflow: hidden;
    position: relative;

  }
.column-3 {
  justify-self: end;
}
.Title {
  color: #001044;
  font-size: 96px;
  font-style: normal;
  font-weight: 400;
  line-height: 70px; /* 72.917% */
  transition: 1s ease;
  cursor: pointer;
}
.Arrow {
    width: 40px !important; /* Set desired size */
    height: 40px !important; /* Set desired size */
    transition: fill 0.5s ease;
    path {
        fill: #001044;
    }
}
.row-bg {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 0;
    background-color: #001044;
    transition: height 0.5s ease;
    z-index: -1;
}
.row:hover {
    color: white;
    cursor: pointer;

    .Title {
        color: white;
    }
    .Arrow path {
        fill: white;
    }
}
.row:hover .row-bg {
  height: 100%; /* Animate only the hovered row's background */
}

</style>
