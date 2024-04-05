<template>
<footer class="bg-body-tertiary text-center text-lg-start">
  <div class="container p-4">
    <div class="row">
      <div class="col-lg-3 col-md-6 mb-4 mb-md-8">
        <h5 class="text-uppercase">Links</h5>

        <ul class="list-unstyled mb-0">
        <li>
       <a href="#!" class="text-body">Link 1</a>
  </li>
  <li>
    <a href="#!" class="text-body">Link 2</a>
  </li>
  <li>
    <a href="#!" class="text-body">Link 3</a>
  </li>
  <li>
    <a href="#!" class="text-body">Link 4</a>
  </li>
</ul>
      </div>
    </div>
  </div>
</footer>
</template>
<script>
export default {
  name: 'footerBar',
  props: {
    msg: String
  }
}
</script>
<style>
footer {
  background-color: black;
}
</style>