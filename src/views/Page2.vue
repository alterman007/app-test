<template>
  <div class="page2-wrapper">
    <BaseHeader>
      <BaseHeaderTitle>
        待接单
      </BaseHeaderTitle>
    </BaseHeader>
    <Content />
  </div>
</template>
<script>
import Content from './Page2/Content';

export default {
  name: 'index-page',
  components: {
    Content,
  },
};
</script>
