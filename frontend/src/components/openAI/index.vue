<script setup>
    import { ref } from 'vue';
    import axios from 'axios';
    import router from '../../router';
    let form = ref({
        prompt: '',
        size: '',
    })
    const loading = ref(false)
    const showImage = ref(false)
    const imageUrl = ref([])
    const imageAlt = ref([])

    const onSave = (e) => {
        e.preventDefault()
        loading.value = true
        axios.post("http://localhost:5000/openai/generate-image", {
            prompt: form.value.prompt,
            size: form.value.size
        }).then((response) => {
            loading.value = false
            showImage.value = true
            imageUrl.value = response.data.url
            imageAlt.value = response.data.alt
            // console.log('form', response.data.url)
        }).catch((error) => {
            console.log(error.response.data)
        })
    }
</script>

<template>
  <div class="container-fluid">
    <div class="row">
        <h3 class="text-center mb-3 text-white image-head">Describe An Image</h3>
        <div class="h-100 d-flex align-items-center justify-content-center">
            <form @submit="onSave">
                <div class="mb-3">
                    <input type="text" v-model="form.prompt" style="width: 450px" class="form-control" placeholder="Enter Description">
                </div>
                <div class="mb-3">
                    <select class="form-select" v-model="form.size" aria-label="Default select example">
                        <option disabled>Select size</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </div>
                <div class="mb-3">
                    <button type="submit" class="btn btn-primary">Generate</button>
                </div>
            </form>
        </div>
    </div>
  </div>
  <!-- Spinner -->
  <div v-if="loading">
    <div class="spinner show"></div>
  </div>
  <div v-else></div>
   
  <!-- div containing generated image comes here -->
  <div v-if="showImage">
    <div class="container">
        <div class="row">
            <div class="h-100 d-flex align-items-center justify-content-center">
                <img :src="imageUrl" :alt="imageAlt">
            </div>
        </div>
    </div>
  </div>
  <div v-else></div>

</template>

<style scoped>
    .container-fluid{
        /* background-color: rgb(50, 187, 146); */
        animation: scroll 70s linear infinite;
        background: url("https://images.unsplash.com/photo-1465146633011-14f8e0781093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80"), #111111;
        color: #eee;
        min-width: 360px;
        align-items: center;
        perspective: 1000px;
        perspective-origin: 50% 50%;
    }

    @keyframes scroll {
        100%{
            background-position:0px -3000px;
        }
    }

    @media (prefers-reduced-motion) {
        .container-fluid {
            animation: scroll 200s linear infinite;
        }
    }
    .image-head{
        margin-top: 45px;
    }

    /* Spinner From: https://codepen.io/tbrownvisuals/pen/edGYvx */
    .spinner {
    position: fixed;
    z-index: 999;
    height: 2em;
    width: 2em;
    overflow: show;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: none;
    }

    .show {
    display: block;
    }

    /* Transparent Overlay */
    .spinner:before {
    content: '';
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(rgba(20, 20, 20, 0.8), rgba(0, 0, 0, 0.8));

    background: -webkit-radial-gradient(
        rgba(20, 20, 20, 0.8),
        rgba(0, 0, 0, 0.8)
    );
    }

    /* :not(:required) hides these rules from IE9 and below */
    .spinner:not(:required) {
    /* hide "loading..." text */
    font: 0/0 a;
    color: transparent;
    text-shadow: none;
    background-color: transparent;
    border: 0;
    }

    .spinner:not(:required):after {
    content: '';
    display: block;
    font-size: 10px;
    width: 1em;
    height: 1em;
    margin-top: -0.5em;
    -webkit-animation: spinner 150ms infinite linear;
    -moz-animation: spinner 150ms infinite linear;
    -ms-animation: spinner 150ms infinite linear;
    -o-animation: spinner 150ms infinite linear;
    animation: spinner 150ms infinite linear;
    border-radius: 0.5em;
    -webkit-box-shadow: rgba(255, 255, 255, 0.75) 1.5em 0 0 0,
        rgba(255, 255, 255, 0.75) 1.1em 1.1em 0 0,
        rgba(255, 255, 255, 0.75) 0 1.5em 0 0,
        rgba(255, 255, 255, 0.75) -1.1em 1.1em 0 0,
        rgba(255, 255, 255, 0.75) -1.5em 0 0 0,
        rgba(255, 255, 255, 0.75) -1.1em -1.1em 0 0,
        rgba(255, 255, 255, 0.75) 0 -1.5em 0 0,
        rgba(255, 255, 255, 0.75) 1.1em -1.1em 0 0;
    box-shadow: rgba(255, 255, 255, 0.75) 1.5em 0 0 0,
        rgba(255, 255, 255, 0.75) 1.1em 1.1em 0 0,
        rgba(255, 255, 255, 0.75) 0 1.5em 0 0,
        rgba(255, 255, 255, 0.75) -1.1em 1.1em 0 0,
        rgba(255, 255, 255, 0.75) -1.5em 0 0 0,
        rgba(255, 255, 255, 0.75) -1.1em -1.1em 0 0,
        rgba(255, 255, 255, 0.75) 0 -1.5em 0 0,
        rgba(255, 255, 255, 0.75) 1.1em -1.1em 0 0;
    }

    /* Animation */

    @-webkit-keyframes spinner {
    0% {
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
    }
    @-moz-keyframes spinner {
    0% {
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
    }
    @-o-keyframes spinner {
    0% {
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
    }
    @keyframes spinner {
    0% {
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
    }
</style>