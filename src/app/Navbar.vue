<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Hiragana</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link class="nav-item" active-class="active" to="/" tag="li" exact>
          <a class="nav-link">Home</a>
        </router-link>
        <router-link class="nav-item" active-class="active" to="/hiragana" tag="li">
          <a class="nav-link">Hiragana</a>
        </router-link>
        <router-link class="nav-item" active-class="active" to="/pronounce" tag="li">
          <a class="nav-link">Pronounce</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>
