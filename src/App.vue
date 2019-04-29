<template>
  <div id="app">
    <Nav />
    <Header />
    <Main />
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import Header from '@/components/Header'
import Main from '@/components/Main'

export default {
  components: {
    Nav,
    Header,
    Main
  }
}
</script>
