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
          We have sent you an email. Please check your email to reset your
          password.
        </alert-success>
        <div class="form-group">
          <input
            type="text"
            name="email"
            v-model="form.email"
            class="form-control form-control-lg font-14 fw-300"
            :class="{ 'is-invalid': form.errors.has('email') }"
            placeholder="Enter your email to get reset password link"
          />
          <has-error :form="form" field="email"></has-error>
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
            Send Reset Password Link
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
        email: ""
      })
    };
  },
  methods: {
    submit() {
      this.form
        .post("/password/email")
        .then(res => this.form.reset())
        .catch(e => console.log(e));
    }
  }
};
</script>

<style></style>
