<script>
import { Carousel, Slide } from "vue-carousel";
import { VueTyper } from "vue-typer";
import countTo from "vue-count-to";

/**
 * Index-landing-one component
 */
export default {
    page: { title: '关于我们' },
    data() {
        return {
            news: [],
            projects: [],
        };
    },
    components: {
        Carousel,
        Slide,
        countTo,
        "vue-typer": VueTyper,
    },
    mounted() {
        this.$nextTick(()=>[
            this.goAnchor(window.location.hash)
        ]);
    },
    methods: {
        goAnchor(selector) {
            let anchor = this.$el.querySelector(selector);
            document.documentElement.scrollTop = anchor.offsetTop;
        },
    }
};
</script>

<template>
    <div>
        <!-- Index Main Start -->
        <section class="bg-half-170 border-bottom d-table w-100" id="home">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-7">
                        <div class="title-heading mt-4">
                            <h3 class="mb-3">
                                雨本，<br/>重塑科技商业<span class="element text-primary">
                                    <vue-typer
                                        :text="[
                                            '新生态',
                                        ]"
                                    ></vue-typer>
                                </span>
                            </h3>
                            <p class="text-muted">
                                专注前沿科技产业服务，提供前沿科技产业咨询、政策解读、行业分析、投融资对接以及园区支持服务的产业机构。
                            </p>
                            <div class="mt-4">
                                <a
                                    href="#values"
                                    class="btn btn-primary rounded"
                                    ><i class="uil uil-arrow-down mr-2"></i> 了解更多</a
                                >
                            </div>
                        </div>
                    </div>
                    <!--end col-->

                    <div class="col-lg-6 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div class="position-relative">
                            <img
                                src="images/rainxn.jpg"
                                class="rounded img-fluid mx-auto d-block"
                                alt=""
                            />
                        </div>
                    </div>
                    <!--end col-->
                </div>
                <!--end row-->
            </div>
            <!--end container-->
        </section>

        <section class="section border-bottom" id="values">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <div class="section-title text-center mb-4 pb-2">
                            <h5 class="mb-4">
                                我们的价值观
                            </h5>
                        </div>
                    </div>
                    <!--end col-->
                </div>
                <!--end row-->
                <div class="row">
                    <div class="col-md-4 col-12 mt-4 pt-2">
                        <div class="features text-center">
                            <div class="image position-relative d-inline-block">
                                <i class="uil uil-book-open h1 text-primary"></i>
                            </div>
                            <div class="content mt-4 pt-2">
                                <h6>开放</h6>
                            </div>
                        </div>
                    </div>
                    <!--end col-->
                    <div class="col-md-4 col-12 mt-4 pt-2">
                        <div class="features text-center">
                            <div class="image position-relative d-inline-block">
                                <i class="uil uil-channel h1 text-primary"></i>
                            </div>
                            <div class="content mt-4">
                                <h6>共生</h6>
                            </div>
                        </div>
                    </div>
                    <!--end col-->
                    <div class="col-md-4 col-12 mt-4 pt-2">
                        <div class="features text-center">
                            <div class="image position-relative d-inline-block">
                                <i class="uil uil-life-ring h1 text-primary"></i>
                            </div>
                            <div class="content mt-4">
                                <h6>可持续</h6>
                            </div>
                        </div>
                    </div>
                    <!--end col-->
                </div>
            </div>
            <!--end container-->
        </section>
        <!--end section-->

        <section class="section border-bottom" id="vision">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 text-center">
                        <div class="section-title mb-4 pb-2">
                            <h5 class="mb-4">我们的愿景</h5>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                        <div class="card bg-light rounded shadow border-0">
                            <div class="card-body py-5 text-center">
                                <i class="uil uil-rupee-sign h1 text-primary"></i>
                                <div class="mt-2">
                                    <h6 class="card-title">
                                        <a href="javascript:void(0)" class="text-primary">技术迭代</a>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                        <div class="card bg-light rounded shadow border-0">
                            <div class="card-body py-5 text-center">
                                <i class="uil uil-shield h1 text-primary"></i>
                                <div class="mt-2">
                                    <h6 class="card-title">
                                        <a href="javascript:void(0)" class="text-primary">商业创新</a>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                        <div class="card bg-light rounded shadow border-0">
                            <div class="card-body py-5 text-center">
                                <i class="uil uil-headphones h1 text-primary"></i>
                                <div class="mt-2">
                                    <h6 class="card-title">
                                        <a href="javascript:void(0)" class="text-primary">产业赋能</a>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                        <div class="card bg-light rounded shadow border-0">
                            <div class="card-body py-5 text-center">
                                <i class="uil uil-exchange h1 text-primary"></i>
                                <div class="mt-2">
                                    <h6 class="card-title">
                                        <a href="javascript:void(0)" class="text-primary">生活美好</a>
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section
          class="bg-half-170 d-table w-100 border-bottom"
          style="background: url('images/build.png') bottom no-repeat"
          id="mission"
        >
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 text-center">
                        <div class="section-title mb-4 pb-2">
                            <h5 class="mb-4">我们的使命 - <span class="text-primary">开放技术驱动城市可持续发展</span></h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section border-bottom" id="we">
            <div class="container mt-100 mt-60">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <div class="mr-lg-5">
                            <img
                                src="images/big-launch.svg"
                                class="img-fluid"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div class="section-title">
                            <h5 class="mb-4">
                                我们是谁
                            </h5>
                            <p class="text-muted">
                                恒星终将熄灭，生命终将消失，宇宙终将变成一片死寂。——熵增定律为人类描绘了一幅悲壮的终极图景
                            </p>
                            <ul class="list-unstyled text-muted">
                                <li class="mb-0">
                                    <span class="text-primary h5 mr-2"><i class="uil uil-check-circle align-middle"></i></span>如何对抗熵增，实现超越？开放系统、引入外力，是唯一的解决方案。比如生命过程就是在与外界环境的交互与交换中，以增加环境的熵，从而实现了自身的熵减，也就是说实现了生命自身的稳定与长续。
                                </li>
                                <li class="mb-0">
                                    <span class="text-primary h5 mr-2"><i class="uil uil-check-circle align-middle"></i></span>生命如此，人类所创建的城市同样如此。城市若想可持续发展，开放系统、引入外部资源，同样是唯一的选择。
                                </li>
                                <li class="mb-0">
                                    <span class="text-primary h5 mr-2"><i class="uil uil-check-circle align-middle"></i></span>而OpenCity就是这么一个旨在通过开放、开源，实现城市可持续发展战略的坚定践行者。
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
