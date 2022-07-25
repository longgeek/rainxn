<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import { Carousel, Slide } from "vue-carousel";
import { VueTyper } from "vue-typer";
import Team from "@/components/team";

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
            postList: [
                {
                    image: 'images/post/1.png',
                    title: '开源进化论——从市集到城市共同体',
                    desc: '从市集到城市共同体，开源围绕着技术迭代、商业创新、产业升级、社会价值正加速进化进化。',
                    variant: 'primary',
                    type: [],
                    link: "https://mp.weixin.qq.com/s/mpC4_lDCYL0GfHYP7097Cg",
                },
                {
                    image: 'images/post/2.png',
                    title: '面对新技术浪潮，我们准备做点事情——《OCC百人谈》发刊词',
                    desc: '“OCC百人谈”将以文字为主要载体，配合视频、音频等多种形式，窥探并记录中国数字经济起步之初的一页真实。',
                    variant: 'primary',
                    type: [],
                    link: "https://mp.weixin.qq.com/s/6-vCqfXIJ3m1_6uju0KKGQ",
                },
                {
                    image: 'images/post/3.png',
                    title: '线性资本王淮：效率升维，科技投资的底层逻辑',
                    desc: '我们并不强调技术在科学层面上的前沿探索，做科技投资，我们一直关注的是它在工程落地层面的前沿性探索。',
                    variant: 'primary',
                    type: [],
                    link: "",
                },
                {
                    image: 'images/post/4.png',
                    title: '开源会走向怎样的未来？',
                    desc: '20 世纪八十年代初，麻省理工学院 AI 实验室获赠了一台新的激光打印机，能以更高的精度打印图形，并减少了 90％ 的打印时间，但经常会出现卡纸的情况。',
                    variant: 'primary',
                    type: [],
                    link: "",
                },
            ],
            eventList: [
                {
                    image: 'images/event/1.png',
                    title: '“开源大时代——开放、共生、可持续发展”OCC·TFASHION科技+发布会即将启动',
                    desc: '7月25日14:00，为了进一步促进科技与时尚的跨界融合，促进跨界创意与创新的诞生，为城市发展赋能，开放城市共同体携手社区成员特别企划本次活动。',
                    variant: 'primary',
                    type: [],
                    link: "",
                },
                {
                    image: 'images/event/2.png',
                    title: '“开源创业和商业化探索” 直播预告',
                    desc: '7月22日晚6:30，由开放城市共同体发起人杜玉杰作为出品人的《开源创业和商业化探索》专场，将邀请到国内开源领域的资深代表，共同探讨开源和商业化背后那些不为人知的故事。',
                    variant: 'primary',
                    type: [],
                    link: "https://mp.weixin.qq.com/s/ZL5HA_CcqXxQR4uL9XgjRg",
                },
                {
                    image: 'images/event/3.png',
                    title: '“谷歌创新冲刺分享沙龙”直播预告',
                    desc: '7月20日晚8点，开放城市共同体特别筹划“谷歌创新冲刺分享沙龙”直播活动，如何摆脱创业发展过程的瓶颈问题，这里有一套完整的方法论。',
                    variant: 'primary',
                    type: [],
                    link: "https://mp.weixin.qq.com/s/dluel-ncJfBStt9s1fASwQ",
                },
                {
                    image: 'images/event/4.png',
                    title: '“中国软件的创新新机遇在哪里？”主题直播预告',
                    desc: '7月6日晚8点，开源和商业的结合是否可以加速中国公司的成长？从创新的角度来看，中国软件的创新机遇又在哪里呢？关于开源的各种，在这里都有答案。',
                    variant: 'primary',
                    type: [],
                    link: "https://mp.weixin.qq.com/s/nFbwNF3t6yeDxke0EEPB9g",
                },
            ],
            teamData: [
                {
                     image: "images/founder/1.png",
                     name: "许麟济",
                     designation: ["开放城市共同体发起人", "前新加坡建设局国际开发司司长"],
                },
                {
                     image: "images/founder/2.png",
                     name: "杜玉杰",
                     designation: ["开放城市共同体发起人"],
                },
                {
                     image: "images/founder/3.png",
                     name: "高焕堂",
                     designation: ["开放城市共同体发起人", "台湾AIC产业联盟主席"],
                },
                {
                     image: "images/founder/4.png",
                     name: "陈懿新",
                     designation: ["开放城市共同体发起人", "煤油灯科技创始人"],
                },
            ],
            featuresData: [
                {
                    icon: "uil uil-airplay",
                    title: "开放价值的转变",
                    description:
                      "OCC认可价值是通过知识的共伴效应来创造的，维基百科和开源社区就是其中的两个案例，在开源社区中，社区成员互相交流知识，从而产生并分配价值，创造共同体。社区成员而非劳动或资本才是这里的生产实体，通过他们的贡献促成价值创造的条件。在现有体系下，人们不能从开放和贡献的行动中谋生，所以，即便我们创造价值，因为它没有市场价值，也不会被系统认可。有大量知识不具有市场价值，这是当今的根本问题之一。",
                },
                {
                    icon: "uil uil-envelope-shield",
                    title: "平台合作主义",
                    description:
                      "平台合作主义认为攫取式网络等级经济是资本主义的一种转变，从公劳动体系变为直接剥削他人的合作，Google、YouTube、Uber、Airbnb这些公司不再支付任何创建内容和服务的人费用，但从我们的交换系统中吸走价值。像Facebook有15亿人共同创造价值，但全部的市场价值被私有化俘获，即便有了一个基于共同体的高产的对等协作生产系统也无济于事，它的价值也是直接被网络等级平台俘获了。",
                },
                {
                    icon: "uil uil-edit-alt",
                    title: "开放城市共同体",
                    description:
                      "开放共同体有助于开放协同，人们为特定目的而创造共生的合作实体。作为一个共同体成员，创造了大量对大家都可用的事物，特别是以知识的形式。每个人都可以做出贡献，每个人都可以使用它。但为了可持续，必须建立能连接当前市场的合作平台，开放城市共同体应运而生。",
                },
            ],
        };
    },
    components: {
        Team,
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

        <section class="section" id="community">
            <div class="container">
                <div class="row align-items-center mb-4 pb-2">
                    <div class="col-lg-6">
                        <div class="section-title text-center text-lg-left">
                            <h4 class="title mb-4 mb-lg-0">
                                社区动态-文章
                            </h4>
                        </div>
                    </div>
                </div>
                <div class="row projects-wrapper">
                    <div class="col-lg-6 col-md-6 col-12 mt-4 pt-2 business" v-for="(item, index) in postList" :key="index">
                        <div class="card blog border-0 work-container work-classic shadow rounded-md overflow-hidden" style="height: 350px;">
                            <img :src="item.image" class="img-fluid work-image" alt="" style="height: 170px">
                            <div class="card-body">
                                <div class="content">
                                    <div v-if="item.type.length">
                                        OpenCity
                                        <vue-typer
                                            :text="item.type"
                                        ></vue-typer>
                                    </div>
                                    <h5 class="mt-3">
                                        <div href="" class="text-dark title" v-if="!item.link">{{item.title}}</div>
                                        <a :href="item.link" class="text-dark title" v-else target="_blank">{{item.title}}</a>
                                    </h5>
                                    <p class="text-muted">{{ item.desc }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div class="container">
                <div class="row align-items-center mb-4 pb-2">
                    <div class="col-lg-6">
                        <div class="section-title text-center text-lg-left">
                            <h4 class="title mb-4 mb-lg-0">
                                社区动态-活动
                            </h4>
                        </div>
                    </div>
                </div>
                <div class="row projects-wrapper">
                    <div class="col-lg-6 col-md-6 col-12 mt-4 pt-2 business" v-for="(item, index) in eventList" :key="index">
                        <div class="card blog border-0 work-container work-classic shadow rounded-md overflow-hidden" style="height: 350px;">
                            <img :src="item.image" class="img-fluid work-image" alt="" style="height: 170px">
                            <div class="card-body">
                                <div class="content">
                                    <div v-if="item.type.length">
                                        OpenCity
                                        <vue-typer
                                            :text="item.type"
                                        ></vue-typer>
                                    </div>
                                    <h5 class="mt-3">
                                        <div href="" class="text-dark title" v-if="!item.link">{{item.title}}</div>
                                        <a :href="item.link" class="text-dark title" v-else target="_blank">{{item.title}}</a>
                                    </h5>
                                    <p class="text-muted">{{ item.desc }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section border-top" id="occ-builder">
          <div class="container">
              <div class="row align-items-center mb-4 pb-2">
                  <div class="col-lg-6">
                      <div class="section-title text-center text-lg-left">
                          <h4 class="title mb-4 mb-lg-0">
                            OCC 项目创建者行动攻略
                          </h4>
                      </div>
                  </div>
              </div>
          </div>
          <div class="container">
              <div class="row align-items-center">
                  <div class="col-lg-7 col-md-6">
                      <div class="faq-content mr-lg-5">
                          <div class="accordion" id="accordionExampleone">
                              <b-card no-body class="mb-2 border-0 rounded">
                                  <b-card-header class="border-0 bg-light p-3 pr-5">
                                      <a
                                          class="faq position-relative text-dark"
                                          v-b-toggle.accordion-1
                                          href="javascript: void(0);"
                                      >
                                          <h6 class="title mb-0">
                                              如何 “正确” 营造开放<span class="text-primary">共同体</span>?
                                          </h6>
                                      </a>
                                  </b-card-header>
                                  <b-collapse
                                      id="accordion-1"
                                      visible
                                      accordion="my-accordion"
                                      role="tabpanel"
                                  >
                                      <b-card-body class="px-2 py-4">
                                          <p class="text-muted mb-0 faq-ans">
                                            我们详细阐述了“OCC项目创建者行动攻略”，以帮助你可以拥有一个实际可操作的计划，而不仅仅只是拥有一个好的创意或想法。
                                          </p>
                                      </b-card-body>
                                  </b-collapse>
                              </b-card>
                              <b-card no-body class="mb-2 border-0 rounded">
                                  <b-card-header class="border-0 bg-light p-3 pr-5">
                                      <a
                                          class="faq position-relative text-dark"
                                          v-b-toggle.accordion-2
                                          href="javascript: void(0);"
                                      >
                                          <h6 class="title mb-0">
                                            项目设计及执行人
                                          </h6>
                                      </a>
                                  </b-card-header>
                                  <b-collapse
                                      id="accordion-2"
                                      accordion="my-accordion"
                                      role="tabpanel"
                                  >
                                      <b-card-body class="px-2 py-4">
                                          <p class="text-muted mb-0 faq-ans">
                                            项目建议与资源：具体方法如下，我们把工具、信息和补充资源集中起来，方便大家从零开始规划和实施一个能够产生社会效益的项目。
                                            <br />
                                            <br />
                                            共管计划：你最终将拟定自己的项目规划。简单来说，就是你提出想法，我们帮你落实细节。准备好了吗？
                                          </p>
                                      </b-card-body>
                                  </b-collapse>
                              </b-card>
                              <b-card no-body class="mb-2 border-0 rounded">
                                  <b-card-header class="border-0 bg-light p-3 pr-5">
                                      <a
                                          class="faq position-relative text-dark"
                                          v-b-toggle.accordion-3
                                          href="javascript: void(0);"
                                      >
                                          <h6 class="title mb-0">
                                              开始你的项目
                                          </h6>
                                      </a>
                                  </b-card-header>
                                  <b-collapse
                                      id="accordion-3"
                                      accordion="my-accordion"
                                      role="tabpanel"
                                  >
                                      <b-card-body class="px-2 py-4">
                                          <p class="text-muted mb-0 faq-ans">
                                            什么是“项目”：项目，是以实现某一具体成果为目的的短期工作或一系列活动。项目得到的资源有限，往往会有固定期限，因而有明确的起止时间。
                                          </p>
                                      </b-card-body>
                                  </b-collapse>
                              </b-card>

                              <b-card no-body class="mb-2 border-0 rounded">
                                  <b-card-header class="border-0 bg-light p-3 pr-5">
                                      <a
                                          class="faq position-relative text-dark"
                                          v-b-toggle.accordion-4
                                          href="javascript: void(0);"
                                      >
                                          <h6 class="title mb-0">
                                            “OCC项目创建者行动攻略” 是如何运行的？
                                          </h6>
                                      </a>
                                  </b-card-header>
                                  <b-collapse
                                      id="accordion-4"
                                      accordion="my-accordion"
                                      role="tabpanel"
                                  >
                                      <b-card-body class="px-2 py-4">
                                          <p class="text-muted mb-0 faq-ans">
                                            “OCC项目创建者”有六个部分涵盖整个项目周期，涉及到整个项目的各个不同阶段。各部分除了介绍基础知识，还附有一系列指导意见和思考问题，以便于实践。在每一阶段结束时均提供多种资源、工具和指南的链接，帮助大家进一步思考。
                                          </p>
                                      </b-card-body>
                                  </b-collapse>
                              </b-card>
                          </div>
                      </div>
                  </div>
                  <!--end col-->

                  <div class="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                      <img src="images/faq.svg" alt="" />
                  </div>
                  <!--end col-->
              </div>
          </div>

          <!-- div class="container mt-100 mt-60">
              <div class="row justify-content-center">
                  <div class="col-12 text-center">
                      <div class="section-title">
                          <div class="watch-video mt-4 pt-2">
                              <a
                                  href="/occ-builder-detail"
                                  target="_blank"
                                  class="btn btn-primary mb-2"
                              >
                                  查看更多
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div -->
        </section>

        <section class="section border-top">
          <div class="container">
              <div class="row align-items-center mb-4 pb-2">
                  <div class="col-lg-6">
                      <div class="section-title text-center text-lg-left">
                          <h4 class="title mb-4 mb-lg-0">
                              OCC 发起人介绍
                          </h4>
                      </div>
                  </div>
              </div>
          </div>
          <div class="container mt-5 pt-5">
            <Team :team-data="teamData" />
          </div>
        </section>

        <section class="section border-top" id="join">
          <div class="container">
              <div class="row align-items-center mb-4 pb-2">
                  <div class="col-lg-6">
                      <div class="section-title text-center text-lg-left">
                          <h4 class="title mb-4 mb-lg-0">
                              加入 OCC
                          </h4>
                      </div>
                  </div>
              </div>
          </div>
          <div class="container mt-5 pt-5">
            <div class="row">
              <div class="col-12" v-for="(item, index) in featuresData" :key="index">
                <div class="d-flex align-items-center pt-4">
                  <h2 class="text-primary">
                    <i :class="item.icon"></i>
                  </h2>
                  <div class="ml-5">
                    <h5>{{ item.title }}</h5>
                    <p class="text-muted mb-0">{{ item.description }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="container mt-100 mt-60">
                <div class="rounded bg-primary p-lg-5 p-4">
                    <div class="row align-items-end">
                        <div class="col-md-4">
                            <div class="section-title text-md-left text-center">
                                <h5 class="mb-1 text-white title-dark">
                                  加入开放城市共同体
                                </h5>
                            </div>
                        </div>
                        <div class="col-md-8 mt-4 mt-sm-0">
                            <div class="text-md-right text-center">
                                <a href="https://www.wjx.top/vm/PpEMCrr.aspx" target="_blank" class="btn btn-light mr-1 mb-1" v-b-modal.modal-co-creator>个人会员加入申请</a>
                                <a href="https://www.wjx.cn/vm/PwO77rE.aspx" target="_blank" class="btn btn-light mr-1 mb-1" v-b-modal.modal-project>企业会员加入申请</a>
                                <a href="https://www.wjx.cn/vm/wVy1G0l.aspx" target="_blank" class="btn btn-light mb-1">志愿者加入申请</a>
                            </div>
                        </div>
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
