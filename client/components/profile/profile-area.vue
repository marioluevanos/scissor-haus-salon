<script setup lang="ts"></script>

<template>
  <section class="profile__area pt-120 pb-120">
    <div class="container">
      <div class="profile__inner p-relative">
        <div class="row">
          <div class="col-xxl-4 col-lg-4">
            <div class="profile__tab mr-40">
              <!-- profile nav start -->
              <profile-nav />
              <!-- profile nav end -->
            </div>
          </div>
          <div class="col-xxl-8 col-lg-8">
            <div class="profile__tab-content">
              <div class="tab-content" id="profile-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <profile-main />
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-information"
                  role="tabpanel"
                  aria-labelledby="nav-information-tab"
                >
                  <profile-info />
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-password"
                  role="tabpanel"
                  aria-labelledby="nav-password-tab"
                >
                  <profile-password />
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-address"
                  role="tabpanel"
                  aria-labelledby="nav-address-tab"
                >
                  <profile-address />
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-order"
                  role="tabpanel"
                  aria-labelledby="nav-order-tab"
                >
                  <profile-orders />
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-notification"
                  role="tabpanel"
                  aria-labelledby="nav-notification-tab"
                >
                  <profile-notification />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
