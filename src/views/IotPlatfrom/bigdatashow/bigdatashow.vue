<template>
    <div  style="width:100%;height:100%;" frameborder=0>

        <iframe :src="reportUrl" frameborder="0" style="width:100%;height:100%;" id="iframeBox"></iframe>
    </div>
</template>

<script>
    export default {
        data: () => ({
            // iframe路径
            reportUrl: "./bigdatashowhtml/index.html",
        }),

        name: "hello"
    }
</script>

<style scoped>

</style>