<template>
  <section class="authentication">
    <div class="auth-body">
      <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
        Login
      </h1>
      <form class="auth-form" @submit.prevent="submit">
        <alert-error
          v-if="form.errors.has('message')"
          :form="form"
          class="text-center"
        >
          {{ form.errors.get("message") }}
          <NuxtLink :to="{ name: 'verification-resend' }"
            >Resend verification email</NuxtLink
          >
        </alert-error>
        <div class="form-group">
          <BaseInput
            v-model="form.email"
            name="email"
            placeholder="Email"
            :form="form"
            field="email"
          />
        </div>
        <div class="form-group">
          <BaseInput
            v-model="form.password"
            name="password"
            placeholder="Password"
            :form="form"
            field="password"
            inputType="password"
          />
        </div>
        <div class="mt-4 mb-4 clearfix">
          <NuxtLink
            class="forgot-pass color-blue font-14 fw-400"
            :to="{ name: 'password-reset-email' }"
          >
            Forgot password?
          </NuxtLink>
        </div>
        <div class="text-right">
          <BaseButton
            :loading="form.busy"
            :block="false"
            type="primary"
            addClasses="primary-bg-color font-16 fw-500 text-uppercase"
            >Login</BaseButton
          >
        </div>
        <p class="font-14 fw-400 text-center mt-4">
          Don't have an account yet?
          <NuxtLink class="color-blue" :to="{ name: 'register' }">
            Create an account</NuxtLink
          >
        </p>
      </form>
    </div>
  </section>
</template>

<script>
import BaseButton from "@/components/buttons/BaseButton";
import BaseInput from "@/components/inputs/BaseInput";
export default {
  middleware: ["guest"],
  components: {
    BaseButton,
    BaseInput
  },
  data() {
    return {
      form: this.$vform({
        email: "",
        password: ""
      })
    };
  },
  methods: {
    submit() {
      this.form.busy = true;
      this.$auth
        .loginWith("local", {
          data: this.form
        })
        .then(res => {
          this.form.busy = false;
          console.log(res);
        })
        .catch(e => {
          this.form.busy = false;
          console.log(e.response.data.errors);
          this.form.errors.set(e.response.data.errors);
        });
    }
  }
};
</script>

<style></style>
