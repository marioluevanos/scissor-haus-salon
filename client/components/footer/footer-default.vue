<script setup lang="ts">
const social_data: {
  id: number;
  link: string;
  icon: string;
  title: string;
}[] = [
  {
    id: 1,
    link: "https://www.instagram.com/scissorhaussalon/",
    icon: "fa-brands fa-instagram",
    title: "instagram",
  },
  {
    id: 2,
    link: "https://www.linkedin.com/in/ruthie-luevanos-083856149/",
    icon: "fa-brands fa-linkedin-in",
    title: "Linkedin",
  },
];
</script>

<template>
  <footer class="root">
    <div class="footer-middle">
      <div class="footer-contact">
        <h4 class="title">Follow Us</h4>
        <div class="social-icons">
          <a
            v-for="item in social_data"
            :key="item.id"
            :href="item.link"
            class="social-icon"
            target="_blank"
            rel="noopener"
          >
            <i :class="item.icon"></i>
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
      <img class="footer-pay" src="/img/footer/footer-pay.png" alt="pay-img" />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/utils/_mixins.scss";

.root {
  position: relative;
  margin: auto;
  border-top: 1px solid var(--tp-grey-2);
  padding-top: 3rem;
}

.social-icons {
  position: relative;
  display: flex;
  grid-gap: 0.5rem;
}

.social-icon {
  width: 1.5rem;
  height: 1.5rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--tp-grey-2);
  border-radius: 4px;

  img {
    width: 1.125rem;
    height: 1.125rem;
  }
}

.footer-contact {
  display: flex;
  flex-direction: column;

  @include media(2-up) {
    grid-gap: 0.5rem;
  }
}

.footer-contact-item {
  position: relative;
  display: flex;
  align-items: center;
  grid-gap: 0.5rem;
  margin: 0 0 0.5rem;
  line-height: 1.5rem;

  a {
    font: inherit;
    line-height: inherit;
    display: block;
  }
}

.icon {
  width: 1rem;
  height: 1rem;
}

.icon.location {
  align-self: flex-start;
  margin-top: 0.25rem;
}

.footer-middle {
  max-width: 768px;
  margin: 0 auto 3rem;
  padding: 0 1rem;
  display: flex;
  grid-gap: 2rem;
  flex-direction: column;

  @include media(3-up) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
}

.footer-bottom {
  max-width: 1280px;
  margin: 1.5rem auto 0;
  border-top: 1px solid var(--tp-grey-2);
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;

  @include media(2-up) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .copyright {
    margin: 0 0 0.5rem;
    white-space: nowrap;
    flex: 1;

    @include media(2-up) {
      margin: 0;
    }
  }

  .footer-pay {
    flex: 0;
    max-width: 8rem;
    width: 100%;
  }
}
</style>
