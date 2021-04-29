<template>
  <main class="form-signin">
    <form>
      <h1 class="h3 mb-3 fw-normal">Sign In</h1>

      <div class="form-floating">
        <input
          id="email"
          class="form-control"
          type="email"
          placeholder="email"
        />
        <label for="email">Email address</label>
      </div>
      <div class="form-floating">
        <input
          id="password"
          class="form-control"
          type="password"
          placeholder="password"
        />
        <label for="password">Password</label>
      </div>

      <button class="w-100 btn btn-lg btn-primary" type="submit">
        Sign in
      </button>

      <div class="form-check form-switch mt-3">
        <label>
          <input class="form-check-input" type="checkbox" value="remember-me" />
          Remember me
        </label>
      </div>

      <p class="mt-3"><a href="forgot-password">Forgot password</a></p>
    </form>
  </main>
</template>

<script>
export default {
  name: "sign-in",
};
</script>

<style lang="css" src="./signin.css"></style>
