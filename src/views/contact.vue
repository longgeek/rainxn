<script>
/**
 * Page-contact component
 */
export default {
    page: { title: '联系我们' },
  data () {
    return {
      infoWindow: {
        show: true,
        contents: '电话：15000215712'
      }
    }
  },
  methods: {
    infoWindowClose (e) {
      this.infoWindow.show = false
    },
    infoWindowOpen (e) {
      this.infoWindow.show = true
    },
    clear () {
      this.infoWindow.contents = ''
    }
  }
};
</script>

<template>
<div>
    <section class="bg-half d-table w-100 border-bottom">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12 text-center">
                    <div class="page-next-level">
                        <h4 class="title mb-4">联系我们</h4>
                        <p class="text-muted para-desc mb-0 mx-auto">
                            可使用以下多种方式联系我们
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section border-bottom">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="card border-0 text-center features feature-clean">
                        <div class="icons text-primary text-center mx-auto">
                            <i class="uil uil-phone d-block rounded h3 mb-0"></i>
                        </div>
                        <div class="content mt-3">
                            <h5 class="font-weight-bold">电话</h5>
                            <p class="text-muted">
                                联系电话
                            </p>
                            <a href="tel:15000215712" class="text-primary">15000215712</a>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div class="card border-0 text-center features feature-clean">
                        <div class="icons text-primary text-center mx-auto">
                            <i class="uil uil-envelope d-block rounded h3 mb-0"></i>
                        </div>
                        <div class="content mt-3">
                            <h5 class="font-weight-bold">邮箱</h5>
                            <p class="text-muted">
                                联系邮箱
                            </p>
                            <a href="mailto:contact@rainxn.com" class="text-primary">contact@rainxn.com</a>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div class="card border-0 text-center features feature-clean">
                        <div class="icons text-primary text-center mx-auto">
                            <i class="uil uil-map-marker d-block rounded h3 mb-0"></i>
                        </div>
                        <div class="content mt-3">
                            <h5 class="font-weight-bold">地址</h5>
                            <p class="text-muted">
                                深圳市福田区沙头街道天安社区泰然五路9号天安科技创业园A座5楼
                            </p>
                            <a
                                href="https://map.baidu.com/poi/%E7%A6%8F%E7%94%B0%E5%A4%A9%E5%AE%89%E7%A7%91%E6%8A%80%E5%88%9B%E4%B8%9A%E5%9B%AD/@12694610.650012547,2559925.15,19z?uid=acfcdbe97620cf51354aaeea&ugc_type=3&ugc_ver=1&device_ratio=2&compat=1&pcevaname=pc4.1&newfrom=zhuzhan_webmap&querytype=detailConInfo&da_src=shareurl"
                                target="_blank"
                                class="text-primary">
                                在百度地图中查看
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section border-bottom">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-7 col-md-6 pt-2 pt-sm-0 order-1 order-md-2">
                    <div class="section-title">
                        <h4 class="title mb-4">共创者、项目加入</h4>
                        <p class="text-muted para-desc mx-auto">
                            共创者平台，是一个由具体项目的上下游企业组成的协同创新共同体，旨在通过整合产业链资源，解决城市发展的城市病问题。
                            <br />
                            <br />
                            想要让你的技术被更多人使用吗？想让你的产品被更多人知道吗？想让你的创意改变世界吗？那就带上你的项目加入我们吧。在这里，我们将用群体的力量，用开放开源的方法，加速你产品的成熟与落地，助力城市问题的解决，促成城市的可持续发展。
                        </p>
                        <div class="mt-4">
                            <a href="javascript:void(0)" class="btn btn-primary mt-2 mr-2" v-b-modal.modal-co-creator>共创者申请</a>
                            <a href="javascript:void(0)" class="btn btn-outline-primary mt-2" v-b-modal.modal-project>项目入驻申请</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 col-md-6 order-2 order-md-1">
                    <div class="card border-0">
                        <div class="card-body p-0">
                            <img src="images/contact.svg" class="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section p-0 border-bottom opacity-7">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 p-0">
                    <div class="card map border-0">
                        <div class="card-body p-0">
                            <baidu-map :center="{lng: 114.036386, lat: 22.539484}" zoom="17" style="height: 400px">
                                <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
                                <bm-info-window :position="{lng: 114.036386, lat: 22.539484}" title="深圳雨本信息技术有限公司" :show="infoWindow.show" @close="infoWindowClose" @open="infoWindowOpen">
                                    <p>
                                        天安科技创业园A座5楼
                                        <br />
                                        电话：15000215712
                                    </p>
                                </bm-info-window>
                            </baidu-map>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>
