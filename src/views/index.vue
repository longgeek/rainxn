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
        };
    },
    components: {
        Slide,
        Swiper,
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

        <section class="section">
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

            <div class="container mt-100 mt-60">
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
