<script>
/**
 * Project component
 */
export default {
    page: { title: '我们的项目' },
    data() {
        return {
            filter: 1,
        }
    },
}
</script>

<template>
<div>
    <section class="bg-half d-table w-100 pb-0">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12 text-center">
                    <div class="page-next-level">
                        <h4 class="title mb-4">
                            我们的项目
                        </h4>
                        <p class="text-muted para-desc mb-0 mx-auto">
                            宗旨：通过解决<span class="text-primary font-weight-bold"> "城市病"</span>，提高人民群众的生活质量，从而实现城市的可持续发展。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section pb-0" id="barrier-free">
        <div class="container">
            <div class="card rounded shadow border-0 bg-light overflow-hidden">
                <div class="row no-gutters align-items-center">
                    <div class="col-lg-6">
                        <img src="images/o1.jpg" class="img-fluid" alt="">
                    </div>
                    <div class="col-lg-6">
                        <div class="card-body section-title p-md-5">
                            <h5 class="mb-4">无障碍城市体验中心</h5>
                            <p class="text-muted para-desc mb-0">
                                无障碍城市体验中心是无障碍技术联合研发中心，是无障碍产品孵化中心，是无障碍服务推广中心，是无障碍未来联合策源中心
                            </p>
                            <p class="text-primary mt-3">
                                <i class="uil uil-megaphone"></i>
                                征集共创者：
                                <span class="opacity-8">
                                    城市规划设计单位、
                                    无障碍设备及服务提供商、
                                    无障碍领域专家学者、
                                    无障碍建设需求放
                                </span>
                            </p>
                            <div class="mt-4 pt-2">
                                <a href="javascript:void(0)" class="btn btn-primary" v-b-modal.modal-project>加入我们 <i class="mdi mdi-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section pb-0" id="carbon">
        <div class="container">
            <div class="card rounded shadow border-0 bg-light overflow-hidden">
                <div class="row no-gutters align-items-center">
                    <div class="col-lg-6">
                        <img src="images/o2.jpg" class="img-fluid" alt="">
                    </div>
                    <div class="col-lg-6">
                        <div class="card-body section-title p-md-5">
                            <h5 class="mb-4">碳中和垃圾分类项目</h5>
                            <p class="text-muted para-desc mb-0">
                                简介....
                            </p>
                            <p class="text-primary mt-3">
                                <i class="uil uil-megaphone"></i>
                                征集共创者：
                                <span class="opacity-8">
                                    产品生产企业、
                                    垃圾处理单位、
                                    技术与新材料研发企业
                                </span>
                            </p>
                            <div class="mt-4 pt-2">
                                <a href="javascript:void(0)" class="btn btn-primary" v-b-modal.modal-project>加入我们 <i class="mdi mdi-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section pb-0" id="health-code">
        <div class="container">
            <div class="card rounded shadow border-0 bg-light overflow-hidden">
                <div class="row no-gutters align-items-center">
                    <div class="col-lg-6">
                        <img src="images/b1.jpg" class="img-fluid" alt="">
                    </div>
                    <div class="col-lg-6">
                        <div class="card-body section-title p-md-5">
                            <h5 class="mb-4">健康码价值挖掘中心</h5>
                            <p class="text-muted para-desc mb-0">
                                简介....
                            </p>
                            <p class="text-primary mt-3">
                                <i class="uil uil-megaphone"></i>
                                征集共创者：
                                <span class="opacity-8">
                                    产品生产企业、
                                    垃圾处理单位、
                                    技术与新材料研发企业
                                </span>
                            </p>
                            <div class="mt-4 pt-2">
                                <a href="javascript:void(0)" class="btn btn-primary" v-b-modal.modal-project>加入我们 <i class="mdi mdi-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section border-bottom" id="lecture-hall">
        <div class="container">
            <div class="card rounded shadow border-0 bg-light overflow-hidden">
                <div class="row no-gutters align-items-center">
                    <div class="col-lg-6">
                        <img src="images/b2.jpg" class="img-fluid" alt="">
                    </div>
                    <div class="col-lg-6">
                        <div class="card-body section-title p-md-5">
                            <h5 class="mb-4">国潮非遗大讲堂</h5>
                            <p class="text-muted para-desc mb-0">
                                简介....
                            </p>
                            <p class="text-primary mt-3">
                                <i class="uil uil-megaphone"></i>
                                征集共创者：
                                <span class="opacity-8">
                                    产品生产企业、
                                    垃圾处理单位、
                                    技术与新材料研发企业
                                </span>
                            </p>
                            <div class="mt-4 pt-2">
                                <a href="javascript:void(0)" class="btn btn-primary" v-b-modal.modal-project>加入我们 <i class="mdi mdi-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-100 mt-60">
                <div class="rounded bg-primary p-lg-5 p-4">
                    <div class="row align-items-end">
                        <div class="col-md-8">
                            <div class="section-title text-md-left text-center">
                                <h5 class="mb-3 text-white title-dark">征集更多项目</h5>
                                <p class="text-white-50 mb-0">项目入驻标准：出行以及无障碍领域项目</p>
                            </div>
                        </div>
                        <div class="col-md-4 mt-4 mt-sm-0">
                            <div class="text-md-right text-center">
                                <a href="javascript:void(0)" class="btn btn-light" v-b-modal.modal-project>立即提交</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>
