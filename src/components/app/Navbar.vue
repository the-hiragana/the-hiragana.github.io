<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">히라가나</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link class="nav-item" active-class="active" to="/" tag="li" exact>
          <a class="nav-link">홈</a>
        </router-link>
        <router-link class="nav-item" active-class="active" to="/fiftycharacters" tag="li">
          <a class="nav-link">50음도</a>
        </router-link>
        <router-link class="nav-item" active-class="active" to="/pronunciations1" tag="li">
          <a class="nav-link">발음1</a>
        </router-link>
        <router-link class="nav-item" active-class="active" to="/pronunciations2" tag="li">
          <a class="nav-link">발음2</a>
        </router-link>
        <router-link class="nav-item" active-class="active" to="/greetings" tag="li">
          <a class="nav-link">인사말</a>
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
