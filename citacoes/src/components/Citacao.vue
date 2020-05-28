<template>
    <div class="citacao">
        <slot name="autor"></slot>
        <slot></slot>
        <div class="fonte">
            <!-- o slot pode ser configurado e estilizado conforme a
            necessidade e aplicação do css ou organização do layout do componente -->
            <slot name="fonte"></slot>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }
    .fonte{
        float: right;
    }
</style>
