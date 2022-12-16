<script setup>

</script>

<template>
  <div class="container-fluid">
    <div class="row">
        <h3 class="text-center mb-3 text-white image-head">Describe An Image</h3>
        <div class="h-100 d-flex align-items-center justify-content-center">
            <form>
                <div class="mb-3">
                    <input type="text" style="width: 450px" class="form-control" placeholder="Enter Description">
                </div>
                <div class="mb-3">
                    <select class="form-select" aria-label="Default select example">
                        <option disabled>Select size</option>
                        <option value="1">Small</option>
                        <option value="2">Medium</option>
                        <option value="3">Large</option>
                    </select>
                </div>
                <div class="mb-3">
                    <button class="btn btn-primary">Generate</button>
                </div>
            </form>
        </div>
    </div>
  </div>

  <!-- div containing generated image comes here -->
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

    .bg {
    animation:slide 3s ease-in-out infinite alternate;
    background-image: linear-gradient(-60deg, #6c3 50%, #09f 50%);
    bottom:0;
    left:-50%;
    opacity:.5;
    position:fixed;
    right:-50%;
    top:0;
    z-index:-1;
    }

    .bg2 {
    animation-direction:alternate-reverse;
    animation-duration:4s;
    }

    .bg3 {
    animation-duration:5s;
    }
</style>