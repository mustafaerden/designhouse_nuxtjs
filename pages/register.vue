<template>
  <section class="authentication">
    <div class="auth-body">
      <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
        Register
      </h1>
      <form class="auth-form" @submit.prevent="submit">
        <alert-success :form="form" class="text-center"
          >We have sent you an email to activate your account.</alert-success
        >

        <div class="form-group">
          <input
            type="text"
            name="name"
            v-model.trim="form.name"
            class="form-control form-control-lg font-14 fw-300"
            :class="{ 'is-invalid': form.errors.has('name') }"
            placeholder="Full Name"
          />
          <has-error :form="form" field="name"></has-error>
        </div>
        <div class="form-group">
          <input
            type="text"
            name="username"
            v-model.trim="form.username"
            class="form-control form-control-lg font-14 fw-300"
            :class="{ 'is-invalid': form.errors.has('username') }"
            placeholder="Username"
          />
          <has-error :form="form" field="username"></has-error>
        </div>
        <div class="form-group">
          <input
            type="text"
            name="email"
            v-model.trim="form.email"
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
            placeholder="Password"
          />
          <has-error :form="form" field="password"></has-error>
        </div>
        <div class="form-group">
          <input
            type="password"
            name="password_confirmation"
            v-model.trim="form.password_confirmation"
            class="form-control form-control-lg font-14 fw-300"
            placeholder="Confirm Password"
          />
        </div>

        <div class="text-right">
          <BaseButton
            :loading="form.busy"
            :block="false"
            type="primary"
            addClasses="primary-bg-color font-16 fw-500 text-uppercase"
            >Register</BaseButton
          >
        </div>
        <p class="font-14 fw-400 text-center mt-4">
          Already have an account?
          <NuxtLink class="color-blue" :to="{ name: 'login' }"> Login</NuxtLink>
        </p>
      </form>
    </div>
  </section>
</template>

<script>
import BaseButton from "@/components/buttons/BaseButton";
export default {
  middleware: ["guest"],
  components: {
    BaseButton
  },
  data() {
    return {
      form: this.$vform({
        username: "",
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      })
    };
  },
  methods: {
    submit() {
      this.form
        .post("/register")
        .then(res => {
          this.form.reset();
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style></style>
