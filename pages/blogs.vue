<script setup>
definePageMeta({
  middleware: ["auth"]
});
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const handleLogout = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    alert("Logged out!");
    navigateTo("/");
  } catch (error) {
    alert(error.message);
  }
};
</script>

<template>
  <div>
    <h2>This is my blogs</h2>
    <button v-if="user" @click="handleLogout">Logout</button>
  </div>
</template>
