<template>
    <div>
        <svg class="inline-block fill-current w-5 h-5" viewBox="0 0 27 27">
            <g>
                <circle cx="13.792" cy="3.082" r="3.082" />
                <circle cx="13.792" cy="24.501" r="1.849" />
                <circle cx="6.219" cy="6.218" r="2.774" />
                <circle cx="21.365" cy="21.363" r="1.541" />
                <circle cx="3.082" cy="13.792" r="2.465" />
                <circle cx="24.501" cy="13.791" r="1.232" />
                <path
                    d="M4.694,19.84c-0.843,0.843-0.843,2.207,0,3.05c0.842,0.843,2.208,0.843,3.05,0c0.843-0.843,0.843-2.207,0-3.05    C6.902,18.996,5.537,18.988,4.694,19.84z" />
                <circle cx="21.364" cy="6.218" r="0.924" />
            </g>
        </svg>
    </div>
</template>

<style scoped>
svg {
    animation: spin 4s infinite linear;
    -webkit-animation: spin 4s infinite linear;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
    }
}
</style>
