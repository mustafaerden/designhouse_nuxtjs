<template>
  <div>
    <div class="user-account-setting">
      <div class="container">
        <div class="row">
          <!-- LEFT -->
          <div class="col-sm-3" id="myScrollspy">
            <div class="list-group">
              <NuxtLink
                v-for="link in links"
                :key="link.route"
                :to="{ name: link.route }"
                class="list-group-item list-group-item-action"
                >{{ link.title }}</NuxtLink
              >
            </div>
          </div>

          <!-- RIGHT -->
          <NuxtChild />
          <!-- END RIGHT -->
        </div>
      </div>
      <!-- END CONTAINER -->
    </div>
  </div>
</template>

<script>
export default {
  middleware: ["auth"],
  data() {
    return {
      links: [
        {
          title: "Dashboard",
          route: "user-settings"
        },
        {
          title: "Profile",
          route: "user-settings-profile"
        },
        {
          title: "Designs",
          route: "user-settings-designs"
        }
      ]
    };
  }
};
</script>

<style></style>
