<script setup>
const supabase = useSupabaseClient();
const router = useRouter();
const state = reactive({
  email: "iamsushil303@gmail.com",
  password: "test@12345"
});
const handleSignIn = async () => {
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: state.email,
      password: state.password
    });
    if (error) throw error;
    router.push("/blogs");
  } catch (error) {
    alert(error.message);
  }
};
</script>

<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="handleSignIn">
      <input type="email" v-model="state.email" />
      <input type="password" v-model="state.password" />
      <button>Login</button>
    </form>
  </div>
</template>
