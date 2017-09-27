<template>
  <div class="container">
    <nav class="navbar navbar-expand navbar-light flex-column flex-md-row">
      <router-link class="navbar-brand" to="/">히라가나</router-link>
      <div>
      <ul class="navbar-nav mr-auto">
        <router-link class="nav-item" active-class="active" to="/" tag="li" exact>
          <a class="nav-link">홈</a>
        </router-link>
        <router-link class="nav-item" active-class="active" to="/hiragana" tag="li">
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
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
