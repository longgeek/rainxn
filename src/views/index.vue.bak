<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import { Carousel, Slide } from "vue-carousel";
import { VueTyper } from "vue-typer";

/**
 * Index-corporate component
 */
export default {
    data() {
        return {
            swiperOptions: {
                lazy: true,
                loop: true,
                autoplay: {
                    disableOnInteraction: false,
                    delay: 3000
                },
                initialSlide: 0,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            },
            caseList: [
                {
                    image: 'images/arch/1.jpeg',
                    title: '开放源代码互动平台',
                    desc: '构建开源技术研究、开发以及应用等各领域资深技术专家，为开源技术开发者提供集学、练、测于一体的优质内容和服务，为开发者提供丰富而专业的学习和产业服务机构；同时也通过收益激励方式，让更多内容创作者可持续地输出自己的知识。',
                    variant: 'primary',
                    type: [
                        'Network',
                        'APP',
                        'Community',
                        'Code',
                        'Code',
                        'Academy',
                        'Bank',
                    ],
                },
                {
                    image: 'images/arch/2.jpeg',
                    title: '开源产业赋能平台',
                    desc: '持续、全面和深入地反映中国产业需求，以城市为基点，以开源技术和开放出版为核心服务，推动人工智能、大数据、下一代信息技术以及其他前沿技术在各产业的活化与赋能作用。',
                    variant: 'primary',
                    type: [
                        'Thinktank',
                        'Talk',
                        'Bookshop',
                    ],
                },
                {
                    image: 'images/arch/3.jpeg',
                    title: '开放商业创新平台',
                    desc: '开源技术与开源理念对传统商业有着深远的创新意义，Social Value 和 Business Value 是否能有机的结合？企业和社区能否互惠互利？开源如何继续推动突破性的商业创新？利用开源形成商业合力，大家既能各取所需，又能形成合力加快社会变革。',
                    variant: 'primary',
                    type: [
                        'Campus',
                        'MBA',
                        'College',
                    ],
                },
                {
                    image: 'images/arch/4.jpeg',
                    title: '开放社会公益平台',
                    desc: '开源一方面与开源软件等技术相关，包括开源软件历史、开源软件协议、技术产品、开源社区、相关硬件、技术人员、开源软件相关行业及企业等;另一方面也与开源价值观与方法论相关,包括开源价值观体系、开源方法论体系、以开源方法论开展的非技术性项目、相关非技术性组织、社区及人员等。开源，是人类社会的宝贵精神财富。',
                    variant: 'primary',
                    type: [
                        'Society',
                        'ValueChain',
                        'Good',
                    ],
                },
            ],
            companyList: [
              {
                logo: "images/job/Circleci.svg",
                title: "Internet Services",
                location: "San Francisco",
                company: "circleci.com",
                revenue: "$ 5M / Annual",
                employee: 200,
              },
              {
                logo: "images/job/Mg.svg",
                title: "Mg",
                location: "San Francisco",
                company: "circleci.com",
                revenue: "$ 5M / Annual",
                employee: 200,
              },
              {
                logo: "images/job/Twilio.svg",
                title: "Twilio",
                location: "San Francisco",
                company: "circleci.com",
                revenue: "$ 5M / Annual",
                employee: 200,
              },
              {
                logo: "images/job/Udemy.svg",
                title: "Udemy",
                location: "San Francisco",
                company: "circleci.com",
                revenue: "$ 5M / Annual",
                employee: 200,
              },
              {
                logo: "images/job/Webhooks.svg",
                title: "Webhooks",
                location: "San Francisco",
                company: "circleci.com",
                revenue: "$ 5M / Annual",
                employee: 200,
              },
              {
                logo: "images/job/Discord.svg",
                title: "Discord",
                location: "San Francisco",
                company: "circleci.com",
                revenue: "$ 5M / Annual",
                employee: 200,
              },
              {
                logo: "images/job/Eslint.svg",
                title: "Eslint",
                location: "San Francisco",
                company: "circleci.com",
                revenue: "$ 5M / Annual",
                employee: 200,
              },
              {
                logo: "images/job/Gitlab.svg",
                title: "Gitlab",
                location: "San Francisco",
                company: "circleci.com",
                revenue: "$ 5M / Annual",
                employee: 200,
              }
            ],
        };
    },
    components: {
        Slide,
        Swiper,
        Carousel,
        SwiperSlide,
        "vue-typer": VueTyper,
    },
    directives: {
        swiper: directive,
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper;
        },
    },
    methods: {
        nextSlide() {
            this.$refs.mySwiper.$swiper.slideNext();
        },
        prevSlide() {
            this.$refs.mySwiper.$swiper.slidePrev();
        },
    },
};
</script>

<template>
    <div>
        <swiper
            ref="mySwiper"
            class="swiper-slider-hero position-relative d-block vh-100"
            :options="swiperOptions"
        >
            <swiper-slide>
                <div class="swiper-slide d-flex align-items-center overflow-hidden">
                    <div
                        class="slide-inner slide-bg-image d-flex align-items-center"
                        :style="{
                            background:
                                'url(' +
                                require('../../public/images/corporate/1.jpg') +
                                ') center center',
                        }"
                    >
                        <div class="bg-overlay"></div>
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <div class="title-heading text-center">
                                        <h1 class="heading text-white title-dark mb-4">
                                            使命
                                        </h1>
                                        <p class="para-desc mx-auto text-white-50">
                                            开放技术驱动城市可持续发展
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="swiper-slide d-flex align-items-center overflow-hidden">
                    <div
                        class="slide-inner slide-bg-image d-flex align-items-center"
                        :style="{
                            background:
                                'url(' +
                                require('../../public/images/corporate/2.jpeg') +
                                ') center center',
                        }"
                    >
                        <div class="bg-overlay"></div>
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <div class="title-heading text-center">
                                        <h1 class="heading text-white title-dark mb-4">
                                            愿景
                                        </h1>
                                        <p class="para-desc mx-auto text-white-50">
                                            技术迭代、商业创新、产业赋能、生活美好
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="swiper-slide d-flex align-items-center overflow-hidden">
                    <div
                        class="slide-inner slide-bg-image d-flex align-items-center"
                        :style="{
                            background:
                                'url(' +
                                require('../../public/images/corporate/3.jpeg') +
                                ') center center',
                        }"
                    >
                        <div class="bg-overlay"></div>
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <div class="title-heading text-center">
                                        <h1 class="heading text-white title-dark mb-4">
                                            价值观
                                        </h1>
                                        <p class="para-desc mx-auto text-white-50">
                                            开放，共生，可持续
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <div class="swiper-container" slot="pagination">
                <div
                    class="swiper-button-next border rounded-circle text-center"
                    slot="button-prev"
                    @click="nextSlide()"
                ></div>
                <div
                    class="swiper-button-prev border rounded-circle text-center"
                    slot="button-next"
                    @click="prevSlide()"
                ></div>
            </div>
        </swiper>

        <section class="section" id="arch">
            <div class="container">
                <div class="row align-items-center mb-4 pb-2">
                    <div class="col-lg-6">
                        <div class="section-title text-center text-lg-left">
                            <h4 class="title mb-4 mb-lg-0">
                                平台架构
                            </h4>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="section-title text-center text-lg-left">
                            <p class="text-muted mb-0 mx-auto para-desc">
                                开放城市共同体的
                                <span class="text-primary font-weight-bold">平台架构</span>，是通过热爱开源技术和开源文化的共建者一起协作创新，共同构建的可持续发展的生态体系。
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row projects-wrapper">
                    <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2 business" v-for="(item, index) in caseList" :key="index">
                        <div class="card blog border-0 work-container work-classic shadow rounded-md overflow-hidden" style="height: 520px;">
                            <img :src="item.image" class="img-fluid work-image" alt="" style="height: 170px">
                            <div class="card-body">
                                <div class="content">
                                        OpenCity
                                        <vue-typer
                                            :text="item.type"
                                        ></vue-typer>
                                    <h5 class="mt-3">
                                        <router-link to="/page-case-detail" class="text-dark title">{{item.title}}</router-link>
                                    </h5>
                                    <p class="text-muted">{{ item.desc }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- div class="container mt-100 mt-60">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <div class="mr-lg-5">
                            <img
                                src="images/1.jpg"
                                class="img-fluid"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div class="section-title">
                            <h4 class="title mb-4">
                                项目入驻
                            </h4>
                            <p class="text-muted">
                                    如果你有关于城市可持续发展的创意或项目，希望通过OpenCity开放城市共同体，以开源、开放的方式孵化与加速，欢迎扫码提交项目信息，我们将以最快速度联系您。
                            </p>
                            <div class="mt-4">
                                <a
                                    href="javascript:void(0)"
                                    class="btn btn-pills btn-soft-primary"
                                    v-b-modal.modal-project
                                    >立即加入</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container mt-100 mt-60">
                <div class="row align-items-center">
                    <div class="col-md-6 order-1 order-md-2">
                        <div class="ml-lg-5">
                            <img
                                src="images/2.jpg"
                                class="img-fluid"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div class="section-title">
                            <h4 class="title mb-4">
                                项目共创
                            </h4>
                            <p class="text-muted">
                                如果您愿意以开源开放、协作共享的方式加速项目的成熟与落地，欢迎加入我们，成为项目共创者。
                            </p>
                            <div class="mt-4">
                                <a
                                    href="javascript:void(0)"
                                    class="btn btn-pills btn-soft-primary"
                                    v-b-modal.modal-co-creator
                                    >立即加入</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container mt-100 mt-60">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <div class="mr-lg-5">
                            <img
                                src="images/3.jpg"
                                class="img-fluid"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div class="section-title">
                            <h4 class="title mb-4">
                                志愿服务
                            </h4>
                            <p class="text-muted">
                                不管您是程序员、产品经理、媒体从业者、律师、知识产权从业者、财务从业者，亦或只是一个普通的老百姓，只要您愿意参入到OpenCity的使命中来，志愿服务团队欢迎您的加入。
                            </p>
                            <div class="mt-4">
                                <a
                                    href="javascript:void(0)"
                                    class="btn btn-pills btn-soft-primary"
                                    v-b-modal.modal-volunteer
                                    >立即加入</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div -->
        </section>

        <section class="section bg-light" id="community">
          <div class="container">
              <div class="row align-items-center mb-4 pb-2">
                  <div class="col-lg-6">
                      <div class="section-title text-center text-lg-left">
                          <h4 class="title mb-4 mb-lg-0">
                            加入社区
                          </h4>
                      </div>
                  </div>
                  <div class="col-lg-6">
                      <div class="section-title text-center text-lg-left">
                          <p class="text-muted mb-0 mx-auto para-desc">
                              开放城市共同体的
                              <span class="text-primary font-weight-bold">平台架构</span>，是通过热爱开源技术和开源文化的共建者一起协作创新，共同构建的可持续发展的生态体系。
                          </p>
                      </div>
                  </div>
              </div>
          </div>
          <br />
          <br />
          <div class="container">
              <div class="row align-items-center">
                  <div class="col-lg-6">
                      <div class="section-title text-center text-lg-left">
                          <h5 class="text-primary">1. 个人会员</h5>
                          <a href="javascript:void(0)" class="btn btn-sm btn-primary mt-2 mr-2">个人会员加入申请</a>
                      </div>
                  </div>

                  <div class="col-lg-6">
                      <div class="section-title text-center text-lg-left">
                          <p class="text-muted mb-0 mx-auto para-desc">OCC 个人会员拥有</p>
                      </div>
                  </div>
              </div>
          </div>
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-lg-2 col-md-2 col-6 text-center pt-5">
                      <img src="images/client/amazon.svg" class="avatar avatar-ex-sm" alt="">
                  </div>

                  <div class="col-lg-2 col-md-2 col-6 text-center pt-5">
                      <img src="images/client/google.svg" class="avatar avatar-ex-sm" alt="">
                  </div>

                  <div class="col-lg-2 col-md-2 col-6 text-center pt-5">
                      <img src="images/client/lenovo.svg" class="avatar avatar-ex-sm" alt="">
                  </div>

                  <div class="col-lg-2 col-md-2 col-6 text-center pt-5">
                      <img src="images/client/paypal.svg" class="avatar avatar-ex-sm" alt="">
                  </div>

                  <div class="col-lg-2 col-md-2 col-6 text-center pt-5">
                      <img src="images/client/shopify.svg" class="avatar avatar-ex-sm" alt="">
                  </div>

                  <div class="col-lg-2 col-md-2 col-6 text-center pt-5">
                      <img src="images/client/spotify.svg" class="avatar avatar-ex-sm" alt="">
                  </div>
              </div>
          </div>
          <br />
          <br />
          <hr />
          <br />
          <br />
          <div class="container">
              <div class="row align-items-center">
                  <div class="col-lg-6">
                      <div class="section-title text-center text-lg-left">
                          <h5 class="text-primary">2. 企业会员</h5>
                          <a href="javascript:void(0)" class="btn btn-sm btn-primary mt-2 mr-2">企业会员加入申请</a>
                      </div>
                  </div>

                  <div class="col-lg-6">
                      <div class="section-title text-center text-lg-left">
                          <p class="text-muted mb-0 mx-auto para-desc">OCC 企业会员拥有</p>
                      </div>
                  </div>
              </div>
          </div>
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-lg-2 col-md-2 col-6 text-center pt-5">
                      <img src="images/client/amazon.svg" class="avatar avatar-ex-sm" alt="">
                  </div>

                  <div class="col-lg-2 col-md-2 col-6 text-center pt-5">
                      <img src="images/client/google.svg" class="avatar avatar-ex-sm" alt="">
                  </div>

                  <div class="col-lg-2 col-md-2 col-6 text-center pt-5">
                      <img src="images/client/lenovo.svg" class="avatar avatar-ex-sm" alt="">
                  </div>

                  <div class="col-lg-2 col-md-2 col-6 text-center pt-5">
                      <img src="images/client/paypal.svg" class="avatar avatar-ex-sm" alt="">
                  </div>

                  <div class="col-lg-2 col-md-2 col-6 text-center pt-5">
                      <img src="images/client/shopify.svg" class="avatar avatar-ex-sm" alt="">
                  </div>

                  <div class="col-lg-2 col-md-2 col-6 text-center pt-5">
                      <img src="images/client/spotify.svg" class="avatar avatar-ex-sm" alt="">
                  </div>
              </div>
          </div>
          <br />
          <br />
          <hr />
          <br />
          <br />
          <div class="container">
              <div class="row align-items-center">
                  <div class="col-lg-6">
                      <div class="section-title text-center text-lg-left">
                          <h5 class="text-primary">3. 志愿者会员</h5>
                          <a href="javascript:void(0)" class="btn btn-sm btn-primary mt-2 mr-2">志愿者加入申请</a>
                      </div>
                  </div>

                  <div class="col-lg-6">
                      <div class="section-title text-center text-lg-left">
                          <p class="text-muted mb-0 mx-auto para-desc">OCC 志愿者会员拥有</p>
                      </div>
                  </div>
              </div>
          </div>
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-lg-2 col-md-2 col-6 text-center pt-5">
                      <img src="images/client/amazon.svg" class="avatar avatar-ex-sm" alt="">
                  </div>

                  <div class="col-lg-2 col-md-2 col-6 text-center pt-5">
                      <img src="images/client/google.svg" class="avatar avatar-ex-sm" alt="">
                  </div>

                  <div class="col-lg-2 col-md-2 col-6 text-center pt-5">
                      <img src="images/client/lenovo.svg" class="avatar avatar-ex-sm" alt="">
                  </div>

                  <div class="col-lg-2 col-md-2 col-6 text-center pt-5">
                      <img src="images/client/paypal.svg" class="avatar avatar-ex-sm" alt="">
                  </div>

                  <div class="col-lg-2 col-md-2 col-6 text-center pt-5">
                      <img src="images/client/shopify.svg" class="avatar avatar-ex-sm" alt="">
                  </div>

                  <div class="col-lg-2 col-md-2 col-6 text-center pt-5">
                      <img src="images/client/spotify.svg" class="avatar avatar-ex-sm" alt="">
                  </div>
              </div>
          </div>

          <div class="container mt-100 mt-60">
              <div class="row align-items-center">
                  <div class="col-md-6">
                      <div class="section-title text-md-left text-center">
                          <h5 class="mb-4">社区行为准则</h5>
                          <p class="text-muted mb-0 para-desc">Start working with <span class="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>

                          <ul class="list-unstyled text-muted mt-4 mb-0">
                              <li class="mb-0"><span class="text-primary h5 mr-2"><i class="uil uil-check-circle align-middle"></i></span>Digital Marketing Solutions for Tomorrow</li>
                              <li class="mb-0"><span class="text-primary h5 mr-2"><i class="uil uil-check-circle align-middle"></i></span>Our Talented & Experienced Marketing Agency</li>
                              <li class="mb-0"><span class="text-primary h5 mr-2"><i class="uil uil-check-circle align-middle"></i></span>Create your own skin to match your brand</li>
                          </ul>
                      </div>
                  </div>

                  <div class="col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                      <div class="faq-content">
                          <div class="accordion" id="accordionExampleone">
                              <b-card no-body class="mb-2 rounded border-bottom">
                                  <b-card-header class="border-0 bg-light p-3 pr-5">
                                      <a class="faq position-relative text-dark" v-b-toggle.accordion-1 href="javascript: void(0);">
                                          <h6 class="title mb-0"> How our <span class="text-primary">Landrick</span> work ? </h6>
                                      </a>
                                  </b-card-header>
                                  <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                                      <b-card-body class="px-2 py-4">
                                          <p class="text-muted mb-0 faq-ans">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                      </b-card-body>
                                  </b-collapse>
                              </b-card>
                              <b-card no-body class="mb-2 rounded border-bottom">
                                  <b-card-header class="border-0 bg-light p-3 pr-5">
                                      <a class="faq position-relative text-dark" v-b-toggle.accordion-2 href="javascript: void(0);">
                                          <h6 class="title mb-0"> What is the main process open account ?</h6>
                                      </a>
                                  </b-card-header>
                                  <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                                      <b-card-body class="px-2 py-4">
                                          <p class="text-muted mb-0 faq-ans">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                      </b-card-body>
                                  </b-collapse>
                              </b-card>
                              <b-card no-body class="mb-2 rounded border-bottom">
                                  <b-card-header class="border-0 bg-light p-3 pr-5">
                                      <a class="faq position-relative text-dark" v-b-toggle.accordion-3 href="javascript: void(0);">
                                          <h6 class="title mb-0"> How to make unlimited data entry ? </h6>
                                      </a>
                                  </b-card-header>
                                  <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                                      <b-card-body class="px-2 py-4">
                                          <p class="text-muted mb-0 faq-ans">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                      </b-card-body>
                                  </b-collapse>
                              </b-card>

                              <b-card no-body class="mb-2 rounded border-bottom">
                                  <b-card-header class="border-0 bg-light p-3 pr-5">
                                      <a class="faq position-relative text-dark" v-b-toggle.accordion-4 href="javascript: void(0);">
                                          <h6 class="title mb-0"> Is <span class="text-primary">Landrick</span> safer to use with my account ? </h6>
                                      </a>
                                  </b-card-header>
                                  <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                                      <b-card-body class="px-2 py-4">
                                          <p class="text-muted mb-0 faq-ans">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                      </b-card-body>
                                  </b-collapse>
                              </b-card>

                              <b-card no-body class="mb-2 rounded border-bottom">
                                  <b-card-header class="border-0 bg-light p-3 pr-5">
                                      <a class="faq position-relative text-dark" v-b-toggle.accordion-5 href="javascript: void(0);">
                                          <h6 class="title mb-0"> How can i contact your technical team ? </h6>
                                      </a>
                                  </b-card-header>
                                  <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
                                      <b-card-body class="px-2 py-4">
                                          <p class="text-muted mb-0 faq-ans">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                      </b-card-body>
                                  </b-collapse>
                              </b-card>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
        </section>

        <section class="section" id="project">
          <div class="container">
              <div class="row align-items-center mb-4 pb-2">
                  <div class="col-lg-6">
                      <div class="section-title text-center text-lg-left">
                          <h4 class="title mb-4 mb-lg-0">
                              项目入驻
                          </h4>
                      </div>
                  </div>
                  <div class="col-lg-6">
                      <div class="section-title text-center text-lg-left">
                          <p class="text-muted mb-0 mx-auto para-desc">
                              OCC
                              <span class="text-primary font-weight-bold">社区活动</span>
                              旨在洞察未来
                          </p>
                      </div>
                  </div>
              </div>
          </div>
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <carousel
                  id="six-slide"
                  class="owl-carousel owl-theme"
                  dir="ltr"
                  :per-page="6"
                  :loop="true"
                  :autoplay="true"
                >
                  <Slide v-for="(data, index) of companyList" :key="index" class="mx-3">
                    <div class="mt-4 pt-2">
                      <div class="company-list card border-0 rounded shadow bg-white">
                        <div class="text-center py-5 border-bottom">
                          <img
                            :src="data.logo"
                            class="avatar avatar-small mx-auto rounded-circle d-block mb-3"
                            alt=""
                          />
                          <router-link to="/page-job-company" class="text-dark h5 name"
                            >{{data.title}}</router-link
                          >
                          <p class="text-muted mt-1 mb-0">Internet Services</p>
                        </div>

                        <div class="p-4">
                          <h6>项目进展:</h6>
                          <ul class="list-unstyled mb-4">
                            <li class="h6">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-map-pin fea icon-sm text-warning mr-2"
                              >
                                <path
                                  d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                                ></path>
                                <circle cx="12" cy="10" r="3"></circle></svg
                              ><span class="text-muted">Location :</span> {{data.location}}
                            </li>
                            <li class="h6">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-link fea icon-sm text-warning mr-2"
                              >
                                <path
                                  d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                                ></path>
                                <path
                                  d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                                ></path></svg
                              ><span class="text-muted">Comapny :</span> {{data.company}}
                            </li>
                            <li class="h6">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-dollar-sign fea icon-sm text-warning mr-2"
                              >
                                <line x1="12" y1="1" x2="12" y2="23"></line>
                                <path
                                  d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                                ></path></svg
                              ><span class="text-muted">Revenue :</span> {{data.revenue}}
                            </li>
                            <li class="h6">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-users fea icon-sm text-warning mr-2"
                              >
                                <path
                                  d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                                ></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg
                              ><span class="text-muted">No. of employees :</span> {{data.employee}}
                            </li>
                          </ul>
                          <div class="progress-box mt-4 mb-4">
                            <div class="text-muted">进度</div>
                            <div class="progress">
                              <div
                                class="progress-bar position-relative bg-primary"
                                style="width: 84%"
                              >
                                <div class="progress-value d-block text-muted h6">84%</div>
                              </div>
                            </div>
                          </div>
                          <router-link tag="a"
                            to="/page-job-company"
                            class="btn btn-block btn-soft-primary"
                            >申请入驻
                            <arrow-right-icon class="fea icon-sm"></arrow-right-icon></router-link>
                        </div>
                      </div>
                    </div>
                  </slide>
                </carousel>
              </div>
            </div>
          </div>

          <div class="container pb-lg-4 mb-md-5 mb-4 mt-100 mt-60">
            <div class="row justify-content-center">
              <div class="col-12 text-center">
                <div class="section-title">
                  <p class="text-muted para-desc mx-auto mb-0">
                    没有找到您关注的项目，可点击下方按钮发起新的项目
                  </p>

                  <div class="mt-4">
                    <a href="javascript:void(0)" class="btn btn-primary mt-2 mr-2">发起项目</a>
                    <a
                      href="javascript:void(0)"
                      class="btn btn-outline-primary mt-2"
                      >查看项目发起准则</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section bg-light" id="paper">
            <div class="container">
                <div class="row align-items-center mb-4 pb-2">
                    <div class="col-lg-6">
                        <div class="section-title text-center text-lg-left">
                            <h4 class="title mb-4 mb-lg-0">
                                研究报告
                            </h4>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="section-title text-center text-lg-left">
                            <p class="text-muted mb-0 mx-auto para-desc">
                                OCC
                                <span class="text-primary font-weight-bold">社区活动</span>
                                旨在洞察未来
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container mt-100 mt-60">
              <div class="row justify-content-center">
                <div class="col-12">
                  <div class="section-title text-center mb-4 pb-2">
                    <h5 class="mb-4">研究报告/白皮书</h5>
                  </div>
                </div>
              </div>
            </div>

            <div class="container-fluid">
              <div class="row">
                <div class="col-md-12 mt-4 pt-2">
                  <carousel
                    id="six-slide"
                    class="owl-carousel owl-theme"
                    dir="ltr"
                    :per-page="8"
                    :loop="true"
                    :autoplay="true"
                  >
                    <Slide>
                      <div class="card border-0 work-container work-grid position-relative d-block overflow-hidden mx-3">
                        <div class="card-body p-0">
                          <a
                            class="mfp-image d-inline-block"
                            href="images/book/1.jpg"
                            title=""
                          >
                            <img
                              src="images/book/1.jpg"
                              class="img-fluid shadow rounded"
                              alt="work-image"
                            />
                          </a>
                          <div class="content bg-white p-3">
                            <h5 class="mb-0">
                              <a href="javascript:void(0)" class="text-dark title"
                                >Iphone mockup</a
                              >
                            </h5>
                            <h6 class="text-muted tag mb-0">$ 16</h6>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide>
                      <div
                        class="card border-0 work-container work-grid position-relative d-block overflow-hidden mx-3"
                      >
                        <div class="card-body p-0">
                          <a
                            class="mfp-image d-inline-block"
                            href="images/book/2.jpg"
                            title=""
                          >
                            <img
                              src="images/book/2.jpg"
                              class="img-fluid shadow rounded"
                              alt="work-image"
                            />
                          </a>
                          <div class="content bg-white p-3">
                            <h5 class="mb-0">
                              <a href="javascript:void(0)" class="text-dark title"
                                >Iphone mockup</a
                              >
                            </h5>
                            <h6 class="text-muted tag mb-0">$ 16</h6>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide>
                      <div
                        class="card border-0 work-container work-grid position-relative d-block overflow-hidden mx-3"
                      >
                        <div class="card-body p-0">
                          <a
                            class="mfp-image d-inline-block"
                            href="images/book/3.jpg"
                            title=""
                          >
                            <img
                              src="images/book/3.jpg"
                              class="img-fluid shadow rounded"
                              alt="work-image"
                            />
                          </a>
                          <div class="content bg-white p-3">
                            <h5 class="mb-0">
                              <a href="javascript:void(0)" class="text-dark title"
                                >Iphone mockup</a
                              >
                            </h5>
                            <h6 class="text-muted tag mb-0">$ 16</h6>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide>
                      <div
                        class="card border-0 work-container work-grid position-relative d-block overflow-hidden mx-3"
                      >
                        <div class="card-body p-0">
                          <a
                            class="mfp-image d-inline-block"
                            href="images/book/4.jpg"
                            title=""
                          >
                            <img
                              src="images/book/4.jpg"
                              class="img-fluid shadow rounded"
                              alt="work-image"
                            />
                          </a>
                          <div class="content bg-white p-3">
                            <h5 class="mb-0">
                              <a href="javascript:void(0)" class="text-dark title"
                                >Iphone mockup</a
                              >
                            </h5>
                            <h6 class="text-muted tag mb-0">$ 16</h6>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide>
                      <div
                        class="card border-0 work-container work-grid position-relative d-block overflow-hidden mx-3"
                      >
                        <div class="card-body p-0">
                          <a
                            class="mfp-image d-inline-block"
                            href="images/book/5.jpg"
                            title=""
                          >
                            <img
                              src="images/book/5.jpg"
                              class="img-fluid shadow rounded"
                              alt="work-image"
                            />
                          </a>
                          <div class="content bg-white p-3">
                            <h5 class="mb-0">
                              <a href="javascript:void(0)" class="text-dark title"
                                >Iphone mockup</a
                              >
                            </h5>
                            <h6 class="text-muted tag mb-0">$ 16</h6>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide>
                      <div
                        class="card border-0 work-container work-grid position-relative d-block overflow-hidden mx-3"
                      >
                        <div class="card-body p-0">
                          <a
                            class="mfp-image d-inline-block"
                            href="images/book/6.jpg"
                            title=""
                          >
                            <img
                              src="images/book/6.jpg"
                              class="img-fluid shadow rounded"
                              alt="work-image"
                            />
                          </a>
                          <div class="content bg-white p-3">
                            <h5 class="mb-0">
                              <a href="javascript:void(0)" class="text-dark title"
                                >Iphone mockup</a
                              >
                            </h5>
                            <h6 class="text-muted tag mb-0">$ 16</h6>
                          </div>
                        </div>
                      </div>
                    </Slide>

                    <Slide>
                      <div class="card border-0 work-container work-grid position-relative d-block overflow-hidden mx-3">
                        <div class="card-body p-0">
                          <a
                            class="mfp-image d-inline-block"
                            href="images/book/1.jpg"
                            title=""
                          >
                            <img
                              src="images/book/1.jpg"
                              class="img-fluid shadow rounded"
                              alt="work-image"
                            />
                          </a>
                          <div class="content bg-white p-3">
                            <h5 class="mb-0">
                              <a href="javascript:void(0)" class="text-dark title"
                                >Iphone mockup</a
                              >
                            </h5>
                            <h6 class="text-muted tag mb-0">$ 16</h6>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide>
                      <div
                        class="card border-0 work-container work-grid position-relative d-block overflow-hidden mx-3"
                      >
                        <div class="card-body p-0">
                          <a
                            class="mfp-image d-inline-block"
                            href="images/book/2.jpg"
                            title=""
                          >
                            <img
                              src="images/book/2.jpg"
                              class="img-fluid shadow rounded"
                              alt="work-image"
                            />
                          </a>
                          <div class="content bg-white p-3">
                            <h5 class="mb-0">
                              <a href="javascript:void(0)" class="text-dark title"
                                >Iphone mockup</a
                              >
                            </h5>
                            <h6 class="text-muted tag mb-0">$ 16</h6>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide>
                      <div
                        class="card border-0 work-container work-grid position-relative d-block overflow-hidden mx-3"
                      >
                        <div class="card-body p-0">
                          <a
                            class="mfp-image d-inline-block"
                            href="images/book/3.jpg"
                            title=""
                          >
                            <img
                              src="images/book/3.jpg"
                              class="img-fluid shadow rounded"
                              alt="work-image"
                            />
                          </a>
                          <div class="content bg-white p-3">
                            <h5 class="mb-0">
                              <a href="javascript:void(0)" class="text-dark title"
                                >Iphone mockup</a
                              >
                            </h5>
                            <h6 class="text-muted tag mb-0">$ 16</h6>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide>
                      <div
                        class="card border-0 work-container work-grid position-relative d-block overflow-hidden mx-3"
                      >
                        <div class="card-body p-0">
                          <a
                            class="mfp-image d-inline-block"
                            href="images/book/4.jpg"
                            title=""
                          >
                            <img
                              src="images/book/4.jpg"
                              class="img-fluid shadow rounded"
                              alt="work-image"
                            />
                          </a>
                          <div class="content bg-white p-3">
                            <h5 class="mb-0">
                              <a href="javascript:void(0)" class="text-dark title"
                                >Iphone mockup</a
                              >
                            </h5>
                            <h6 class="text-muted tag mb-0">$ 16</h6>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide>
                      <div
                        class="card border-0 work-container work-grid position-relative d-block overflow-hidden mx-3"
                      >
                        <div class="card-body p-0">
                          <a
                            class="mfp-image d-inline-block"
                            href="images/book/5.jpg"
                            title=""
                          >
                            <img
                              src="images/book/5.jpg"
                              class="img-fluid shadow rounded"
                              alt="work-image"
                            />
                          </a>
                          <div class="content bg-white p-3">
                            <h5 class="mb-0">
                              <a href="javascript:void(0)" class="text-dark title"
                                >Iphone mockup</a
                              >
                            </h5>
                            <h6 class="text-muted tag mb-0">$ 16</h6>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide>
                      <div
                        class="card border-0 work-container work-grid position-relative d-block overflow-hidden mx-3"
                      >
                        <div class="card-body p-0">
                          <a
                            class="mfp-image d-inline-block"
                            href="images/book/6.jpg"
                            title=""
                          >
                            <img
                              src="images/book/6.jpg"
                              class="img-fluid shadow rounded"
                              alt="work-image"
                            />
                          </a>
                          <div class="content bg-white p-3">
                            <h5 class="mb-0">
                              <a href="javascript:void(0)" class="text-dark title"
                                >Iphone mockup</a
                              >
                            </h5>
                            <h6 class="text-muted tag mb-0">$ 16</h6>
                          </div>
                        </div>
                      </div>
                    </Slide>
                    <Slide>
                      <div
                        class="card border-0 work-container work-grid position-relative d-block overflow-hidden mx-3"
                      >
                        <div class="card-body p-0">
                          <a
                            class="mfp-image d-inline-block"
                            href="images/book/7.jpg"
                            title=""
                          >
                            <img
                              src="images/book/7.jpg"
                              class="img-fluid shadow rounded"
                              alt="work-image"
                            />
                          </a>
                          <div class="content bg-white p-3">
                            <h5 class="mb-0">
                              <a href="javascript:void(0)" class="text-dark title"
                                >Iphone mockup</a
                              >
                            </h5>
                            <h6 class="text-muted tag mb-0">$ 16</h6>
                          </div>
                        </div>
                      </div>
                    </Slide>
                  </carousel>
                </div>
              </div>
              <!--end row-->
            </div>
            <div class="container mt-100 mt-60">
              <div class="row justify-content-center">
                <div class="col-12">
                  <div class="section-title text-center mb-4 pb-2">
                    <h5 class="mb-4">研究成果</h5>
                  </div>
                </div>
              </div>
            </div>

            <div class="container">

        <div class="row justify-content-center mt-4">
          <div class="col-lg-8 col-12">
            <carousel
              id="single-owl"
              class="owl-carousel owl-theme"
              dir="ltr"
              :per-page="1"
              :loop="true"
              :autoplay="true"
            >
              <Slide>
                <div class="card rounded bg-light overflow-hidden border-0 m-2">
                  <div class="row align-items-center no-gutters">
                    <div class="col-md-4">
                      <img
                        src="images/book/1.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>

                    <div class="col-md-8">
                      <div class="card-body customer-testi">
                        <h6 class="text-primary font-weight-bold">
                          Thomas Israel
                          <small class="text-muted d-block">Driver</small>
                        </h6>
                        <ul class="list-unstyled mb-0">
                          <li class="list-inline-item">
                            <i class="mdi mdi-star text-warning"></i>
                          </li>
                          <li class="list-inline-item">
                            <i class="mdi mdi-star text-warning"></i>
                          </li>
                          <li class="list-inline-item">
                            <i class="mdi mdi-star text-warning"></i>
                          </li>
                          <li class="list-inline-item">
                            <i class="mdi mdi-star text-warning"></i>
                          </li>
                          <li class="list-inline-item">
                            <i class="mdi mdi-star text-warning"></i>
                          </li>
                        </ul>
                        <p class="text-muted h6 mb-0 font-italic">
                          " It seems that only fragments of the original text
                          remain in the Ipsum texts used today. The well known
                          have originated in the 16th century. "
                        </p>
                      </div>
                    </div>
                    <!--end col-->
                  </div>
                  <!--end row-->
                </div>
                <!-- Review End -->
              </Slide>
              <Slide>
                <!-- Review Start -->
                <div class="card rounded bg-light overflow-hidden border-0 m-2">
                  <div class="row align-items-center no-gutters">
                    <div class="col-md-4">
                      <img
                        src="images/book/2.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <!--end col-->

                    <div class="col-md-8">
                      <div class="card-body customer-testi">
                        <h6 class="text-primary font-weight-bold">
                          Barbara McIntosh
                          <small class="text-muted d-block">User</small>
                        </h6>
                        <ul class="list-unstyled mb-0">
                          <li class="list-inline-item">
                            <i class="mdi mdi-star text-warning"></i>
                          </li>
                          <li class="list-inline-item">
                            <i class="mdi mdi-star text-warning"></i>
                          </li>
                          <li class="list-inline-item">
                            <i class="mdi mdi-star text-warning"></i>
                          </li>
                          <li class="list-inline-item">
                            <i class="mdi mdi-star text-warning"></i>
                          </li>
                          <li class="list-inline-item">
                            <i class="mdi mdi-star text-warning"></i>
                          </li>
                        </ul>
                        <p class="text-muted h6 mb-0 font-italic">
                          " This seems that only fragments of the original text
                          remain in the Ipsum texts used today. The well known
                          have originated in the 16th century. "
                        </p>
                      </div>
                    </div>
                    <!--end col-->
                  </div>
                  <!--end row-->
                </div>
                <!-- Review End -->
              </Slide>
              <Slide>
                <!-- Review Start -->
                <div class="card rounded bg-light overflow-hidden border-0 m-2">
                  <div class="row align-items-center no-gutters">
                    <div class="col-md-4">
                      <img
                        src="images/book/3.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <!--end col-->

                    <div class="col-md-8">
                      <div class="card-body customer-testi">
                        <h6 class="text-primary font-weight-bold">
                          Christa Smith
                          <small class="text-muted d-block">Passenger</small>
                        </h6>
                        <ul class="list-unstyled mb-0">
                          <li class="list-inline-item">
                            <i class="mdi mdi-star text-warning"></i>
                          </li>
                          <li class="list-inline-item">
                            <i class="mdi mdi-star text-warning"></i>
                          </li>
                          <li class="list-inline-item">
                            <i class="mdi mdi-star text-warning"></i>
                          </li>
                          <li class="list-inline-item">
                            <i class="mdi mdi-star text-warning"></i>
                          </li>
                          <li class="list-inline-item">
                            <i class="mdi mdi-star text-warning"></i>
                          </li>
                        </ul>
                        <p class="text-muted h6 mb-0 font-italic">
                          " I seems that only fragments of the original text
                          remain in the Ipsum texts used today. The well known
                          have originated in the 16th century. "
                        </p>
                      </div>
                    </div>
                    <!--end col-->
                  </div>
                  <!--end row-->
                </div>
                <!-- Review End -->
              </Slide>
              <Slide>
                <!-- Review Start -->
                <div class="card rounded bg-light overflow-hidden border-0 m-2">
                  <div class="row align-items-center no-gutters">
                    <div class="col-md-4">
                      <img
                        src="images/book/4.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <!--end col-->

                    <div class="col-md-8">
                      <div class="card-body customer-testi">
                        <h6 class="text-primary font-weight-bold">
                          Carl Oliver
                          <small class="text-muted d-block">Driver</small>
                        </h6>
                        <ul class="list-unstyled mb-0">
                          <li class="list-inline-item">
                            <i class="mdi mdi-star text-warning"></i>
                          </li>
                          <li class="list-inline-item">
                            <i class="mdi mdi-star text-warning"></i>
                          </li>
                          <li class="list-inline-item">
                            <i class="mdi mdi-star text-warning"></i>
                          </li>
                          <li class="list-inline-item">
                            <i class="mdi mdi-star text-warning"></i>
                          </li>
                          <li class="list-inline-item">
                            <i class="mdi mdi-star text-warning"></i>
                          </li>
                        </ul>
                        <p class="text-muted h6 mb-0 font-italic">
                          " Fully seems that only fragments of the original text
                          remain in the Ipsum texts used today. The well known
                          have originated in the 16th century. "
                        </p>
                      </div>
                    </div>
                    <!--end col-->
                  </div>
                  <!--end row-->
                </div>
                <!-- Review End -->
              </Slide>
            </carousel>
          </div>
        </div>
            </div>
        </section>

        <section class="section" id="event">
            <div class="container">
                <div class="row align-items-center mb-4 pb-2">
                    <div class="col-lg-6">
                        <div class="section-title text-center text-lg-left">
                            <h4 class="title mb-4 mb-lg-0">
                                社区活动
                            </h4>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="section-title text-center text-lg-left">
                            <p class="text-muted mb-0 mx-auto para-desc">
                                OCC
                                <span class="text-primary font-weight-bold">社区活动</span>
                                旨在洞察未来
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="main-icon rounded-pill text-primary text-center mt-4 pt-2"></div>
                        <div class="timeline-page pt-2 position-relative">
                            <div class="timeline-item mt-4">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="duration date-label-left border rounded p-2 px-4 position-relative shadow">2022.10.23 - 北京 - 故宫博物馆 - 【阿里斯顿咖啡机阿斯顿发布】</div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="card blog rounded border-0 shadow overflow-hidden">
                                            <div class="row align-items-center no-gutters">
                                                <div class="col-md-6 order-2 order-md-1">
                                                    <div class="card-body content">
                                                        <h5><a href="javascript:void(0)" class="card-title title text-dark">阿里烧烤的积分来看</a></h5>
                                                        <p class="text-muted mb-0">Due to its widespread use as filler text for layouts, non-readability</p>
                                                        <div class="post-meta d-flex justify-content-between mt-3">
                                                            <ul class="list-unstyled mb-0">
                                                                <li class="list-inline-item mr-2 mb-0"><a href="javascript:void(0)" class="text-muted like"><i class="mdi mdi-heart-outline mr-1"></i>33</a></li>
                                                                <li class="list-inline-item"><a href="javascript:void(0)" class="text-muted comments"><i class="mdi mdi-comment-outline mr-1"></i>08</a></li>
                                                            </ul>
                                                            <router-link to="/page-blog-detail" class="text-muted readmore">Read More <i class="mdi mdi-chevron-right"></i></router-link>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-md-6 order-1 order-md-2">
                                                    <img src="images/work/15.jpg" class="img-fluid" alt="">
                                                    <div class="overlay bg-dark"></div>
                                                    <div class="author">
                                                        <small class="text-light user d-block"><i class="mdi mdi-account"></i> 北京</small>
                                                        <small class="text-light date"><i class="mdi mdi-calendar-check"></i> 2022.10.23</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="timeline-item mt-4">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="duration date-label-left border rounded p-2 px-4 position-relative shadow">2022.10.23 - 北京 - 故宫博物馆 - 【阿里斯顿咖啡机阿斯顿发布】</div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="card blog rounded border-0 shadow overflow-hidden">
                                            <div class="row align-items-center no-gutters">
                                                <div class="col-md-6 order-2 order-md-1">
                                                    <div class="card-body content">
                                                        <h5><a href="javascript:void(0)" class="card-title title text-dark">阿里烧烤的积分来看</a></h5>
                                                        <p class="text-muted mb-0">Due to its widespread use as filler text for layouts, non-readability</p>
                                                        <div class="post-meta d-flex justify-content-between mt-3">
                                                            <ul class="list-unstyled mb-0">
                                                                <li class="list-inline-item mr-2 mb-0"><a href="javascript:void(0)" class="text-muted like"><i class="mdi mdi-heart-outline mr-1"></i>33</a></li>
                                                                <li class="list-inline-item"><a href="javascript:void(0)" class="text-muted comments"><i class="mdi mdi-comment-outline mr-1"></i>08</a></li>
                                                            </ul>
                                                            <router-link to="/page-blog-detail" class="text-muted readmore">Read More <i class="mdi mdi-chevron-right"></i></router-link>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-md-6 order-1 order-md-2">
                                                    <img src="images/work/15.jpg" class="img-fluid" alt="">
                                                    <div class="overlay bg-dark"></div>
                                                    <div class="author">
                                                        <small class="text-light user d-block"><i class="mdi mdi-account"></i> 北京</small>
                                                        <small class="text-light date"><i class="mdi mdi-calendar-check"></i> 2022.10.23</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="timeline-item mt-4">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="duration date-label-left border rounded p-2 px-4 position-relative shadow">2022.10.23 - 北京 - 故宫博物馆 - 【阿里斯顿咖啡机阿斯顿发布】</div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="card blog rounded border-0 shadow overflow-hidden">
                                            <div class="row align-items-center no-gutters">
                                                <div class="col-md-6 order-2 order-md-1">
                                                    <div class="card-body content">
                                                        <h5><a href="javascript:void(0)" class="card-title title text-dark">阿里烧烤的积分来看</a></h5>
                                                        <p class="text-muted mb-0">Due to its widespread use as filler text for layouts, non-readability</p>
                                                        <div class="post-meta d-flex justify-content-between mt-3">
                                                            <ul class="list-unstyled mb-0">
                                                                <li class="list-inline-item mr-2 mb-0"><a href="javascript:void(0)" class="text-muted like"><i class="mdi mdi-heart-outline mr-1"></i>33</a></li>
                                                                <li class="list-inline-item"><a href="javascript:void(0)" class="text-muted comments"><i class="mdi mdi-comment-outline mr-1"></i>08</a></li>
                                                            </ul>
                                                            <router-link to="/page-blog-detail" class="text-muted readmore">Read More <i class="mdi mdi-chevron-right"></i></router-link>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-md-6 order-1 order-md-2">
                                                    <img src="images/work/15.jpg" class="img-fluid" alt="">
                                                    <div class="overlay bg-dark"></div>
                                                    <div class="author">
                                                        <small class="text-light user d-block"><i class="mdi mdi-account"></i> 北京</small>
                                                        <small class="text-light date"><i class="mdi mdi-calendar-check"></i> 2022.10.23</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                  <div class="col-12 text-center mt-4">
                    <a href="javascript:void(0)" class="btn btn-primary btn-lg mt-4 mr-2">发起活动</a>
                  </div>
                </div>
            </div>
        </section>
        <section class="section bg-light" id="about">
          <div class="container mt-100 mt-60">
            <div class="row align-items-center">
              <div class="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div class="position-relative">
                  <img
                    src="images/company/about.jpg"
                    class="rounded img-fluid mx-auto d-block"
                    alt=""
                  />
                </div>
              </div>

              <div class="col-lg-7 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div class="section-title ml-lg-4">
                  <h4 class="title mb-4">关于我们</h4>
                  <p class="text-muted">
                    Start working with
                    <span class="text-primary font-weight-bold">Landrick</span> that
                    can provide everything you need to generate awareness, drive
                    traffic, connect. Dummy text is text that is used in the
                    publishing industry or by web designers to occupy the space
                    which will later be filled with 'real' content. This is required
                    when, for example, the final text is not yet available. Dummy
                    texts have been in use by typesetters since the 16th century.
                  </p>
                  <a href="javascript:void(0)" class="btn btn-primary mt-3"
                    >关注公众号<i class="mdi mdi-chevron-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <b-modal
            id="modal-project"
            hide-footer
            size="md"
            header-close-variant="white"
            header-class="border-0"
            content-class="border-0"
            centered
        >
            <div class="card text-center border-0 p-4">
                <div class="position-relative">
                    <img
                        src="images/qrcode-project.png"
                        class="img-fluid avatar avatar-ex-large shadow"
                        alt=""
                    />
                </div>
                <div class="card-body py-3 px-0 content">
                    <h6 class="mb-1 mt-4">
                        <a href="javascript:void(0)" class="name text-dark">
                            请使用微信扫一扫，并填写表单完成申请
                        </a>
                    </h6>
                </div>
            </div>
        </b-modal>

        <b-modal
            id="modal-co-creator"
            hide-footer
            size="md"
            header-close-variant="white"
            header-class="border-0"
            content-class="border-0"
            centered
        >
            <div class="card text-center border-0 p-4">
                <div class="position-relative">
                    <img
                        src="images/qrcode-co-creator.png"
                        class="img-fluid avatar avatar-ex-large shadow"
                        alt=""
                    />
                </div>
                <div class="card-body py-3 px-0 content">
                    <h6 class="mb-1 mt-4">
                        <a href="javascript:void(0)" class="name text-dark">
                            请使用微信扫一扫，并填写表单完成申请
                        </a>
                    </h6>
                </div>
            </div>
        </b-modal>

        <b-modal
            id="modal-volunteer"
            hide-footer
            size="md"
            header-close-variant="white"
            header-class="border-0"
            content-class="border-0"
            centered
        >
            <div class="card text-center border-0 p-4">
                <div class="position-relative">
                    <img
                        src="images/qrcode-volunteer.png"
                        class="img-fluid avatar avatar-ex-large shadow"
                        alt=""
                    />
                </div>
                <div class="card-body py-3 px-0 content">
                    <h6 class="mb-1 mt-4">
                        <a href="javascript:void(0)" class="name text-dark">
                            请使用微信扫一扫，并填写表单完成申请
                        </a>
                    </h6>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<style>
.swiper-button-prev::after {
    display: none;
}

.swiper-button-next::after {
    display: none;
}

.modal-content {
    background-color: transparent;
}
</style>
