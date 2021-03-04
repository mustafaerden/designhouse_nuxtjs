import Vue from "vue";
import { Form, HasError, AlertError, AlertSuccess } from "vform";

Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);
Vue.component(AlertSuccess.name, AlertSuccess);

// This package is using bare axios package by default. But nuxt-js using nuxt-axios. so we need to customize to use nuxt-axios;
// We re basically overriding the submit method in Form;
// export default ({ app }, inject) => {
//   Form.prototype.submit = function submit(method, url, config = {}) {
//     this.startProcessing();

//     const data = method === "get" ? { params: this.data() } : this.data();

//     return new Promise((resolve, reject) => {
//       app.$axios
//         .request({
//           url: this.route(url),
//           method,
//           data,
//           ...config
//         })
//         .then(response => {
//           this.finishProcessing();
//           resolve(response);
//         })
//         .catch(error => {
//           this.busy = false;

//           if (error.response) {
//             this.errors.set(this.extractErrors(error.response));
//           }

//           reject(error);
//         });
//     });
//   };

//   app.$vform = (...params) => new Form(...params);
//   inject("vform", (...params) => new Form(...params));
// };

// Kisa yolu;
export default ({ app, $axios }, inject) => {
  Form.axios = $axios;
  app.$vform = (...params) => new Form(...params);
  inject("vform", (...params) => new Form(...params));
};
