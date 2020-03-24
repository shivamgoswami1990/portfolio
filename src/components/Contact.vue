<template>
    <v-container>
        <v-row no-gutters>
            <v-col cols="12" md="5">
                <v-layout wrap fill-height align-content-space-between justify-space-between column class="pa-6">
                    <div>
                        <p class="text-primary text-uppercase subtitle-2">
                            What can I do for you
                        </p>

                        <p class="opacity-70 text-justify">
                            Get in touch if there's an idea, project that you need to have a chat about.
                        </p>
                    </div>

                    <div>
                        <div class="mb-4">
                            <p class="text-uppercase subtitle-2 text-accent mb-0">Where I'm located</p>
                            <h2>Canberra, Australia</h2>
                        </div>

                        <div>
                            <p class="text-uppercase subtitle-2 text-accent mb-0">Email</p>
                            <h2>shiv15101990@gmail.com</h2>
                        </div>

                        <div>
                            <p class="text-uppercase subtitle-2 text-accent mb-0">Phone</p>
                            <h2>+61 416530555</h2>
                        </div>
                    </div>
                </v-layout>
            </v-col>

            <v-col cols="12" md="7">
                <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="save">
                    <v-layout wrap fill-height column class="pa-6">
                        <v-row no-gutters>
                            <v-col cols="12" md="6">
                                <v-text-field color="primary" v-model="name" label="Name" clearable
                                              :rules="[rules.required]" class="mx-2"/>
                            </v-col>

                            <v-col cols="12" md="6">
                                <v-text-field color="primary" v-model="email" label="Email" clearable
                                              :rules="[rules.required, rules.email]" class="mx-2"/>
                            </v-col>
                        </v-row>

                        <v-textarea color="primary" v-model="message" label="Message" clearable auto-grow
                                    :rules="[rules.required]" class="mx-2"/>

                        <v-alert type="primary" class="black--text" border="top"
                                 outlined light icon="mdi-check-circle" v-if="showSuccessMessage">
                            Your query has been submitted. We will be in touch
                        </v-alert>
                        <v-alert type="error" class="black--text" border="top"
                                 outlined light icon="mdi-cancel" v-if="showErrorMessage">
                            Something went wrong. Please try again
                        </v-alert>
                        <v-btn color="primary" outlined tile width="160" type="submit" :disabled="!valid"
                               class="mt-5 mx-2">
                            Send
                        </v-btn>
                    </v-layout>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      rules: {
        required: value => !!value || 'Required.',
        max: v => this.validateFormRules(v, 'lte', 20, 'Max 20 characters'),
        min: v => this.validateFormRules(v, 'gte', 8, 'Min 8 characters'),
        email: (v) => {
          if (v !== undefined && v !== null) {
            if (v.length > 0) {
              const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              return pattern.test(v) || 'Invalid e-mail.'
            }
            return true
          }
          return true
        }
      },
      name: '',
      email: '',
      message: '',
      showSuccessMessage: false,
      showErrorMessage: false,
      isLoading: false
    }
  },
  methods: {
    save() {
      if (this.$refs.form.validate()) {
        // Submit form on valid
        const data = { contact: {
          "name": this.name,
          "email": this.email,
          "message": this.message,
        }}
        let vm = this
        vm.isLoading = true
        fetch(process.env.VUE_APP_REST_URL + '/submit_form', {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => {
            // On success, clear form & display success message
            if ('response_code' in data) {
              if (data.response_code === '202') {
                vm.name = ''
                vm.email = ''
                vm.message = ''
                vm.isLoading = false

                // Show the message on a timeout
                vm.showSuccessMessage = true
                setTimeout(function () {
                  vm.showSuccessMessage = false
                }, 4000)
              }
            }
          })
          .catch((error) => {
            vm.isLoading = false
            console.log(error)
            // Show the message on a timeout
            vm.showErrorMessage = true
            setTimeout(function () {
              vm.showErrorMessage = false
            }, 4000)
          })
      }
    }
  }
}
</script>
