<template>
  <v-app>
    <AppBar />
    <Main />
    <Footer />
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar/AppBar";
import Main from "@/views/Main/Main";
import Footer from "@/components/Footer/Footer";

export default {
  name: 'App',
  components: {
    AppBar,
    Main,
    Footer
  },
  data: () => ({
    //
  }),
};
</script>
