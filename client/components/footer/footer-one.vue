<template>
  <footer>
    <div class="tp-footer-top pt-95 pb-40">
      <div class="container">
        <div class="row">
          <div class="col-xl-4 col-lg-3 col-md-4 col-sm-6">
            <div class="tp-footer-widget footer-col-1 mb-50">
              <div class="tp-footer-widget-content">
                <div class="tp-footer-logo">
                  <nuxt-link href="/">
                    <img src="/img/logo/logo-black.svg" alt="logo" />
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-3 col-md-4 col-sm-6">
            <div class="tp-footer-social">
              <!-- social links -->
              <footer-social-links />
              <!-- social links -->
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div class="tp-footer-widget footer-col-4 mb-50">
              <h4 class="tp-footer-widget-title">Talk To Us</h4>
              <div class="tp-footer-widget-content">
                <div class="tp-footer-talk mb-20">
                  <span>Got Questions? Call us</span>
                  <h4><a href="tel:670-413-90-762">(626) 676-2539</a></h4>
                </div>
                <!-- footer contact start -->
                <footer-contact />
                <!-- footer contact end -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- bottom area start -->
    <footer-bottom-area />
    <!-- bottom area end -->
  </footer>
</template>
