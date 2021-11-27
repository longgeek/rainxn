<script>
/**
 * Page-partner component
 */
export default {
    page: { title: '合作伙伴' },
    data() {
        return {
            partners: [],
        };
    },
};
</script>

<template>
<div>
    <section class="bg-half d-table w-100 border-bottom">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12 text-center">
                    <div class="page-next-level">
                        <div
                            class="icon d-flex align-items-center justify-content-center bg-soft-primary rounded-circle mx-auto mb-5"
                            style="height: 90px; width: 90px"
                        >
                            <i class="uil uil-suitcase h1 mb-0"></i>
                        </div>
                        <h4 class="title mb-4">
                            合作伙伴
                        </h4>
                        <p class="text-muted para-desc mb-0 mx-auto">
                            <router-link to="/contact" class="text-primary font-weight-bold">虚位以待，立即联系我们，建立合作</router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>
