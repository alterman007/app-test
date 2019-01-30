<template>
  <div class="index-page-wrapper">
    <BaseHeader>
      <BaseHeaderTitle>
        首页
      </BaseHeaderTitle>
    </BaseHeader>
    <Content />
    <BaseFooter>
      hello world
    </BaseFooter>
  </div>
</template>
<script>
import Content from './Page1/Content';

export default {
  name: 'index-page',
  components: {
    Content,
  },
};
</script>
