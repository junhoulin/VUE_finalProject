<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{'disabled': !pages.has_pre}">
        <a class="page-link" href="#" aria-label="Previous"
        @click.prevent="pages.has_pre && updatePage(pages.current_page - 1)">
          <span aria-hidden="true">◀</span>
        </a>
      </li>
      <li class="page-item" v-for="page in pages.total_pages" :key="page"
      :class="{'active': page === pages.current_page}">
        <a class="page-link" href="#"
        @click.prevent="updatePage(page)">{{ page }}</a>
      </li>
      <li class="page-item" :class="{'disabled': !pages.has_next}">
        <a class="page-link" href="#" aria-label="Next"
        @click.prevent="pages.has_next && updatePage(pages.current_page + 1)">
          <span aria-hidden="true">▶</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'PaginNation',
  props: ['pages'],
  methods: {
    updatePage(page) {
      this.$emit('emit-pages', page);
    },
  },
};
</script>
