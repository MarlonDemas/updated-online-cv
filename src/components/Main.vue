<template>
  <div class="main main-raised">
    <div class="section section-basic">
      <div class="container">
        <div class="title text-center text-uppercase">
          <h2 id="about">About <strong>me</strong></h2>
        </div>
        <hr />
        <div class="col-md-8 offset-md-2 text-center mt-4" data-aos="fade-up">
          I am an ambivert with a very positive attitude and always looking to
          be challenged. I have the ability to learn concepts quickly and thrive
          in a fast-paced environment. I am easy to talk to, reliable and very
          focused.
        </div>
        <div class="m-5"></div>
      </div>
    </div>
    <form name="contact" method="POST" netlify netlify-honeypot="bot-field">
      <p>
        <label>Your Name: <input type="text" name="name" /></label>
      </p>
      <p>
        <label>Your Email: <input type="email" name="email" /></label>
      </p>
      <p>
        <label
          >Your Role:
          <select name="role[]" multiple>
            <option value="leader">Leader</option>
            <option value="follower">Follower</option>
          </select></label
        >
      </p>
      <p>
        <label>Message: <textarea name="message"></textarea></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
.item {
  width: 200px;
  height: 200px;
  margin: 50px auto;
  padding-top: 75px;
  background: #ccc;
  text-align: center;
  color: #fff;
  font-size: 3em;
}
</style>
