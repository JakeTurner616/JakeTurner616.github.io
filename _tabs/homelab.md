---
layout: page
title: Homelab
icon: fas fa-server
order: 2
---
<script>
    $(document).ready(function () {
        $('.popup').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            mainClass: 'mfp-fade',
            removalDelay: 300,
            closeOnContentClick: true
        });
    });
</script>

<style>
    .homelab-container {
        max-width: 1024px;
        margin: 0 auto;
        padding: 0 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    .homelab-banner {
        display: block;
        max-width: 960px;
        width: 100%;
        margin: 0 auto 3rem auto;
        border-radius: 8px;
        cursor: zoom-in;
    }
    .homelab-row {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        margin-bottom: 3rem;
        width: 100%;
    }
    .homelab-row a {
        flex: 1 1 45%;
        max-width: 480px;
        display: flex;
        justify-content: center;
    }
    .homelab-row img {
        width: 100%;
        height: auto;
        border-radius: 8px;
        cursor: zoom-in;
    }
</style>

<div class="homelab-container">

    <a href="/assets/img/homelab-min.jpg?raw=true" class="popup" title="Homelab Rack" alt="Homelab Rack">
        <img src="/assets/img/homelab-min.jpg?raw=true" alt="Homelab Rack" class="homelab-banner" style="max-width: 520px; margin:25px;" />
    </a>



    <div class="homelab-row">
        <a href="/assets/img/pc-2-amd-min.jpg?raw=true" class="popup" title="AMD Node">
            <img src="/assets/img/pc-2-amd-min.jpg?raw=true" alt="AMD Node" />
        </a>
        <a href="/assets/img/pc-2-nvidia-min.jpg?raw=true" class="popup" title="NVIDIA Node">
            <img src="/assets/img/pc-2-nvidia-min.jpg?raw=true" alt="NVIDIA Node" />
        </a>
    </div>

</div>

<hr />