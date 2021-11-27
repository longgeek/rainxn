<script>
    export default {};
</script>

<template>
    <div>
        <footer class="footer" id="footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-12 mb-0 pb-0 pb-md-2">
                        <a href="/" class="logo-footer">
                            <img src="@/assets/images/logo.png" height="55" alt="" />
                        </a>
                        <ul class="list-unstyled social-icon social mb-0 mt-4">
                            <li class="list-inline-item">
                                <img src='images/wechat.jpg' width=100 />
                            </li>
                        </ul>
                    </div>

                    <div class="col-lg-3 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <h6 class="text-dark footer-head">关于我们</h6>
                        <ul class="list-unstyled footer-list mt-4">
                            <li>
                                <a class="text-foot" href="/#values">
                                    <i class="uil uil-angle-right mr-1"></i>
                                    我们的价值观
                                </a>
                            </li>
                            <li>
                                <a class="text-foot" href="#vision">
                                    <i class="uil uil-angle-right mr-1"></i>
                                    我们的愿景
                                </a>
                            </li>
                            <li>
                                <a class="text-foot" href="#mission">
                                    <i class="uil uil-angle-right mr-1"></i>
                                    我们的使命
                                </a>
                            </li>
                            <li>
                                <a class="text-foot" href="#we">
                                    <i class="uil uil-angle-right mr-1"></i>
                                    我们是谁
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-lg-3 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <h6 class="text-dark footer-head">我们的项目</h6>
                        <ul class="list-unstyled footer-list mt-4">
                            <li>
                                <a class="text-foot" href="/project#barrier-free">
                                    <i class="uil uil-angle-right mr-1"></i>
                                    无障碍城市体验中心
                                </a>
                            </li>
                            <li>
                                <a class="text-foot" href="/project#carbon">
                                    <i class="uil uil-angle-right mr-1"></i>
                                    碳中和垃圾分类项目
                                </a>
                            </li>
                            <li>
                                <a class="text-foot" href="/project#health-code">
                                    <i class="uil uil-angle-right mr-1"></i>
                                    健康码价值挖掘中心
                                </a>
                            </li>
                            <li>
                                <a class="text-foot" href="/project#lecture-hall">
                                    <i class="uil uil-angle-right mr-1"></i>
                                    国潮非遗大讲堂
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <h6 class="text-dark footer-head">加入我们</h6>
                        <ul class="list-unstyled footer-list mt-4">
                            <li>
                                <a class="text-foot" v-b-modal.modal-co-creator>
                                    <i class="uil uil-angle-right mr-1"></i>
                                    共创者申请
                                </a>
                            </li>
                            <li>
                                <a class="text-foot" v-b-modal.modal-project>
                                    <i class="uil uil-angle-right mr-1"></i>
                                    项目入驻申请
                                </a>
                            </li>
                        </ul>
                        <p class="mt-4">想了解更多，点击下面按钮立即联系我们</p>
                        <form>
                            <div class="row">
                                <div class="col-lg-12">
                                    <router-link to="/contact" class="btn btn-soft-primary btn-block">
                                        联系我们
                                    </router-link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
        <footer class="footer footer-bar">
            <div class="container text-center">
                <div class="row align-items-center">
                    <div class="col-sm-12">
                        <div class="text-sm-center">
                            <p class="mb-0">
                                Copyright © {{ new Date().getFullYear() }} 深圳雨本信息技术有限公司版权所有
                                <br />
                                <a href="https://beian.miit.gov.cn/" target="_blank" class="text-reset">
                                    粤 ICP 备 17123203 号
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
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
    </div>
</template>
