<template>
  <section class="authentication">
    <div class="auth-body">
      <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
        Reset Password
      </h1>
      <form class="auth-form" @submit.prevent="submit">
        <alert-error
          v-if="form.errors.has('message')"
          :form="form"
          class="text-center"
        >
          {{ form.errors.get("message") }}
        </alert-error>
        <alert-success :form="form" class="text-center">
          You successfully changed your password.
          <p><NuxtLink :to="{ name: 'login' }">Go to Login</NuxtLink></p>
        </alert-success>
        <div class="form-group">
          <input
            type="text"
            name="email"
            readonly
            v-model="form.email"
            class="form-control form-control-lg font-14 fw-300"
            :class="{ 'is-invalid': form.errors.has('email') }"
            placeholder="Email"
          />
          <has-error :form="form" field="email"></has-error>
        </div>

        <div class="form-group">
          <input
            type="password"
            name="password"
            v-model.trim="form.password"
            class="form-control form-control-lg font-14 fw-300"
            :class="{ 'is-invalid': form.errors.has('password') }"
            placeholder="New Password"
          />
          <has-error :form="form" field="password"></has-error>
        </div>
        <div class="form-group">
          <input
            type="password"
            name="password_confirmation"
            v-model.trim="form.password_confirmation"
            class="form-control form-control-lg font-14 fw-300"
            placeholder="Confirm New Password"
          />
        </div>

        <div>
          <button
            type="submit"
            class="btn btn-primary primary-bg-color font-16 fw-500 text-uppercase"
            :disabled="form.busy"
          >
            <span v-if="form.busy">
              <i class="fas fa-spinner fa-spin"></i>
            </span>
            Reset Password
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  middleware: ["guest"],
  data() {
    return {
      form: this.$vform({
        email: "",
        password: "",
        password_confirmation: "",
        token: ""
      })
    };
  },
  methods: {
    submit() {
      this.form
        .post("/password/reset")
        .then(res => this.form.reset())
        .catch(e => console.log(e));
    }
  },
  // bu url e emaile gonderilen linkten gelinecek. url de token ve email var. sayfa olusturulurken token ve email i url den almak icin created() hook kullaniyoruz;
  created() {
    this.form.email = this.$route.query.email;
    this.form.token = this.$route.params.token;
  }
};
</script>

<style></style>
