<script setup>
const supabase = useSupabaseClient();
const state = reactive({
  email: "",
  password: ""
});
const handleSignUp = async () => {
  try {
    const { error } = await supabase.auth.signUp({
      email: state.email,
      password: state.password
    });
    if (error) throw error;
    alert("Check your email for the login link!");
  } catch (error) {
    alert(error.message);
  }
};
</script>

<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="handleSignUp">
      <input type="email" v-model="state.email" />
      <input type="password" v-model="state.password" />
      <button>Register</button>
    </form>
  </div>
</template>
