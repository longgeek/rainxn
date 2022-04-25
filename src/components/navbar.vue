<script>
/**
 * Navbar component
 */
export default {
    data() {
        return {
            user: {},
            isCondensed: false,
            homeUrl: process.env.VUE_APP_BASE_URL || '/',
        };
    },
    props: {
        isWhiteNavbar: {
            type: Boolean,
        },
        navLight: {
            type: Boolean,
        },
    },
    created() {
    },
    mounted: () => {
        window.onscroll = function () {
            onwindowScroll();
        };

        function onwindowScroll() {
            if (
                document.body.scrollTop > 50 ||
                document.documentElement.scrollTop > 50
            ) {
                document.getElementById("topnav").classList.add("nav-sticky");
            } else {
                document.getElementById("topnav").classList.remove("nav-sticky");
            }

            if (
                document.body.scrollTop > 100 ||
                document.documentElement.scrollTop > 100
            ) {
                document.getElementById("back-to-top").style.display = "inline";
            } else {
                document.getElementById("back-to-top").style.display = "none";
            }
        }

        var links = document.getElementsByClassName("side-nav-link-ref");
        var matchingMenuItem = null;
        for (var i = 0; i < links.length; i++) {
            if (window.location.pathname === links[i].pathname) {
                matchingMenuItem = links[i];
                break;
            }
        }
    },
    methods: {
        /**
         * Toggle menu
         */
        toggleMenu() {
            this.isCondensed = !this.isCondensed;
            if (this.isCondensed) {
                document.getElementById("navigation").style.display = "block";
            } else document.getElementById("navigation").style.display = "none";
        },

        /**
         * Menu clicked show the submenu
         */
        onMenuClick(event) {
            event.preventDefault();
            const nextEl = event.target.nextSibling.nextSibling;

            if (nextEl && !nextEl.classList.contains("open")) {
                const parentEl = event.target.parentNode;
                if (parentEl) {
                    parentEl.classList.remove("open");
                }
                nextEl.classList.add("open");
            } else if (nextEl) {
                nextEl.classList.remove("open");
            }
            return false;
        },
    },
};
</script>

<template>
    <div>
        <!-- Navbar STart -->
        <header
            id="topnav"
            class="defaultscroll sticky"
            :class="{ 'bg-white': isWhiteNavbar === true }"
        >
            <div class="container">
                <!-- Logo container-->
                <div>
                    <a class="logo" :href="homeUrl" v-if="navLight !== true">
                        <img src="@/assets/images/logo.png" height="55" alt="" />
                    </a>
                    <a class="logo" :href="homeUrl" v-else>
                        <img src="@/assets/images/logo.png" class="l-dark" height="55" alt="" />
                        <img
                            src="@/assets/images/logo-light.png"
                            class="l-light"
                            height="55"
                            alt=""
                        />
                    </a>
                </div>
                <!--end login button-->
                <!-- End Logo container-->
                <div class="menu-extras">
                    <div class="menu-item">
                        <!-- Mobile menu toggle-->
                        <a
                            class="navbar-toggle"
                            @click="toggleMenu()"
                            :class="{ open: isCondensed === true }"
                        >
                            <div class="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </a>
                        <!-- End mobile menu toggle-->
                    </div>
                </div>

                <div id="navigation">
                    <ul
                        class="navigation-menu"
                        :class="{ 'nav-light': navLight === true }"
                    >
                        <!-- li :class="{ active: $route.name == 'home'}">
                            <router-link to="/" class="side-nav-link-ref">首页</router-link>
                        </li -->
                        <!-- li class="has-submenu" :class="{ active: $route.name === 'home'}">
                            <router-link :to="homeUrl" class="side-nav-link-ref">关于我们</router-link>
                            <span class="menu-arrow"></span>
                            <ul class="submenu">
                              <li>
                                <a href="/#values" class="side-nav-link-ref">我们的价值观</a>
                              </li>
                              <li>
                                <a href="/#vision" class="side-nav-link-ref">我们的愿景</a>
                              </li>
                              <li>
                                <a href="/#mission" class="side-nav-link-ref">我们的使命</a>
                              </li>
                              <li>
                                <a href="/#we" class="side-nav-link-ref">我们是谁</a>
                              </li>
                            </ul>
                        </li>
                        <li :class="{
                            active: $route.name == 'project' ||
                                    $route.name == 'project-detail'
                        }">
                            <router-link to="/project" class="side-nav-link-ref">我们的项目</router-link>
                        </li>
                        <li :class="{ active: $route.name == 'information'}">
                            <router-link to="/information" class="side-nav-link-ref">信息披露</router-link>
                        </li>
                        <li :class="{ active: $route.name == 'partner'}">
                            <router-link to="/partner" class="side-nav-link-ref">合作伙伴</router-link>
                        </li>
                        <li :class="{ active: $route.name == 'contact'}">
                            <router-link to="/contact" class="side-nav-link-ref">联系我们</router-link>
                        </li -->
                    </ul>
                </div>
                <!--end navigation-->
            </div>
            <!--end container-->
        </header>
        <!--end header-->
        <!-- Navbar End -->
    </div>
</template>
