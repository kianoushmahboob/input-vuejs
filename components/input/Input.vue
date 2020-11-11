<template>
  <div>
    <label :for="options.id"> {{ options.label }}</label>
    <input
      :type="type"
      :id="options.id"
      v-model="inputVal"
      :placeholder="options.placeholder"
      @input="input"
      @blur="validate"
    />
    <p>{{ errorMessage }}</p>

    <h2 v-html="highlightCheck()"></h2>
  </div>
</template>

<script>
import "../../assets/sass/input.scss";
import validateMixin from "../../plugins/input/validations";
export default {
  mixins: [validateMixin],
  data() {
    return {
      inputVal: "",
    };
  },
  computed: {
    filteredList() {
      return this.postList.filter(post => {
        return post.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  methods: {
    input(e, newValue) {
      this.validate();
    },
    highlightCheck() {
      if (this.highlight) {
        if (!this.inputVal) {
          return this.highlight;
        }
        return this.highlight.replace(
          new RegExp(this.inputVal, "gi"),
          (match) => {
            return '<span class="highlightText">' + match + "</span>";
          }
        );
      }
    },
  },
};
</script>

