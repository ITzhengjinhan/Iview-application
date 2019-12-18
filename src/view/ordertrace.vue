<template>
    <Steps :current="1">
        <Step title="已完成" content="已付款"></Step>
        <Step title="待进行" content="已发货"></Step>
        <Step title="待进行" content="已送达"></Step>
        <Step title="待进行" content="已签收"></Step>
    </Steps>
</template>

<script>
    export default {
        
    }
</script>