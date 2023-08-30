<template>
    <div class="box">
        <div class="pic"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.box {
    background-color: transparent;
    background-image: url('@/assets/images/loading.jpg');

    .pic {
        width: 100px;
        height: 100px;
        background-color: yellowgreen;
        background-image: url('@/assets/images/loading.jpg');
        background-size: 100% 100%;
        margin: auto;
    }
}
</style>