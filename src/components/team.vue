<script>
export default {
    props: {
        teamData: {
            type: Array,
            default: [],
        },
    },
};
</script>

<template>
    <div class="row">
        <div
            class="col-lg-3 col-md-6 mt-4 pt-2"
            v-for="(item, index) in teamData"
            :key="index"
        >
            <div class="card team text-center border-0">
                <div class="position-relative">
                    <img
                        :src="`${item.image}`"
                        class="img-fluid avatar avatar-ex-large rounded-circle shadow"
                        alt=""
                    />
                </div>
                <div class="card-body py-3 px-0 content">
                    <h5 class="mb-0">
                        <a href="javascript:void(0)" class="name text-dark">{{ item.name }}</a>
                    </h5>
                    <small class="designation text-muted">
                        <div v-for="(desc, index) in item.designation" :key="index">{{ desc }}</div>
                    </small>
                </div>
            </div>
        </div>
    </div>
</template>
