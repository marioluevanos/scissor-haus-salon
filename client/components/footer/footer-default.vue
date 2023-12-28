<script setup lang="ts"></script>

<template>
  <footer class="root" data-footer>
    <div class="footer-middle">
      <div class="footer-contact">
        <h4 class="title">Follow Us</h4>
        <div class="social-icons">
          <a
            href="https://www.instagram.com/scissorhaussalon/"
            class="icon"
            target="_blank"
            rel="noopener"
          >
            <SvgInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/ruthie-luevanos-083856149/"
            class="icon"
            target="_blank"
            rel="noopener"
          >
            <SvgLinkedIn />
          </a>
        </div>
      </div>

      <div class="footer-contact">
        <h4 class="title">Find Us</h4>
        <p class="footer-contact-item">
          <SvgLocation class="icon location" />
          <a
            href="https://www.google.com/maps/place/Scissor+Haus+Salon/@34.1446806,-118.1529652,15z/data=!4m2!3m1!1s0x0:0x22f439cae3df5286?sa=X&ved=2ahUKEwjjqZSu0oOCAxUtJEQIHdw3CtcQ_BJ6BAhMEAA&ved=2ahUKEwjjqZSu0oOCAxUtJEQIHdw3CtcQ_BJ6BAhTEAg"
            target="_blank"
            rel="noopener"
          >
            117 W Green St. <br />
            Pasadena, CA 91105
          </a>
        </p>
      </div>

      <div class="footer-contact">
        <h4 class="title">Got Questions?</h4>
        <p class="footer-contact-item">
          <SvgPhone class="icon" />
          <a href="tel:670-413-90-762">(626) 676-2539</a>
        </p>
        <p class="footer-contact-item">
          <SvgEmail class="icon" />
          <a href="mailto:ruthie@scissorhaussalon.com"
            >ruthie@scissorhaussalon.com</a
          >
        </p>
      </div>
    </div>

    <div class="footer-bottom">
      <p class="copyright">
        ©{{ new Date().getFullYear() }} All Rights Reserved
      </p>
      <img class="footer-pay" src="/footer/footer-pay.png" alt="pay-img" />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "./footer.scss";
</style>
